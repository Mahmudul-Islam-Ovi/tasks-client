import React from 'react';
import { Link } from 'react-router-dom';

const DataDetails = ({ information, index }) => {
    const { _id, name, select } = information;


    const deleteUser = _id => {
        const agree = window.confirm(`Are you sure you want to delete ${name}`);
        if (agree) {
            fetch(`http://localhost:400/information/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Information Delete Successfully");
                    }
                })
        }

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{select}</td>
            <td onClick={() => deleteUser(_id)} className='btn  btn-outline btn-accen'>Delete</td>
            <td className='btn ml-5 btn-outline btn-accen' >
               
                <Link to={`/update/${_id}`}>Update</Link>
            </td>

        </tr>
    );
};

export default DataDetails;