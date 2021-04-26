import React from 'react';


const Contact = () => {
    const[contactHeader] = React.useState({
        mainHeader: "HAVE ANY QUERY?" ,
        subHeading: "Contact Me",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
 
     });
    return (
            <div className="contact__main__div" id="conatct">
              <div className="container">
                <div className="d-flex justify-content-center">
                <div className="common__header text-center">
                       <h5 className="heading">{contactHeader.mainHeader}</h5>
                        <h1 className="main__header my-3">{contactHeader.subHeading}</h1>
                        <p className="common__content">{contactHeader.text}</p>
                        <div className="common__border"></div>
                 </div>
                </div>
                <form className="row g-3 py-5">
                    <div className="col-md-6">
                        <input type="text" className="form-control field-dark" id="inputEmail4" placeholder="Your Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="email" className="form-control field-dark" id="inputPassword4" placeholder="Your Email"/>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control field-dark" id="inputAddress" placeholder="Your Subject" />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control field-dark" id="inputAddress2" placeholder="Your Message" />
                    </div>                     
                    <div className="col-12">
                        <button type="submit" className="btn btn-success">Send Message</button>
                    </div>
                </form>
              </div>
            </div>
           
    );
};

export default Contact;