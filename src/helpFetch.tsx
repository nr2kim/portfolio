import * as React from 'react';
import Typing from 'react-typing-animation';

// tslint:disable-next-line:no-import-side-effect
import './style.css';

export class HelpFetch extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Typing speed={1} key='hf'
             onFinishedTyping={() => {this.props.emitter.emit('finishedTyping'); }}>
                💁 Name: fatch
                <br />Options:
                <br />&emsp;experiences&emsp;Show previous work experiences
                <br />&emsp;projects&emsp;Fetch side projects
                <br />&emsp;resume&emsp;&emsp;Download Kate's resume
                <br />
            </Typing>
        );
    }
}
