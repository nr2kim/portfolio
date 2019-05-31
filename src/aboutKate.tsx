import * as React from 'react';
import './style.css';

export class AboutKate extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public onClickHeading(e: any) {
        e.preventDefault();
        for(let i = 0; i < e.target.children.length; i++) {
            if (e.target.children.item(i).id == "openClose") {
                if (e.target.children.item(i).innerHTML == " 🔼 ") {
                    e.target.children.item(i).innerHTML = " 🔽 ";
                } else {
                    e.target.children.item(i).innerHTML = " 🔼 ";
                }
            } else if (e.target.children.item(i).style.display === "") {
                e.target.children.item(i).style.display = "block";
            } else {
                e.target.children.item(i).style.display = "";
            }
        }
    }

    public render() {
        return (
            <div>
                <div className='section'>Kate's Basic Information</div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    Name: Kate Kim
                    <br />Mission statement: One can change everyone's daily life; stay motivated!
                    <br />Interests: Food fighter (ง •̀_•́)ง
                </div>
                <div className="subSection" onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> Q & A
                    <div className='subSectionBody'>
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
        );
    }
}
