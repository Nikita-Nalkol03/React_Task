
import axios from "axios";
import { useState } from "react";

const Customer = ({ refresh }) => {

    const [customer, setCustomer] = useState({
        name: "",
        city: "",
        mobile: "",
        age: ""
    });

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let res = await axios.post(
            `http://localhost:3000/customer`,
            customer
        );

        console.log(res);

        clearForm();
        refresh(1);
    }

    const clearForm = () => {
        setCustomer({
            name: "",
            city: "",
            mobile: "",
            age: ""
        })
    }

    return (
        <>
            <center>
                <h1>Customer Form</h1>

                <form onSubmit={handleSubmit}>

                    Name:
                    <input
                        type="text"
                        name="name"
                        value={customer.name}
                        onChange={handleChange}
                        required
                    />
                    <br />

                    City:
                    <input
                        type="text"
                        name="city"
                        value={customer.city}
                        onChange={handleChange}
                        required
                    />
                    <br />

                    Mobile:
                    <input
                        type="number"
                        name="mobile"
                        value={customer.mobile}
                        onChange={handleChange}
                        required
                    />
                    <br />

                    Age:
                    <input
                        type="number"
                        name="age"
                        value={customer.age}
                        onChange={handleChange}
                        required
                    />
                    <br />

                    <button type="submit">
                        Add Customer
                    </button>

                </form>
            </center>
        </>
    )
};

export default Customer;

