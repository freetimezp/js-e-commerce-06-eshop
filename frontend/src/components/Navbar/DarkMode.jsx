import { useState, useEffect } from 'react';
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const element = document.documentElement;

    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === 'dark') {
            element.classList.add('dark');
            element.classList.add('dark');
        } else {
            element.classList.remove('light');
            element.classList.remove('dark');
        }
    }, [theme, element.classList]);

    return (
        <div className='relative'>
            <img
                src={LightButton}
                alt="button"
                className={`w-12 cursor-pointer absolute right-0 z-10 transition-all duration-200
                    ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            />
            <img
                src={DarkButton}
                alt="button"
                className={`w-12 cursor-pointer`}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            />
        </div>
    );
}

export default DarkMode;
