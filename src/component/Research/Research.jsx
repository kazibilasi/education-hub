import React from 'react';
import img from '../../assets/photo/Screenshot_45.png'
import img1 from '../../assets/photo/Screenshot_46.png'
import img2 from '../../assets/photo/Screenshot_48.png'
import { Link } from 'react-router-dom';

const Research = () => {
    return (
        <div className=' mt-20'>
            <p className=' text-center font-serif text-2xl mt-10 mb-6'>---------Students Research Paper-----</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img className='h-[300px]' src={img} alt="Shoes" /></figure>
                    <div className="card-body">


                        <div className="card-actions justify-center">
                            <Link to="https://scholarworks.uni.edu/cgi/viewcontent.cgi?article=4558&context=grp"><button className="btn btn-sm rounded-full bg-orange-950 text-white">view projects</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact  w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img className='h-[300px]' src={img1} alt="Shoes" /></figure>
                    <div className="card-body">

                        <div className="card-actions justify-center">
                            <Link to='https://scholarworks.uni.edu/cgi/viewcontent.cgi?article=4559&context=grp'><button className="btn btn-sm rounded-full bg-orange-950 text-white">view projects</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img className='h-[300px]' src={img2} alt="Shoes" /></figure>
                    <div className="card-body">

                        <div className="card-actions justify-center">
                            <Link to='https://scholarworks.uni.edu/cgi/viewcontent.cgi?article=4562&context=grp'><button className="btn btn-sm rounded-full bg-orange-950 text-white">view projects</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;