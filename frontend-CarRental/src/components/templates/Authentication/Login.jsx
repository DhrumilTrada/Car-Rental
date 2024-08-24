// // red theme
// // import "../../css/loginPage.css";
// // import React from "react";
// // import * as Components from "../React UI/Components";

// // function Login() {
// //   const [signIn, toggle] = React.useState(true);
// //   return (
// //     <div className="div-parent">
// //       <Components.Container>
// //         <Components.SignUpContainer signinIn={signIn}>
// //           <Components.Form>
// //             <Components.Title>Create Account</Components.Title>
// //             <Components.Input type="text" placeholder="Name" />
// //             <Components.Input type="email" placeholder="Email" />
// //             <Components.Input type="password" placeholder="Password" />
// //             <Components.Button>Sign Up</Components.Button>
// //           </Components.Form>
// //         </Components.SignUpContainer>

// //         <Components.SignInContainer signinIn={signIn}>
// //           <Components.Form>
// //             <Components.Title>Sign in</Components.Title>
// //             <Components.Input type="email" placeholder="Email" />
// //             <Components.Input type="password" placeholder="Password" />
// //             <Components.Anchor href="#">
// //               Forgot your password?
// //             </Components.Anchor>
// //             <Components.Button>Sigin In</Components.Button>
// //           </Components.Form>
// //         </Components.SignInContainer>

// //         <Components.OverlayContainer signinIn={signIn}>
// //           <Components.Overlay signinIn={signIn}>
// //             <Components.LeftOverlayPanel signinIn={signIn}>
// //               <Components.Title>Welcome Back!</Components.Title>
// //               <Components.Paragraph>
// //                 To keep connected with us please login with your personal info
// //               </Components.Paragraph>
// //               <Components.GhostButton onClick={() => toggle(true)}>
// //                 Sign In
// //               </Components.GhostButton>
// //             </Components.LeftOverlayPanel>

// //             <Components.RightOverlayPanel signinIn={signIn}>
// //               <Components.Title>Hello, Friend!</Components.Title>
// //               <Components.Paragraph>
// //                 Enter Your personal details and start journey with us
// //               </Components.Paragraph>
// //               <Components.GhostButton onClick={() => toggle(false)}>
// //                 Sigin Up
// //               </Components.GhostButton>
// //             </Components.RightOverlayPanel>
// //           </Components.Overlay>
// //         </Components.OverlayContainer>
// //       </Components.Container>
// //     </div>
// //   );
// // }

// // export default Login;


// // blue theme
// import React, { useState } from "react";
// import "../../css/loginPage.css";


// function LoginApp() {
//   // State to track if the user is in sign-up mode
//   const [isSignUpMode, setIsSignUpMode] = useState(false);

//   // Handlers for switching between modes
//   const handleSignUpClick = () => {
//     setIsSignUpMode(true);
//   };

//   const handleSignInClick = () => {
//     setIsSignUpMode(false);
//   };

//   return (
//     <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
//       <div className="forms-container">
//         <div className="signin-signup">
//           {/* Sign-in form */}
//           <form action="#" className="sign-in-form">
//             <h2 className="title">Sign in</h2>
//             <div className="input-field">
//               <i className="fas fa-user" />
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-lock" />
//               <input type="password" placeholder="Password" />
//             </div>
//             <input type="submit" value="Login" className="btn solid" />
//           </form>

//           {/* Sign-up form */}
//           <form action="#" className="sign-up-form">
//             <h2 className="title">Sign up</h2>
//             <div className="input-field">
//               <i className="fas fa-user" />
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-envelope" />
//               <input type="email" placeholder="Email" />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-lock" />
//               <input type="password" placeholder="Password" />
//             </div>
//             <input type="submit" className="btn" value="Sign up" />
//           </form>
//         </div>
//       </div>

//       {/* Panels for switching modes */}
//       <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <h3>New here?</h3>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
//               ex ratione. Aliquid!
//             </p>
//             <button className="btn transparent" onClick={handleSignUpClick}>
//               Sign up
//             </button>
//           </div>
//           <img src="img/log.svg" className="image" alt="" />
//         </div>
//         <div className="panel right-panel">
//           <div className="content">
//             <h3>One of us?</h3>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//               laboriosam ad deleniti.
//             </p>
//             <button className="btn transparent" onClick={handleSignInClick}>
//               Sign in
//             </button>
//           </div>
//           <img src="img/register.svg" className="image" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginApp;

import React, { useState } from "react";
import "../../css/loginPage.css"
function LoginApp() {
  // State to track if the user is in sign-up mode
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  // State to track if the user is in forget password mode
  const [isForgetPasswordMode, setIsForgetPasswordMode] = useState(false);

  // Handlers for switching between modes
  const handleSignUpClick = () => {
    setIsSignUpMode(true);
    setIsForgetPasswordMode(false);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
    setIsForgetPasswordMode(false);
  };

  const handleForgetPasswordClick = () => {
    setIsForgetPasswordMode(true);
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign-in form */}
          {!isForgetPasswordMode && (
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="forgot-password" onClick={handleForgetPasswordClick}>
                Forgot your password?
              </p>
            </form>
          )}

          {/* Sign-up form */}
          {!isForgetPasswordMode && (
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
            </form>
          )}

          {/* Forget Password form */}
          {isForgetPasswordMode && (
            <form action="#" className="forget-password-form">
              <h2 className="title">Forgot Password</h2>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Enter your email" />
              </div>
              <input type="submit" value="Reset Password" className="btn solid" />
              <p className="back-to-signin" onClick={handleSignInClick}>
                Back to Sign in
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Panels for switching modes */}
      {!isForgetPasswordMode && (
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button className="btn transparent" onClick={handleSignUpClick}>
                Sign up
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" onClick={handleSignInClick}>
                Sign in
              </button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginApp;
