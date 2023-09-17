import AddProfile from '../image/AddProfile.png';
import { auth, storage } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from 'react';

const Register = () => {

    const [error, setError] = useState(false);
    const registerUser = async (event) => {
        event.preventDefault();
        var name = event.target[0].value;
        var email = event.target[1].value;
        var password = event.target[2].value;
        var profilePic = event.target[3].files[0].value;

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, profilePic);


            uploadTask.on(
                (error) => {
                    // Handle unsuccessful uploads
                    setError(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                        updateProfile(response.user, {
                            name,
                            photURL:downloadURL
                        });
                        

                        console.log('File available at', downloadURL);
                    });
                }
            );














        } catch (error) {
            setError(true);
        }
    }



    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Logo</span>
                <span className="register">Register</span>
                <form onSubmit={registerUser}>
                    <input type="text" placeholder="Enter name" />
                    <input type="email" placeholder="Enter email" />
                    <input type="password" placeholder="Enter password" />

                    <input type="file" id="file" style={{ display: "none" }} />
                    <label htmlFor="file">
                        <img src={AddProfile} alt="" />
                        <span>Add profile picture</span>
                    </label>
                    <button className="btn">Sign Up</button>
                    {error && <span>Something went wrong</span> }
                </form>
                <p>You have an account? Login here</p>
            </div>
        </div>
    )
}

export default Register