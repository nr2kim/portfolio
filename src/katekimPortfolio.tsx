import * as React from 'react';
import * as ReactDOM from 'react-dom';
// tslint:disable-next-line:no-import-side-effect
import './style.css';

const myMenu = new Map([
    ['about', 'Name: Kate Kim'],
    ['help about', 'Name: about\nOptions: Kate\n']
]);

class KateKimPortfolio extends React.Component <any, any> {
    public constructor(props) {
        super(props);
        this.state = {
            stack: '>> Welcome to Kate Kim\'s Portfolio!\
                    \n\nThere are some useful commands used to explore this portfolio.\
                    \n\n\tabout\t\tAbout Kate, University of Waterloo\
                    \n\tdiff\t\tShow what makes Kate Kim a strong candidate\
                    \n\tfetch\t\tGet work experiences, projects, etc\
                    \n\tcontact\t\tFetch Kate\'s contact information\
                    \n\nSee \'help <command>\' to read about a specific subcommand or concept.\n\n'
        };
    }

    public handleEnter(e) {
        if (e.key !== 'Enter') { return; }
        const command = e.target.value.toString();
        let currentStack = this.state.stack.concat(`>> ${command.toString()}\n`);
        e.target.value = '';
        const splitCommands = command.split(' ');
        switch (splitCommands[0]) {
            case 'help':
                if (splitCommands[1] === 'about') {
                    this.setState({ stack: currentStack.concat(myMenu.get('help about')) });
                }
            default:
        }
    }

    public render() {
        return (
            <div>
                {this.state.stack}
                >> <input type='text' id='userField' onKeyPress={(e) => this.handleEnter(e)} />
            </div>
        );
    }
}

ReactDOM.render(<KateKimPortfolio />, document.getElementById('ui'));
