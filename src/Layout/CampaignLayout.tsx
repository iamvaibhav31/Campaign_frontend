
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import addIcon from '../assets/svg/add.svg'

const CampaignLayout = () => {
    const tab = window.location.pathname.split('/').pop(); // add
    const navigate = useNavigate();
    return (
        <div className='container mx-auto flex flex-col gap-4 '>
            <div className='flex justify-between items-center mb-4'>
                <div className=''>
                    <div className='text-sm sm:text-2xl font-medium'>
                        Yours Campaign
                    </div>
                    <div className='text-base'>Check the list of campigns you created </div>
                </div>

                {tab !== "add" && <div className='flex flex-row items-center gap-2 bg-blue-900 text-white p-2 rounded-lg text-sm sm:text-lg cursor-pointer' onClick={() => navigate("/campaign/add")}>
                    <img src={addIcon} width="20" height="20" alt="custommer" />
                    Create New Campaign
                </div>}
            </div>
            <Outlet />
        </div>
    )
}

export default CampaignLayout