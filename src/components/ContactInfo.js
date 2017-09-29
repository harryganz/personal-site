import React from 'react';

import 'components/ContactInfo.css';

function ContactInfo({phone, email, github}) {
    return (
        <div className="contact-info">
            <p className="no-wrap"><a href={`tel:${phone}`}><i className="fa fa-phone" aria-hidden="true" /> {phone}</a></p>
            <p className="no-wrap"><a href={`mailto:${email}`}><i className="fa fa-envelope" aria-hidden="true" /> {email}</a></p>
            <p className="no-wrap"><a href={`https://github.com/${github}`}><i className="fa fa-github" aria-hidden="true" /> {github}</a></p>
        </div>
    );
}

export default ContactInfo;
