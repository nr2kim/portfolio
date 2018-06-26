import * as React from 'react';
import Typing from 'react-typing-animation';

// tslint:disable-next-line:no-import-side-effect
import './style.css';

export class HelpContact extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Typing speed={5}>
                💁 Name: contact
                <br />Options:
                <br />&emsp;No options available
                <br />
            </Typing>
        );
    }
}
