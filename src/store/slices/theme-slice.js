import { createSlice } from "@reduxjs/toolkit";


export const themeSlice = createSlice({
    name: "theme",
    initialState:{
        darkMode: false           
    },
    reducers:{
        setDarkMode: (state, action) => {
            state.darkMood = action.payload;
        }

    }
});

export const {setDarkMode} = themeSlice.actions; 

export default themeSlice.reducer;
