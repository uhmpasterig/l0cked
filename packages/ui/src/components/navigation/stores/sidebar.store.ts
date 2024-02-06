import { create } from "zustand";

type SidebarStore = {
  isOpen: boolean;
  setOpen: (state: boolean) => void;
};

const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  setOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export { useSidebarStore };
