import axios from "axios";
import { useEffect, useState } from "react";

const Student=()=>{

    const [allstudent,setAllStudent]=useState([]);
    const [student,setStudent]=useState({name:"", course:"",marks:"",gender:"",city:"",admissiondate:""});
    const [editId,setEditId]=useState(null);

    const editStudent=(e)=>{
        setStudent({
            name:e.name,
            course:e.course,
            marks:e.marks,
            gender:e.gender,
            city:e.city,
            admissiondate:e.admissiondate
        })
        setEditId(e.id);
    }

    const handleChange=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();

        const marks=Number(student.marks);

        const status=marks >= 90 ? "A+":
                     marks>= 75 ? "A":
                     marks >= 60 ? "B":
                     marks >= 40 ? "C": "FAIL";

        const updateStudent={...student,status};

        if (editId !== null){
            await axios.put(`http://localhost:3000/students/${editId}`,updateStudent);
            setEditId(null);
        }else{
             await axios.post(`http://localhost:3000/students`,updateStudent);
        }
        loadAllStudent();
        clearForm();
    }

    const clearForm=()=>{
        setStudent({
            name:"", course:"",marks:"",gender:"",city:"",admissiondate:""
        })
        setEditId(null);
    }

    const loadAllStudent=async(e)=>{
        const {data}=await axios.get(`http://localhost:3000/students`);
        setAllStudent(data);
    }

    useEffect(()=>{
        loadAllStudent();
    },[]);

    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:3000/students/${id}`);
        loadAllStudent();
    }

//     const handleUpdate=async(id)=>{
//             await axios.put(`http://localhost:3000/students
// /${id}`,student);
//        loadAllStudent();
//         clearForm();
//     }
    return (
        <>
        <center>
            <h1>Student Management System</h1>
            <form onSubmit={handleSubmit}>
                Name:<input type="name" name="name" value={student.name} onChange={handleChange} required /><br/>
                Course:<select name="course" value={student.course} onChange={handleChange} required >
                    <option value="">Select Course</option>
                    <option value="BCA">BCA</option>
                    <option value="BBA">BBA</option>
                    <option value="BSc">BSc</option>
                    <option value="BCom">BCom</option>
                     <option value="MCA">MCA</option>
                </select><br/>
                Marks:<input type="number" name="marks" value={student.marks} onChange={handleChange} required /><br/>

                Gender:<select name="gender" value={student.gender} onChange={handleChange} required >
                    <option value="">Select Gender</option>
                     <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                </select><br/>

                City:<select name="city" value={student.city} onChange={handleChange} required >
                    <option value="">Select City</option>
                    <option value="Pune">Pune</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Nagpur">Nagpur</option>
                </select><br/>

                Admission Date:<input type="date" name="admissiondate" value={student.admissiondate} onChange={handleChange} required /><br/>

                <button type="submit">{editId!==null ? "Update Student":"Add Student"}</button>
                   
            </form>
            <table border={2}>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>COURSE</th>
                        <th>MARKS</th>
                        <th>GENDER</th>
                        <th>CITY</th>
                        <th>ADMISSION DATE</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allstudent.map((e)=>(
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{e.course}</td>
                                <td>{e.marks}</td>
                                <td>{e.gender}</td>
                                <td>{e.city}</td>
                                <td>{e.admissiondate}</td>
                                <td>{e.status}</td>
                                <td>
                                    <button onClick={()=>handleDelete(e.id)}>Delete</button>
                                    <button onClick={()=>editStudent(e)} >Update</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </center>
        </>
    )
};
export default Student;