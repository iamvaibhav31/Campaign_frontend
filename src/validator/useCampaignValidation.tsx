
import type { CampaignDetailsType } from '../store/slice/campaignSlice';

interface CampaignValidPropType {
  stage: number
}

const useCampaignValidation = (stage: CampaignValidPropType['stage'], campaignDetails: CampaignDetailsType): boolean => {
  switch (stage) {
    case 0:
      return campaignDetails.platform !== "";
    case 1:
      return campaignDetails.platform !== "" && campaignDetails.productID !== "";
    case 2:
      return (
        campaignDetails.productID !== "" &&
        campaignDetails.platform !== "" &&
        campaignDetails.budget > 0 &&
        campaignDetails.location.hasOwnProperty('lat') &&
        campaignDetails.location.hasOwnProperty('lon') &&
        campaignDetails.range.hasOwnProperty('start') &&
        campaignDetails.range.hasOwnProperty('end')
      );
    case 3:
      return (
        campaignDetails.productID !== "" &&
        campaignDetails.platform !== "" &&
        campaignDetails.budget > 0 &&
        campaignDetails.location.hasOwnProperty('lat') &&
        campaignDetails.location.hasOwnProperty('lon') &&
        campaignDetails.range.hasOwnProperty('start') &&
        campaignDetails.range.hasOwnProperty('end') &&
        campaignDetails.name !== "" &&
        campaignDetails.desc !== ""
      );
    default:
      return false;
  }
};


export default useCampaignValidation;
