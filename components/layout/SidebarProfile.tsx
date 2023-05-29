import useCurrentUser from '@/hooks/useCurrentUser';
import React from 'react'
import { BiDotsHorizontal } from 'react-icons/bi';
import Avatar from '../Avatar';
import { Popover } from '@headlessui/react';
import { signOut } from 'next-auth/react';

const SidebarProfile = () => {
    const {data: currentUser} = useCurrentUser();
  return (
    <>
    <Popover className="w-full ">
    <Popover.Button className="w-full outline-none">
        <div className='flex flex-row justify-between p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer'>
            <div className='flex flex-row'>
                <Avatar userId={currentUser?.id} notClickable/>
                <div className='hidden lg:flex'>
                    <div className='flex flex-col justify-center items-start ml-3'>
                        <p className='text-black dark:text-white font-semibold text-sm'>
                            {currentUser?.name}
                        </p>
                        <span className='text-neutral-600 dark:text-neutral-500 text-sm'>
                            @{currentUser?.username}
                        </span>
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex'>
                <div className='flex flex-col justify-center items-end'>
                    <BiDotsHorizontal className='fill-black dark:fill-white'/>
                </div>
            </div>
        </div>
        
    </Popover.Button>
    <Popover.Panel className="absolute z-10 bottom-[5.5rem] w-[232px]">
        <div className='bg-white dark:bg-black rounded-xl text-black dark:text-white  py-2 font-semibold logOutPanelW dark:logOutPanel shadowed'>
            <p className='hover:bg-neutral-200 dark:hover:bg-neutral-800 p-4 cursor-pointer' onClick={() => signOut()}>
                Log out @{currentUser?.username}
            </p>
        </div>
      </Popover.Panel>
    </Popover>
    
     {/* <Popover className="w-full lg:hidden">
    <Popover.Button className="w-full outline-none">
    <Avatar userId={currentUser?.id} notClickable/>
        
        
    </Popover.Button>
    <Popover.Panel className="absolute z-10 bottom-20 w-[232px]">
        <div className='bg-black rounded-xl text-white border-neutral-800 border-[1px] py-2 font-semibold'>
            <p className='hover:bg-neutral-800 p-4 cursor-pointer' onClick={() => signOut()}>
                Log out @{currentUser?.username}
            </p>
        </div>
      </Popover.Panel>
    </Popover>  */}
    </>
  )
}

export default SidebarProfile