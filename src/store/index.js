import { configureStore } from "@reduxjs/toolkit";
import { localeSlice } from "./slices/localeslice";
import { themeSlice } from "./slices/theme-slice";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icons/css/flag-icons.min.css";

export default configureStore({
    reducer: {
        theme: themeSlice,
        locale: localeSlice,
    }
})


















