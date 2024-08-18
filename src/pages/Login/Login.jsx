import { useForm } from "react-hook-form";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication1.png";
import Input from "./../../components/Input/Input";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
const Login = () => {

    const [disable,setDisable] = useState(true);
    const captchaRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    loadCaptchaEnginge(2);
  }, []);

  const captchaValid = () => {
    const user_captcha_value = captchaRef.current.value
  
    if (validateCaptcha(user_captcha_value)) {
        setDisable(false)
    }

    else {
        setDisable(true)
    }
  };
  return (
    <div
      className="hero bg-base-200 min-h-screen bg-contain"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div
        className="hero-content flex-col lg:flex-row shadow-2xl w-11/12 h-4/5 rounded-xl"
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
                register={register("email")}
                error={errors.email}
              />
            </div>
            <div className="form-control">
              <Input
                label="Password"
                placeholder="Enter your password"
                required={true}
                type="password"
                register={register("password")}
                error={errors.password}
              />
            </div>
            <div className="form-control">
              <LoadCanvasTemplate />
             <input ref={captchaRef} type="text" className="input input-bordered "  />
              <div>
                <button onClick={captchaValid} className="btn btn-xs bg-slate-500 border text-white">
                  Valid Captcha
                </button>
              </div>
              {/* <label>
                <input onChange={captchaValid} type="checkbox" className="mr-2" />
                Valid captcha
              </label> */}
            </div>
            <div className="form-control mt-6">
              <button disabled={disable} className="btn bg-[#D1A054] text-white">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
