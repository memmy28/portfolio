import React from "react";
import { Outlet } from "react-router-dom";

import "./style/navigation.css"


import NavigationSidebar from "./components/NavigationSidebar";
import NavigationBar from "./components/NavigationBar";

function Layout() {
    return (
        <div className="App">
            {/* navigation */}
            <NavigationSidebar />
            <NavigationBar style={{ position: 'absolute', zIndex: '1' }} />

            {/* dynamic page content */}
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
