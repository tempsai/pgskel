import * as React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Home } from "./pages/Home";
import { Second } from "./pages/Second";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/second" component={Second} />
      </Switch>
    </BrowserRouter>
  );
};

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher />
    <Box padding="100">
      <Routes />
    </Box>
  </ChakraProvider>
);
