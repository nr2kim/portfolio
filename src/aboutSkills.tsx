import * as React from 'react';
import './style.css';

export class AboutSkills extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public onClickHeading(e: any) {
        e.preventDefault();
        for(let i = 0; i < e.target.children.length; i++) {
            if (e.target.children.item(i).id == "openClose") {
                if (e.target.children.item(i).innerHTML == " 🔼 ") {
                    e.target.children.item(i).innerHTML = " 🔽 ";
                } else {
                    e.target.children.item(i).innerHTML = " 🔼 ";
                }
            } else if (e.target.children.item(i).style.display === "") {
                e.target.children.item(i).style.display = "block";
            } else {
                e.target.children.item(i).style.display = "";
            }
        }
    }

    public render() {
        return (
            <div>
                <div className='section'>Kate's Brain</div>
                <div className='subSection'onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> Soft Skills
                    <div className='subSectionBody'>
                        👪 great teamwork skills - has been working in many agile teams
                        <br />💬 good communication skills - even trained to talk to a cat
                        <br />🌱 learn quickly
                        <br />🔥 enthusiastic
                        <br />📦 Think outside of box
                    </div>
                </div>
                <div className="subSection" onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> Technical Skills
                    <div className='subSectionBody'>
                        <div className='subSectionBodyCategory'>
                            Languages
                            <div className='subSectionBodySubCategory'>
                                C, C++, Java, Python, JavaScript, TypeScript, Apache Groovy, ARM assembly language, HTML + CSS
                            </div>
                        </div>
                        <div className='subSectionBodyCategory'>
                            Frameworks/Libraries
                            <div className='subSectionBodySubCategory'>
                                React.js, Node.js, JavaFX, awt, Swings, Three.js (OpenGL), Webpack, npm, mocha, chai, sinon, Google Mocks, Google Test
                            </div>
                        </div>
                        <div className='subSectionBodyCategory'>
                            Tools
                            <div className='subSectionBodySubCategory'>
                                Git, Android Studio, Eclipse, PowerShell, MATLAB, AutoCAD, SolidWorks
                            </div>
                        </div>
                        <div className='subSectionBodyCategory'>
                            Hardware
                            <div className='subSectionBodySubCategory'>
                                FPGA, Arduino
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
