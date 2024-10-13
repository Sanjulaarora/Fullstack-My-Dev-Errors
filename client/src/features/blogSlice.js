import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Action 
export const fetchBlogs = createAsyncThunk("fetchBlogs", async() => {
    const response = await fetch("/getblogs", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.json();
});

export const blogSlice = createSlice({
    name: "blog",
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchBlogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchBlogs.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        });
    },
});


export default blogSlice.reducer;