import { useState } from "react";
import link from "./assets/link.svg";

const InputBox = () => {
    const [input, setInput] = useState('');

    async function onInputSubmit() {
        const endpoint = "http://localhost:3000/getShortLink";
        const response = await fetch(endpoint, {
            headers: {
                link: input
            }
        })

        const json = await response.json();
        console.log(json);
    }

    return (
        <div className="w-full h-max flex items-center justify-center">
            <div className="w-2/5 h-16 flex border-4 rounded-[50px] border-solid border-[#353c4a] items-center bg-[#181E29]">
                <img className="px-4" src={link}></img>
                <input className="bg-inherit h-full w-8/12 outline-none caret-white text-white" placeholder="Enter the link here" onChange={(e) => setInput(e.target.value)} value={input}></input>
                <button className="w-max h-[92%] bg-[#144EE3] text-white rounded-[50px] px-5 ml-1 hover:bg-[#EB568E]" onClick={onInputSubmit}>Shorten Now!</button>
            </div>
        </div>
    )
}

export default InputBox;