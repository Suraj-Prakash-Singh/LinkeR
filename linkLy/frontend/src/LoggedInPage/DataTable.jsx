import { useMemo } from "react";
import copy from "../assets/copy.svg";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from "@tanstack/react-table"
   
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { data }from "./tabledata.js";

const DataTable = () => {
    
    const columns =  useMemo(() => [
        {
            accessorKey: 'shortLink',
            header: 'Short Link',
        },
        {
            accessorKey: 'originalLink',
            header: 'Original Link',
        },
        {
            accessorKey: 'activeStatus',
            header: 'Status',
        },
        {
            accessorKey: 'date',
            header: 'Date',
        },
    ], []);
    
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    
    return (
        <div className="w-full h-full flex items-center justify-center bg-[#151A24] shadow-md">
            <div className="table-container w-full h-max flex justify-center items-center">
                <div className="rounded-md w-10/12 h-max mt-10">
                    <Table className="text-white border-none shadow-md">
                        <TableHeader className="bg-[#0D1117]">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow className="border-none" key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                        )}
                                </TableHead>
                                )
                            })}
                            </TableRow>
                        ))}
                        </TableHeader>
                        <TableBody className="bg-[#181E29] text-[#C9CED6] p-0">
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                            <TableRow className="border-none"
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell, index) => (
                                <TableCell className="py-4 px-2" key={cell.id}>
                                    <div className="flex text-xs">
                                    {flexRender (cell.column.columnDef.cell, cell.getContext(), )}{index == 0 && <img className="cursor-pointer ml-4"src={copy}></img>}
                                    </div>
                                    
                                </TableCell>
                                ))}
                            </TableRow>
                            ))
                        ) : (
                            <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default DataTable;