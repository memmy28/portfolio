import React from 'react'

import "../style/section-experience.css"
import "../App.css"

import NavigationSidebar from "./NavigationSidebar";
import NavigationBar from "./NavigationBar";

const SectionExperience = () => {
    return (
        <div className="App">
            <NavigationSidebar />
            <NavigationBar style={{ position: 'absolute', zIndex: '1' }} />

            <section class="content" id="experience">
            <h1>Erfahrung</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </section>
        </div>

        
    );
};

export default SectionExperience;