import { getCampaigns, createCampaigns, deleteCampaigns, updateStatus } from '../actions/CampaignAction';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../Index';

export interface CampaignDetailsType {
    name: string;
    desc: string;
    budget: number;
    platform: string;
    range: object;
    location: object;
    productID: string;
    radius: number
}
interface InitialStateType {
    Data: any[];
    Details: CampaignDetailsType,
    status: 'idle' | 'loading' | 'successful' | 'failed',
    error: null | string
}


const initialState: InitialStateType = {
    Data: [],
    Details: {
        name: "",
        desc: "",
        budget: 0,
        radius: 0,
        platform: "",
        range: {},
        location: {},
        productID: ""
    },
    status: 'idle', // idle | loading | successful | failed
    error: null
}



const CampaignSlice = createSlice({
    name: 'campaign',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<{ value: string }>) => {
            state.Details.name = action.payload.value
        },
        setDesc: (state, action: PayloadAction<{ value: string }>) => {
            state.Details.desc = action.payload.value
        },
        setProductID: (state, action: PayloadAction<{ id: string }>) => {
            state.Details.productID = action.payload.id
        },
        setBudget: (state, action: PayloadAction<{ value: number }>) => {
            state.Details.budget = action.payload.value
        },
        setplatform: (state, action: PayloadAction<{ value: string }>) => {
            state.Details.platform = action.payload.value
        },
        setDateRange: (state, action: PayloadAction<{ value: object }>) => {
            state.Details.range = action.payload.value
        },
        setLocation: (state, action: PayloadAction<{ value: object }>) => {
            state.Details.location = action.payload.value
        },
        setRadius: (state, action: PayloadAction<{ value: number }>) => {
            state.Details.radius = action.payload.value
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCampaigns.pending, (state, action) => {
            console.log("getCampaigns.pending", action.payload)
            state.status = 'loading'
        })
        builder.addCase(getCampaigns.fulfilled, (state, action: any) => {
            console.log("getCampaigns.fulfilled", action?.payload)
            if (action?.payload?.response?.status !== 404 && action?.payload.code !== "ERR_NETWORK") {
                state.Data = action?.payload?.data?.campaigns
                state.status = 'successful'
            } else {
                state.Data = []
                state.error = action?.payload?.response?.statusText || "Unable to fetch the Campaign"
                state.status = 'failed'
            }
        })
        builder.addCase(getCampaigns.rejected, (state, action) => {
            console.log("getCampaigns.rejected", action)
            state.error = action?.error?.message || "Unable to fetch the Campaign"
            state.status = 'failed'
        })
        //createCampaigns
        builder.addCase(createCampaigns.pending, (state, action) => {
            console.log(action.payload)
            state.status = 'loading'
        })
        builder.addCase(createCampaigns.fulfilled, (state, action) => {
            console.log("createCampaigns.fulfilled", action.payload)
            state.status = "successful"
        })
        builder.addCase(createCampaigns.rejected, (state, action) => {
            state.error = action?.error?.message || "Unable to create campaign"
            state.status = 'failed'
        })

        // deleteCampaigns
        builder.addCase(deleteCampaigns.pending, (state, action) => {
            console.log(action.payload)
            state.status = 'loading'
        })
        builder.addCase(deleteCampaigns.fulfilled, (state, action) => {
            console.log("deleteCampaigns.fulfilled", action.payload)
            state.status = "successful"
        })
        builder.addCase(deleteCampaigns.rejected, (state, action) => {
            state.error = action?.error?.message || "Unable to delete campaign"
            state.status = 'failed'
        })

        // updateStatus
        builder.addCase(updateStatus.pending, (state, action) => {
            console.log(action.payload)
            state.status = 'loading'
        })
        builder.addCase(updateStatus.fulfilled, (state, action) => {
            console.log("updateStatus.fulfilled", action.payload)
            state.status = "successful"
        })
        builder.addCase(updateStatus.rejected, (state, action) => {
            state.error = action?.error?.message || "Unable to delete campaign"
            state.status = 'failed'
        })
    },
})
// updateStatus

export const { setName, setDesc, setProductID, setBudget, setplatform, setLocation, setDateRange, setRadius } = CampaignSlice.actions

export const getAllCampaigns = (state: RootState) => state.campaign.Data;
export const getCampaignDetails = (state: RootState) => state.campaign.Details;
export const getCampaignStatus = (state: RootState) => state.product.status
export const getCampaignError = (state: RootState) => state.product.error

export default CampaignSlice.reducer