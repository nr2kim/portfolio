import * as React from 'react';
import Typing from 'react-typing-animation';

// tslint:disable-next-line:no-import-side-effect
import './style.css';

export class HelpAbout extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        const optionsAngleBracketed = '<options>';

        return (
            <Typing speed={1} key='ha'
             onFinishedTyping={() => {this.props.emitter.emit('finishedTyping'); }}>
                <div style={{ display: 'block', width: '90%', margin: '1% 2%'}}>
                    <span className='bold'>usage:
                         <span className='limeColor'> kate about {optionsAngleBracketed}</span></span>
                    <div className='subSectionHeading'>options:</div>
                    <div style={{ display: 'block', width: '90%', margin: '0 4%'}}>
                        <div style={{ display: 'inline-block', width: '10%'}}>
                            <span className='limeColor'>kate</span>
                        </div>
                        <div style={{display: 'inline-block', width: '80%'}}>
                            Basic information of what you need to know about Kate Kim as a human being
                        </div>
                    </div>
                    <div style={{ display: 'block', width: '90%', margin: '0 4%'}}>
                        <div style={{ display: 'inline-block', width: '10%'}}>
                            <span className='limeColor'>education</span>
                        </div>
                        <div style={{display: 'inline-block', width: '80%'}}>
                            Give brief explanation of Kate's education
                        </div>
                    </div>
                    <div style={{ display: 'block', width: '90%', margin: '0 4%'}}>
                        <div style={{ display: 'inline-block', width: '10%'}}>
                            <span className='limeColor'>knows</span>
                        </div>
                        <div style={{display: 'inline-block', width: '80%'}}>
                            See what Kate knows about
                        </div>
                    </div>
                </div>
            </Typing>
        );
    }
}
