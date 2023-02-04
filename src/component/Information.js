import React, { useState } from 'react';

const Information = () => {
    const [data, setData] = useState({})

    const handleSend = event => {
        event.preventDefault();
        fetch('http://localhost:400/information', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
               if(data.acknowledged){
                alert("Information Add Successfully");
                
               }
            })
    };


    const handleInputBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...data };
        newData[field] = value;
        setData(newData);
    }
    return (
        <div>
            <form onSubmit={handleSend}>
                <input type="text" onBlur={handleInputBlur} required placeholder="Name" name='name' className="input input-bordered mt-5 w-full max-w-xs" />
                <br />
                <select name="select" onBlur={handleInputBlur} className="select select-bordered mt-5 w-full max-w-xs">
                    <option disabled selected>Sector</option>
                    <option>Manufacturing</option>
                    <option>Construction materials</option>
                    <option>Electronics and Optics</option>
                    <option>Food and Beverage</option>
                    <option>Bakery & confectionery products</option>
                    <option>Beverages</option>
                </select>
                <br />
                <input  type="checkbox" /> Agree to terms
                <br />
                <input type="submit" value="Save" className="btn mt-5 btn-secondary w-40 max-w-xs" />
            </form>
        </div>
    );
};

export default Information;