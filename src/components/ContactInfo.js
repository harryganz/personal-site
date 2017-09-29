import React from 'react';

function ContactInfo({phone, email, github}) {
    return (
        <div className="contact-info">
            <p><a href={`tel:#{phone}`}><i className="fa fa-phone" aria-hidden="true" /> {phone}</a></p>
            <p><i className="fa fa-envelope" aria-hidden="true" /> {email}</p>
            <p><i className="fa fa-github" aria-hidden="true" /> {github}</p>
        </div>
    );
}

export default ContactInfo;
