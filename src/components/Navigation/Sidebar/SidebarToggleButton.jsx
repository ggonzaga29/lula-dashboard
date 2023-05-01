import React, {useState} from "react";

const SidebarToggleButton = (props) => {
    const [toggled, setToggled] = useState(false);

    const buttonClickHandler = () => {
        setToggled(prevToggled => !prevToggled);
        props.sidebarToggleHandler(toggled);
    }

    return (
        <div className='text-center d-none d-md-inline'>
            <button
                className='rounded-circle border-0'
                id='sidebarToggle'
                onClick={buttonClickHandler}
            />
        </div>
    )
}

export default SidebarToggleButton;