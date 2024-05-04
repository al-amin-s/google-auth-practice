// import { useContext } from "react";
// import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import Google from "./Google";
import GitHub from "./GitHub";


const Register = () => {

    const {createUser}=useAuth();




    const {
        register, handleSubmit, formState: { errors },
    } = useForm()

    const onSubmit = data => {
        const {email,password}=data
        createUser(email,password)
        .then(result=>{
            alert(result)
        })
        .catch(error=>{
            alert(error)
        })

    }

    return (
        <div>




            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>


                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered"
                                    {...register("fullName", { required: true })}
                                />
                                {errors.fullName && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered"
                                    {...register("photoUrl")}
                                />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span>This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">LogIn</Link>
                            </label>
                        </form>
                        <Google></Google>
                        <GitHub></GitHub>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Register;