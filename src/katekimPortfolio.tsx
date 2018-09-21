import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Typing from 'react-typing-animation';

import './style.css';

import { AboutEducation } from './aboutEducation';
import { AboutKate } from './aboutKate';
import { AboutSkills } from './aboutSkills';
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
    private numElement;

    public constructor(props) {
        super(props);
        this.mouseDownBinder = (e: MouseEvent) => { this.handleMouseClick(e); };
        this.stackedCommands = [];
        this.upCount = 0;

        this.myMenu = {
            about: {
                kate:       <AboutKate />,
                education:  <AboutEducation />,
                skills:      <AboutSkills />
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
            contact:    <Contact />,
            commandNotFound: <CommandNotFound />
        };

        this.state = {
            stack: []
        }
    }

    public handleMouseClick(e: MouseEvent) {
        if (e.clientY > document.querySelector('#userField').getBoundingClientRect().top) {
            const inputField = document.querySelector('#userField') as HTMLInputElement;
            inputField.focus();
        }
    }

    public componentDidUpdate() {
            this.end.scrollIntoView({ behavior: 'smooth'});
    }

    public componentDidMount() {
        document.addEventListener('click', this.mouseDownBinder);
        this.numElement++;
    }

    public componentWillUnmount() {
        document.removeEventListener('click', this.mouseDownBinder);
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

        const splitCommands = command.trim().split(' ');
        if (splitCommands[0] === 'kate') {
            if (splitCommands.length === 1) {
                // TODO:: another help session
                this.setState((prevState) => ({ stack:
                    [...prevState.stack, <div>
                        Hello, buddy!
                        <br/> To know about me, type 'kate about'.
                        <br/> If you want to look up the options, please type 'kate help'.
                        </div>
                    ]
                }));

            } else if (splitCommands.length === 2 && this.myMenu[splitCommands[1]]) {
                if (splitCommands[1] === 'contact') {
                    this.setState((prevState) => ({ stack:
                        [...prevState.stack, <div>{this.myMenu[splitCommands[1]]}<br /></div>]
                    }));
                } else {
                    Object.keys(this.myMenu[splitCommands[1]]).forEach((key) => {
                        this.setState((prevState) => ({ stack:
                            [...prevState.stack, <div>{this.myMenu[splitCommands[1]][key]}<br /></div>]
                        }));
                    });
                }
            } else if (splitCommands.length === 3 &&
                        this.myMenu[splitCommands[1]] &&
                        this.myMenu[splitCommands[1]][splitCommands[2]]) {
                this.setState((prevState) => ({ stack:
                    [...prevState.stack, <div>{this.myMenu[splitCommands[1]][splitCommands[2]]}<br /></div>]
                }));
            } else {
                this.setState((prevState) => ({ stack:
                    [...prevState.stack, this.myMenu.commandNotFound]
                }));
            }
        } else if (command === '') {
            // Nothing
        } else {
            this.setState((prevState) => ({ stack:
                [...prevState.stack, this.myMenu.commandNotFound]
            }));
        }

        this.numElement++;
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
        if (to === this.stackedCommands.length) {
            inputField.value = '';
        } else {
            inputField.value = this.stackedCommands[to];
        }
    }
    public render() {
        const commandAngleBracketed = '<command>';
        const optionsAngleBracketed = '<options>';
        return (
            <div>
                <div>
                    <div>
                        🙌🏻 Welcome to Kate Kim's Portfolio! 🙌🏻
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
                    </div>
                    {this.state.stack.map(function(comp,i){
                        return <div key={'stack' + i}>{comp}</div>
                    })}
                </div>
                <div>
                >> <input type='text' id='userField' onKeyPress={(e) => this.handleEnter(e)}
                    onKeyDown={(e) => this.handleArrowUpDown(e)} ref={(el) => { this.end = el; } } />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<KateKimPortfolio />, document.getElementById('ui'));
