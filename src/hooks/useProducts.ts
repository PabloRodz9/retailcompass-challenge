import { useQuery } from "@tanstack/react-query";
import { PricingResponse } from "../interfaces/PricingResponse";
import { ProductsFilters } from "../interfaces/ProductsFilters";
import { getProducts } from "../services/products.service";
import { useFilterStore } from "../stores/useFilterStore";

export const useProducts = ({ page = 0, size = 10 }: ProductsFilters) => {
    const brand = useFilterStore((state) => state.brand)
    const status = useFilterStore((state) => state.status)

    return useQuery<PricingResponse>({
        queryKey: ['products', brand, status, page, size],
        queryFn: async () => {
            const params: Record<string, any> = { page, size };
            if (brand) params.brand = brand;
            if (status) params.status = status;

            const data = await getProducts(params);
            return data;
        },
        staleTime: 1000 * 60 * 2 //2 minutos de cache valida
    });
};
