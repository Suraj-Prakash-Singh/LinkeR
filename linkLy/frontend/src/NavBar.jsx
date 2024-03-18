import signIn from "./assets/signIn.svg";

const NavBar = () => {

    return (
        <div className="w-full h-auto flex items-center justify-between px-5 mt-5">
            <h2 className="navHeading p-2 cursor-pointer items-center justify-center">
                LinkeR</h2>
            <div className="w-max h-max text-white flex items-center justify-center gap-5">
                <button className="flex items-center py-2 px-5 rounded-[28px] border border-[#C9CED6] bg-[#353C4A] gap-1">Login <img src={signIn}></img></button>
                <button className="items-center py-2 px-5 rounded-[28px] bg-[#144EE3] shadow-sm shadow-[#144EE3]">Register Now</button>
            </div>
        </div>
    )
}

export default NavBar;