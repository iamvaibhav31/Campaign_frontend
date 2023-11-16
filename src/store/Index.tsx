import { configureStore } from '@reduxjs/toolkit'
import CampaignSlice from './slice/campaignSlice'
import ProductSlice from './slice/productSlice'; 
import LocationsSlice from './slice/LocationsSlice';

const store = configureStore({
    reducer: {
        campaign: CampaignSlice,
        product:ProductSlice,
        location:LocationsSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store 