import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import contactsReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";

const persistedContactReducer = persistReducer(
  {
    key: "contactItems",
    storage,
    whitelist: ["items"],
  },
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

export const persistor = persistStore(store);
