import React from 'react'
import tickIcon from '../../assets/svg/tick.svg'

interface CardBorderPropsType {
    onClickAction: (indx:number, value:any) => void;
    value: any;
    tickPos: "Top" | "Center";
    children: React.ReactNode;
    fixed?:boolean;
    selected:boolean;
    index:number
}

const CardBorder = ({ children, onClickAction, value, tickPos , fixed , selected, index}: CardBorderPropsType) => {


    return (
        <div className={`w-fit h-fit border-2 rounded-lg p-2 relative ${selected && 'bg-blue-50 border-blue-500'} ${fixed && "w-full"} cursor-pointer`} onClick={() => onClickAction(index,value)}>
            {children}
            {selected && <img
                src={tickIcon}
                width="25" height="25"
                alt="tick"
                className={`absolute  ${tickPos === "Top" && "-top-2.5 -right-2.5"} ${tickPos === "Center" && "top-0 right-0"}`}
            />}
        </div>
    )
}

export default CardBorder