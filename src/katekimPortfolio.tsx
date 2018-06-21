import * as React from 'react';
import * as ReactDOM from 'react-dom';
// tslint:disable-next-line:no-import-side-effect
import './style.css';

const myMenu = {
    about: {
        kate:       'Name: Kate Kim\
                    \nMission statement: One can change everyone\'s daily life\
                    \nInterests: Food fighter (ง •̀_•́)ง \
                    \nComment: Hi!\
                    \n',
        education:  '🎓 University of Waterloo 🎓\
                    \nAttending from Sept 2015: expected to graduate in June of 2020\
                    \n\t3B Honours in Computer Engineering, Honours Bachelor of Applied Science (BASc)\
                    \n\tCourses:\
                    \n\t\tECE351 Compilers : \
                    \n\n🎒 St. Joseph\'s Morrow Park High School 🎒\
                    \n',
        knows:      'Soft skills \t🍦 great teamwork skills - has been working in many agile teams\
                    \n\t\t💬 good communication skills - even training to talk to a cat\
                    \n\t\t🌱 learn quickly \
                    \n\t\t🔥 enthusiastic\
                    \n\t\t📦 Think outside of box\
                    \n'
    },
    help: {
        about: '💁 Name: about\
                \nOptions: \
                \n\tkate\t\tBasic information of what you need to know about Kate Kim as a human being\
                \n\teducation\tGive brief explanation of Kate\'s education\
                \n\tknows\t\tSee what Kate knows about\
                \n',
        fetch: '💁 Name: fatch\
                \nOptions:\
                \n\texperiences\tShow previous work experiences\
                \n\tprojects\tFetch side projects\
                \n\tresume\t\tDownload Kate\'s resume\
                \n',
        contact: '💁 Name: contact\
                \nOptions:\
                \n\tNo options available\
                \n'
    },
    fetch: {
        experiences:    '👩‍💻 Work Experience 👩‍💻\
                        \nWeb and Cloud Developer in Autodesk, Montreal Office\
                        \nFrom April, 2018 to August, 2018\
                        \n\t👉 Used React\
                        \nSoftware Engineer in Ford Motor Company, Kanata Office\
                        \nFrom September, 2017 to December, 2017\
                        \n\t👉 What did I do\
                        \n\t👉 What learned\
                        \nQA Automation Developer in IBM Corporation, Toronto Office\
                        \n\t👉 QAAAAA\
                        \nSoftware Engineer in MindsLab, Korea and New Jersey Offices\
                        \n\t👉 deep learning\
                        \n',
        projects:       '📚 Side Projects 📚\
                        \nCloud management system\
                        \nFrom June, 2018 to Present\
                        \n\t🔍 Java application with swings library for UI\
                        \n',
        resume:         ''
    },
    contact:    '✉️\tnr2kim@edu.uwaterloo.ca\
                \n📞\t(647) 447 - 2273\
                \nGithub\thttps://github.com/nr2kim\
                \n'
};

class KateKimPortfolio extends React.Component <any, any> {
    private mouseDownBinder;
    private end;
    private stackedCommands;
    private upCount;

    public constructor(props) {
        super(props);
        this.state = {
            stack: '>> Welcome to Kate Kim\'s Portfolio!\
                    \n\nusage: kate <commands> [<args>]\
                    \n\nThere are some useful commands used to explore this portfolio.\
                    \n\tabout\t\tGet basic information about Kate\
                    \n\tfetch\t\tGet work experiences, projects, etc\
                    \n\tcontact\t\tFetch Kate\'s contact information\
                    \n\nSee \'kate help <command>\' to read about a specific subcommand or concept.\n\n'
        };
        this.mouseDownBinder = (e: MouseEvent) => { this.handleMouseClick(e); };
        this.stackedCommands = [];
        this.upCount = 0;
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

    public componentDidUpdate() {
        this.end.scrollIntoView({ behavior: 'smooth'});
    }

    public handleEnter(e) {
        if (e.key !== 'Enter') { return; }
        const command = e.target.value.toString();
        this.stackedCommands.push(command);
        this.upCount = 0;
        // tslint:disable-next-line:prefer-const
        let currentStack = this.state.stack.concat(`>> ${command.toString()}\n\n`);
        e.target.value = '';
        const splitCommands = command.split(' ');
        if (splitCommands[0] === 'kate') {
            if (splitCommands.length === 1) {
                currentStack = currentStack.concat(`usage: <command> <args>\n\n`);
            } else if (splitCommands.length === 2 && myMenu[splitCommands[1]]) {
                if (typeof(myMenu[splitCommands[1]]) === 'string') {
                    currentStack = currentStack.concat(`${myMenu[splitCommands[1]]}\n`);
                } else {
                    Object.keys(myMenu[splitCommands[1]]).forEach((key) => {
                        currentStack = currentStack.concat(`${myMenu[splitCommands[1]][key]}\n`);
                    });
                }
            } else if (splitCommands.length === 3 &&
                        myMenu[splitCommands[1]] &&
                        myMenu[splitCommands[1]][splitCommands[2]]) {
                currentStack = currentStack.concat(`${myMenu[splitCommands[1]][splitCommands[2]]}\n`);
            } else {
                currentStack = currentStack.concat('Command not found.\
                                                    \nType \'help\' to see all available commands\n\n');
            }
        } else if (command === '') {
            // Nothing
        } else {
            currentStack = currentStack.concat('Command not found.\nType \'help\' to see all available commands\n\n');
        }

        this.setState({stack: currentStack});
    }

    public handleArrowUpDown(e) {
        const inputField = document.querySelector('#userField') as HTMLInputElement;
        if (e.keyCode === 38) { // 38: up, 40: down
            if (this.upCount < this.stackedCommands.length) {
                this.upCount++;
            }
        } else if (e.keyCode === 40) {
            if (this.upCount > 0) {
                this.upCount--;
            }
        } else {
            return;
        }
        const to = Math.min(Math.max(this.stackedCommands.length - this.upCount, 0), this.stackedCommands.length);
        // tslint:disable-next-line:prefer-conditional-expression
        if (to === this.stackedCommands.length) {
            inputField.value = '';
        } else {
            inputField.value = this.stackedCommands[to];
        }
    }
    public render() {
        return (
            <div>
                {this.state.stack}
                >> <input type='text' id='userField' onKeyPress={(e) => this.handleEnter(e)}
                    onKeyDown={(e) => this.handleArrowUpDown(e)}
                    ref={(el) => { this.end = el; } } />
            </div>
        );
    }
}

ReactDOM.render(<KateKimPortfolio />, document.getElementById('ui'));
