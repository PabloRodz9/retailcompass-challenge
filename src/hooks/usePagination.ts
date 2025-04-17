import { useState } from 'react';


export const usePagination = () => {
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);


    const nextPage = () => {
        setPage(page + 1)
    };

    const prevPage = () => {
        setPage(page - 1)
    };

    return {
        page,
        size,
        setPage,
        setSize,
        nextPage,
        prevPage,
    };
};
