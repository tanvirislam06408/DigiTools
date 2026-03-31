import React from 'react';
import badge from '../../../assets/Group.png'
import banner from '../../../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';
const Banner = () => {
    return (
        <div className='container mx-auto flex flex-col-reverse gap-4 md:flex-row justify-between items-center mt-20 p-3.5'>
            {/* text-content */}
            <div>
                <div className="badge badge-soft badge-primary py-4 rounded-2xl px-4"><div><img src={badge} alt="" /></div><h1 className='font-medium text-sm md:text-lg'>New: AI-Powered Tools Available</h1></div>
                <div className='space-y-4 mt-5'>
                    <h1 className='font-extrabold text-4xl md:text-7xl'>Supercharge Your <br /> Digital Workflow</h1>
                    <p className='text-[#627382] text-lg'>Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />

                        Explore Products
                    </p>
                    <div className='mt-4 flex gap-4'>
                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white text-[16px] rounded-3xl px-4 py-3">Explore Products</button>
                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold border-[#4F39F6] text-[16px] rounded-3xl px-4 py-3 bg-clip-text text-transparent">
                            <CiPlay1 className='text-[#4F39F6] '/>Watch Demo</button>
                    </div>
                </div>
            </div>


            {/* image */}
            <div className="">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;