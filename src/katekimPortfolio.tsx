import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Typing from 'react-typing-animation';

// tslint:disable-next-line:no-import-side-effect
import './style.css';

import { AboutEducation } from './aboutEducation';
import { AboutKate } from './aboutKate';
import { AboutKnows } from './aboutKnows';
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

    public constructor(props) {
        super(props);
        this.state = {
            stack: [
                <Typing speed={5}>
                     >> Welcome to Kate Kim's Portfolio!
                    <br /><br />usage: kate commands [args]
                    <br /><br />There are some useful commands used to explore this portfolio.
                    <br />&emsp;about&emsp;&emsp;Get basic information about Kate
                    <br />&emsp;fetch&emsp;&emsp;Get work experiences, projects, etc
                    <br />&emsp;contact&emsp;&emsp;Fetch Kate's contact information
                    <br /><br />See 'kate help command' to read about a specific subcommand or concept.<br /><br />
                </Typing>]
        };
        this.mouseDownBinder = (e: MouseEvent) => { this.handleMouseClick(e); };
        this.stackedCommands = [];
        this.upCount = 0;

        this.myMenu = {
            about: {
                kate:       <AboutKate />,
                education:  <AboutEducation />,
                knows:      <AboutKnows />
            },
            help: {
                about:      <HelpAbout />,
                fetch:      <HelpFetch />,
                contact:    <HelpContact />
            },
            fetch: {
                experiences:    <FetchExperiences />,
                projects:       <FetchProjects />,
                resume:         <FetchResume />
            },
            contact:    <Contact />
        };
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
        e.target.value = '';
        this.stackedCommands.push(command);
        this.upCount = 0;

        this.setState((prevState) => ({ stack:
            [...prevState.stack, <div>>> {command.toString()}<br /><br /></div>]}));
        let newResponse = [];

        const splitCommands = command.split(' ');
        if (splitCommands[0] === 'kate') {
            if (splitCommands.length === 1) {
                newResponse = [...newResponse,
                               <Typing speed={5}>
                                    usage: kate command args<br /><br />
                                </Typing>];
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
                newResponse = [<Typing speed={10}>Command not found.
                                    <br />Type 'help' to see all available commands<br /><br /></Typing>];
            }
        } else if (command === '') {
            // Nothing
        } else {
            newResponse = [<Typing speed={10}>Command not found.
                                    <br />Type 'help' to see all available commands<br /><br /></Typing>];
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
                >> <input type='text' id='userField' onKeyPress={(e) => this.handleEnter(e)}
                    onKeyDown={(e) => this.handleArrowUpDown(e)}
                    ref={(el) => { this.end = el; } } />
            </div>
        );
    }
}

ReactDOM.render(<KateKimPortfolio />, document.getElementById('ui'));
