import Image from "next/image";

function Logo(){
    return(
        <button className="absolute pt-1">
            <Image
                src='/Logo.svg'
                height="24px"
                width="75px"
            />
        </button>
    )
}

export default Logo;