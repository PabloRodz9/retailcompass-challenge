import { useMemo } from 'react';
import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from 'react-i18next';
import { calculateDiscount } from "../functions";

export const columns = (): GridColDef[] => {
    const { t } = useTranslation();

    return [
        { field: 'name', headerName: t('name'), flex: 2, sortable: false },
        { field: 'storeName', headerName: t('store'), flex: 1, sortable: false },
        {
            field: 'normalPrice',
            headerName: t('normal_price'),
            flex: 1,
            sortable: false,
            valueFormatter: (_, row) =>
                row.normalPrice ? `$${row.normalPrice.toFixed(2)}` : 'N/A',
        },
        {
            field: 'offerPrice',
            headerName: t('offer_price'),
            flex: 1,
            sortable: false,
            valueFormatter: (_, row) =>
                row.offerPrice ? `$${row.offerPrice.toFixed(2)}` : 'N/A',
        },
        {
            field: 'lowest',
            headerName: t('lowest_price'),
            flex: 1,
            sortable: false,
            valueFormatter: (_, row) =>
                row.lowest ? `$${row.lowest.toFixed(2)}` : 'N/A',
        },
        {
            field: 'discount',
            headerName: t('discount'),
            flex: 1,
            sortable: false,
            valueGetter: (_, row) => {
                const normal = row.normalPrice;
                const lowest = row.lowest;
                if (!normal || !lowest) return 'N/A';
                const discount = calculateDiscount(normal, lowest);
                return `${discount.toFixed(2)}%`;
            },
        },
    ]
}

