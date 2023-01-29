import React, { FC } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import { ParallaxLayer } from '@react-spring/parallax';
interface ContactProps { }

const SERVICE_ID = "service_6lv9ne9";
const TEMPLATE_ID = "template_n2lulof";
const USER_ID = "kzWHpctTIhjX04aJu";

const Contact: FC<ContactProps> = () => {
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
  return (
    <>
      <ParallaxLayer offset={0} speed={0.94} className="flex justify-center">
        <h1 className='text-5xl font-bold text-center w-full text-base-600 myFont'>Me Contacter !</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={0.8} speed={1.7} className='flex justify-center align-middle items-center m-auto'>
        <Form onSubmit={handleOnSubmit} className='flex flex-col justify-center w-96'>
          <div className='flex flex-col mt-5'>
            <label htmlFor='email'>Email</label>
            <input type="text" name='email' placeholder='email...' className="input input-bordered input-primary w-full max-w-lg" required />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor='name'>Name</label>
            <input type="text" name='name' placeholder='name...' className="input input-bordered input-primary w-full max-w-lg" required />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor='message'>Message</label>
            <textarea className="textarea textarea-info w-full max-w-lg" name='message' placeholder="Message..." required></textarea>
          </div>
          <Button className='btn btn-primary w-full max-w-lg mt-5' type='submit' color='green'>Submit</Button>
        </Form>
        </ParallaxLayer>
    </>
  );
}

export default Contact;
