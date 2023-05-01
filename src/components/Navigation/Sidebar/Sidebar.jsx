import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {SidebarContext} from "../../../contexts/SidebarContext.jsx";
import Dropdown from "../../Dropdown/Dropdown.jsx";
import useScreenSize from "../../../hooks/useScreenSize.jsx";

const Sidebar = () => {
    const {collapse, setCollapse} = useContext(SidebarContext);
    const screenSize = useScreenSize();

    if(screenSize == 'md' || screenSize == 'sm') {
        setCollapse(false);
    }

    return (
        <>
            {/* Sidebar */}
            <ul
                className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${(collapse) ? 'collapse' : ''}`}
                id='accordionSidebar'
            >
                {/* Sidebar - Brand */}
                <NavLink
                    className='sidebar-brand d-flex align-items-center justify-content-center'
                    to='/'
                >
                    <div className='sidebar-brand-icon rotate-n-15 d-lg-none d-md-none'>
                        {/*<i className='fa-regular fa-clothes-hanger'/>*/}
                        LW
                    </div>
                    <div className='sidebar-brand-text mx-3'>
                        Lulawear
                    </div>
                </NavLink>
                {/* Divider */}
                <hr className='sidebar-divider my-0'/>
                {/* Nav Item - Dashboard */}
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/'>
                        <i className='fas fa-fw fa-tachometer-alt'/>
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                {/* Divider */}
                <hr className='sidebar-divider'/>
                {/* Heading */}
                <div className='sidebar-heading'>Admin</div>
                {/* Nav Item - Pages Collapse Menu */}
                <li className='nav-item'>
                    <Dropdown title="User Administration" iconClass='fa-user'>
                        <h6 className='collapse-header'>User Administration</h6>
                        <NavLink className='collapse-item' to='/users'>
                            Users
                        </NavLink>
                        <NavLink className='collapse-item' to='/users/approve'>
                            Approve Registration
                        </NavLink>
                        <NavLink className='collapse-item' to='/users/recover'>
                            Recover Password
                        </NavLink>
                    </Dropdown>
                </li>
                {/*<i class="fa-solid fa-file-chart-column"></i>*/}
                {/* Nav Item - Utilities Collapse Menu */}
                <li className='nav-item'>
                    <Dropdown title="Reports" iconClass='fa-chart-area'>
                        <h6 className='collapse-header'>Reports</h6>
                        <NavLink className='collapse-item' to='/reports/daily'>
                            Daily
                        </NavLink>
                        <NavLink className='collapse-item' to='/reports/weekly'>
                            Weekly
                        </NavLink>
                        <NavLink className='collapse-item' to='/reports/monthly'>
                            Monthly
                        </NavLink>
                    </Dropdown>
                </li>
                {/* Divider */}
                <hr className='sidebar-divider'/>
                {/* Heading */}
                <div className='sidebar-heading'>User</div>
                {/* Nav Item - Charts */}
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/charts'>
                        <i className='fas fa-fw fa-chart-area'/>
                        <span>Charts</span>
                    </NavLink>
                </li>
                {/* Nav Item - Tables */}
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/tables'>
                        <i className='fas fa-fw fa-table'/>
                        <span>Tables</span>
                    </NavLink>
                </li>
                {/* Divider */}
                <hr className='sidebar-divider d-none d-md-block'/>
                {/* Sidebar Toggler (Sidebar) */}
                {/*<SidebarToggleButton sidebarToggleHandler={sidebarToggleHandler}/>*/}
                {/* Sidebar Message */}
                {/* <div className='sidebar-card d-none d-lg-flex'>
					<img
						className='sidebar-card-illustration mb-2'
						src='img/undraw_rocket.svg'
						alt='...'
					/>
					<p className='text-center mb-2'>
						<strong>SB Admin Pro</strong> is packed with premium
						features, components, and more!
					</p>
					<a
						className='btn btn-success btn-sm'
						href='https://startbootstrap.com/theme/sb-admin-pro'
					>
						Upgrade to Pro!
					</a>
				</div> */}
            </ul>
            {/* End of Sidebar */}
        </>
    );
};

export default Sidebar;
