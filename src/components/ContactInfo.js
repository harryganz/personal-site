import React from 'react';

function ContactInfo({info}) {
    return (
        <div className="contact-info">
            <p><i className="fa fa-phone" /> {info.phone}</p>
            <p><i className="fa fa-email" /> {info.email}</p>
            <p><i className="fa fa-github" /> {info.github}</p>
        </div>
    );
}

export default ContactInfo;
