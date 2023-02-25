import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kvey02h', 'template_j1rxopk', form.current, 'aymvbqqb8SqF-Qfzo')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (

   
    <div className='bg-gray-800 h-screen'>
      <div className=' flex my-auto mx-auto h-screen justify-center items-center'>

      <Form className=' w-50' ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-cyan-400'>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name='user_email' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='text-cyan-400'>Description</Form.Label>
        <Form.Control as="textarea" name='message' rows={10} />
      </Form.Group>
      <button type='Submit'value="Send" className='rounded-full bg-cyan-300
       hover:bg-cyan-200 px-2 transition-shadow duration-200 ease-in-out
        text-gray-800 hover:translate-y-0.5 hover:translate-y-0.5'>Submit</button>
    </Form>
    </div>
    </div>
  )
}
