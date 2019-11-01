import * as React from 'react';
import { Component } from './component';

import './style.css';

export class FetchResume extends Component {
    public render() {
        return (
            <div>
                <div className='section'>Kate's Resume</div>
                <a href={window.location + 'resources/Resume_KateKim.pdf'} target="_blank">
                    download [<span className='bold'>Resume_KateKim.pdf</span>] 98 KB
                </a>
            </div>
        );
    }
}
