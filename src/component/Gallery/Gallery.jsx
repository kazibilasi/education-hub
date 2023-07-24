import React from 'react';
import PhotoAlbum from "react-photo-album";

const photos = [
    { src: "https://www.internationalstudentinsurance.com/blog/wp-content/uploads/2012/10/shutterstock_94853899.jpg", width: 800, height: 600 },
    { src: "https://bpb-us-e2.wpmucdn.com/newsevents.illinoisstate.edu/dist/c/2/files/2016/03/istock-photo-students-graduating11.jpg", width: 1600, height: 900 },
    { src: "https://www.internationalstudentinsurance.com/blog/wp-content/uploads/2012/10/shutterstock_94853899.jpg", width: 800, height: 600 },
    { src: "https://www.internationalstudentinsurance.com/blog/wp-content/uploads/2012/10/shutterstock_94853899.jpg", width: 800, height: 600 },
    { src: "https://bpb-us-e2.wpmucdn.com/newsevents.illinoisstate.edu/dist/c/2/files/2016/03/istock-photo-students-graduating11.jpg", width: 1600, height: 900 },
    { src: "https://www.internationalstudentinsurance.com/blog/wp-content/uploads/2012/10/shutterstock_94853899.jpg", width: 800, height: 600 },

];

const Gallery = () => {
    return (
        <div className='mt-16 '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2'>

                <div className='w-[400px] lg:my-0 my-28 mx-auto'>
                    <p className=' text-center  font-serif mb-4 text-xl'>Graduates of University of Knowledgeville</p>
                    <PhotoAlbum layout="rows" photos={photos} />
                </div>
                <div className='w-[400px] lg:my-0 my-28 lg:mb-0 mb-28 mx-auto'>
                    <p className='text-center font-serif mb-4 text-xl'>Graduates of Tech Institute of Innovation</p>
                    <PhotoAlbum layout="rows" photos={photos} />
                </div>
                <div className='w-[400px] mx-auto'>
                    <p className=' text-center font-serif mb-4 text-xl'>Graduates of Arts & Culture University</p>
                    <PhotoAlbum layout="rows" photos={photos} />
                </div>

            </div>
        </div>
    );

};

export default Gallery;