import React, { useEffect } from 'react'
import Modal from '../Modal';
import useDisplayModal from '@/hooks/useDisplayModal';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { BiCircle, } from 'react-icons/bi';
import {HiCheckCircle, } from 'react-icons/hi';
import {useTheme} from "next-themes";
import { toast } from 'react-hot-toast';

//NOT IMPLEMENTED
/* const colors = [
    {
        color: "Blue",
        css: "bg-sky-500"
    },
    {
        color: "Yellow",
        css: "bg-yellow-500"
    },
    {
        color: "Pink",
        css: "bg-pink-500"
    },
    {
        color: "Purple",
        css: "bg-violet-500"
    },
    {
        color: "Orange",
        css: "bg-orange-500"
    },
    {
        color: "Green",
        css: "bg-green-500"
    },
] */
const modes = ['Default',  'Dark']


const DisplayModal = () => {
    /* let [color, setColor] = useState(colors[0]); */
    
   
    const displayModal = useDisplayModal();

    const onSubmit = () =>{toast.success("Display mode updated!"); displayModal.onClose()}

    const {systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    let [mode, setMode] = useState(modes[0]);
    function handleBtn(){
        if (currentTheme === 'dark'){
            setMode(modes[1]);
        } else if (currentTheme === 'light'){
            setMode(modes[0]);
        }
    }


    const changeTheme = (mode:any) => () => {
        if (mode === "Default"){
            setTheme('light');
        }
        else if (mode === "Dark"){
            setTheme('dark');
        }
      }
    

      useEffect(()=> {
        handleBtn();
      })
      

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            {/* <div>
                <p className='text-neutral-500 font-semibold mb-1'>Color</p>
                <RadioGroup value={color} onChange={setColor} as="div" className='flex flex-row bg-neutral-200 dark:bg-neutral-800 rounded-2xl justify-between py-3 px-10'>
                {colors.map((color) => (
                        <RadioGroup.Option key={color.color} value={color} className="m-2">
                            {({ active, checked }) => (
                            <div
                            className={`h-[40px] w-[40px] rounded-full shadowBlue transition cursor-pointer flex justify-center items-center ${color.css} shadow${color.color}`}
                            >
                            {checked ? <HiCheck size={20} style={{color: "#fff"}} /> : ""}
                            
                            </div>
                        )}
                        </RadioGroup.Option>
                    ))}
                </RadioGroup>
            </div> */}
            <div>
                <p className='text-neutral-500 font-semibold mb-1'>Background</p>
                <RadioGroup value={mode} onChange={setMode} className="flex flex-row bg-neutral-200 dark:bg-neutral-800 rounded-2xl justify-between">

                    {modes.map((mode) => (
                        <RadioGroup.Option key={mode} value={mode} className="m-2 w-full" defaultChecked>
                            {({ active, checked }) => (
                            <div
                            onClick={changeTheme(mode)}
                            className={`flex flex-row items-center justify-center p-4 rounded-lg border-[2px] w-full  ${
                                checked ? ' border-sky-500' : 'border-neutral-600'
                            } mode-${mode}`}
                            >
                            {checked ? <HiCheckCircle size={30} style={{color: "rgb(14 165 233)"}} /> : <BiCircle size={30} style={{color: "rgb(82 82 82)"}}/>}
                            <div className='ml-3 font-semibold'>{mode}</div>
                            </div>
                        )}
                        </RadioGroup.Option>
                    ))}

                </RadioGroup>
            </div>
        </div>
    )
  return (
    <Modal
        
        isOpen={displayModal.isOpen}
        title="Customize your view"
        actionLabel='Done'
        onClose={displayModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        
    />
  )
}

export default DisplayModal