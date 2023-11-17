import {  platformImg } from './Constants'

const getPlatformImg = (name: string): string => {
    return platformImg[name];
};

export {
    getPlatformImg
};