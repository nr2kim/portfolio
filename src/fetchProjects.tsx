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
            <Typing speed={5} key='fp'
             onFinishedTyping={() => {this.props.emitter.emit('finishedTyping'); }}>
                    📚 Side Projects 📚
                        <br />Cloud management system
                        <br />From June, 2018 to Present
                        <br />&emsp;🔍 Java application with swings library for UI
                        <br />
            </Typing>
        );
    }
}
