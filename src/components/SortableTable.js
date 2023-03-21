import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import Table from "./Table";
import useSort from "../hooks/use-sort";

export default function SortableTable(props) {
    const { config, data } = props;
    const { setSortColumn, sortedData, sortBy, sortOrder } = useSort(config, data)
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: (
                <th
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => setSortColumn(column.label)}
                >
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ),
        };
    });

    return <Table {...props} config={updatedConfig} data={sortedData} />;
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        );
    }
    if (sortOrder === "asc") {
        return (
            <div>
                <GoArrowSmallUp />
            </div>
        );
    } else if (sortOrder === "desc") {
        return (
            <div>
                <GoArrowSmallDown />
            </div>
        );
    } else {
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        );
    }
}
