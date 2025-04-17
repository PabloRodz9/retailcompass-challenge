import { GridColDef } from "@mui/x-data-grid";
import { calculateDiscount } from "../functions";
import i18n from "../../i18n";

export const columns: GridColDef[] = [
    { field: 'name', headerName: `${i18n.t('name')}`, flex: 2, sortable: false },
    { field: 'storeName', headerName: `${i18n.t('store')}`, flex: 1, sortable: false },
    {
        field: 'normalPrice',
        headerName: `${i18n.t('normal_price')}`,
        flex: 1,
        sortable: false,
        valueFormatter: (_, row) =>
            row.normalPrice ? `$${row.normalPrice.toFixed(2)}` : 'N/A',
    },
    {
        field: 'offerPrice',
        headerName: `${i18n.t('offer_price')}`,
        flex: 1,
        sortable: false,
        valueFormatter: (_, row) =>
            row.offerPrice ? `$${row.offerPrice.toFixed(2)}` : 'N/A',
    },
    {
        field: 'lowest',
        headerName: `${i18n.t('lowest_price')}`,
        flex: 1,
        sortable: false,
        valueFormatter: (_, row) =>
            row.lowest ? `$${row.lowest.toFixed(2)}` : 'N/A',
    },
    {
        field: 'discount',
        headerName: `${i18n.t('discount')}`,
        flex: 1,
        sortable: false,
        valueGetter: (_, row) => {
            const normal = row.normalPrice;
            const lowest = row.lowest;
            if (!normal || !lowest) return 'N/A';
            const discount = calculateDiscount(normal, lowest)
            return `${discount.toFixed(2)}%`;
        },
    },
];
