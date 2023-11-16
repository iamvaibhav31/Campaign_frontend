import { createSlice } from "@reduxjs/toolkit";
import { searchLocation } from '../actions/LocationsAction'
import { RootState } from '../Index';
import useGloble from "../../hooks/useGloble";

const initialState: { Data: any[], status: 'idle' | 'loading' | 'successful' | 'failed', error: null | string } = {
     Data: [],
     status: 'idle', // idle | loading | successful | failed
     error: null
}

const SearchLocationSlice = createSlice({
     name: 'searchlocation',
     initialState,
     reducers: {},
     extraReducers(builder) {
          builder
               .addCase(searchLocation.pending, (state, action) => {
                    console.log(action.payload)
                    state.status = 'loading'
               })
               .addCase(searchLocation.fulfilled, (state, action) => {
                    console.log(action.payload)
                    const locations = action?.payload?.results?.map((ele: any) => {
                         return {
                              label: ele.formatted,
                              value: {
                                   lat: ele.lat,
                                   lon: ele.lon
                              }
                         }
                    })
                    state.Data = locations
                    state.status ='successful' 
               })
               .addCase(searchLocation.rejected, (state, action) => {
                    state.error = action?.error?.message || "Unable to fetch the Locations"
                    state.status = 'failed'
                    state.Data = []
               })
     }
})

export const getlocations = (state: RootState) => state.location.Data
export const getLocationStatus = (state: RootState) => state.product.status
export const getLocationError = (state: RootState) => state.product.error

export default SearchLocationSlice.reducer;