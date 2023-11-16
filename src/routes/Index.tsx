
import React from "react";
import { Routes, Route } from "react-router-dom";
import Campaign from '../pages/Campaign';
import NoPage from '../pages/NoPage';
import CommingSoon from '../pages/CommingSoon';
import CampaignLayout from '../Layout/CampaignLayout'
import AddCampaign from "../pages/AddCampaign";
const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<CommingSoon />} />
      <Route path="/campaign" element={<CampaignLayout />}>
        <Route index element={<Campaign />} />
        <Route path="/campaign/add" element={<AddCampaign />} />
      </Route>
      <Route path="/product" element={<CommingSoon />} />
      <Route path="/customer" element={<CommingSoon />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}

export default Index