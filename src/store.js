import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import { themeReducer } from "./features/theme/theme-slice";
import { controlsReducer } from "./features/controls/controls-slice";
import { countriesReducer } from "./features/countries/countries-slice";
import { detailsReducer } from "./features/details/details-slice";

import * as api from "./config";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countriesReducer,
    details: detailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: { client: axios, api } },
      serializableCheck: false,
    }),
});
