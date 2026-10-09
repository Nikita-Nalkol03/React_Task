
import axios from "axios";
import { useState } from "react";

const Course = ({ refresh }) => {

    const [course, setCourse] = useState({
        coursename: "",
        trainer: "",
        duration: "",
        fees: ""
    });

    const handleChange = (e) => {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let res = await axios.post(
            `http://localhost:3000/course`,
            course
        );

        console.log(res);

        clearForm();
        refresh(1);
    }

    const clearForm = () => {
        setCourse({
            coursename: "",
            trainer: "",
            duration: "",
            fees: ""
        })
    }

    return (
        <>
            <center>
                <h1>Course Form</h1>

                <form onSubmit={handleSubmit}>

                    Course Name:
                    <input
                        type="text"
                        name="coursename"
                        value={course.coursename}
                        onChange={handleChange}
                        required
                    />
                    <br />

                    Trainer Name:
                    <input
                        type="text"
                        name="trainer"
                        value={course.trainer}
                        onChange={handleChange}
                        required
                    />
                    <br />

                    Duration:
                    <input
                        type="text"
                        name="duration"
                        value={course.duration}
                        onChange={handleChange}
                        required
                    />
                    <br />

                    Fees:
                    <input
                        type="number"
                        name="fees"
                        value={course.fees}
                        onChange={handleChange}
                        required
                    />
                    <br />

                    <button type="submit">
                        Add Course
                    </button>

                </form>
            </center>
        </>
    )
};

export default Course;

