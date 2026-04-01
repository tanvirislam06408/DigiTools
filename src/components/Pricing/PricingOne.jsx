import React from 'react';

const PricingOne = () => {
    return (
        <div className='h-full'>
                <div className="card flex flex-col bg-base-100 shadow-sm border border-gray-100 h-full rounded-2xl">
                    <div className="card-body h-full flex flex-col flex-1">
                        <h1 className="font-bold text-2xl">Starter</h1>
                        <p className="text-[#627382] text-[16px]">Perfect for getting started</p>
                        <p className="font-bold text-4xl">$0<span className="text-[16px] font-normal text-[#627382]">/month</span></p>
                        <div className="flex-1">
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>

                        </ul>
                        </div>
                        <div className="mt-auto">
                            <button className="btn  btn-block rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white">Get Started Free</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default PricingOne;