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
        const d = new Date();
        const filename = './' + d.getTime() + ".txt";
        const buffer = this.senderName.current.value.toString() + "\n"
            + this.senderEmail.current.value.toString() + "\n"
            + this.message.current.value.toString() + "\n";
        fs.open(filename, 'w', function(err, fd) {
            if (err) {
                throw 'error opening file: ' + err;
            }

            fs.write(fd, buffer, 0, buffer.length, null, function(err) {
                if (err) throw 'error writing file: ' + err;
                fs.close(fd, function() {
                    console.log('file written');
                })
            });
        });
    }

    public render() {
        return (
            <div>
                <div className='section'>Kate's Contacts</div>
                <div className="subSection contact">
                    ✉️&emsp;nr2kim@edu.uwaterloo.ca
                    <br />📞&emsp;(647) 447 - 2273
                    <br />Github&emsp;
                    <a href='https://github.com/nr2kim' target="_blank"><span className="bold"> nr2kim </span></a>
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
