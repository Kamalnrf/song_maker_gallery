import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register, clearError } from "../../actions/auth.action";
import CustomError from "../generics/custom_error";
import styles from "./signup.module.css";

const TermsOfService = (props) => (
  <CustomError
    header="Terms of service"
    message={[
      "Legal:",
      'THE WEBSITE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE WEBSITE OR THE USE OR OTHER DEALINGS IN THE WEBSITE.',
      "All names uploaded to this website is made immediately publically available on the internet. The user is responsible for only uploading names to this website which are allowed to be publically available. If the user of this website is uploading names of individuals under eighteen years of age for display in a gallery, it is the responsibility of the user to ensure that they adhere to any media disclosure or privacy policies that govern the sharing private information of minors on the internet.",
      "By accepting this agreement, you acknowledge that you are greater than 18 years old.",
      "Non-Legal:",
      "This website was made by me, a music teacher, by myself, as a hobby. There is no customer service department, there are no guarantees. I would not have made or shared this site with you if I didn't believe that it would be awesome for you and your students.",
      "That being said, I am a music teacher; not a software engineer. I offer no guarantee that this site will continue to function; I offer no guarantees that the cost will not exceed the revenue such that it forces me to shut it down.",
      "I can only guarantee that at the moment you are reading this, this website is a fantastic way for you to present your students' music lab compositions.",
      "The author of this website designed it to only ever store the first name and last initial of anyone whose names are uploaded for display in a gallery. Therefore, this site, theoretically, is COPPA compliant. However, the author of this website makes NO GUARANTEE WHATSOEVER that this feature will work as intended, because THE AUTHOR OF THE WEBSITE IS NOT A SOFTWARE ENGINEER. YOU SHOULD NEVER UPLOAD THE FULL NAME OF ANY PERSON UNDER THIRTEEN YEARS OF AGE TO THIS WEBSITE.",
    ]}
    onOk={() => props.onOk()}
  />
);

const signup = (props) => {
  const [emailInput, updateEmail] = useState("");
  const [usernameInput, updateUsername] = useState("");
  const [passwordInput, updatePassword] = useState("");
  const [passwordConfirm, updateConfirm] = useState("");
  const [noSpace, setNoSpace] = useState(false);
  const [blanket, setBlanket] = useState(null);
  const [TOS, setTOS] = useState(false);

  useEffect(() => {
    document.title = props.title;
  }, []);

  if (usernameInput.includes(" ") && !noSpace) {
    setNoSpace(true);
  } else if (!usernameInput.includes(" ") && noSpace) {
    setNoSpace(false);
  }

  const onOk = () => {
    setBlanket(null);
    props.clearError();
  };

  const submit = () => {
    if (passwordInput !== passwordConfirm) {
      setBlanket(
        <CustomError
          header="Passwords do not match"
          message={[""]}
          onOk={() => setBlanket(null)}
        />
      );
    } else if (!TOS) {
      setBlanket(
        <CustomError
          header="Terms of Service"
          message={["You must accept the terms of service to make an account"]}
          onOk={() => setBlanket(null)}
        />
      );
    } else if (
      emailInput === "" ||
      usernameInput === "" ||
      passwordInput === "" ||
      passwordConfirm === ""
    ) {
      setBlanket(
        <CustomError
          header="Blank Fields"
          message={["Required fields are blank", "All fields are required."]}
          onOk={() => setBlanket(null)}
        />
      );
    } else {
      props.register({
        email: emailInput,
        username: usernameInput,
        password: passwordInput,
      });
    }
  };

  let pass_bool = passwordInput.length >= 8;

  if (props.isAuthenticated) {
    return <Redirect to="/teacher" />;
  } else if (props.authError && !blanket) {
    setBlanket(
      <CustomError
        header="Registration Invalid"
        message={[
          "Email is not valid, username has already been taken",
          "Also, your username may not include special characters; only A-Z and 0-9",
        ]}
        onOk={onOk}
        justify={true}
      />
    );
  }
  return (
    <div>
      {blanket}
      <h1 className={styles.signup}>sign up!</h1>
      <br />
      <div className="description">
        <div className={styles.signup_module}>
          <h3>Email</h3>
          <input
            className={styles.input}
            onChange={(event) => updateEmail(event.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submit();
              }
            }}
          />
          <h3>Username</h3>
          <input
            style={noSpace ? { borderColor: "red" } : null}
            className={styles.input}
            value={usernameInput}
            onChange={(event) => updateUsername(event.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submit();
              }
            }}
          />
        </div>
        <div className={styles.signup_module}>
          <h3>Password</h3>
          <input
            type="password"
            className={styles.input}
            value={passwordInput}
            onChange={(event) => updatePassword(event.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submit();
              }
            }}
          />
          <h3>Confirm Password</h3>
          <input
            value={passwordConfirm}
            onChange={(e) => updateConfirm(e.target.value)}
            type="password"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submit();
              }
            }}
          />
        </div>
        {noSpace ? (
          <p style={{ textAlign: "center", color: "red" }}>
            Username may not contain spaces.
          </p>
        ) : null}
        {pass_bool ? (
          <p className={styles.met}>
            Your password is at least eigth characters long
          </p>
        ) : (
          <p className={styles.not_met}>
            Your password must be at least eight characters long
          </p>
        )}
        {/* <label for="tos"> */}
        <span style={{ position: "relative", bottom: "8px" }}>
          I agree to the{" "}
          <a
            onClick={() =>
              setBlanket(<TermsOfService onOk={() => setBlanket(null)} />)
            }
          >
            terms of service
          </a>
          {"     "}
        </span>
        <input type="checkbox" id="tos" onClick={() => setTOS(!TOS)}></input>
        <br />
        <button onClick={() => submit()} className={styles.sign_up}>
          Sign Up
        </button>
        <br />
        <Link to="/login">
          <button>Already have an account? Login here!</button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { register, clearError })(signup);












export const SignupDisabledPlaceholder = props => {
  return (
    <div className='description'>
      <h1>Signup Currently Disabled</h1>
      <p>
        This site is under active development, and you may not make a new
        account at this time.
      </p>
    </div>
  )
}
