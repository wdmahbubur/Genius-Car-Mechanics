import React from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios').default;

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/add-new-service', {
            title: data.service,
            price: data.price,
            description: data.description,
            image: data.image
        })
            .then(function (response) {
                if (response.data.insertedId) {
                    alert("Service Added Successful")
                }

            })
            .catch(function (error) {
                console.log(error);
            });
        reset();
    };

    return (
        <div className="container py-5">
            <h4 className="text-center">Add New Service</h4>

            <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
                <div className="my-3">
                    <label htmlFor="">Service Name</label>
                    <input {...register("service", { required: true })} className="form-control" />
                </div>
                <div className="my-3">
                    <label htmlFor="">Service Price</label>
                    <input {...register("price", { required: true })} className="form-control" />
                </div>
                <div className="my-3">
                    <label htmlFor="">Description</label>
                    <textarea {...register("description")} className="form-control" />
                </div>
                <div className="my-3">
                    <label htmlFor="">Service Image Url</label>
                    <input {...register("image", { required: true })} className="form-control" />
                </div>
                <input type="submit" className="btn btn-success" />
            </form>

        </div>
    );
};

export default AddService;