import React from 'react'
import Modal from '../Modal'
import useAboutModal from '@/hooks/useAboutModal'
import { BsGithub } from 'react-icons/bs'

const AboutModal = () => {
    const aboutModal = useAboutModal();

    const onSubmit = () =>{ aboutModal.onClose()}

    const bodyContent = (
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row '>
                <p>This is a demo project created by </p>
                <div className='flex flex-row items-center hover:underline cursor-pointer'>   
                    <BsGithub className='ml-2 mr-1'/>
                    <a href="https://github.com/Alexeri/" className='font-semibold' target="_blank">Alexeri</a>
                </div>
                
            </div>
            <div>
                <p>To view the repisotory, follow the link below</p> 
                <a href="https://github.com/Alexeri/ditter-social-media-clone" target="_blank" className="hover:underline italic">https://github.com/Alexeri/ditter-social-media-clone</a>
            </div>
            <div>
                <p>Some features, as registering a new account have been disabled to prevent eventual spam.</p>
            </div>
        </div>
    )
  return (
    <Modal
        
        isOpen={aboutModal.isOpen}
        title="About"
        actionLabel='Done'
        onClose={aboutModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        
    />
  )
}

export default AboutModal