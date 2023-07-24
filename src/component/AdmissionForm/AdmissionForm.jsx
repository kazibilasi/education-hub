import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AdmissionForm = () => {
    const collegeName = useParams()

    const [colleges, setColleges] = useState([])
    useEffect(() => {
        fetch('/colleges.json')
            .then(res => res.json())
            .then(data => {
                const studentCollege = data.find(d=>d.name === collegeName?.id)
                setColleges(studentCollege)
            
              
            })
    }, [])


    console.log(collegeName?.id)

    const { user } = useContext(AuthContext);


    const handleAddAClass = event => {
        event.preventDefault();
        const form = event.target;
        const Name = form.name.value;
        const Subject = form.subject.value;
        const Email = form.email.value;
        const PhoneNumber = form.phoneNumber.value;
        const Address = form.Address.value;
        const dateOfBirth = form.dateOfBirth.value;
        const photo = form.photo.value;


        console.log(Subject, Name, PhoneNumber, Email, Address, dateOfBirth, photo);

        const addItems = { college: colleges, name: Name, subject: Subject, email: Email, phoneNumber: PhoneNumber, address: Address, dateOfBirth: dateOfBirth, photo: photo }
        console.log(addItems)
        fetch('http://localhost:5000/student-info', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItems)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Submission successful',
                        showConfirmButton: false,
                        timer: 1500
                    })


                }
            })
    };
    return (
        <div >

            <form onSubmit={handleAddAClass}>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 mt-10 w-[800px] gap-y-3 mx-auto'>
                    <div className="form-control w-full max-w-xs">

                        <input type="text" placeholder="Name" name='name' className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">

                        <input type="text" placeholder="Subject" name='subject' className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">

                        <input type="text" placeholder="Email" name='email'  className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">

                        <input type="number" placeholder="Phone Number" name='phoneNumber' className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">


                        <input type="text" placeholder="Photo" name='photo' className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">

                        <input type="date" placeholder="Date of Birth" name='dateOfBirth' className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <textarea className=' border rounded-xl' name="Address" placeholder='Address' id="" cols="80" rows="6"></textarea>
                    </div>



                </div>

                <div className=' text-center'>
                    <button type="submit" className='lg:w-[700px] bg-orange-950 text-white lg:py-1 p-5 mt-5 rounded-3xl'>Submit</button>
                </div>

            </form>


        </div>
    );
};

export default AdmissionForm;