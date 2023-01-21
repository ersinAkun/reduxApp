import { configureStore } from "@reduxjs/toolkit";

import { themeSlice } from "./slices/theme-slice";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icons/css/flag-icons.min.css";
import { localeSlice } from "./slices/locail.-slice";

export default configureStore({
    reducer: {
        theme: themeSlice,
        locale: localeSlice,
    }
})


















