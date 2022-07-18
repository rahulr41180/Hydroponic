
import { Container } from "../styles/Home.Body.styles"

import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo, useCallback } from "react";

export const HomeBodyComponent = () => {

    const [serviceData, setServiceData] = useState([]);
    console.log('serviceData:', serviceData)

    useEffect(() => {

        getData();
    },[])

    const getData = async () => {
        try {
            const data = await axios.get("http://localhost:8080/ourservices");
            console.log('data:', data)
            setServiceData(data.data);
        }
        catch(error) {

        }
    }

    return (
       <Container>
           <h1 className="Heading">OUR SERVICES</h1>
           <hr className="line" />
           <p className="instruction"><b>Hydroponic Farming</b>: Rise Hydroponics serves the widest range of solutions for Hydroponics farm setups. With a brilliant and exceptional team of Agronomists, Engineers and Agritech experts, We always deliver outstanding results for Corporates, Individuals, HoReCa, Government Institutions and more.</p>
           <div className="content">
               {serviceData.map((element) => {
                   
                    return (
                        <div className="item__box">
                            <Link to={`/${element.navigation}`}>
                                <img src={element.image} alt="" />
                            </Link>
                            <p className="title">{element.title}</p>
                            <p className="description">{element.description}</p>
                        </div>
                    )

               })}
           </div>
       </Container>
    )

}