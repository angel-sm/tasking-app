import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import tasks from "../../../Task/infrastructure/redux/Task.slice";

const reducer = combineReducers({
  tasks,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ["payload"],
        ignoredPaths: ["tasks"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
