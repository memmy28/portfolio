import React from 'react'
import NavigationSidebar from "./components/NavigationSidebar";
import NavigationBar from "./components/NavigationBar";
import SectionAboutMe from "./components/SectionAboutMe";

const HomePage = () => {
    return (
        <div className="App">
            <NavigationSidebar />
            <NavigationBar style={{ position: 'absolute', zIndex: '1' }} />

            <div className="content">
                <SectionAboutMe />
            </div>
        </div>
    );
};

export default HomePage;