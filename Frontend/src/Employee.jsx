import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


function Employee() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [dept, setDept] = useState("");

    // console.log(name, role, email, dept);

    const empDetails = { name, role, email, dept }

    const empHandler = async (e) => {
        e.preventDefault();
        console.log(empDetails);

        const response = await fetch("http://localhost:3000/api/emp/add-emp", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(empDetails)
        })
        if (response.ok) {
            toast.success("Employee added successfully!");
        } else {
            toast.error("Failed to add employee.");
        }
    }

    return (
        <div className='empForm'>
            <div className="section">
                <form onSubmit={empHandler} action="">
                    <label htmlFor="emp-name">Emplyee Name:</label>
                    <input type="text" id='emp-name' name='name' onChange={(e) => setName(e.target.value)} /><br />
                    <label htmlFor="emp-role">Emplyee Role:</label>
                    <input type="text" id='emp-role' name='role' onChange={(e) => setRole(e.target.value)} /><br />
                    <label htmlFor="emp-email">Emplyee Email:</label>
                    <input type="email" id='emp-email' name='email' onChange={(e) => setEmail(e.target.value)} /><br />
                    <label htmlFor="emp-dept">Emplyee Dept:</label>
                    <input type="text" id='emp-dept' name='dept' onChange={(e) => setDept(e.target.value)} /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Employee