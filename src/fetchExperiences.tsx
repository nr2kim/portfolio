import * as React from 'react';
import { Component } from './component';

import './style.css';

export class FetchExperiences extends Component {
    public render() {
        return (
            <div>
                <div className='section'>Kate's Work Experiences</div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> Firmware Features Engineer in Cisco Meraki
                    <div className='subSectionBody'>
                        Duration: From January, 2019 to April, 2019
                        <br />location: San Francisco, United States
                        <br />&emsp;👉 Analyzed and tested network techniques for measuring capacity of the bottleneck link on WAN path and implemented a configurable daemon process based on these techniques in C++.
                        <br />&emsp;👉 Created patches for bugs on open-source libraries such as HPing3 and cURL.
                        <br />&emsp;👉 Obtained better teamwork and thinking-outside-the-box skills.
                    </div>
                </div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> Web and Cloud Developer in Autodesk
                    <div className='subSectionBody'>
                        Duration: From April, 2018 to August, 2018
                        <br />location: Montreal, Canada
                        <br />&emsp;👉 Deeper understanding of React.js, its state and lifecycle, and MobX.
                        <br />&emsp;👉 Creating responsive and interactive web components,
                                     unit-testing using mocha, chai, enzyme, and sinon.
                        <br />&emsp;👉 Using Autodesk infrastructure software to manage data faster and in a structural way.
                        <br />&emsp;👉 Became better on handling challenges and not being afraid of asking around.
                    </div>
                </div>
                <div className='subSection'  onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> Software Engineer in Ford Motor Company
                    <div className='subSectionBody'>
                        Duration: From September, 2017 to December, 2017
                        <br />location: Kanata, Canada
                        <br />&emsp;👉Designed and implemented location-based services
                                     for next generation of Ford navigation system.
                        <br />&emsp;👉 Excellent serial programming experience
                                     with GPS to calculate precise location of a vehicle.
                        <br />&emsp;👉 Developed prototype driver for I2C bus
                                     to obtain gyroscope and accelerometer data in C++.
                        <br />&emsp;👉 Created unit-tests with Google test and Google mocks
                                     and experienced in test driven development.
                        <br />&emsp;👉 Obtained better teamwork and communication skills in an agile environment.
                    </div>
                </div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> QA Automation Developer in IBM Corporation
                    <div className='subSectionBody'>
                        Duration: From January, 2017 to April, 2017
                        <br />location: Toronto, Canada
                        <br />&emsp;👉Became familiar to Jenkins, its plug-ins,
                                     and Groovy script for orienting Jenkins jobs.
                        <br />&emsp;👉 Created a ‘Dashboard’ which uses Jenkins API
                                     to get test results’ information in JSON format and parses
                        and inserts into the corresponding database using RESTful APIs in Python.
                        <br />&emsp;👉 Improved attention-to-detail skill to assure quality of the product and automation.
                    </div>
                </div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> Software Engineer in MindsLab
                    <div className='subSectionBody'>
                        Duration: From May, 2016 to September, 2016
                        <br />location: Gyeonggi, Korea and New Jersey, USA
                        <br />&emsp;👉Handled Big Data for supervised deep learning programs;
                                     Speech-to-text and Text-analysis.
                        <br />&emsp;👉 Created an interactive web application for the company conference using Bootstrap.
                    </div>
                </div>
            </div>
        );
    }
}
