import * as React from 'react';
import './style.css';

export class AboutKate extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div className='sectionHeading'>Kate's Basic Information</div>
                <div className='subSection'>
                    Name: Kate Kim
                    <br />Mission statement: One can change everyone's daily life; stay motivated!
                    <br />Interests: Food fighter (ง •̀_•́)ง
                    <div className='subSectionBodyCategory'>
                        Q & A:
                        <div className='subSectionBodySubCategory'>
                            Q. Why did you choose computer engineering as your major?
                            <div className='subSectionBodySubCategoryA'>
                                A. I've learned about computer from when I was young and also played a lot of games.
                                <br />&emsp;&emsp;
                                I always wished to become an engineer who can provide another person a new world!
                                <br />&emsp;&emsp;
                                I am proud that I am on the way to accomplish my dream.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
