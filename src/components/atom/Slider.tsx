import React from 'react'
import { priceFormate } from '../../utills/Formate';

interface SliderPropsType {
    label: string; min: number; max: number; defaultValue: number; onChange: React.ChangeEventHandler<HTMLInputElement>
}

const Slider = ({ label, min, max, defaultValue, onChange }: SliderPropsType) => {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input type="range" min={min} max={max} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" defaultValue={defaultValue} onChange={onChange} />
            <div className='flex justify-between align-center'>
                <div className='text-sm font-medium'>{priceFormate(min)}</div>
                <div className='text-sm font-medium'>{priceFormate(max)}</div>
            </div>
        </div>
    )
}

export default Slider