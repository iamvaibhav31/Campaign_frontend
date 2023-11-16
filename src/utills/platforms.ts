import {  platformImg } from './Constants'


type PlatformImgKey = keyof typeof platformImg;

const getPlatformImg = (name: PlatformImgKey): string => {
    return platformImg[name];
};

export {
    getPlatformImg
};