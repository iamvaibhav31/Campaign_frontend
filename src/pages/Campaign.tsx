import React, { useEffect } from 'react'
import CampaignList from '../components/molecules/CampaignList'
import { useAppSelector } from '../hooks/useSelector'
import { getAllCampaigns , getCampaignError  } from '../store/slice/campaignSlice'
// import { getCampaigns } from '../store/actions/CampaignAction'
// import { useAppDispatch } from '../hooks/useDispatch'
import useGloble from '../hooks/useGloble'
const Campaign = () => {
  // const dispatch  = useAppDispatch()
  const campaigns = useAppSelector(getAllCampaigns)
  const Error = useAppSelector(getCampaignError)
  const {throughToasts} = useGloble()

  // useEffect(()=>{
  //   dispatch(getCampaigns)
  // })

  useEffect(()=>{
    if(Error){
      throughToasts("error",Error)
    }
  })

  

  return (
    <div className="bg-white  relative overflow-x-auto shadow-md rounded-lg p-2 z-1">
      <CampaignList campaigns={campaigns}/>
    </div>
  )
}

export default Campaign