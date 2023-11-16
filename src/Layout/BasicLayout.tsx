import React, { useRef } from 'react'
import NavBar from '../components/atom/NavBar'
import SideBar from '../components/atom/SideBar'
// import Loader from '../components/atom/Loader'
import useGloble from '../hooks/useGloble'
// import { getProductsError, getProductsStatus } from '../store/slice/productSlice'
// import { getLocationError, getLocationStatus } from '../store/slice/LocationsSlice'
// import { getCampaignError, getCampaignStatus } from '../store/slice/campaignSlice'

// import { useAppSelector } from '../hooks/useSelector'

type Props = {
    children: JSX.Element
}

const BasicLayout = ({ children }: Props) => {
    // const { status, error } = useGloble()
    const toggleSB = useRef<HTMLElement>(null);
    // const productStatus = useAppSelector(getProductsStatus)
    // const locationStatus = useAppSelector(getLocationStatus)
    // const campaignStatus = useAppSelector(getCampaignStatus)
    // const Error = useAppSelector(getProductsError) || useAppSelector(getLocationError) || useAppSelector(getCampaignError) || error
    const handleCloseSB = () => {
        toggleSB.current.classList.add('-translate-x-full');
    }

    const handleOpenSB = () => {
        toggleSB.current.classList.remove('-translate-x-full');
    }

    // useEffect(() => {
    //     if (Error) {
    //         console.log(Error)
            
    //     }
    // }, [Error])

    // useEffect(() => {
    //     console.log(error, Error)
    // }, [error])

    return (
        <div className="bg-blue-100">
            <NavBar open={handleOpenSB} />
            <SideBar ref={toggleSB} close={handleCloseSB} />
            <div className="w-screen sm:w-[calc(100%-96px)] sm:ml-24 p-4 h-[calc(100vh-72px)]">{children}</div>
            {/* {status === "loading" || productStatus === "loading" || locationStatus === "loading" || campaignStatus === "loading" && <Loader />} */}
        </div>
    )
}

export default BasicLayout