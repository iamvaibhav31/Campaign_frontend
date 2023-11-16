import React, { useState } from 'react'
import PlatformCard from '../atom/PlatformCard'
import { platforms } from '../../utills/Constants'
import { useAppDispatch } from '../../hooks/useDispatch'
import { setplatform } from '../../store/slice/campaignSlice'

const PlatformForm = () => {
  const dispatch = useAppDispatch()
  const [allPlatforms, setAllPlatforms] = useState(platforms)



  const handleSelect = (indx: number, value: string) => {
    setAllPlatforms((pre) =>
      pre.map((ele, ind) => {
        if (ind === indx) {
          ele.selected = true
        } else {
          ele.selected = false
        }
        return ele
      })
    )
    dispatch((setplatform({ value })))
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-2'>
      {allPlatforms.map((ele, indx) => {
        return <PlatformCard key={indx} index={indx} img={ele.img} desc={ele.description} title={ele.name} value={ele.value} selected={ele.selected} handleSelect={handleSelect} />
      })}
    </div>
  )
}

export default PlatformForm