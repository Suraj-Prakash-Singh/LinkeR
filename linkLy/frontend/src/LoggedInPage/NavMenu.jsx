import cog from "../assets/cog.svg";
import stats from "../assets/stats.svg";
import hand from "../assets/hand.svg";

const NavMenu = () => {

    return (
        <div className="w-full h-max flex items-center justify-center bg-[#181E29] shadow-md">
            <div className="w-2/4 h-max flex items-center justify-center text-white gap-8">
                <div className="flex items-center justify-center py-4 cursor-pointer pr-4 hover:border-b-2 border-[#144EE3]">
                    <img className="p-2" src={cog}></img>
                    <p>History</p>
                </div>
                <div className="flex items-center justify-center py-4 cursor-pointer pr-4 hover:border-b-2 border-[#144EE3]">
                    <img className="p-2" src={stats}></img>
                    <p>Statistics</p>
                </div>
                <div className="flex items-center justify-center py-4 cursor-pointer pr-4 hover:border-b-2 border-[#144EE3]">
                    <img className="p-2" src={hand}></img>
                    <p>Click Stream</p>
                </div>
                <div className="flex items-center justify-center py-4 cursor-pointer pr-4 hover:border-b-2 border-[#144EE3]">
                    <img className="p-2" src={cog}></img>
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}

export default NavMenu;