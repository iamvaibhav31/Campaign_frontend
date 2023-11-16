import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import CampaignInfoCard from '../atom/CampaignInfoCard'
import { campaignFormData } from '../../utills/Constants'
import { useAppDispatch } from '../../hooks/useDispatch'
import { setName, setDesc , getCampaignDetails } from '../../store/slice/campaignSlice'
// import useCampaignValidation from '../../validator/useCampaignValidation'
import { useAppSelector } from '../../hooks/useSelector'
const Info2Form = () => {
  const [campaignData, setCampaignData] = useState<any[]>(campaignFormData)
  // const campaignDetails = useAppSelector(getCampaignDetails);
  // const canProceed = useCampaignValidation('PLAYFORM' , campaignDetails);
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   console.log('INFO2 :-',canProceed)
  //   if (canProceed) {
  //     setCanProceed(true)
  //   } else {
  //     setCanProceed(false)
  //   }
  // })

  const handleClick = (indx: number, value: any) => {
    setCampaignData((pre) =>
      pre.map((ele, ind) => {
        if (ind === indx) {
          ele.selected = true
        } else {
          ele.selected = false
        }
        return ele
      })
    )
    dispatch(setName({ value: value?.name }))
    dispatch(setDesc({ value: value?.desc }))
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-2'>
      {campaignData?.map((ele, indx) => {
        return <CampaignInfoCard key={ele.id} name={ele.name} desc={ele.desc} icon={ele.icon} banner={ele.banner} onClick={handleClick} selected={ele.selected} index={indx} />
      })}

    </div>
  )
}

export default Info2Form