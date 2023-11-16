import React, { useEffect } from 'react'
import { useAppDispatch } from '../../hooks/useDispatch'
import { useAppSelector } from '../../hooks/useSelector'
import ProductCard from '../atom/ProductCard'
import { selectProduct , getAllProducts , getProductsError  ,getProductsStatus} from '../../store/slice/productSlice'
import { setProductID  } from '../../store/slice/campaignSlice'
// import useCampaignValidation from '../../validator/useCampaignValidation'
// import { getCampaignDetails } from '../../store/slice/campaignSlice'
import useGloble from '../../hooks/useGloble'
const ProductForm = () => {
  const dispatch = useAppDispatch()
  const {throughToasts} = useGloble()
  const porductData = useAppSelector(getAllProducts)
  // const campaignDetails = useAppSelector(getCampaignDetails);
  // const canProceed = useCampaignValidation('PLAYFORM' , campaignDetails);
  const Error = useAppSelector(getProductsError)
  const Status = useAppSelector(getProductsStatus)
  
  // useEffect(() => {
  //   console.log('PRODUCT :-',canProceed)
  //   if (canProceed) {
  //     setCanProceed(true)
  //   } else {
  //     setCanProceed(false)
  //   }
  // })

  const handleSelect = (indx: number, value: string) => {
    dispatch(selectProduct({ index: indx }))
    dispatch(setProductID({ id: value }))
  }

  useEffect(()=>{
    if(Error){
      throughToasts("error",Error)
    }
  })
  
  return (

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-2'>
      {porductData?.map((ele, indx) => {
        return <ProductCard id={ele?._id} img={ele?.images.url} name={ele?.name} price={ele?.price} selected={ele?.selected} key={indx} index={indx} handleSelect={handleSelect} />
      })}
    </div>
  )
}

export default ProductForm