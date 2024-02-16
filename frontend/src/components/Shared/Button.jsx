/* eslint-disable react/prop-types */

const Button = ({ text, bgColor, textColor, handler = () => { } }) => {
    return (
        <button className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 
            duration-300 transition-all py-2 px-8 rounded-3xl font-semibold relative 
            z-100`}
            onClick={handler}
        >
            {text}
        </button>
    );
}

export default Button;
