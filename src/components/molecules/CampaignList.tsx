import React from 'react'
import CampaignCard from '../atom/CampaignCard'
const CampaignList = ({ campaigns }: { campaigns: any[] }) => {
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="uppercase  text-gray-700 uppercase bg-gray-100 rounded-lg">
                <tr >
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label className="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" className="px-4">
                        on/off
                    </th>
                    <th scope="col" className="px-4">
                        Campaign
                    </th>
                    <th scope="col" className="px-4">
                        Date Range
                    </th>
                    <th scope="col" className="px-4">
                        Clicks
                    </th>
                    <th scope="col" className="px-4">
                        Budget
                    </th>
                    <th scope="col" className="px-4">
                        Location
                    </th>
                    <th scope="col" className="px-4">
                        Status
                    </th>
                    <th scope="col" className="px-4">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {campaigns?.map((ele) => <CampaignCard id={ele._id} name={ele.name} budget={ele.budget} clicks={ele.noofclicks} range={ele.range} status={ele.status} createdat={ele.createdAt} />)}
            </tbody>
        </table>
    )
}

export default CampaignList