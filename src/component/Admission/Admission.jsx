import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    
const [detail, setDetail] = useState([])
useEffect(()=>{
    fetch("/colleges.json")
    .then(res=> res.json())
    .then(data =>setDetail(data))
},[])
    return (
        <div>
            <p className=' uppercase font-sans text-4xl text-center mt-5'>---------UNiversities--------</p>
            <div className=' container mx-auto text-center mt-10'>
                    {
                        detail.map(d=><Link key={d.id} to = {`/admissionForm/${d?.name}`}><p className=' font-serif text-2xl mb-3'>{d.name}</p></Link>)
                    }

                
              
                
            </div>
        </div>
    );
};

export default Admission;