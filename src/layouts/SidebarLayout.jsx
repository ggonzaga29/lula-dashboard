import React from 'react';
import {Link, Outlet} from 'react-router-dom';

import { SidebarProvider } from "../contexts/SidebarContext.jsx";

import Sidebar from '../components/Navigation/Sidebar/Sidebar.jsx';
import Topbar from '../components/Navigation/Topbar/Topbar.jsx';

const SidebarLayout = () => {
    return (
        <div id='wrapper'>
            <SidebarProvider>
                <Sidebar/>
                {/* Content Wrapper */}
                <div id='content-wrapper' className='d-flex flex-column'>
                    {/* Main Content */}
                    <div id='content'>
                        <Topbar/>
                        <div className="container-fluid">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </SidebarProvider>
        </div>
    );
};

export default SidebarLayout;
