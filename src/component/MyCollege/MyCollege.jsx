import React, { useEffect, useState } from 'react';

const MyCollege = () => {
    const [colleges, setColleges] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/student-info')
            .then(res => res.json())
            .then(data => {

                setColleges(data)

            })
    }, [])




    return (
        <div>

            <div>
                {
                    colleges.map(c => <div key={c._id} className=' gap-0 grid lg:grid-cols-2 md:grid-cols-2 mx-auto'>
                        <div className=' p-5 border border-slate-600 rounded-md w-2/4 mx-auto mt-10'>
                            <p className='mt-3'><span className='font-medium '>Name: </span>{c.name}</p>
                            <p className='mt-3'><span className='font-medium '>Address: </span>{c.address}</p>
                            <p className='mt-3'><span className='font-medium '>Email: </span>{c.email}</p>
                            <p className='mt-3'><span className='font-medium '>Phone Number: </span>{c.phoneNumber}</p>
                            <p className='mt-3'><span className='font-medium '>Subjects: </span>{c.subject}</p>
                            <p className='mt-3'><span className='font-medium '>Date Of Birth: </span>{c.dateOfBirth}</p>

                        </div>
                        <div className='w-3/4  mt-10'>
                            <div className="card lg:card-side mx-auto lg:w-[600px] h-[400px] bg-base-100 shadow-xl">
                                <figure><img className=' h-full' src={c.college.image} alt="Album" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{c.college.name}</h2>
                                    <div>
                                        <p className='mt-2'><span className='font-medium '>Events: </span>{c.college.events[0]}, {c.college.events[1]}, {c.college.events[2]}</p>
                                        <p className='mt-2'><span className='font-medium '>Sports: </span>{c.college.sports[0]}, {c.college.sports[1]}, {c.college.sports[2]}</p>
                                        <p className='mt-2'><span className='font-medium '>Admission Date: </span>{c.college.admission_date}</p>
                                        <p className='mt-2'><span className='font-medium '>Rating: </span>{c.college.rating}</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default MyCollege;