import React, { useEffect, useState } from 'react'
import AsyncSelect from 'react-select/async';
import locationpointer from '../../assets/svg/locationpointer.svg'
import { useAppDispatch } from '../../hooks/useDispatch'
import { useAppSelector } from '../../hooks/useSelector'
import { getlocations } from '../../store/slice/LocationsSlice'
import { searchLocation } from '../../store/actions/LocationsAction'
import { getLatLong } from '../../utills/Location'
import { setLocation } from '../../store/slice/campaignSlice';
import useGloble from '../../hooks/useGloble';

const selector = () => {
  const dispatch = useAppDispatch()
  const location = useAppSelector(getlocations)
  const { setError } = useGloble()
  const [currentLocation, setCurrentLocation] = useState<boolean>(false)

  const loadOptions = async (inputValue: string) => {
    try {
       dispatch(searchLocation(inputValue));
      return location
    } catch (error) {
      
      setError("Something went wrong !!")
      return [];
    }
  };

  useEffect(() => {
    if (currentLocation) {
      getLatLong().then((res) => {
        if (res.success) {
          dispatch(setLocation({
            value: {
              lat: res.latitude,
              lon: res.longitude
            }
          }))
        } else {
          setError(res?.message || "Something went wrong !!")
        }
      }).catch((err) => {
        setError(err?.message || "Something went wrong !!")
      })
    }
  }, [currentLocation])
  return (
    <div >
      <label className="block mb-2 text-sm font-medium text-gray-900">Search</label>
      <div className="relative">
        <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions onChange={(selopt) => {
          console.log(selopt)
          dispatch(setLocation({
            value: selopt.value
          }))
        }} />
        <button className=" absolute end-0.5  bottom-0.5 bg-white  font-medium rounded-lg py-1 px-4 " onClick={() => {
          setCurrentLocation(!currentLocation)
        }}><img src={locationpointer} alt="location" /></button>
      </div>
    </div>


  )
}

export default selector