import useCurrentUser from "@/hooks/useCurrentUser"
import useEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import { useCallback, useEffect, useState } from "react";
import {toast} from "react-hot-toast";
import axios from "axios";
import Modal from "../Modal";
import Input from "../Input";
import ImageUpload from "../ImageUpload";


const EditModal = () => {
    const { data: currentUser } = useCurrentUser();
    const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
    const editModal = useEditModal();

    const [profileImage, setProfileImage] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');

    useEffect(() => {
        setProfileImage(currentUser?.profileImage)
        setCoverImage(currentUser?.coverImage)
        setName(currentUser?.name)
        setUsername(currentUser?.username)
        setBio(currentUser?.bio)
      }, [currentUser?.name, currentUser?.username, currentUser?.bio, currentUser?.profileImage, currentUser?.coverImage]);

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            await axios.patch("/api/edit", {
                name, 
                username,
                bio,
                profileImage,
                coverImage
            });
            
            mutateFetchedUser();

            toast.success("Updated");

            editModal.onClose();
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }, [bio, name, username, profileImage, coverImage, editModal, mutateFetchedUser])
    
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <p className="text-black dark:text-white font-semibold mb-[-10px]">Profile image</p>
            <ImageUpload
                value={profileImage}
                disabled={isLoading}
                onChange={(image) => setProfileImage(image)}
                label="Upload profile image"
            />
            <p className="text-black dark:text-white font-semibold mb-[-10px]">Profile cover image</p>
            <ImageUpload
                value={coverImage}
                disabled={isLoading}
                onChange={(image) => setCoverImage(image)}
                label="Upload cover image"
            />
            <p className="text-black dark:text-white font-semibold mb-[-10px]">Profile name</p>
            <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
            />
            <p className="text-black dark:text-white font-semibold mb-[-10px]">Profile username</p>
            <Input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                disabled={isLoading}
            />
            <p className="text-black dark:text-white font-semibold mb-[-10px]">Profile bio</p>
            <Input
                placeholder="Bio"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
                disabled={isLoading}
            />
        </div>
    )
  
    return (
    <Modal
        disabled={isLoading}
        isOpen={editModal.isOpen}
        title="Edit your profile"
        actionLabel="Save"
        onClose={editModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
    />
  )
}

export default EditModal