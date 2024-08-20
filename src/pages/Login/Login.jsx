import { useForm } from "react-hook-form";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication1.png";
import Input from "./../../components/Input/Input";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { validationForm } from "../../utilities/validation";
import toast from "react-hot-toast";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [disable, setDisable] = useState(true);
  const captchaRef = useRef(null);

  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();
  let from = location.state?.from?.pathname || "/";
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;

    try {
      const result = await login(email, password);
      navigate(from, { replace: true });
      toast.success("Login success");
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(2);
  }, []);

  const captchaValid = (event) => {
    event.preventDefault();
    const user_captcha_value = captchaRef.current.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <div
      className="hero bg-base-200 min-h-screen bg-contain"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div
        className="hero-content flex-col lg:flex-row shadow-2xl w-11/12 h-full lg:h-4/5 rounded-xl"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className="text-center lg:text-left hidden lg:flex">
          <figure>
            <img src={loginImg} alt="" />
          </figure>
        </div>

        <div className="card w-full max-w-sm shrink-0">
          <div>
            <h2 className="text-center text-4xl font-bold mt-2">Sign In</h2>
          </div>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
            <div className="form-control">
              <LoadCanvasTemplate />
              <input
                ref={captchaRef}
                type="text"
                className="input input-bordered "
              />
              <div>
                <button
                  onClick={captchaValid}
                  className="btn btn-xs bg-slate-500 border text-white"
                >
                  Valid Captcha
                </button>
              </div>
            </div>
            <div className="form-control mt-6">
              {isSubmitting ? (
                <button disabled className="btn bg-[#D1A054] text-white">
                  <span className="loading loading-ring loading-md text-[#D1A054]"></span>
                </button>
              ) : (
                <button
                  disabled={disable}
                  className="btn bg-[#D1A054] text-white"
                >
                  Sign In
                </button>
              )}
            </div>
          </form>
          <div className="text-center">
            <p className="text-[#D1A054] font-medium">
              New here?{" "}
              <Link className="font-bold" to="/signup">
                Create a New Accout
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
