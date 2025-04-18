import i18n from "../../i18n";
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

export const customLocaleText = {
    noRowsLabel: i18n.t('no_rows_label'),
};
