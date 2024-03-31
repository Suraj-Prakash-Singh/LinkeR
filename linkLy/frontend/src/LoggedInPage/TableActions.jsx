import { Filter, ListTodo } from "lucide-react";

const TableActions = ({ table }) => {

    return (
        <div className="flex text-white items-center justify-between mx-32 my-10">
            <h3>History(10)</h3>
            <div className="flex items-center gap-5">
                <button className="flex border border-[1px solid #C9CED6] rounded-3xl px-4 py-1 items-center justify-center gap-2 hover:bg-[#353C4A]"><ListTodo size={15}/>Bulk Edit</button>
                <button className="flex border border-[1px solid #C9CED6] rounded-3xl px-4 py-1 items-center justify-center gap-2 hover:bg-[#353C4A]"><Filter size={15}/>Filter</button>
            </div>
        </div>
    )
}

export default TableActions;