import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style.css';

class KateKimPortfolio extends React.Component <any, any> {
    public constructor(props) {
        super(props);
        this.state = {
            stack: ''
        };
    }

    public handleEnter(e) {
        if (e.key !== 'Enter') { return; }
        this.setState({ stack: this.state.stack.concat(`>>${e.target.value.toString()}\n`) });
        e.target.value = '';
    }

    public render() {
        return (
            <div>
                {this.state.stack}
                >><input type='text' id='userField' onKeyPress={(e) => this.handleEnter(e)}
                    style={{width: '35%', margin: '3% 0.5% 3% 0.5%', padding: '0.5%', display: 'inline-block'}} />
            </div>
        );
    }
}

ReactDOM.render(<KateKimPortfolio />, document.getElementById('ui'));
