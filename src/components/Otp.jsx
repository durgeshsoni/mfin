import React from 'react'
import firebase from '../firebase'
import "../styles/drawer.css";



    
class Otp extends React.Component {
    handleChange = (e) =>{
      const {name, value } = e.target
      this.setState({
          [name]: value
        })
    }
    configureCaptcha = () =>{
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
          console.log("Recaptca varified")
        },
        defaultCountry: "IN"
      });
    }
    onSignInSubmit = (e) => {
      e.preventDefault()
      this.configureCaptcha()
      const phoneNumber = "+91" + this.state.mobile
      console.log(phoneNumber)
      const appVerifier = window.recaptchaVerifier;
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            console.log("OTP has been sent")
            // ...
          }).catch((error) => {
            // Error; SMS not sent
            // ...
            console.log("SMS not sent")
          });
    }
    onSubmitOTP = (e) =>{
      e.preventDefault()
      const code = this.state.otp
      console.log(code)
      window.confirmationResult.confirm(code).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user))
        alert("User is verified")
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
    }
    render(){
  return (
    <><h1 className="Drawerheading">Login Your Account!</h1>
    <p>Enter your mobile number</p>
    <input type="text" name="mobile" id="number" placeholder="Mobile Number..."  onChange={this.handleChange}/>
    <button>Get OTP</button>
    <input type="number" name="otp" id="otp" placeholder="Enter OTP" onChange={this.handleChange} />
    <button>Verify Now</button></>
  )
    }
}

export default Otp