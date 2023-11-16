import React, { memo } from 'react'
import CardBorder from './CardBorder';
import like from '../../assets/svg/like.svg'

interface CampaignInfoCardPropsType {
    icon: string;
    name: string;
    desc: string;
    banner: string;
    selected: boolean;
    onClick: (indx: number, value: any) => void;
    index: number;
}

const CampaignInfoCard = ({ icon, name, desc, banner, selected, onClick, index }: CampaignInfoCardPropsType) => {

    return (
        <CardBorder onClickAction={onClick} value={{
            name,
            desc
        }} selected={selected} tickPos={"Top"} index={index} fixed>
            <div className='flex flex-col gap-2 '>
                <div className='flex flex-row gap-4 items-center'>
                    <img
                        src={icon}
                        width="30" height="30"
                        alt="profile pic"
                        className='rounded-full'
                    />
                    <div>
                        <div className='text-base font-medium'>{name}</div>
                        <div className='text-xs font-light'>Sponsored</div>
                    </div>

                </div>
                <div className='text-base font-medium'>{desc}</div>
                <div className='p-2'>
                    <div className='bg-gray-200'>
                        <img
                            src={banner}
                            width="100%" height="25"
                            alt="banner"
                        />
                        <div className='flex justify-between item-center p-2'>
                            <div className='text-sm font-medium'>{name}</div>
                            <button className='border-2 flex flex-row gap-2 rounded-lg  border-black px-2 p-1 '>
                                <img
                                    src={like}
                                    width="20" height="20"
                                    alt="profile pic"
                                />
                                like</button>
                        </div>
                    </div>
                </div>

                {selected && <div className='flex justify-between p-2'>
                    <button className='px-6 p-2 bg-blue-200 rounded-lg flex justify-center item-center text-blue-600'>Change image</button>
                    <button className='px-6 p-2 bg-blue-200 rounded-lg flex justify-center item-center text-blue-600'>Edit text</button>
                </div>}
            </div>
        </CardBorder>
    )
}

export default memo(CampaignInfoCard)