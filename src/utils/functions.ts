export const calculateDiscount = (normal: number, lowest: number): number => {
    return Number((((normal - lowest) / normal) * 100).toFixed(2));
};
