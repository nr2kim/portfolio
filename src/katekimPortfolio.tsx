import * as React from 'react';
import * as ReactDOM from 'react-dom';
// tslint:disable-next-line:no-import-side-effect
import './style.css';

const myMenu = {
    about: {
        kate:       'Name: Kate Kim\
                    \nMission statement: \
                    \nInterests: \
                    \n',
        education:  'University: University of Waterloo\
                    \n\tAttending from September 2015 to Present\
                    \n\tCourses:\
                    \n\t\tECE351 Compilers : \
                    \n',
        path:       ''
    },
    help: {
        about: 'Name: about\
                \nOptions: \
                \n\tkate\tBasic information of what you need to know about Kate Kim as a human being\
                \n\teducation\t\tGive brief explanation of Kate\'s education\
                \n\tpath\tKnow about what Kate\'s career path\
                \n',
        diff: 'Name: diff\
                \nOptions: \
                \n\tNo options available\
                \n',
        fetch: 'Name: fatch\
                \nOptions:\
                \n\texperiences\t\tShow previous work experiences\
                \n\tprojects\t\tFetch side projects\
                \n\tresume\tDownload Kate\'s resume\
                \n',
        contact: 'Name: contact\
                \nOptions:\
                \n\tNo options available\
                \n'
    },
    contact:    'Email: nr2kim@edu.uwaterloo.ca\
                \nPhone: (647) 447 - 2273\
                \n'
};

class KateKimPortfolio extends React.Component <any, any> {
    private mouseDownBinder;

    public constructor(props) {
        super(props);
        this.state = {
            stack: '>> Welcome to Kate Kim\'s Portfolio!\
                    \nusage: kate <commands> [<args>]\
                    \n\nThere are some useful commands used to explore this portfolio.\
                    \n\n\tabout\t\tGet information about Kate and her \
                    \n\tdiff\t\tShow what makes Kate Kim a strong candidate\
                    \n\tfetch\t\tGet work experiences, projects, etc\
                    \n\tcontact\t\tFetch Kate\'s contact information\
                    \n\nSee \'kate help <command>\' to read about a specific subcommand or concept.\n\n'
        };
        this.mouseDownBinder = (e: MouseEvent) => { this.handleMouseClick(e); };
    }

    public handleMouseClick(e: MouseEvent) {
        if (e.clientY > document.querySelector('#userField').getBoundingClientRect().top) {
            const inputField = document.querySelector('#userField') as HTMLInputElement;
            inputField.focus();
        }
    }

    public componentDidMount() {
        document.addEventListener('click', this.mouseDownBinder);
    }

    public componentWillUnmount() {
        document.removeEventListener('click', this.mouseDownBinder);
    }

    public handleEnter(e) {
        if (e.key !== 'Enter') { return; }
        const command = e.target.value.toString();
        // tslint:disable-next-line:prefer-const
        let currentStack = this.state.stack.concat(`>> ${command.toString()}\n`);
        e.target.value = '';
        const splitCommands = command.split(' ');
        if (splitCommands[0] === 'kate') {
            if (splitCommands.length === 1 ||
                splitCommands.length === 2 && splitCommands[1] === 'help') {
                currentStack = currentStack.concat(`usage: <command> <args>\n`);
            } else if (splitCommands.length === 2 && myMenu[splitCommands[1]]) {
                if (typeof(myMenu[splitCommands[1]]) === 'string') {
                    currentStack = currentStack.concat(myMenu[splitCommands[1]]);
                } else {
                    Object.keys(myMenu[splitCommands[1]]).forEach((key) => {
                        currentStack = currentStack.concat(myMenu[splitCommands[1]][key]);
                    });
                }
            } else if (splitCommands.length === 3 &&
                        myMenu[splitCommands[1]] &&
                        myMenu[splitCommands[1]][splitCommands[2]]) {
                currentStack = currentStack.concat(myMenu[splitCommands[1]][splitCommands[2]]);
            } else {
                currentStack = currentStack.concat('Command not found.\
                                                    \nType \'help\' to see all available commands\n');
            }
        } else if (command === '') {
            // Nothing;
        } else {
            currentStack = currentStack.concat('Command not found.\nType \'help\' to see all available commands\n');
        }

        this.setState({stack: currentStack});
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
