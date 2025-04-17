export interface FilterState {
    brand: string;
    status: string;
    setBrand: (brand: string) => void;
    setStatus: (status: string) => void;
}