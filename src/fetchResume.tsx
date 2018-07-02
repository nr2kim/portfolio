import * as React from 'react';

// tslint:disable-next-line:no-import-side-effect
import './style.css';

export class FetchResume extends React.Component <any, any> {
    private request;

    public constructor(props) {
        super(props);
        this.state = {
            downloading: 0
        };
    }

    public componentDidMount() {
        window.open('../resources/Resume_KateKim.pdf');
    }

    public render() {
        return (
            <a href='../resources/Resume_KateKim.pdf' download>
                download [<span className='bold'>../resources/Resume_KateKim.pdf</span>] 98 KB
            </a>
        );
    }
}
