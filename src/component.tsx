import * as React from 'react';
import './style.css';

export class Component extends React.Component <any, any> {
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
};
