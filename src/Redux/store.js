import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productsSlice";
import { blogReducer } from "./blogSlice";
import formReducer from "./formSlice";

export const store = configureStore({
  reducer: {
    getProducts: productReducer,
    getBlogs: blogReducer,
    form: formReducer,
  },
});
