import * as React from 'react';
import Typing from 'react-typing-animation';
// tslint:disable-next-line:no-import-side-effect
import './style.css';

export class AboutKate extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Typing speed={5} onFinishedTyping={this.props.scroll}>
                    Name: Kate Kim
                    <br />Mission statement: One can change everyone's daily life
                    <br />Interests: Food fighter (ง •̀_•́)ง
                    <br />Comment: Hi!
                    <br />
            </Typing>
        );
    }
}
