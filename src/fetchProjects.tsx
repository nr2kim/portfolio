import * as React from 'react';
import Typing from 'react-typing-animation';

// tslint:disable-next-line:no-import-side-effect
import './style.css';

export class FetchProjects extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Typing speed={1} key='fp'
             onFinishedTyping={() => {this.props.emitter.emit('finishedTyping'); }}>
                    <div className='sectionHeading'>Kate's Side Projects</div>
                    <div className='subSectionHeading'>Cloud management system</div>
                    <div className='subSectionBody'>
                        Duration: From May, 2018 to Present
                        <br />&emsp;🔍 Creating a management system for cloud storages
                                     for easier access, handle, and search in one application.
                        <br />&emsp;🔍 Exposed in Java UI frameworks, such as swings and awt
                                     and open source APIs of Dropbox, GoogleDrive, and OneDrive.
                        <br />&emsp;🔍 Enhanced leadership and project management skills as directing the project.
                    </div>
                    <div className='subSectionHeading'>Connect-4 Online</div>
                    <div className='subSectionBody'>
                        Duration: From June, 2018 to Present
                        <br />&emsp;🔍 Developing the web version of a board game, Connect-4, in a group of 2.
                        <br />&emsp;🔍 Experiencing the whole project workflow from start to the end,
                                     including server-side and UI-side.
                        <br />&emsp;🔍 Improving high-level designing, estimating, and planning skills.
                    </div>
                    <div className='subSectionHeading'>Digital Image Processing</div>
                    <div className='subSectionBody'>
                        Duration: From January, 2018 to April, 2018
                        <br />&emsp;🔍 Implemented Kirsch edge detector algorithm in VHDL,
                                     which detects edges of an image by brightness of nearby pixels of each pixel.
                        <br />&emsp;🔍 Calculated the direction of edges
                                     using convolution table and derivative functions.
                        <br />&emsp;🔍 Improved collaboration and time management skills with tight deadlines.
                    </div>
                    <div className='subSectionHeading'>VHDL Parser</div>
                    <div className='subSectionBody'>
                        Duration: From January, 2018 to April, 2018
                        <br />&emsp;🔍 Parsed VHDL code to F and W, simple intermediate languages using Java on Eclipse
                        <br />&emsp;🔍 Displayed parsing results with logic gates
                                     and SVG by setting nodes and edges for each formula
                        <br />&emsp;🔍 Learned about compiler concepts and improved object-oriented programming skills
                    </div>
                    <div className='subSectionHeading'>WebGL Website</div>
                    <div className='subSectionBody'>
                        Duration: From January, 2018 to March, 2018
                        <br />&emsp;🔍 Created scenes and 3D rendering characters and animals using Three.js.
                        <br />&emsp;🔍 Learned React and Redux for faster render and better state management.
                    </div>
            </Typing>
        );
    }
}
