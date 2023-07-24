import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Colleges = () => {
    const [colleges, setColleges] = useState([])
    useEffect(() => {
        fetch('colleges.json')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div className=''>
            <p className=' text-3xl font-serif text-center mt-16'>--------- Colleges --------</p>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:mt-20 mt-8'>
                {
                    colleges.map(college => <div key={college.id} className="card mx-auto card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={college.image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{college.name}</h2>
                            <p>Rating:{college.rating}</p>
                            <p>Admission Date:{college.admission_date}</p>
                            <div className="card-actions justify-end">
                                <Link to ={`/collegeDetails/${college.id}`}><button className="btn btn-sm bg-orange-950 rounded-full text-white">Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Colleges;