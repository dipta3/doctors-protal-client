import React from 'react';
import bgImg from '../../../assets/images/appointment.png'
import PrimayButton from '../../../components/PrimaryButton/PrimayButton';
const ContractUs = () => {
    return (
        <section className='mt-32 text-center'
            style={{
                background: `url(${bgImg})`
            }}
        >
            <div className='py-20'>
                <h3 className='text-secondary font-bold text-xl '>Contract Us</h3>
                <h4 className='text-white mt-3 text-4xl'>Stay connected with us</h4>
                <div className=''>
                    <input type="text" placeholder="Type here" className="input mt-10 input-bordered input-md w-full max-w-xl" /><br />
                    <input type="text" placeholder="Type here" className="input mt-5 input-bordered input-md w-full max-w-xl" /><br />
                    <textarea placeholder="Bio" className="textarea textarea-bordered mt-5 mb-9 h-32 textarea-md w-full max-w-xl" ></textarea>
                </div>
                <PrimayButton className=''>Submit</PrimayButton>
            </div>
        </section>
    );
};

export default ContractUs;