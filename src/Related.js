import React from "react";
import forum from './img/forum.jpg'
import reward from './img/reward.jpg'
import video from './img/video.jpg'
import insider from './img/insider.jpg'

function Related(){
    return(
        <section className="related">
            <a className="related__link" href="#">
                <h3 className="related__title">เว็บบอร์ด</h3>
                <img className="related__image" src={forum}/>
            </a>
            <a className="related__link" href="#">
                <h3 className="related__title">MSI Reward Program</h3>
                <img className="related__image" src={reward}/>
            </a>
            <a className="related__link" href="#">
                <h3 className="related__title">วีดีโอ</h3>
                <img className="related__image" src={video}/>
            </a>
            <a className="related__link" href="#">
                <h3 className="related__title">MSI insider</h3>
                <img className="related__image" src={insider}/>
            </a>
        </section>
    )
}
export default Related