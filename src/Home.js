import "./App.css";
import React from 'react'
import pizza from "../src/Assets/pizza.jpg";
import arbys from "../src/Assets/arbys.jpg";
import mcdonalds from "../src/Assets/mcdonalds.jpg";
import panerabread from "../src/Assets/panerabread.jpg";
import starbucks from "../src/Assets/starbucks.jpg";
import sweetgreen from "../src/Assets/sweetgreen.jpg";
import wendys from "../src/Assets/wendys.jpg";
import Pizza from "./Pizza"
import { Routes, Route, Link } from "react-router-dom";



export default function Home() {  
    return (
      <>
        <h2>LAMBDA EATS</h2>
        <h3>Build Your Own Pizza</h3>
        <div className = "cta">
            <img
            className="pizza"
            src={pizza}
            alt="pizza"
            />
            <div className = "ctaText">Your Favorite Food Delivered While Coding</div>
            <div>
                <Link id = "order-pizza" className = "order-pizza" to="/pizza"><span id = "order-pizza">Pizza?</span></Link>        
            </div>
            <Routes>
                <Route  id = "order-pizza" path="/pizza" element = {<Pizza/>}/>
            </Routes>
        </div>
        <h4>Food Delivery in Gotham City</h4>
        <div className = "homeContent">
            <div>
                <img
                className='top'
                src={mcdonalds}
                alt="mcdonalds"
                />
                <p>MCDonalds</p>
                <p>$ . American . Fast Food . Burgers</p>
                <button>20-30 Min</button>
                <button>$5.99 Delivery Fee</button>
            </div>
            <div>
                <img
                className='top'
                src={sweetgreen}
                alt="sweetgreen"
                />
                <p>Sweetgreen</p>
                <p>$ . Healthy . Salads</p>
                <button>30-45 Min</button>
                <button>$4.99 Delivery Fee</button>
            </div>
            <div>
                <img
                className='top'
                src={starbucks}
                alt="starbucks"
                />
                <p>Starbucks</p>
                <p>$ . Cafe . Coffee & Tea . Breakfast and Brunch</p>
                <button>10-20 Min</button>
                <button>$3.99 Delivery Fee</button>
            </div>
            <div>
                <img
                className='top'
                src={wendys}
                alt="wendys"
                />
                <p>Wendys</p>
                <p>$ . American . Fast Food . Burgers</p>
                <button>30-45 Min</button>
                <button>$4.99 Delivery Fee</button>
            </div>
            <div>
                <img
                className='top'
                src={arbys}
                alt="arbys"
                />
                <p>Arbys</p>
                <p>$ . American . Fast Food . Burgers</p>
                <button>10-20 Min</button>
                <button>$3.99 Delivery Fee</button>
            </div>
            <div>
                <img
                className='top'
                src={panerabread}
                alt="panerabread"
                />
                <p>Panera Bread</p>
                <p>$ . Healthy . Salads</p>
                <button>20-30 Min</button>
                <button>$5.99 Delivery Fee</button>
            </div>
        </div>
      </>
    )
  }