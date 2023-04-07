import { AiOutlinePlus } from "react-icons/ai";
export default function Home() {
    return (
        <main className="">
            <div className="max-w-xl mx-auto mt-10">
                <div className="flex flex-col items-center gap-5">
                    <img src="/todo-banner.jpg" className="w-[400px]" />
                </div>
                <div className="flex items-center gap-2 mt-10">
                    <input
                        placeholder="What to do Today?"
                        type="text"
                        className="font-medium border-[2px] border-black h-[60px] grow shadow-sm rounded-md px-4 focus-visible:outline-yellow-400 placeholder:text-black"
                        autoFocus
                    />
                    <button className="w-[60px] h-[60px] rounded-md bg-green-500 flex justify-center items-center cursor-pointer">
                        <AiOutlinePlus size={30} color="#fff" />
                    </button>
                </div>
            </div>
        </main>
    );
}
