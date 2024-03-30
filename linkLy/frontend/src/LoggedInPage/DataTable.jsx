import { useMemo } from "react";
import copy from "../assets/copy.svg";
import active from "../assets/active.svg";
import inactive from "../assets/inactive.svg";

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

const ReturnActiveIcons = ({ activeStatus }) => {
    const bgColor = activeStatus ? "bg-[#15803d]" : "bg-[#854d0e]";
    const imgSource = activeStatus ? active : inactive;
    return (
        <div className={`rounded-full flex items-center justify-center ${bgColor}`}>
            <img src={imgSource} className={`cursor-pointer p-2 w-8 h-8`}></img>
        </div>

    )
}

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
            cell: ({ row }) => {
                const val = row.getValue('activeStatus');
                const textColor = val ? "text-[#1EB036]" : "text-[#B0901E]"
                return <div className="flex items-center justify-between gap-5">
                            <p className={`w-12 flex items-start ${textColor}`}>{val  ? "Active" : "Inactive"}</p>
                            <ReturnActiveIcons activeStatus={val}/>
                        </div>
            }
        },
        {
            accessorKey: 'date',
            header: 'Date',
        },
        {
            header: 'Action',
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
                                <TableCell className="py-5 px-2 text-center" key={cell.id}>
                                    <div className="flex text-xs items-center">
                                    {flexRender (cell.column.columnDef.cell, cell.getContext(), )}{index == 0 && 
                                        <div className="rounded-full object-cover bg-[#1C283F] flex items-center justify-center ml-4">
                                            <img className="cursor-pointer p-2"src={copy}></img>
                                            </div>}
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