import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imagebb_key;
    const navigate = useNavigate();
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-protal-server-brown.vercel.app/appointmentSpecialty')
            const data = await res.json()
            return data;
        }

    })

    if (isLoading) {
        return <Loading></Loading>
    }
    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: imgData.data.url
                    }

                    fetch('https://doctors-protal-server-brown.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/mangedoctors');
                        })
                }
            })
    }
    return (
        <div className='w-96 p-7 '>
            <h2 className='text-2xl font-bold my-5 text-center'>Add A New Doctor</h2>

            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control  w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", { required: "Name is required" })}
                    />

                    {errors.name && <p className='text-error mt-1'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", { required: "Email is required" })}

                    />
                    {errors.email && <p className='text-error mt-1'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Specialty</span></label>
                    <select
                        {...register('specialty')}
                        className="select w-full max-w-xs input-bordered">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >
                                {specialty.name}
                            </option>)
                        }
                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file"
                        className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
                        {...register("image", { required: "Photo is required" })}
                    />

                    {errors.image && <p className='text-error mt-1'>{errors.image?.message}</p>}
                </div>
                <input className='btn mt-5 btn-accent w-full' value="Add Doctor" type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;