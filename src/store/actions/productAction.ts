import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../../Api";

const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const res = await getAllProducts();

      return res;
    } catch (error) {
      return error 
    }
  }
);

export { getProducts };
