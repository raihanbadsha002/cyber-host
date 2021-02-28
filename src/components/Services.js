import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCamera, faFileVideo } from '@fortawesome/free-solid-svg-icons';
import { faApple, faGithub, faInstalod, faSketch } from '@fortawesome/free-brands-svg-icons';




const Services = () => {

    const[servicesHeader] = React.useState({
        mainHeader: "SERVICES" ,
        subHeading: "My Services",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
 
     });

    //  ****Services useState******
    const [state] = React.useState([
        {id:1, 
         icon: faGithub,
         heading: 'Web Development',
         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        },
        {id:2, 
         icon: faCamera,
         heading: 'Photography',
         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        },
        {id:3, 
         icon: faSketch,
         heading: 'Web Design',
         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        },
        {id:4, 
         icon: faApple,
         heading: 'App Developing',
         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        },
        {id:5, 
         icon: faFileVideo,
         heading: 'Video Editing',
         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        },
        {id:6, 
         icon: faInstalod,
         heading: 'SEO Expert',
         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        }
    ]);

    return (
        <div>
           <div className="services__main__div">
            <div className="container">
              <div className="d-flex justify-content-center">
              <div className="common__header text-center">
                    <h5 className="heading">{servicesHeader.mainHeader}</h5>
                    <h1 className="main__header my-3">{servicesHeader.subHeading}</h1>
                    <p className="common__content">{servicesHeader.text}</p>
                    <div className="common__border"></div>
                </div>
              </div>

              <div className="row mt-5">

               {state.map(info=> <ServiceSec serviceInfo={info} key={info.id}/>)}
      
              </div>
            </div>
        </div>
    </div>
    )
};

const ServiceSec = (props) => {
   const {icon, heading, text} = props.serviceInfo;



    return (
    <div className="col-lg-4 col-md-6">
          <div className="services__box px-5 py-4 mb-4">
         <FontAwesomeIcon icon={icon} className="service__icons"/>
            <div className="services__box__header">
                {heading}
            </div>
            <div className="services__box__content">
            {text}
            </div>
        </div>
                 
     </div>
        
    )
}

export default Services
