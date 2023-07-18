import Quote from "./Quote";
import Message from "./Message";


const Footer = ()=>{
    return(
        <div className="flex flex-col gap-[128px]">
            <Quote />
            <Message />
            
        </div>
    )
}

export default Footer