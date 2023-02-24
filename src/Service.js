import React from "react";
import add_box from './img/add_box.png'
import support from './img/support_service_location.jpg'
import headset from './img/headset.png'
import product from './img/product_registration.jpg'
import './Service.css'

function Service(){
    return(
        <section className="service">
            <a className="service__link" href="#">
                <div className="service__head">
                    <img className="service__icon" src={add_box}/>
                    <h3 className="service__title">Products Registration</h3>
                    <p className="service__description">To enjoy a host of benefite, promotions and events</p>
                </div>
                <img className="service__image" src={product}/>
            </a>
            <a className="service__link" href="#">
                <div className="service__head">
                    <img className="service__icon" src={headset}/>
                    <h3 className="service__title">การสนับสนุน</h3>
                    <p className="service__description">หัวข้อการบริการที่ต้องการสอบถาม</p>
                </div>
                <img className="service__image" src={support}/>
            </a>
        </section>
    )
}
export default Service