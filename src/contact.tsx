import * as React from 'react';
import './style.css';

export class Contact extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div>
                ✉️&emsp;nr2kim@edu.uwaterloo.ca
                <br />📞&emsp;(647) 447 - 2273
                <br />Github&emsp;https://github.com/nr2kim
                <br />Personal Website&emsp;ece.uwaterloo.ca/~nr2kim/
                <br />
            </div>
        );
    }
}
