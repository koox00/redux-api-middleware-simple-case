import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { apiMiddleware as api } from "redux-api-middleware";
import { users as root } from "./reducer";

const configureStore = preloadedState => {
  const store = createStore(
    root,
    preloadedState,
    compose(applyMiddleware(thunk, api, logger))
  );

  return store;
};

export default configureStore;
