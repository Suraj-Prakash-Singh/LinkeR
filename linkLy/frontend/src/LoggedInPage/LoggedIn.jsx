import InputBox from "../InputBox";
import DataTable from "./DataTable";
import chevronDown from "../assets/chevron-down.svg"
import bell from "../assets/bell.svg";

const LoggedIn = () => {

    return (
        <div className="w-full h-full flex flex-col justify-center">
            <div className="w-full h-1/4">
                <div className="w-full h-auto flex mt-4 items-center gap-5">
                    <h2 className="navHeading p-2 cursor-pointer items-center justify-center w-2/12 ml-3">
                    LinkeR</h2>
                    <div className="w-7/12">
                        <InputBox width={"w-full"} height={"h-12"}></InputBox>
                    </div>
                    <div className="w-max flex items-center gap-6">
                        <button className="flex items-center py-[4px] px-4 rounded-[28px] border border-[#C9CED6] bg-[#353C4A]">
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex flex-col items-start">
                                    <p className="text-[8px] text-white">Welcome</p>
                                    <p className="text-[10px] text-white">Mohammed</p>
                                </div>
                                <img src={chevronDown}></img>
                            </div>
                        </button>
                        <button className="rounded-full bg-[#144EE3] p-3">
                            <img src={bell}></img>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-3/4 bg-[#151A24] flex items-center justify-center">
                <DataTable></DataTable>
            </div>
        </div>
    ) 
}

export default LoggedIn;