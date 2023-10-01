import React, { useState } from "react";
import Add from "../image/AddProfile.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Loader = () => (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
);

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    setLoading(true);
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const profilePic = event.target[3].files[0];

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, name);

      await uploadBytesResumable(storageRef, profilePic).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(response.user, {
              name,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              name,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", response.user.uid), {});
            navigate("/");
          } catch (err) {
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">My Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleRegister}>
          <input required type="text" placeholder="name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="profilePic" />
          <label htmlFor="profilePic">
            <img src={Add} alt="" />
            <span>Add profile picture</span>
          </label>
          <button>Sign up</button>
          {loading && <Loader />}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
