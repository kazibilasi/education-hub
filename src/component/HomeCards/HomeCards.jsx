import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeCards = () => {
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch("/colleges.json")
            .then(res => res.json())
            .then(data => setDetail(data.slice(0, 3))); // Extract the first 3 items
    }, []);



    return (
        <div >
           
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-auto lg:-mt-24 mt-[450px]'>

                {
                    detail.map(d => <div key={d.id} className="card mx-auto card-compact w-[450px] bg-base-100 shadow-xl">
                        <figure><img src={d?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{d?.name}</h2>
                            <div>
                                <p><span className='font-medium '>Events: </span>{d?.events?.[0]}, {d?.events?.[1]}, {d?.events?.[2]}</p>
                                <p><span className='font-medium '>Sports: </span>{d?.sports?.[0]}, {d?.sports?.[1]}, {d?.sports?.[2]}</p>
                                <p><span className='font-medium'>Rating:</span> {d?.rating}</p>
                                <p><span className='font-medium'>Admission Date:</span> {d?.admission_date}</p>
                                <p><span className='font-medium'>Research History:</span> {d?.research_history.description}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <Link ><button className="btn btn-sm rounded-full bg-orange-950 text-white">Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomeCards;