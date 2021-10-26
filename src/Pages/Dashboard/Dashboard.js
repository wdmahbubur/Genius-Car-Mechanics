import React, { useEffect, useState } from 'react';
const axios = require('axios');

const Dashboard = () => {
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

    const deleteService = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            axios.delete(`http://localhost:5000/delete-service/${id}`)
                .then(function (response) {
                    if (response.data.deletedCount === 1) {
                        alert("Successfully delete this service");
                        const remainingServices = services.filter(service => service._id !== id);
                        setServices(remainingServices);
                    }
                })
        }
    }
    return (
        <div className="container py-5">
            <h4 className="text-center">Service List</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => <tr key={service._id}>
                            <th scope="row">{service._id}</th>
                            <td>{service.title}</td>
                            <td>{service.price}</td>
                            <td>{service.description}</td>
                            <td>{service.image}</td>
                            <td><button className="btn btn-danger" onClick={() => deleteService(service._id)}>Delete</button></td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;