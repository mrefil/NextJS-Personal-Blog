import Head from 'next/head';
import { Fragment } from 'react';
import ContactForm from "../components/contact/contact-form";

function Contact() {
    return (
        <Fragment>
            <Head>
                <title>Contact Me</title>
                <meta name="description" content='Contact Form' />
            </Head>
            <ContactForm />
        </Fragment>
        
    )
}

export default Contact;