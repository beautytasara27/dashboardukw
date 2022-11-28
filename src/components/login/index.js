import { useEffect, useState } from "react";
import AuthService from "../../services/api";
import { Navigate, useNavigate } from "react-router-dom";
const Login = ({setUser, user}) => {
  const navigate = useNavigate();
  const initialValues = {
    Username: "",
    Password: "",
    Nonce: new Date().toLocaleString()
  };
  const [formValues, setFormValues] = useState(initialValues);
  useEffect(()=>{
    if (user){
      navigate('/')
    }
  },[user, navigate])
  const onChangeFormValuesHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await AuthService.Authenticate(formValues);
      if (response) {
        console.log(response);
        setUser(response);
        return <Navigate to="/" replace />;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmitForm}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                name="Username"
                type="text"
                className="login__input"
                placeholder="User name"
                onChange={onChangeFormValuesHandler}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                name="Password"
                type="password"
                className="login__input"
                placeholder="Password"
                onChange={onChangeFormValuesHandler}
              />
            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">Log In</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
