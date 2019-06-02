import * as React from 'react';
import * as fs from 'browserify-fs';
import './style.css';

export class Contact extends React.Component <any, any> {
    private senderName;
    private senderEmail;
    private message;

    public constructor(props) {
        super(props);
        this.senderName = React.createRef();
        this.senderEmail = React.createRef();
        this.message = React.createRef();
    }

    public save(e) {
        if(this.senderName.current.value === "") {
            alert("Sender Name Not Specified.");
            return;
        }
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(this.senderEmail.current.value.toLowerCase()))) {
            alert("Sender Email Not Specified.");
            return;
        }
        if(this.message.current.value === "") {
            alert("Cannot Send Empty Message.");
            return;
        }
        const buffer = "Sender:" + this.senderName.current.value.toString() + "\n"
            + "Email: " + this.senderEmail.current.value.toString() + "\n"
            + "Message: " + this.message.current.value.toString() + "\n";
        let xhr = new XMLHttpRequest();
        xhr.open( 'post', '/server.php', true );
        xhr.send(buffer);
    }

    public render() {
        return (
            <div>
                <div className='section'>Kate's Contacts</div>
                <div className="subSection contact">
                    ✉️&emsp;nr2kim@edu.uwaterloo.ca
                    <br />📞&emsp;(647) 447 - 2273
                    <br /><a href='https://github.com/nr2kim' target="_blank"><span className="bold"> nr2kim </span></a>
                    <br />
                    <input type='text' id='senderName' placeholder=" Your name" ref={this.senderName} />
                    <input type='text' id='senderEmail' placeholder=" Your email" ref={this.senderEmail} />
                    <textarea rows={20} cols={1} id='message' placeholder=" Hello, Kate" ref={this.message} />
                    <button id="msgSubmit" onClick={(e) => this.save(e)}><span>Send </span></button>
                </div>
            </div>
        );
    }
}
