import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const EditImage = ({ refetch }) => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const imageStorageKey = 'd4926ea4d5adb9f79094a31d6e141835'
    const onSubmit = data => {
        console.log(data.image[0])
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result.success)
                if (result.success) {
                    console.log(result.data.url);
                    const img = result.data.url;
                    const userData = { img }
                    const url = `http://localhost:5000/picture/${user.email}`;
                    fetch(url, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        }, body: JSON.stringify(userData)
                    }).then(res => res.json()).then(result => {
                        // refetch()
                        return toast.success('Update successfully');
                    })
                }
            })
    }

    return (
        <div>
            <div className=''>
                <label for="edit-profile" class="btn my-8">Edit Photo</label>
                <input type="checkbox" id="edit-profile" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <label for="edit-profile" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Picture</span>
                                </label>
                                <input type="file"
                                    className="input input-bordered w-full"
                                    {...register("image")}
                                />
                            </div>
                            <input className='btn btn-natural my-4 block m-auto w-full font-bold' type="submit" value='Update' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default EditImage;