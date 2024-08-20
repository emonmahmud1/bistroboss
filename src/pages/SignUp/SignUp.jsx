import { useForm } from "react-hook-form";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication1.png";
import Input from "./../../components/Input/Input";
import { useContext } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { validationForm } from "../../utilities/validation";
import toast from "react-hot-toast";
const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate =useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    try {
      const result = await createUser(email, password);
      toast.success("Registered successfully please login");
      navigate('/')
    } catch (error) {
        console.log(error.Error);
        toast.error("error occurred: ");
    }
  };
  return (
    <div
      className="hero bg-base-200 min-h-screen bg-contain"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div
        className="hero-content flex-col lg:flex-row-reverse shadow-2xl w-11/12 h-full lg:h-4/5 rounded-xl"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className="text-center lg:text-left hidden lg:flex">
          <figure>
            <img src={loginImg} alt="" />
          </figure>
        </div>

        <div className="card w-full max-w-sm shrink-0">
          <div>
            <h2 className="text-center text-4xl font-bold mt-2">Sign Up</h2>
          </div>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <Input
                label="Name"
                placeholder="Type here"
                required={true}
                register={register("name")}
                error={errors.name}
              />
            </div>
            <div className="form-control">
              <Input
                label="Email"
                placeholder="Type here"
                required={true}
                register={register("email", validationForm.email)}
                error={errors.email}
              />
            </div>
            <div className="form-control">
              <Input
                label="Password"
                placeholder="Enter your password"
                required={true}
                type="password"
                register={register("password", validationForm.password)}
                error={errors.password}
              />
            </div>
            <div className="form-control mt-6">
              {" "}
              {isSubmitting ? (
                <button disabled className="btn bg-[#D1A054] text-white">
                  <span className="loading loading-ring loading-md text-[#D1A054]"></span>
                </button>
              ) : (
                <button className="btn bg-[#D1A054] text-white">Sign Up</button>
              )}
            </div>
          </form>
          <div className="text-center">
            <p className="text-[#D1A054] font-medium">
              Already have an accout?{" "}
              <Link className="font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
