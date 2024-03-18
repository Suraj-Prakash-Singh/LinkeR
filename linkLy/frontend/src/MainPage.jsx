import NavBar from "./NavBar";
import InputBox from "./InputBox";

const MainPage = () => {

    return(
        <div className="w-full h-full flex flex-col">
            <NavBar/>
            <div className="w-full h-2/4 flex items-center justify-center gap-5 flex-col text-center mt-4">
                <p className="text-6xl p-3 text-transparent bg-clip-text bg-gradient-to-r  from-[#1F89DB] via-[#EB568E] to-[#144EE3] font-[#SF Pro Display] font-bold"
                    >Shorten Your Loooong Links :)</p>
                <p className="text-[#C9CED6] text-center">Linker is an efficient and easy-to-use URL shortening service that streamlines your <br />online experience.</p>
            </div>
            <InputBox/>
        </div>
        
    )
}

export default MainPage;