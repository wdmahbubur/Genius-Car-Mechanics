import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';
import './Services.css';
const axios = require('axios');
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(function (response) {
                setServices(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
        , [])

    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;