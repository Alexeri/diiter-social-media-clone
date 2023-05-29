import { Dialog, Popover } from '@headlessui/react'
import React, { useCallback, useState } from 'react'
import { BsGearFill } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import { BsQuestionCircle } from 'react-icons/bs'
import DisplayModal from '../modals/DisplayModal'
import useDisplayModal from '@/hooks/useDisplayModal'
import useAboutModal from '@/hooks/useAboutModal'



const SidebarSettings = () => {
  const displayModal = useDisplayModal();
  const aboutModal = useAboutModal();

  

    const onClick = (modal:any) => () => {
      if (modal === 'Display'){
        displayModal.onOpen();
      } else if (modal === 'About'){
        aboutModal.onOpen();
      }
    }
  const items = [
    {
      label: "Display",
      icon: BiEdit,
    },
    {
      label: "About",
      icon: BsQuestionCircle,
    },
  ];

  return (
    <>
    <Popover className="">
      <Popover.Button className="outline-none">
        <div className="relative rounded-full p-4 flex items-center gap-4 hover:bg-slate-300 hover:bg-opacity-10">
          <BsGearFill size={24} className="fill-black dark:fill-white" />
          <p className="text-black dark:text-white text-xl hidden lg:block">Settings</p>
        </div>
      </Popover.Button>
      <Popover.Panel className="absolute z-10 top-[13rem] w-[232px]">
        <div className="bg-white dark:bg-black rounded-xl font-semibold shadowed">
          {items.map((item, i) => (
            <div
              key={i}
              onClick={onClick(item.label)}
              className="flex flex-row items-center p-4 hover:bg-neutral-200 dark:hover:bg-neutral-800 cursor-pointer gap-3"
            >
              <item.icon size={20} />
              <p>{item.label}</p>
              
            </div>
            
          ))}
        </div>
       
      </Popover.Panel>
    </Popover>
    </>
  );
}

export default SidebarSettings