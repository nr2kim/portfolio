import * as React from 'react';
import { Component } from './component';

import './style.css';

const PROJECT_MAPPING = {
    TriPlanner: 'https://github.com/nr2kim/tempTriPlanner',
    CloudManagementSystem: 'https://github.com/nr2kim/Cloudeer-JavaFX'
}

export class FetchProjects extends Component {
    public render() {
        return (
            <div>
                <div className='section'>Kate's Side Projects</div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div>
                    <a href={PROJECT_MAPPING.TriPlanner} target="_blank"> TriPlanner </a>
                    <div className='subSectionBody'>
                        Duration: From May, 2019 to Present
                        <br />&emsp;🔍 Creating a website that give recommendations according to their preferences and helps users to plan and record their trips with their friends easily.
                        <br />&emsp;🔍 Using Google Maps and Places APIs to get information about attractions, operation hours and transportation.
                        <br />&emsp;🔍 Gaining great user experience and user interface skills.
                    </div>
                </div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div>
                    <a href={PROJECT_MAPPING.TriPlanner} target="_blank"> Cloud management system </a>
                    <div className='subSectionBody'>
                        Duration: From July, 2018 to September, 2018
                        <br />&emsp;🔍 Creating a management system for cloud storages
                                     for easier access, handle, and search in one application.
                        <br />&emsp;🔍 Exposed in Java UI frameworks, such as swings and awt
                                     and open source APIs of Dropbox, GoogleDrive, and OneDrive.
                        <br />&emsp;🔍 Enhanced leadership and project management skills as directing the project.
                    </div>
                </div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> Digital Image Processing
                    <div className='subSectionBody'>
                        Duration: From January, 2018 to April, 2018
                        <br />&emsp;🔍 Implemented Kirsch edge detector algorithm in VHDL,
                                     which detects edges of an image by brightness of nearby pixels of each pixel.
                        <br />&emsp;🔍 Calculated the direction of edges
                                     using convolution table and derivative functions.
                        <br />&emsp;🔍 Improved collaboration and time management skills with tight deadlines.
                    </div>
                </div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> VHDL Parser
                    <div className='subSectionBody'>
                        Duration: From January, 2018 to April, 2018
                        <br />&emsp;🔍 Parsed VHDL code to F and W, simple intermediate languages using Java on Eclipse
                        <br />&emsp;🔍 Displayed parsing results with logic gates
                                     and SVG by setting nodes and edges for each formula
                        <br />&emsp;🔍 Learned about compiler concepts and improved object-oriented programming skills
                    </div>
                </div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> WebGL Website
                    <div className='subSectionBody'>
                        Duration: From January, 2018 to March, 2018
                        <br />&emsp;🔍 Created scenes and 3D rendering characters and animals using Three.js.
                        <br />&emsp;🔍 Learned React and Redux for faster render and better state management.
                    </div>
                </div>
            </div>
        );
    }
}
