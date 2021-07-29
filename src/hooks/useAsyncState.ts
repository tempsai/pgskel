import { useEffect, useReducer } from 'react';

interface IAction {
  type: string,
  payload?: object
}

interface IState {
  isLoading: boolean,
  isError: string,
  data: null | object
}

const initialState: IState = {
  isLoading: true,
  isError: '',
  data: null
}

function reducer(state: any, action: IAction) {
  switch (action.type) {
    case 'resolved':
      return {
        ...state,
        isLoading: false,
        isError: '',
        data: action.payload
      };
    case 'rejected':
      return {
        ...state,
        isLoading: false,
        isError: action.payload
      };
    case 'loading':
      return {
        ...state,
        isLoading: true
      }
    case 'data':
      return {
        ...state,
        data: action.payload
      }
    default:
      return { ...state }
  }
}

/**
 * State management of async call using useEffect and useReducer.
 * Provides similar api as useState but with additional states, isLoading and isError.
 * The initial data will be set to the response of the getData api call passed in, but can be
 * overriden at any time using setData function exposed as second parameter.
 * @param {function} getData The api request to fetch data
 * @param {*} condition The condition to refresh data
 */

export default function useAsyncState(getData: () => Promise<any>, condition: any = []) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let isCancelled = false;
    const asyncCall = () => {
      dispatch({type: 'loading'});
      getData().then((data: any) => {
        if (!isCancelled) {
          dispatch({type: 'resolved', payload: data});
        }
      }).catch((err) => {
        dispatch({
          type: 'rejected',
          payload: err?.response?.data ? err.response.data : err.message
        });
      });
    }
    asyncCall();
    return () => {
      isCancelled = true;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, condition);

  function setData(data: any) {
    return dispatch({type: 'data', payload: data});
  }

  return [
    state.data,
    state.isLoading,
    state.isError,
    setData,
  ]
}