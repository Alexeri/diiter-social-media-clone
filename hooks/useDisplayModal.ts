import { create } from 'zustand';

interface DisplayModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useDisplayModal = create<DisplayModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useDisplayModal;