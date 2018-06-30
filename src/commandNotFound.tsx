import * as React from 'react';
import Typing from 'react-typing-animation';
// tslint:disable-next-line:no-import-side-effect
import './style.css';

export class CommandNotFound extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        const commandAngleBracketed = '<command>';
        const argsAngleBracketed = '<args>';

        return (
            <Typing speed={5} key='cnf'
             onFinishedTyping={() => {this.props.emitter.emit('finishedTyping'); }}>
                usage: kate {commandAngleBracketed} [{argsAngleBracketed}]<br /><br />
                Command not found.
                <br />Type 'help' to see all available commands<br /><br />
            </Typing>
        );
    }
}
