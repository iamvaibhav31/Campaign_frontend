import axios from "axios";
import { CampaignDetailsType } from "../store/slice/campaignSlice";

const get_Base_URL = ()=>{
    return window.location.host === "127.0.0.1:5173" ? "http://localhost:4000" : "https://campaign-backend-api.onrender.com"
}

console.log( window.location.host === "127.0.0.1:5173")

const Axios = axios.create({
    baseURL: get_Base_URL(), // if we use .env file in react js the name convection is VITE_APP_<nameyouwant>
    
});


export const getAllProducts = () => Axios.get('/api/v1/allProducts')
export const getAllCampaigns = () => Axios.get('api/v1/allCampaigns')
export const createCampaign = (payload:CampaignDetailsType) => Axios.post('api/v1/createCampaign',payload)
export const deleteCampaign = (campaignID:string) => Axios.delete(`api/v1/deleteCampaign?id=${campaignID}`)
export const updateCampaignStatus = (campaignID:string , campaignStatus :boolean) => Axios.put(`api/v1/updateCampaignStatus?id=${campaignID}&status=${campaignStatus}`)