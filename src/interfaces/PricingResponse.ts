import { Paging } from "./Paging";
import { Product } from "./Product";

export interface PricingResponse {
    paging: Paging;
    products: Product[];
}