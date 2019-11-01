import * as React from 'react';
import { Component } from './component';

import './style.css';

export class AboutEducation extends Component {
    public render() {
        return (
            <div>
                <div className='section'>Kate's Education</div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> University of Waterloo
                    <div className='subSectionBody'>Expected to graduate in June of 2020
                        <br />Computer Engineering: Honours Bachelor of Applied Science (BASc)
                        <div className='subSectionBodyCategory'>Courses
                            <div className='subSectionBodySubCategory'>
                                <div id="openClose"> 🔽 </div> Deep Learning
                                <div className='subSectionBodySubCategoryBody'>
                                    Studying probabilistic Modelling, inference, and reasoning tools and decision making
                                </div>
                            </div>
                            <div className='subSectionBodySubCategory'>
                                <div id="openClose"> 🔽 </div> Security
                                <div className='subSectionBodySubCategoryBody'>
                                    Studying computer security and cryptography
                                </div>
                            </div>
                            <div className='subSectionBodySubCategory'>
                                <div id="openClose"> 🔽 </div> Distributed Systems
                                <div className='subSectionBodySubCategoryBody'>
                                    Studying computer architecture and distributed systems.
                                </div>
                            </div>
                            <div className='subSectionBodySubCategory'>
                                <div id="openClose"> 🔽 </div> Concurrent and Parallel Programming
                                <div className='subSectionBodySubCategoryBody'>
                                    Studied deeper level of multi-treading, synchronization, and memory management.
                                </div>
                            </div>
                            <div className='subSectionBodySubCategory'>
                                <div id="openClose"> 🔽 </div> Compilers
                                <div className='subSectionBodySubCategoryBody'>
                                    Gained knowledge of programming paradigms, compilation, and interpretation.
                                </div>
                            </div>
                            <div className='subSectionBodySubCategory'>
                                <div id="openClose"> 🔽 </div> Algorithms and Data Structures
                                <div className='subSectionBodySubCategoryBody'>
                                    Learned about many kinds data structures, basic algorithms, and
                                    optimization and program efficiency.
                                </div>
                            </div>
                            <div className='subSectionBodySubCategory'>
                                <div id="openClose"> 🔽 </div> Digital Hardware Systems
                                <div className='subSectionBodySubCategoryBody'>
                                    Worked on dataflow diagrams, timing and power analysis, and performance
                                    optimization in hardware description language, VHDL.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
