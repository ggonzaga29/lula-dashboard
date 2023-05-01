import React, {useState} from "react";

const Dropdown = (props) => {
    const [toggled, setToggled] = useState(false);

    const dropdownClickHandler = () => {
        setToggled(prevToggled => !prevToggled);
    }

    return (
        <>
            {/* remove collapsed to toggle */}
            <a
                className={`nav-link ${!toggled ? 'collapsed' : ''}`}
                data-toggle='collapse'
                onClick={dropdownClickHandler}
            >
                <i className={`fas fa-fw ${props.iconClass}`}/>
                <span>{props.title}</span>
            </a>
            {/* add show to toggle */}
            <div
                id='collapseTwo'
                className={`collapse ${toggled ? 'show' : ''}`}
            >
                <div className='bg-white py-2 collapse-inner rounded'>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Dropdown;