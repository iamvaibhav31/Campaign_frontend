import React, { useState , useEffect } from 'react'
import ProgressStep from '../components/atom/ProgressStep';
import PlatformForm from '../components/molecules/PlatformForm';
import ProductForm from '../components/molecules/ProductForm';
import Info1Form from '../components/molecules/Info1Form';
import Info2Form from '../components/molecules/Info2Form';
import { createCampaigns } from '../store/actions/CampaignAction';
import { getCampaignDetails  , getCampaignError} from '../store/slice/campaignSlice';
import { useAppDispatch } from '../hooks/useDispatch';
import { useAppSelector } from '../hooks/useSelector';
import { useNavigate } from 'react-router-dom';
import useCampaignValidation from '../validator/useCampaignValidation';
import useGloble from '../hooks/useGloble';
import { getProductsError } from '../store/slice/productSlice';
import { getLocationError } from '../store/slice/LocationsSlice';
const AddCampaign = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const {throughToasts} = useGloble()
    const producterror = useAppSelector(getProductsError) 
    const locationerror = useAppSelector(getLocationError) 
    const campaignerror  = useAppSelector(getCampaignError)
   
    const campaignDetails = useAppSelector(getCampaignDetails)
    const [activeStep, setActiveStep] = useState<number>(0)

    const steps = ['What you want to do', 'Choose product', 'Campaign settings', "Ready to go"];

    const totalSteps = () => {
        return steps.length;
    };
    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const handleNext = () => {
        if (useCampaignValidation(activeStep , campaignDetails)) {
            const newActiveStep = isLastStep() ? activeStep : activeStep + 1;
            setActiveStep(newActiveStep);

            if(isLastStep()){
                dispatch(createCampaigns(campaignDetails))
                navigate("/campaign")
            }
        }else{
            throughToasts('warning' , "please check you select or fill all the fields")
        }
    };

    useEffect(() => {
      if(producterror){
        throughToasts('error',producterror)
      }  
      if(locationerror){
        throughToasts('error',locationerror)
      }  
      if(campaignerror){
        throughToasts('error',campaignerror)
      }  
    })
    

   
    return (
        <div className='flex flex-col gap-4 '>
            <ProgressStep activeStep={activeStep} steps={steps} />
            <div className='bg-white rounded-lg p-2 shadow-lg flex flex-col gap-2'>
                <div className='text-base font-medium '>{steps[activeStep]}? <span className='text-sm font-light'>({activeStep + 1} of {totalSteps()})</span></div>

                <hr />

                {(() => {
                    switch (activeStep) {
                        case 0:
                            return <PlatformForm />;
                        case 1:
                            return <ProductForm/>;
                        case 2:
                            return <Info1Form/>;
                        case 3:
                            return <Info2Form/>;
                        default:
                            return null; // or some default component
                    }
                })()}
            </div>
            {/* {proceed ? 'bg-blue-900 text-white' : 'bg-gray-400 text-gray-200'} */}
            <div className={`w-fit $  p-2 rounded-lg bg-blue-900 text-white text-sm sm:text-lg self-end cursor-pointer px-4`} onClick={handleNext}>{isLastStep()
                ? 'Start campaign'
                : 'Continue'}
            </div>
        </div>
    )
}

export default AddCampaign