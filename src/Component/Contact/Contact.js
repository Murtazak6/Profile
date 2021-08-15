import React, {useState} from 'react'
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import InlineEditor from '@ckeditor/ckeditor5-build-inline'
import './contact.css'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';

const Contact = () => {
    const [content, setContent] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [disable, setDisable] = useState(false)
    const sendEmail = (e) => {
        if((content !== '' && content !== null && content !== undefined) && 
            (name !== '' && name !== null && name !== undefined) && 
            (email !== '' && email !== null && email !== undefined) && 
            (subject !== '' && subject !== null && subject !== undefined)){
            // e.preventDefault();
            // emailjs.send('service_sc6hxk5', 'template_qehbtoy', {
            //     name: name,
            //     email: email,
            //     subject: subject,
            //     message: content
            // }, 'user_minqCOuSYQdQPwDjoVYj9')
            // .then((result) => {
            //     console.log(result.text);
                setContent('')
                setEmail('')
                setSubject('')
                setName('')
                setDisable(true)
                toast.success('Your message is sent. Please wait...\n Murtaza will contact you soon.')
            // }, (error) => {
            //     console.log(error.text);
            // });
        } else {
            toast.info('Please enter all fields')
        }
    }
    return (
        <div className="container">
                <div className="">
                    <label>Name</label>
                    <div>
                        <input type="text" className="form-control" value={name} placeholder="Name" name="name" onInput={e => setName(e.target.value)}></input>
                    </div>
                </div>
                <div className="">
                    <label>Email</label>
                    <div>
                        <input type="text" className="form-control" value={email} placeholder="Email" name="email" onInput={e => setEmail(e.target.value)}></input>
                    </div>
                </div>
                <div className="">
                    <label>Subject</label>
                    <div>
                        <input type="text" className="form-control" value={subject} placeholder="Subject" name="subject" onInput={e => setSubject(e.target.value)}></input>
                    </div>
                </div>
                <div className="">
                    <label>Message</label>
                    <div className="font-color">
                        <textarea className="form-control" rows="5" value={content} placeholder={"Message"} onChange={e => setContent(e.target.value)}></textarea>
                        {/* <CKEditor
                            editor={ InlineEditor }
                            data={content}
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            }}
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                setContent(data)
                                console.log( { event, editor, data } );
                            }}
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        /> */}
                    </div>
                </div>
                <button className="btn btn-primary" disabled={disable} style={{margin:'2% 0', color:"white"}} onClick={sendEmail}>Submit</button>
        </div>
    )
}

export default Contact
