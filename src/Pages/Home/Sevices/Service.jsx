import { useEffect, useState } from "react";
import ViewService from "./ViewService";

const Service = () => {
    const [serviceData, setServiceData]= useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/services")
        .then(res=>res.json())
        .then(data=>setServiceData(data))
    },[])
    
    return (
        <>
            <section>
                <p className="text-red-400 font-bold text-center">Service</p>
                <h1 className="text-3xl font-bold text-center">Our Service Area</h1>
                <p className="text-center text-gray-200">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </section>
            <section className="grid grid-cols-3 gap-2 mt-5 mb-5">
                {
                    serviceData.map((service, index)=>(
                        <ViewService key={index} service={service}></ViewService>
                    ))
                }
            </section>
        </>
    );
};

export default Service;