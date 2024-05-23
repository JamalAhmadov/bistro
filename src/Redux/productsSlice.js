import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    productStatus: "idle"
};

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    try {
        const response = await axios.get("https://664f6f33ec9b4a4a602ec793.mockapi.io/data");

        if (response.status !== 200) {
            throw new Error("Failed to fetch products");
        }

        return response.data;
    } catch (error) {
        throw new Error("Error fetching products: " + error.message);
    }
});

const productSlice = createSlice({
    name: "getProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.productStatus = "loading";
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.productStatus = "success";
            state.products = action.payload;
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.productStatus = "fail";
        });
    }
})

export const productReducer = productSlice.reducer;