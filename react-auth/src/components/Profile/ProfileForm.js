import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "./../../store/auth-context";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitPassword = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB6Bxlw6FbRjFMWvit-BQEwGRhpPeLdLs4",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log("Changed password res:", res);
    });
  };

  return (
    <form className={classes.form} onSubmit={submitPassword}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          ref={newPasswordInputRef}
          minLength="7"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
