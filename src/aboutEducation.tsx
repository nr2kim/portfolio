import * as React from 'react';
import Typing from 'react-typing-animation';
// tslint:disable-next-line:no-import-side-effect
import './style.css';

export class AboutEducation extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Typing speed={5} key='ae'
             onFinishedTyping={() => {this.props.emitter.emit('finishedTyping'); }}>
                    🎓 University of Waterloo 🎓
                    <br />Attending from Sept 2015: expected to graduate in June of 2020
                    <br />&emsp;3B Honours in Computer Engineering, Honours Bachelor of Applied Science (BASc)
                    <br />&emsp;Courses:
                    <br />&emsp;&emsp;Concurrent and Parallel Programming:
                    studied deeper level of multi-treading, synchronization, and memory management.
                    <br />&emsp;&emsp;Compilers:
                    gained knowledge of programming paradigms, compilation, and interpretation.
                    <br />&emsp;&emsp;Algorithms and Data Structures:
                    learned about many kinds data structures, basic algorithms, and
                    optimization and program efficiency.
                    <br />&emsp;&emsp;Digital Hardware Systems:
                    worked on dataflow diagrams, timing and power analysis, and performance
                    optimization in hardware description language, VHDL.
                    <br />&emsp;&emsp;Probability Theory and Statistics:
                    explored many probability and statistics theories and functions.
                    <br />&emsp;&emsp;Discrete Mathematics:
                    learned probability algorithms, public-key cryptography, RSA, and graph theory
                    <br /><br />🎒 St. Joseph's Morrow Park High School 🎒
                    <br />
            </Typing>
        );
    }
}
