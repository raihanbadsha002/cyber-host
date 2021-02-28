import React from 'react';
import aboutimg from '../images/me.png';

const About = () => {

    const[aboutHeader] = React.useState({
        subHeading: "About Me",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
 
     });
    return (
        <div>
            <div className="about__main__div">
                <div className="container">
                <div className="d-flex justify-content-center">
                <div className="common__header text-center">
                        <h1 className="main__header my-3">{aboutHeader.subHeading}</h1>
                        <p className="common__content">{aboutHeader.text}</p>
                        <div className="common__border"></div>
                 </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center py-5">
                  
                    <div className="col-lg-5">
                        <img src={aboutimg} alt="man"/>
                    </div>
                    <div className="col-lg-7">
                        <h2 className="about__header">Hi There</h2>
                        <p className="grayColor">In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis</p>
                        <p className="grayColor">nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit</p>

                       <div className="row mt-4">
                           <div className="col-md-6">
                               <div className="mb-4">
                                    <h6 className="about__label">Name:</h6>
                                    <h6 className="grayColor">Jonathan Doe</h6>
                               </div>
                               <div className="mb-4">
                                    <h6 className="about__label">Phone:</h6>
                                    <h6 className="grayColor">+1 023 454 345</h6>
                               </div>
                           </div>
                           <div className="col-md-6">
                            <div className="mb-4">
                                        <h6 className="about__label">Email:</h6>
                                        <h6 className="grayColor">example@domain.com</h6>
                                </div>
                                <div className="">
                                        <h6 className="about__label">LinkedIn:</h6>
                                        <h6 className="grayColor">Jonathan_123</h6>
                                </div>
                           </div>
                       </div> 
                    </div>
                    </div>
                </div>
    
            </div>
        </div>
    )
}

export default About
