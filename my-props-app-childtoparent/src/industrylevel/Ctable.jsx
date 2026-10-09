
import axios from "axios";
import { useEffect, useState } from "react";

const Ctable = ({ doRefresh }) => {

    const [allcustomer, setAllCustomer] = useState([]);

    useEffect(() => {
        loadAllCustomer();
    }, [doRefresh])

    const loadAllCustomer = async () => {

        const { data } = await axios.get(
            `http://localhost:3000/customer`
        );

        setAllCustomer(data);
    }

    const handleDelete = async (id) => {

        await axios.delete(
            `http://localhost:3000/customer/${id}`
        );

        loadAllCustomer();
    }

    return (
        <>
            <center>
                <h1>Customer Details</h1>

                <table border={2}>

                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>CITY</th>
                            <th>MOBILE</th>
                            <th>AGE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>

                    <tbody>

                        {allcustomer.map((e) => (

                            <tr key={e.id}>

                                <td>{e.name}</td>
                                <td>{e.city}</td>
                                <td>{e.mobile}</td>
                                <td>{e.age}</td>

                                <td>
                                    <button
                                        onClick={() => handleDelete(e.id)}
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </center>
        </>
    )
};

export default Ctable;

