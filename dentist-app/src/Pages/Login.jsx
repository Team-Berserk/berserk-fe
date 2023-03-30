import style from "./designs/Login.module.css"

export const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.loginContainer}>
        <div className={style.img}></div>
        <div className={style.loginInput}>
          <h1 className={style.title}>Hello</h1>
          <p className={style.p}>Login</p>
          <div className={style.inputs}>
            <div className={style.input}>
              <span>Name</span>
              <input className={style.miniInput} placeholder="Enter your full name" />
            </div>
            <div className={style.input}>
              <span>Email</span>
              <input className={style.miniInput} placeholder="Enter your email" />
            </div> 
            <div className={style.input}>
              <span>Password</span>
              <input className={style.miniInput} placeholder="Enter your password" />
            </div>
          </div>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};
