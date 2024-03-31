import { useState } from "react";
import { Filter, ListTodo } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const TableActions = ({ table }) => {
    const [filter , setShowFilter] = useState(false);

    function toggleActiveFilter(){

    }

    function toggleInActiveFilter(val){
        console.log(table.getColumn('activeStatus'))
        table.getColumn('activeStatus').setFilterValue('Active');
    }
    return (
        <div className="flex text-white items-center justify-between mx-32 my-10 relative">
            <h3>History(10)</h3>
            <div className="flex items-center gap-5">
                <button className="flex border border-[1px solid #C9CED6] rounded-3xl px-4 py-1 items-center justify-center gap-2 hover:bg-[#353C4A]"><ListTodo size={15}/>Bulk Edit</button>
                <button onClick={() => setShowFilter(!filter)} className="flex border border-[1px solid #C9CED6] rounded-3xl px-4 py-1 items-center justify-center gap-2 hover:bg-[#353C4A]"><Filter size={15}/>Filter</button>
                <div className={`absolute w-max h-max right-0 text-white top-10 flex flex-col gap-4 bg-[#353C4A] ${filter ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center justify-center gap-2 mx-2">
                        <Switch id="inactive" onCheckedChange={(e) => toggleInActiveFilter(e)}/>
                        <Label htmlFor="inactive">InActive Links</Label>
                    </div>
                    <div className="flex items-center justify-between mx-2">
                        <Switch id="active"/>
                        <Label htmlFor="active">Active Links</Label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableActions;