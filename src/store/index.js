import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./slices/theme-slice";
import "bootstrap/dist/css/bootstrap.min.css"

export default configureStore({
    reducer: {
        theme: themeSlice
    }
})


















