import { Categories } from "./Categories";
import { Prices } from "./Prices";

export interface Product {
    productId: number;
    storeId: number;
    storeName: string;
    name: string;
    sku: string;
    brand: string;
    model?: string;
    url: string;
    imageUrl: string;
    status: string;
    created: string;
    updated: string;
    extracted: string;
    prices: Prices;
    categories: Categories;
    competitors: [];
}