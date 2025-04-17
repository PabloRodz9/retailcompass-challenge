import { create } from "zustand";
import { FilterState } from "../interfaces/FilterState";


export const useFilterStore = create<FilterState>((set) => ({
    brand: "",
    setBrand: (brand) => set({ brand }),
    status: "",
    setStatus: (status) => set({ status }),
}));
