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
            <div>
                usage: <span className='limeColor'>kate {commandAngleBracketed} [{argsAngleBracketed}]</span>
                <br /><br />
                Command not found.
                <br />Type <span className='limeColor'>kate help</span> to see all available commands<br /><br />
            </div>
        );
    }
}
