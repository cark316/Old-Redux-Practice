import React from "react";
import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

const App = () => {

  const unsubscribe = store.subscribe(() => {
    console.log("Store changed", store.getState());
  });

  store.dispatch(bugAdded("Bug 1"));

  unsubscribe();

  store.dispatch(bugRemoved("Bug removed"));

  store.dispatch(bugResolved("Bug resolved"));

  console.log(store.getState());
  
  return <></>;
};

export default App;
