import React, { memo } from 'react'
import editIcon from '../../assets/svg/edit.svg'
import deleteIcon from '../../assets/svg/delete.svg'
import carImg from '../../assets/carimg.webp'
import { priceFormate, dateFormate } from '../../utills/Formate'
import { deleteCampaigns, updateStatus } from '../../store/actions/CampaignAction'
import { useAppDispatch } from '../../hooks/useDispatch'
import { getPlatformImg } from '../../utills/platforms'
import Switch from '@mui/material/Switch';


interface campaigncardpropstype {
    id: string;
    name: string;
    budget: number;
    clicks: number;
    status: boolean;
    createdat: string;
    platform: string;
    range: {
        start: string;
        end: string;
    };
}

const CampaignCard = ({ id, name, budget, clicks, platform, range, status, createdat }: campaigncardpropstype) => {
    const dispatch = useAppDispatch()
    const [checked, setChecked] = React.useState(status);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        dispatch(updateStatus({ id: id, status: event.target.checked }))
    };
    return (
        <tr className=''>
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label className="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" className="w-4 p-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </th>
            <td className="p-2 sm:p-4">
                <div className='flex flex-col lg:flex-row gap-2 items-center'>
                    <img src={carImg} alt="" className='w-14 h-14 rounded-lg' />
                    <div className='lg:self-center'>
                        <div className='text-base font-medium '>{name}</div>
                        <div className='text-sm font-light lg:text-justify'>Created on {dateFormate(createdat)}</div>
                    </div>
                </div>
            </td>
            <td className="p-2 sm:p-4 text-sm font-medium ">
                {dateFormate(range?.start)} - {dateFormate(range?.end)}
            </td>
            <td className="p-2 sm:p-4 text-center">
                {clicks}
            </td>
            <td className="p-2 sm:p-4 text-center">
                INR. {priceFormate(budget)}
            </td>
            <td className="p-2 sm:p-4 text-center">
                Chennai
            </td>
            <td className="p-2 sm:p-4">
                <img src={getPlatformImg(platform)} width="24" height="24" alt={platform} />
            </td>
            <td className="p-2 sm:p-4 ">
                <div className={`px-2 p-1 ${checked ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'} rounded-lg flex justify-center item-center`}>
                    {checked ? 'Live' : 'Pause'}
                </div>
            </td>
            <td className="p-2 sm:p-4">
                <div className='flex items-center gap-2 justify-evenly'>
                    <button className="font-medium"><img src={editIcon} width="24" height="24" alt="edit" /></button>
                    <button onClick={() => dispatch(deleteCampaigns(id))} className="font-medium"><img src={deleteIcon} width="24" height="24" alt="delete" /></button>
                </div>
            </td>
        </tr>
    )
}

export default memo(CampaignCard)