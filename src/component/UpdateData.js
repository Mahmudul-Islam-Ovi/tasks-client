import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';

const UpdateData = () => {
    const user = useLoaderData();
    const [data, setData] = useState(user)

    const handleUpdate = event => {
        event.preventDefault();
        fetch(`https://tasks-server-tau.vercel.app/information/${user._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully')
                    event.target.reset();
                }
            })

    };

    const handleInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...data };
        newData[field] = value;
        setData(newData);
    }
    return (
        <div>
            <Header></Header>
            <h1>Update data : {user.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" defaultValue={user.name} onChange={handleInputChange} required placeholder="Name" name='name' className="input input-bordered mt-5 w-full max-w-xs" />
                <br />
                <select name="select" defaultValue={user.select} onChange={handleInputChange} className="select select-bordered mt-5 w-full max-w-xs">
                    <option disabled selected>Sector</option>
                    <option>Manufacturing</option>
                    <option>Construction materials</option>
                    <option>Electronics and Optics</option>
                    <option>Food and Beverage</option>
                    <option>Bakery & confectionery products</option>
                    <option>Beverages</option>
                </select>
                <br />
                <input type="checkbox" /> Agree to terms
                <br />
                <input type="submit" value="Update" className="btn mt-5 btn-secondary w-40 max-w-xs" />
            </form>
        </div>
    );
};

export default UpdateData;