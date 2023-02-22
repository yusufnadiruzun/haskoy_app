import React from "react";

import { Provider } from "react-redux";
import store from "./src/redux";
import Navigator from "./Navigator";

function App() {
  return (
    <Provider store={store}>
      <Navigator></Navigator>
    </Provider>
  );
}

export default App;
