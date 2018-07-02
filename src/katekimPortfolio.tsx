import { EventEmitter } from 'fbemitter';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Typing from 'react-typing-animation';
// tslint:disable-next-line:no-import-side-effect
import './style.css';

import { AboutEducation } from './aboutEducation';
import { AboutKate } from './aboutKate';
import { AboutKnows } from './aboutKnows';
import { CommandNotFound } from './commandNotFound';
import { Contact } from './contact';
import { FetchExperiences } from './fetchExperiences';
import { FetchProjects } from './fetchProjects';
import { FetchResume } from './fetchResume';
import { HelpAbout } from './helpAbout';
import { HelpContact } from './helpContact';
import { HelpFetch } from './helpFetch';

class KateKimPortfolio extends React.Component <any, any> {
    private mouseDownBinder;
    private end;
    private stackedCommands;
    private upCount;
    private myMenu;
    private emitter;

    public constructor(props) {
        super(props);
        this.emitter = new EventEmitter();
        this.state = {
            stack: [],
            displayInput: false
        };
        this.mouseDownBinder = (e: MouseEvent) => { this.handleMouseClick(e); };
        this.stackedCommands = [];
        this.upCount = 0;

        this.myMenu = {
            about: {
                kate:       <AboutKate emitter={this.emitter} key='aboutKate' />,
                education:  <AboutEducation emitter={this.emitter} key='aboutEducation' />,
                knows:      <AboutKnows emitter={this.emitter} key='aboutKnows' />
            },
            help: {
                about:      <HelpAbout emitter={this.emitter} key='helpAbout' />,
                fetch:      <HelpFetch emitter={this.emitter} key='helpFetch' />,
                contact:    <HelpContact emitter={this.emitter} key='helpContact' />
            },
            fetch: {
                experiences:    <FetchExperiences emitter={this.emitter} key='fetchExperience' />,
                projects:       <FetchProjects emitter={this.emitter} key='fetchProjects' />,
                resume:         <FetchResume emitter={this.emitter} key='fetchResume'/>
            },
            contact:    <Contact emitter={this.emitter} key='contact' />,
            commandNotFound: <CommandNotFound emitter={this.emitter} key='commandNotFound' />
        };
    }

    public handleMouseClick(e: MouseEvent) {
        if (e.clientY > document.querySelector('#userField').getBoundingClientRect().top) {
            const inputField = document.querySelector('#userField') as HTMLInputElement;
            inputField.focus();
        }
    }

    public handleFinishedTyping() {
        this.setState({ displayInput: true });
        const inputField = document.querySelector('#userField') as HTMLInputElement;
        inputField.focus();
        this.end.scrollIntoView({ behavior: 'smooth'});
    }
    public componentDidMount() {
        document.addEventListener('click', this.mouseDownBinder);
        this.emitter.addListener('finishedTyping', () => this.handleFinishedTyping());
        const commandAngleBracketed = '<command>';
        const optionsAngleBracketed = '<args>';
        this.setState({
            stack: [
                <Typing speed={5} key='introMessage'
                 onFinishedTyping={() => {this.emitter.emit('finishedTyping'); }} >
                    >> 🙌🏻 Welcome to Kate Kim's Portfolio! 🙌🏻
                    <br /><br />usage: <span className='limeColor'>
                        kate {commandAngleBracketed} [{optionsAngleBracketed}]</span>
                    <br /><br />There are some useful commands used to explore this portfolio.
                    <br />&emsp;
                    <span className='limeColor'>about</span>&emsp;&emsp;&emsp;&emsp;Get basic information about Kate
                    <br />&emsp;
                    <span className='limeColor'>fetch</span>&emsp;&emsp;&emsp;&emsp;Get work experiences, projects, etc
                    <br />&emsp;<span className='limeColor'>contact</span>&emsp;&emsp;Fetch Kate's contact information
                    <br /><br />
                        See <span className='limeColor'>
                                kate help
                            </span> or <span className='limeColor'>
                                kate help {commandAngleBracketed}
                            </span> to read about a specific subcommand or concept.
                    <br /><br />
                </Typing>
            ]
        });
    }

    public componentWillUnmount() {
        document.removeEventListener('click', this.mouseDownBinder);
    }

    public componentDidUpdate() {
        this.end.scrollIntoView({ behavior: 'smooth'});
    }

    public handleEnter(e) {
        if (e.key !== 'Enter') { return; }
        this.setState({ displayInput: false });
        const command = e.target.value.toString();
        e.target.value = '';
        this.stackedCommands.push(command);
        this.upCount = 0;

        this.setState((prevState) => ({ stack:
            [...prevState.stack, <div>>> {command.toString()}<br /><br /></div>]}));
        let newResponse = [];

        const splitCommands = command.split(' ');
        if (splitCommands[0] === 'kate') {
            if (splitCommands.length === 1) {
                newResponse = [this.myMenu.commandNotFound];
            } else if (splitCommands.length === 2 && this.myMenu[splitCommands[1]]) {
                if (typeof(this.myMenu[splitCommands[1]]) === 'string') {
                    newResponse = [...newResponse, <div>{this.myMenu[splitCommands[1]]}<br /></div>];
                } else {
                    Object.keys(this.myMenu[splitCommands[1]]).forEach((key) => {
                        newResponse = [...newResponse, <div>
                            {this.myMenu[splitCommands[1]][key]}<br /></div>];
                    });
                }
            } else if (splitCommands.length === 3 &&
                        this.myMenu[splitCommands[1]] &&
                        this.myMenu[splitCommands[1]][splitCommands[2]]) {
                            newResponse = [...newResponse,
                                           <div>{this.myMenu[splitCommands[1]][splitCommands[2]]}<br /></div>];
            } else {
                newResponse = [this.myMenu.commandNotFound];
            }
        } else if (command === '') {
            // Nothing
        } else {
            newResponse = [this.myMenu.commandNotFound];
        }
        this.setState((prevState) => ({ stack: [...prevState.stack, newResponse]}));
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
                <div style={{display: (this.state.displayInput === true ? 'block' : 'none')}} >
                >> <input type='text' id='userField' onKeyPress={(e) => this.handleEnter(e)}
                    onKeyDown={(e) => this.handleArrowUpDown(e)} ref={(el) => { this.end = el; } } />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<KateKimPortfolio />, document.getElementById('ui'));
