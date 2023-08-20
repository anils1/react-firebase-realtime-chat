
const Login = () =>{
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Logo</span>
                <span className="login">Login</span>
                <form>
                    <input type="email" placeholder="Enter email" />
                    <input type="password" placeholder="Enter password" />
                    <button className="btn">Login</button>
                </form>
                <p>You don't have an account? Register here</p>
            </div>
        </div>
    )
}

export default Login