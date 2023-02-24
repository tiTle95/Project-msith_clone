import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import banner1 from './img/banner1.jpeg'
import banner2 from './img/banner2.jpeg'

function Main_slite(){
    return(
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src={banner1} class="d-block w-100" alt="banner1"/>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src={banner2} class="d-block w-100" alt="banner2"/>
                </div>
            </div>
        </div>
    )
}
export default Main_slite