import Image from "next/image";
function Navigation(){
    return(
        <div className="flex flex-row gap-8 ml-[7rem]">
            <button className="flex flex-row">
                <span className="text-[#696969] mr-[6px] font-[700]">Features </span>
                <div className="relative bottom-[1px]">
                    <Image
                    src="/icon-arrow-down.svg"
                    height="7px"
                    width="10px"
                    />
                </div>
            </button>
            
            <button className="flex flex-row">
                <span className="text-[#696969] mr-[6px] font-[500]">Company </span>
                <div className="relative bottom-[1px]">
                    <Image
                    src="/icon-arrow-down.svg"
                    height="7px"
                    width="10px"
                    />
                </div>
            </button>
            
            <button className="flex relative top-[1px]">
                <span className="text-[#696969] mr-[6px] font-[500]">Careers </span>
            </button>
            
            <button className="flex relative top-[1px]">
                <span className="text-[#696969] mr-[6px] font-[500]">About </span>
            </button>     
        </div>
    )
}

export default Navigation;