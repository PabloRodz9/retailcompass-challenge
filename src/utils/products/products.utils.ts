import { Product } from "../../interfaces/Product";

export const mapProductsToRows = (products: Product[] = []) =>
    products.map((product) => ({
        id: product.productId,
        name: product.name,
        storeName: product.storeName,
        normalPrice: product.prices.normalPrice,
        offerPrice: product.prices.offerPrice,
        lowest: product.prices.lowest,
    }));
