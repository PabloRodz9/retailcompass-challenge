import { useState } from 'react';

interface PaginationOptions {
    initialSize?: number;
}

export const usePagination = ({ initialSize = 10 }: PaginationOptions = {}) => {
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(initialSize);

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
