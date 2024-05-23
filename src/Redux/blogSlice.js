import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    blogs: [],
    blogStatus: "idle"
};

export const getBlogs = createAsyncThunk("blogs/getBlogs", async () => {
    try {
        const response = await axios.get("http://localhost:3000/blogs");

        if (response.status !== 200) {
            throw new Error("Failed to fetch blogs");
        }

        return response.data;
    } catch (error) {
        throw new Error("Error fetching blogs: " + error.message);
    }
});

const blogSlice = createSlice({
    name: "getBlogs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBlogs.pending, (state) => {
            state.blogStatus = "loading";
        });
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogStatus = "success";
            state.blogs = action.payload;
        });
        builder.addCase(getBlogs.rejected, (state) => {
            state.blogStatus = "fail";
        });
    }
})

export const blogReducer = blogSlice.reducer;