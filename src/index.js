import "~/config/ReactotronConfig";
import "~/config/DevToolsConfig";
import React from "react";
import Map from "~/components/Map";
import ModalNative from "~/components/Modal";
import { Provider } from "react-redux";
import store from "~/store";

const App = () => (
  <Provider store={store}>
    <Map />
    <ModalNative />
  </Provider>
);

export default App;
