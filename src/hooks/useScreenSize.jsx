import { useState, useEffect } from 'react';


// https://getbootstrap.com/docs/5.0/layout/breakpoints/
const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState('');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 576) {
                setScreenSize('None');
            } else if (width >= 576 && width < 768) {
                setScreenSize('sm');
            } else if (width >= 768 && width < 992) {
                setScreenSize('md');
            } else if (width >= 992 && width < 1200) {
                setScreenSize('lg');
            } else if (width >= 1200 && width < 1400) {
                setScreenSize('xl');
            } else if (width >= 1400) {
                setScreenSize('xxl');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // initial call to set the screen size
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenSize;
};

export default useScreenSize;