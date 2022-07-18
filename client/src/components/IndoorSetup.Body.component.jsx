
import { Container } from "../styles/IndoorSetup.Body.styles"

import { useState, useEffect } from "react";

const typesContent1 = {
    heading : "Vertical NFT System:",
    p1 : "NFT means Nutrient Film Technique.",
    p2 : "In this method, mineral-nutrient solution is added to the water.",
    p3 : "These nutrients are then carried by the flowing water that passes through the roots of the plants. NFT always has the roots hung for proper exposure to air.",
    p4 : "In Vertical NFT System of Hydroponics, plants are installed in multiple layers. These layers are then stacked one above the other. This helps in maximizing the yield per acre and leads to more food grown using hydroponics.",
    image : "https://risehydroponics.in/wp-content/uploads/2021/09/indoor-11.jpg",
    heading2 : "The benefits of Vertical NFT System, are:",
    point1 : "Extra Yield per unit area",
    point2 : "Relief from Soil Borne Diseases",
    point3 : "Year Round Production",
    point4 : "Highly Suitable for Rooftops and Balconies",
    point5 : "Reduces Water Evaporation",
    point6 : "Nutrient Rich Water Supply to each plant"
}
const typesContent2 = {
    heading : "Vertical DWC System:",

    p1 : "DWC means Deep Water Culture. In this method, the plant roots are sunk deep in water. This water is well oxygenated and full of nutrients. These plant roots remain in the water at all times. For oxygenation, air pumps are connected with the water reservoir.",
    image : "https://risehydroponics.in/wp-content/uploads/2021/04/7jfrQg8QfZ.jpg",
    heading2 : "Benefits of DWC System of Hydroponics, are:",
    point1 : "Saves Space",
    point2 : "Maximum Output is gained in less time",
    point3 : "Multi-Layer Farming",
    point4 : "Basic Model installed has 10 Ft. Height with 4-5 Layers",
    point5 : "No Height Limitation",
}
const typesContent3 = {
    heading : "Grow lights:",
    p1 : "For Indoor Hydroponics farming, we supply adequate lights to the plants with artificial lighting systems. Grow lights become all the more important for plants because every crop needs exposure to warmth and cold.",
    p2 : "And plants need only 2 ends of the spectrum of sunlight, i.e. Red and Blue.",
    p3 : "With Grow lights all the crops grown at indoor hydroponics farms, gain exposure to Red (Warm) & Blue (COOL) Spectrum, as these are compulsorily needed by the plants for getting good growth.",
    image : "https://risehydroponics.in/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-10-at-4.42.40-PM-e1618081980625.jpeg",
    heading2 : "The Benefits of installing Grow lights go as follows:",
    point1 : "Promotes Plant Growth",
    point2 : "Used for Multi-Layer Hydroponics Setups",
    point3 : "Helps in Plant Development",

    point4 : "Supplies adequate light intensity needed by plants",
    point5 : "Good for Leafy Greens",
}

export const IndoorSetupBodyContainer = () => {

    const [color, setColor] = useState({
        button1 : "#b2b2ec",
        button2 : "#0000ff",
        button3 : "#0000ff"
    })

    const [Content, setContent] = useState("typesContent1");
    
    console.log('color:', color);
    return (
        <Container>
            <img className="banner" src="https://risehydroponics.in/wp-content/uploads/2021/09/rh-8-e1631964173180.jpg" alt="" />
            <div className="instruction__1">
                <h1 className="instruction__1__heading">Indoor Hydroponics Farm Setup</h1>
                <p className="instruction__1__p1">Indoor Hydroponics farming instantly solves the issues of geographical constraints.</p>
                <p className="instruction__1__p2">Rise Hydroponics has successfully setup various indoor farms across so many Indian states. We believe that Indoor Hydroponics Farms combat these pressing issues faced by our world that’s witnessing an enormous growth of population:</p>

                <p className="instruction__1__p3"><b>Pollution & Low Nutritional Value :</b> Traditional field based farming has to counter the issues of polluted water and bad quality air. This impacts the food quality and degrades the nutritional value.</p>
                <p className="instruction__1__p4"><b>Water Shortage :</b> Field based farming uses plenty of water to grow crops. On the other hand many countries are now facing water shortage due to wastage of water in other areas. You’ll be amazed to know that Hydroponics based farming uses only 10% water as compared to the water taken up by soil based farming.</p>
                <p className="instruction__1__p5">Plus, water recirculation is the best advantage of indoor hydroponics farms.</p>
            </div>
            <div className="instruction__2">
                <h1 className="instruction__2__heading">Types Of Indoor Farms</h1>
                <p className="instruction__2__p1">Rise Hydroponics has earned a good name in setting up Indoor Hydroponics Farms of all sizes and types.</p>
                <p className="instruction__2__p2">Come Check out the Various Types of Indoor Farms, we help you to establish at your spaces:</p>
                <div className="system__types">
                    <button className="types__1" style={{backgroundColor : `${color.button1}`}} onClick={() => {
                        setColor({button1 : "#b2b2ec", button2 : "#0000ff", button3 : "#0000ff"})
                        setContent("typesContent1");
                    }}>VERTICAL NFT SYSTEM</button>
                    <button className="types__2" style={{backgroundColor : `${color.button2}`}} onClick={() => {
                        setColor({button1 : "#0000ff", button2 : "#b2b2ec", button3 : "#0000ff"})
                        setContent("typesContent2");
                    }}>VERTICAL DWC SYSTEM</button>
                    <button className="types__3" style={{backgroundColor : `${color.button3}`}} onClick={() => {
                        setColor({button1 : "#0000ff", button2 : "#0000ff", button3 : "#b2b2ec"})
                        setContent("typesContent3");
                    }}>GROW LIGHTS</button>
                </div>
                <div className="types__content">   
                    <h2 className="types__heading">
                        {Content === "typesContent1" ? typesContent1.heading : Content === "typesContent2" ? typesContent2.heading : typesContent3.heading}
                    </h2>
                    <p className="types__p1">
                        {Content === "typesContent1" ? `${typesContent1.p1 ? typesContent1.p1 : ""}` : Content === "typesContent2" ? `${typesContent2.p1 ? typesContent2.p1 : ""}` : `${typesContent3.p1 ? typesContent3.p1 : ""}`}
                    </p>
                    <p className="types__p1">
                        {Content === "typesContent1" ? `${typesContent1.p2 ? typesContent1.p2 : ""}` : Content === "typesContent2" ? `${typesContent2.p2 ? typesContent2.p2 : ""}` : `${typesContent3.p2 ? typesContent3.p2 : ""}`}
                    </p>
                    <p className="types__p1">
                        {Content === "typesContent1" ? `${typesContent1.p3 ? typesContent1.p3 : ""}` : Content === "typesContent2" ? `${typesContent2.p3 ? typesContent2.p3 : ""}` : `${typesContent3.p3 ? typesContent3.p3 : ""}`}
                    </p>
                    <p className="types__p1">
                        {Content === "typesContent1" ? `${typesContent1.p4 ? typesContent1.p4 : ""}` : Content === "typesContent2" ? `${typesContent2.p4 ? typesContent2.p4 : ""}` : `${typesContent3.p4 ? typesContent3.p4  : ""}`}
                    </p>
                    <div className="types__image__point">
                        <img className="types__image" src={Content === "typesContent1" ? `${typesContent1.image ? typesContent1.image : ""}` : Content === "typesContent2" ? `${typesContent2.image ? typesContent2.image : ""}` : `${typesContent3.image ? typesContent3.image : ""}`} alt="" />
                        <div className="types__point">
                            <h2 className="types__heading">{Content === "typesContent1" ? typesContent1.heading2 : Content === "typesContent2" ? typesContent2.heading2 : typesContent3.heading2}</h2>
                            <ul className="points">
                                <li>{Content === "typesContent1" ? `${typesContent1.point1 ? typesContent1.point1 : ""}` : Content === "typesContent2" ? `${typesContent2.point1 ? typesContent2.point1 : ""}` : `${typesContent3.point1 ? typesContent3.point1  : ""}`}</li>
                                <li>{Content === "typesContent1" ? `${typesContent1.point2 ? typesContent1.point2 : ""}` : Content === "typesContent2" ? `${typesContent2.point2 ? typesContent2.point2 : ""}` : `${typesContent3.point2 ? typesContent3.point2  : ""}`}</li>
                                <li>{Content === "typesContent1" ? `${typesContent1.point3 ? typesContent1.point3 : ""}` : Content === "typesContent2" ? `${typesContent2.point3 ? typesContent2.point3 : ""}` : `${typesContent3.point3 ? typesContent3.point3  : ""}`}</li>
                                <li>{Content === "typesContent1" ? `${typesContent1.point4 ? typesContent1.point4 : ""}` : Content === "typesContent2" ? `${typesContent2.point4 ? typesContent2.point4 : ""}` : `${typesContent3.point4 ? typesContent3.point4  : ""}`}</li>
                                <li>{Content === "typesContent1" ? `${typesContent1.point5 ? typesContent1.point5 : ""}` : Content === "typesContent2" ? `${typesContent2.point5 ? typesContent2.point5 : ""}` : `${typesContent3.point5 ? typesContent3.point5  : ""}`}</li>
                                <li>{Content === "typesContent1" ? `${typesContent1.point6 ? typesContent1.point6 : ""}` : ""}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="future__box">
                <h1 className="future__heading">Why Hydroponics is The Future of Farming?</h1>

                <div className="future__card">
                    <div className="card__1">
                        <img src="https://risehydroponics.in/wp-content/uploads/2017/11/icon-2.png" alt="" className="card__image" />
                        <p className="card__heading">Hyper Local Delivery:</p>
                    </div>
                    <div className="card__1">
                        <img src="https://risehydroponics.in/wp-content/uploads/2017/11/icon-6.png" alt="" className="card__image" />
                        <p className="card__heading">Beyond Seasons</p>
                    </div>
                    <div className="card__1">
                        <img src="https://risehydroponics.in/wp-content/uploads/2017/11/icon-4.png" alt="" className="card__image" />
                        <p className="card__heading">Better Output</p>
                    </div>
                </div>
            </div>
        </Container>
    )

}