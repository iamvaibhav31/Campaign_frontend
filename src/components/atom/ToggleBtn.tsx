import React, { useEffect, useRef, useState } from 'react'

const ToggleBtn = ({ label, btnLables, defaultValue, onChange }: { label: string, btnLables: string[], defaultValue: string, onChange: (value: string) => void }) => {
    const [toggleButton, setToggleButton] = useState("")
    const btn1 = useRef<HTMLElement>(null);
    const btn2 = useRef<HTMLElement>(null);

    useEffect(() => {
        if (defaultValue) {
            setToggleButton(defaultValue)
            if (defaultValue === btnLables[0]) {
                btn1.current?.classList.add("bg-blue-900", "text-white")
            } else if (defaultValue === btnLables[1]) {
                btn2.current?.classList.add("bg-blue-900", "text-white")
            }
        } else {
            console.log('ToggleBtn-no default value')
            setToggleButton(btnLables[0])
            btn1.current?.classList.add("bg-blue-900", "text-white")
        }
    }, [])

    useEffect(() => {

        if (toggleButton === btnLables[0]) {
            btn1.current?.classList.toggle("bg-blue-900", true);
            btn1.current?.classList.toggle("text-white", true);
            btn2.current?.classList.toggle("bg-blue-900", false);
            btn2.current?.classList.toggle("text-white", false);
        } else {
            btn1.current?.classList.toggle("bg-blue-900", false);
            btn1.current?.classList.toggle("text-white", false);
            btn2.current?.classList.toggle("bg-blue-900", true);
            btn2.current?.classList.toggle("text-white", true);
        }

        onChange(toggleButton)
    }, [toggleButton])


    return (
        <div className='mb-4'>
            <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900'>{label}</label>
            <div className='flex justify-between align-center bg-gray-200 text-lg text-gray-400 w-fit rounded-full delay-100' >
                <span className='p-2 px-4 cursor-pointer rounded-full ' ref={btn1} onClick={() => setToggleButton(btnLables[0])}>{btnLables[0]}</span>
                <span className='p-2 px-4 cursor-pointer rounded-full' ref={btn2} onClick={() => setToggleButton(btnLables[1])}>{btnLables[1]}</span>
            </div>
        </div>
    )
}

export default ToggleBtn