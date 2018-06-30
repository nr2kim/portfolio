import * as React from 'react';
import Typing from 'react-typing-animation';

// tslint:disable-next-line:no-import-side-effect
import './style.css';

export class HelpAbout extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Typing speed={5} key='ha'
             onFinishedTyping={() => {this.props.emitter.emit('finishedTyping'); }}>
                    💁 Name: about
                    <br />Options:
                    <br />&emsp;kate
                        &emsp;&emsp;Basic information of what you need to know about Kate Kim as a human being
                    <br />&emsp;education&emsp;Give brief explanation of Kate's education
                    <br />&emsp;knows&emsp;&emsp;See what Kate knows about
                    <br />
            </Typing>
        );
    }
}
