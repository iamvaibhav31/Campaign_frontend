import React, { memo } from 'react'
import editIcon from '../../assets/svg/edit.svg'
import deleteIcon from '../../assets/svg/delete.svg'
import carImg from '../../assets/carimg.webp'
import { priceFormate, dateFormate } from '../../utills/Formate'
import { deleteCampaigns } from '../../store/actions/CampaignAction'
import { useAppDispatch } from '../../hooks/useDispatch'

interface campaigncardpropstype {
    id: string;
    name: string;
    budget: number;
    clicks: number;
    status: boolean;
    createdat: string;
    range: {
        start: string;
        end: string;
    };
}


const CampaignCard = ({id, name, budget, clicks, range, status, createdat }: campaigncardpropstype) => {
    const dispatch = useAppDispatch()
    return (
        <tr>
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label className="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" className="w-4 p-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {/* peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full */}
                {/* on / off */}
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 ${status ? "peer-checked:after:translate-x-full" : "rtl:peer-checked:after:-translate-x-full"} peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}></div>
                </label>
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
            <td className="p-2 sm:p-4 ">
                <div className={`px-2 p-1 ${status ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'} rounded-lg flex justify-center item-center`}>
                    {status ? 'Live' : 'Pause'}
                </div>
            </td>
            <td className="p-2 sm:p-4">
                <div className='flex items-center gap-2 justify-evenly'>
                    <button  className="font-medium"><img src={editIcon} width="24" height="24" alt="edit" /></button>
                    <button onClick={()=> dispatch(deleteCampaigns(id))}  className="font-medium"><img src={deleteIcon} width="24" height="24" alt="delete" /></button>
                </div>
            </td>
        </tr>
    )
}

export default memo(CampaignCard)