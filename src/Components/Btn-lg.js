import React from "react";

const Btn_lg = ({ btn_text, fill, animate, setWidth})=>{
    
    var colors = fill ? 'bg-cl_3 text-white' : 'bg-transparent text-cl_3'
    var bg_animate = animate ? 'hover:bg-transparent hover:text-cl_3' : ' '
    var btn_width = setWidth
    return (
        <button
            className={`py-2 ${btn_width} px-4 text-sm rounded-lg ${colors} ${bg_animate} border-cl_3 border-2  transition-colors duration-300 cursor-pointer`}
        >
            {btn_text}
        </button>
        );
}
Btn_lg.defaultProps = {
    fill: true,
    animate: true,
    setWidth: '',
};
export default Btn_lg