import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { tasksReducer } from "../store/tasksSlice";
import { filtersReducer } from "../store/filtersSlice";

const tasksPersistConfig = {
  key: "tasks",
  storage,
};

const filterPersistConfig = {
  key: "filters",
  storage,
};

const persistedTasksReducer = persistReducer(tasksPersistConfig, tasksReducer);
const persistedFilterReducer = persistReducer(
  filterPersistConfig,
  filtersReducer
);

const rootReducer = combineReducers({
  tasks: persistedTasksReducer,
  filters: persistedFilterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
