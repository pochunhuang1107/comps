import { useState } from "react";

export default function useSort(config, data) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    function setSortColumn(label) {
        if (sortBy && sortBy !== label) {
            setSortOrder("asc");
            setSortBy(label);
            return;
        }
        if (sortOrder === "asc") {
            setSortOrder("desc");
            setSortBy(label);
        } else if (sortOrder === "desc") {
            setSortOrder(null);
            setSortBy(null);
        } else {
            setSortOrder("asc");
            setSortBy(label);
        }
    }

    let sortedData = data;
    if (sortBy && sortOrder) {
        const { sortValue } = config.find((column) => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            const reverseOrder = sortOrder === "asc" ? 1 : -1;
            if (typeof valueA === "string") {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        });
    }
    return {
        setSortColumn,
        sortedData,
        sortBy,
        sortOrder
    }
}
