import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Slider from '../atom/Slider';
import ToggleBtn from '../atom/ToggleBtn';
import DDSelector from '../atom/LocationSelector';
import { getLatLong } from '../../utills/Location';
import { useAppDispatch } from '../../hooks/useDispatch'
// import { useAppSelector } from '../../hooks/useSelector';
import { setLocation, setRadius, setBudget, setDateRange, getCampaignDetails } from '../../store/slice/campaignSlice';
import { DateRange } from '@mui/x-date-pickers-pro';
// import useCampaignValidation from '../../validator/useCampaignValidation';
import useGloble from '../../hooks/useGloble';


const Info1Form = () => {
  const [locationInfoType, setLocationInfoType] = useState("Location")
  const {setError} = useGloble()
  // const campaignDetails = useAppSelector(getCampaignDetails);
  // const canProceed = useCampaignValidation('PLAYFORM' , campaignDetails);
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (locationInfoType === "Radius") {
      getLatLong().then((res) => {
        if(res.success){
          dispatch(setLocation({
            value: {
              lat: res.latitude,
              lon: res.longitude
            }
          }))
        }else{
          setError(res?.message || "Something went wrong !!")
        }
      }).catch((err) => {
        setError(err?.message || "Something went wrong !!")
      })
    }
  }, [locationInfoType])

  // useEffect(() => {
  //   console.log('INFO1 :-',canProceed)
  //   if (canProceed) {
  //     setCanProceed(true)
  //   } else {
  //     setCanProceed(false)
  //   }
  // })

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col gap-4 mb-4'>
        <div className='flex gap-2 align-center'><span className='bg-blue-900 text-white rounded-full text-lg font-medium p-2  px-4'>1</span><div className='text-lg font-medium underline'> Budget and dates info</div></div>
        <div className=''>
          <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900'>Budget Timeline</label>
          <DateRangePicker localeText={{ start: 'Start', end: 'End' }} onChange={(value: DateRange<any>) => {
            dispatch(setDateRange({
              value: {
                start: new Date(value?.[0]?.$d),
                end: new Date(value?.[1]?.$d)
              }
            }))
          }} />
        </div>
        <Slider label='Enter campaign budget' min={100} max={100000} defaultValue={100} onChange={(e) => {
          e.preventDefault()
          dispatch(setBudget({ value: +e.target.value }))
        }} />


      </div>
      <div className='flex flex-col gap-4 mb-4'>
        <div className='flex gap-2 align-center'><span className='bg-blue-900 text-white rounded-full text-lg font-medium p-2 px-4'>2</span><div className='text-lg font-medium underline'> Location info</div></div>
        <ToggleBtn label='Location type' btnLables={["Location", "Radius"]} defaultValue='Location' onChange={(value) => {
          setLocationInfoType(value)

        }} />

        {locationInfoType === "Location" && <DDSelector />}

        {locationInfoType === "Radius" && <Slider label='Select target radius' min={1} max={30} defaultValue={1} onChange={(e) => {
          e.preventDefault()
          dispatch(setRadius({ value: +e.target.value }))

        }} />}

      </div>
    </div>
  )
}

export default Info1Form