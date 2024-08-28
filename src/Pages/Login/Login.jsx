
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Auth Provider/AuthProvider";
const Login = () => {
    const {singIn}= useContext(AuthContext)
    const handleLogin = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email, password)
        .then(result=>{
            console.log(result);
        })
    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="email"
                            type="email"
                            placeholder="Write your email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            name="password"
                            type="password"
                            placeholder="Write your password"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <input
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit" value="Login"
                            />
                            <div>
                                <p>Don't have an account? <Link className="text-blue-700" to="/register"> Register</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;