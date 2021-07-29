//eslint-disable-next-line @typescript-eslint/no-explicit-any
export function makeActionCreator(type: any) {
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (payload?: any) {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    const action: any = { type };
    if (payload) {
      action.payload = payload;
    }
    return action;
  };
}

export function makeFetchActionCreator(
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  service: any,
  requestName: string,
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSettingCallback: (payload: any) => void,
  property?: string
) {
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (params?: any) {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async (dispatch: any) => {
      try {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response = await (service as any)[requestName](params);
        const data = property ? response.data[property] : response.data;
        dispatch(setSettingCallback(data));
      } catch (error) {
        //error handling here
        console.log(error);
      }
      return "done";
    };
  };
}

export function makeAPIActionsCreator(
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  service: any,
  requestName: string,
  fetchCallback: () => void,
  successCode: number,
  notification?: any
) {
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (params?: any) {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async (dispatch: any) => {
      try {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response = await (service as any)[requestName](params);
        if (response.status === successCode) {
          dispatch(fetchCallback());
        }
      } catch (error) {
        //error handling here
        console.log(error);
      }
      return "done";
    };
  };
}
