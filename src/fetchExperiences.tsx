import * as React from 'react';
import Typing from 'react-typing-animation';

// tslint:disable-next-line:no-import-side-effect
import './style.css';

export class FetchExperiences extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Typing speed={5}>
                👩‍💻 Work Experience 👩‍💻
                        <br />Web and Cloud Developer in Autodesk, Montreal Office
                        <br />From April, 2018 to August, 2018
                        <br />&emsp;👉 Used React
                        <br />Software Engineer in Ford Motor Company, Kanata Office
                        <br />From September, 2017 to December, 2017
                        <br />&emsp;👉 What did I do
                        <br />&emsp;👉 What learned
                        <br />QA Automation Developer in IBM Corporation, Toronto Office
                        <br />&emsp;👉 QAAAAA
                        <br />Software Engineer in MindsLab, Korea and New Jersey Offices
                        <br />&emsp;👉 deep learning
                        <br />
            </Typing>
        );
    }
}
