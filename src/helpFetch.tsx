import * as React from 'react';
import './style.css';

export class HelpFetch extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        const optionsAngleBracketed = '<options>';

        return (
            <div>
                <div style={{ display: 'block', width: '90%', margin: '1% 2%'}}>
                    <span className='bold'>usage:
                         <span className='limeColor'> kate fetch {optionsAngleBracketed}</span></span>
                    <div className='subSection'>options:</div>
                    <div style={{ display: 'block', width: '90%', margin: '0 4%'}}>
                        <div className='helpOptions'>
                            <span className='limeColor'>experiences</span>
                        </div>
                        <div style={{display: 'inline-block', width: '80%'}}>
                            Show previous work experiences and what Kate has learned
                        </div>
                    </div>
                    <div style={{ display: 'block', width: '90%', margin: '0 4%'}}>
                        <div className='helpOptions'>
                            <span className='limeColor'>projects</span>
                        </div>
                        <div style={{display: 'inline-block', width: '80%'}}>
                            Fetch side projects
                        </div>
                    </div>
                    <div style={{ display: 'block', width: '90%', margin: '0 4%'}}>
                        <div className='helpOptions'>
                            <span className='limeColor'>resume</span>
                        </div>
                        <div style={{display: 'inline-block', width: '80%'}}>
                            Download Kate's resume
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
