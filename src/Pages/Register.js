
const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Logo</span>
                <span className="register">Register</span>
                <form>
                    <input type="text" placeholder="Enter name" />
                    <input type="email" placeholder="Enter email" />
                    <input type="password" placeholder="Enter password" />
                    <button className="btn">Regsiter</button>
                </form>
                <p>You have an account? Login here</p>
            </div>
        </div>
    )
}

export default Register