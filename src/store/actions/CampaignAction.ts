import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCampaigns, createCampaign, deleteCampaign } from "../../Api";
import { CampaignDetailsType } from "../slice/campaignSlice";

const getCampaigns = createAsyncThunk(
    "Campaign/getCampaigns",
    async () => {
        try {
            const res = await getAllCampaigns();
            console.log("Campaign/getCampaigns",res)
            return res;
        } catch (error) {
            console.log("Campaign/getCampaigns",error)
            return error
        }
    }
);

const createCampaigns = createAsyncThunk(
    "Campaign/createCampaigns",
    async (payload: CampaignDetailsType) => {
        try {
            const res = await createCampaign(payload);
            return res;
        } catch (error) {
            return error
        }
    }
);

const deleteCampaigns = createAsyncThunk(
    "Campaign/deleteCampaigns",
    async (id: string) => {
        console.log("Campaign/deleteCampaigns",id)
        try {
            const res = await deleteCampaign(id);
            return res;
        } catch (error) {
            return error
        }
    }
);

export { getCampaigns, createCampaigns , deleteCampaigns };
