import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailInfo = () => {

    const collegeId = useParams()
    console.log(collegeId)

    const [detail, setDetail] = useState([])
    useEffect(() => {
        fetch("/colleges.json")
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])

    const college = detail.find(d => d.id == collegeId.id)
    return (
        <div >
            <div className="card mt-10 lg:card-side bg-base-100 shadow-xl mx-auto lg:w-[900px]">
                <figure><img className='w-full h-full' src={college?.image} alt="Album" /></figure>
                <div className="card-body w-3/4">
                    <h2 className="card-title">{college?.name}</h2>
                    <div>
                        <p><span className='font-medium '>Events: </span>{college?.events?.[0]}, {college?.events?.[1]}, {college?.events?.[2]}</p>
                        <p><span className='font-medium '>Sports: </span>{college?.sports?.[0]}, {college?.sports?.[1]}, {college?.sports?.[2]}</p>
                        <p><span className='font-medium'>Research History:</span> {college?.research_history.description}</p>
                        <p><span className='font-medium'>Rating:</span> {college?.rating}</p>
                        <p><span className='font-medium'>Admission Date:</span> {college?.admission_date}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailInfo;