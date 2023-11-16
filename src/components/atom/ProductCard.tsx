import React, { memo } from 'react'
import CardBorder from './CardBorder'

interface ProductCardPropsType { index: number; id: string; img: string; name: string; price: string; selected: boolean; handleSelect: (indx: number, value: string) => void; }


const ProductCard = ({ index, id, img, name, price, selected, handleSelect }: ProductCardPropsType) => {
  return (
    <CardBorder onClickAction={handleSelect} tickPos='Center' value={id} fixed selected={selected} index={index}>
      <div className='flex flex-row gap-4 items-center'>
        <img
          src={`data:image/jpeg;charset=utf-8;base64,${img}`}
          width="45" height="45"
          alt="tick"
        />
        <div>
          <div className='text-base font-medium'>{name}</div>
          <div className='text-sm font-light'>RS. {price}</div>
        </div>
      </div>
    </CardBorder>
  )
}

export default memo(ProductCard)