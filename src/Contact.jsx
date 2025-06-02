import React from "react";
function Contact(props) {

  return (
    <React.Fragment>
        <div className="contact-container">
            <h1>{props.contactObject.title}</h1>
            <p>Please reach out to me via email:</p>
            <h2>{props.contactObject.email}</h2>
        </div>
    </React.Fragment>

  );
}
export default Contact;