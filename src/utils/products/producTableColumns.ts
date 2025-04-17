import { GridColDef } from "@mui/x-data-grid";
import { calculateDiscount } from "../functions";

export const columns: GridColDef[] = [
    { field: 'name', headerName: 'Nombre', flex: 2, sortable: false },
    { field: 'storeName', headerName: 'Tienda', flex: 1, sortable: false },
    {
        field: 'normalPrice',
        headerName: 'Precio Normal',
        flex: 1,
        sortable: false,
        valueFormatter: (_, row) =>
            row.normalPrice ? `$${row.normalPrice.toFixed(2)}` : 'N/A',
    },
    {
        field: 'offerPrice',
        headerName: 'Precio Oferta',
        flex: 1,
        sortable: false,
        valueFormatter: (_, row) =>
            row.offerPrice ? `$${row.offerPrice.toFixed(2)}` : 'N/A',
    },
    {
        field: 'lowest',
        headerName: 'Precio Más Bajo',
        flex: 1,
        sortable: false,
        valueFormatter: (_, row) =>
            row.lowest ? `$${row.lowest.toFixed(2)}` : 'N/A',
    },
    {
        field: 'discount',
        headerName: 'Descuento',
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
