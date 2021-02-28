import React from 'react';

const Price = () => {
    const[priceHeader] = React.useState({
        mainHeader: "CHOOSE A PLAN" ,
        subHeading: "Pricing Plan",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
 
     });
     const [priceData] = React.useState([
         {
          id: 1,
          heading: "Basic",
          price: 50,
          msg1: "5GB Storage Space",
          msg2: "20GB Monthly Bandwidth",
          msg3: "My SQL Databases",
          msg4: "10 Free Domain Names",
         },
         {
          id: 2,
          heading: "Standard",
          price: 80,
          msg1: "8GB Storage Space",
          msg2: "30GB Monthly Bandwidth",
          msg3: "My SQL Databases",
          msg4: "15 Free Domain Names",
         },
         {
          id: 3,
          heading: "Premium",
          price: 170,
          msg1: "15GB Storage Space",
          msg2: "50GB Monthly Bandwidth",
          msg3: "My SQL Databases",
          msg4: "20 Free Domain Names",
         },
    ]);
    return (
        <div>
            <div className="prices__main__div">
                <div className="container">
                <div className="d-flex justify-content-center">
                <div className="common__header text-center">
                       <h5 className="heading">{priceHeader.mainHeader}</h5>
                        <h1 className="main__header my-3">{priceHeader.subHeading}</h1>
                        <p className="common__content">{priceHeader.text}</p>
                        <div className="common__border"></div>
                 </div>
                </div>
                    <div className="row">
                        {
                            priceData.map(price => (
                                <div className="col-md-4" key={price.id}>
                           <div className="price__box">
                               <div className="priceHeading">{price.heading}</div>
                               <div className="price"><span>$</span>{price.price}</div>
                               <ul>
                                   <li>{price.msg1}</li>
                                   <li>{price.msg2}</li>
                                   <li>{price.msg3}</li>
                                   <li>{price.msg4}</li>
                                   
                               </ul>
                               <button className="purchase__btn">Purchase</button>
                           </div>
                        </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;