
import axios from "axios";
import { useEffect, useState } from "react";

const C2table = ({ doRefresh }) => {

    const [allcourse, setAllCourse] = useState([]);

    useEffect(() => {
        loadAllCourse();
    }, [doRefresh])

    const loadAllCourse = async () => {

        const { data } = await axios.get(
            `http://localhost:3000/course`
        );

        setAllCourse(data);
    }

    const handleDelete = async (id) => {

        await axios.delete(
            `http://localhost:3000/course/${id}`
        );

        loadAllCourse();
    }

    return (
        <>
            <center>
                <h1>Course Details</h1>

                <table border={2}>

                    <thead>
                        <tr>
                            <th>COURSE NAME</th>
                            <th>TRAINER</th>
                            <th>DURATION</th>
                            <th>FEES</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>

                    <tbody>

                        {allcourse.map((e) => (

                            <tr key={e.id}>

                                <td>{e.coursename}</td>
                                <td>{e.trainer}</td>
                                <td>{e.duration}</td>
                                <td>{e.fees}</td>

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

                <h3>Total Courses: {allcourse.length}</h3>

            </center>
        </>
    )
};

export default C2table;

