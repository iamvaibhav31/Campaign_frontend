import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const searchLocation = createAsyncThunk("SerchLocation/fetchLocation", async (txt: string) => {
     try {
          const response = await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${txt}&lang=en&limit=10&format=json&apiKey=a1f35303e4c24e009d1bfed76337a934`)
          
          return response.data
     } catch (e: any) {
          console.log(e)
          return e?.message
     }
})

// https://api.geoapify.com/v1/geocode/reverse?lat=52.51894887928074&lon=13.409808180753316&format=json&apiKey=zocket_test_api

