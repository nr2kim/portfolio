import * as React from 'react';
import './style.css';

export class HelpContact extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div style={{ display: 'block', width: '90%', margin: '1% 2%'}}>
                    <span className='bold'>usage: <span className='limeColor'>kate contact</span></span>
                    <div className='subSectionHeading'>options:</div>
                    <div style={{ display: 'block', width: '90%', margin: '0 4%'}}>
                        No options available
                    </div>
                </div>
            </div>
        );
    }
}
