import { useFormik } from "formik";
import { RegistrationFormStyled } from "./RegistrationFormStyled";
import GoogleButton from "../GoogleButton/GoogleButton";
import { registerValidationSchema } from "../validation/validationSchema";

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: registerValidationSchema,

    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <RegistrationFormStyled>
      <GoogleButton />
      <form className="form" onSubmit={formik.handleSubmit}>
        <label className="formLabel" htmlFor="name">
          Ім’я
          <span className="formLabelStar"> *</span>
        </label>
        <input
          id="name"
          type="text"
          className="formInput"
          name="name"
          placeholder="..."
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="formGroup">
          <label className="formLabel" htmlFor="email">
            Електронна адреса
            <span className="formLabelStar"> *</span>
          </label>
          <input
            id="email"
            type="email"
            className="formInput"
            name="email"
            placeholder="your@email.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="inputError">{formik.errors.email}</div>
          )}
        </div>
        <label className="formLabel" htmlFor="password">
          Пароль
          <span className="formLabelStar"> *</span>
        </label>
        <input
          id="password"
          type="password"
          className="formInput"
          name="password"
          placeholder="..."
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label className="formLabel" htmlFor="confirmPassword">
          Підтвердити пароль
          <span className="formLabelStar"> *</span>
        </label>
        <input
          id="confirmPassword"
          type="password"
          className="formInput"
          name="confirmPassword"
          placeholder="..."
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="wrapperButton">
          <button type="button" className="authButton">
            Зареєструватися
          </button>
        </div>
        <div className="loginContainer">
          Вже з нами?
          <a href="#" className="login">
            Увійти
          </a>
        </div>
      </form>
    </RegistrationFormStyled>
  );
};

export default RegistrationForm;