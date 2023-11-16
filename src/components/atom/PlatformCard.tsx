import React , {memo} from 'react'
import CardBorder from './CardBorder'

interface PlatformCardPropsType { index: number; img: string; title: string; desc: string; value: string; selected: boolean; handleSelect: (indx: number, value: string) => void; }


const PlatformCard = ({ index, img, title, desc, value, selected, handleSelect }: PlatformCardPropsType) => {


    return (
        <CardBorder onClickAction={handleSelect} tickPos='Top' value={value} fixed selected={selected} index={index}>
            <div className='flex flex-row gap-4 items-center'>
                <img
                    src={img}
                    width="25" height="25"
                    alt="tick"
                />
                <div>
                    <div className='text-base font-medium'>{title}</div>
                    <div className='text-sm font-light'>{desc}</div>
                </div>
            </div>
        </CardBorder>
    )
}

export default memo(PlatformCard)