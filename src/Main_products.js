import React from "react";
import PS from './img/PS.jpeg'
import MB from './img/MB.png'
import RTX4090 from './img/RTX4090.jpeg'
import './Main_products.css'

function Main_products(){
    return(
        <section className="products">
            <a className="products__link" href="#">
                <div className="products__head">
                    <h3 className="products__title">MEG Ai1300P PCIE5</h3>
                    <p className="products__description">ATX 3.0 and PCIE 5 ready</p>
                </div>
                <figure className="products__figure">
                    <img className="products__image" src={PS}/>
                </figure>
            </a>
            <a className="products__link" href="#">
                <div className="products__head">
                    <h3 className="products__title">MEG Z790 ACE</h3>
                    <p className="products__description">Lustrous Aesthetics, Pure Performance</p>
                </div>
                <figure className="products__figure">
                    <img className="products__image" src={MB}/>
                </figure>
            </a>
            <a className="products__link" href="#">
                <div className="products__head">
                    <h3 className="products__title">GeForce RTX™ 4090 SUPRIM X 24G</h3>
                    <p className="products__description">Change The Game</p>
                </div>
                <figure className="products__figure">
                    <img className="products__image" src={RTX4090}/>
                </figure>
            </a>
        </section>
    )
}
export default Main_products