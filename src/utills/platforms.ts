import { platformValues, platformImg } from './Constants'

type PlatformValueKey = keyof typeof platformValues;
type PlatformImgKey = keyof typeof platformImg;

const getPlatformValue = (value: PlatformValueKey): string => {
    return platformValues[value];
};

const getPlatformImg = (value: PlatformValueKey): string => {
    const name : PlatformImgKey = platformValues[value] as PlatformImgKey
    return platformImg[name];
};

export {
    getPlatformValue,
    getPlatformImg
};