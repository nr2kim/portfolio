import * as React from 'react';
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
        let data = 'sender=' + this.senderName.current.value.toString()
            + '&email=' + this.senderEmail.current.value.toString()
            + '&message=' + this.message.current.value.toString();
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = (x) => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    this.senderName.current.value = "";
                    this.senderEmail.current.value = "";
                    this.message.current.value = "";
                    alert("Thank you for reaching out to me!\n I will get back to you as soon as possible.");
                } else {
                    alert("An error has occurred. Please Try again later.");
                }
            }
        }
        xhr.open('post', 'index.php', true);
        xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
        xhr.send(data);

        
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
