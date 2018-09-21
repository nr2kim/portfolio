import * as React from 'react';
import './style.css';

export class FetchResume extends React.Component <any, any> {
    private request;

    public constructor(props) {
        super(props);
        this.state = {
            downloading: 0
        };
    }

    public render() {
        return (
            <div>
                <a href='../resources/Resume_KateKim.pdf' target="_blank" key={this.props.key}>
                    download [<span className='bold'>Resume_KateKim.pdf</span>] 98 KB
                </a>
                <br /><br />
            </div>
        );
    }
}
