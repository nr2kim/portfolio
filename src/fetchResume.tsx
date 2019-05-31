import * as React from 'react';
import './style.css';

export class FetchResume extends React.Component <any, any> {
    private request;

    public constructor(props) {
        super(props);
        this.state = {
            downloading: 0
        };
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
                <div className='section'>Kate's Resume</div>
                <a href={window.location + 'resources/Resume_KateKim.pdf'} target="_blank">
                    download [<span className='bold'>Resume_KateKim.pdf</span>] 98 KB
                </a>
                <div className="subSection" onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> Preview
                    <div className="subSectionBody">
                        <img src= {window.location+ "resources/Resume_KateKim1.PNG"} />
                        <img src={window.location + "resources/Resume_KateKim2.PNG"} />
                    </div>
                </div>
            </div>
        );
    }
}
