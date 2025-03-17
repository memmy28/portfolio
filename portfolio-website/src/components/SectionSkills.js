import React from 'react'

import "../style/section-education.css"
import "../App.css"

import NavigationSidebar from "./NavigationSidebar";
import NavigationBar from "./NavigationBar";

const SectionSkills = () => {
    return (
        <div className="App">
            <NavigationSidebar />
            <NavigationBar style={{ position: 'absolute', zIndex: '1' }} />

            <section class="content" id="skills">
                <h1>Skills</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </section>
        </div>


    );
};

export default SectionSkills;