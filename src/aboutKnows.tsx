import * as React from 'react';
import Typing from 'react-typing-animation';
// tslint:disable-next-line:no-import-side-effect
import './style.css';

export class AboutKnows extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Typing speed={5}>
                    Soft skills&emsp;🍦 great teamwork skills - has been working in many agile teams
                    <br />&emsp;&emsp;💬 good communication skills - even training to talk to a cat
                    <br />&emsp;&emsp;🌱 learn quickly
                    <br />&emsp;&emsp;🔥 enthusiastic
                    <br />&emsp;&emsp;📦 Think outside of box
                    <br />
            </Typing>
        );
    }
}
