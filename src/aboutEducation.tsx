import * as React from 'react';
import Typing from 'react-typing-animation';
// tslint:disable-next-line:no-import-side-effect
import './style.css';

export class AboutEducation extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Typing speed={5}>
                    🎓 University of Waterloo 🎓
                    <br />Attending from Sept 2015: expected to graduate in June of 2020
                    <br />&emsp;3B Honours in Computer Engineering, Honours Bachelor of Applied Science (BASc)
                    <br />&emsp;Courses:
                    <br />&emsp;&emsp;ECE351 Compilers :
                    <br /><br />🎒 St. Joseph's Morrow Park High School 🎒
                    <br />
            </Typing>
        );
    }
}
