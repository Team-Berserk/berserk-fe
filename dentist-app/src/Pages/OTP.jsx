import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";

export const OTP = () => {
  const [otp, setOtp] = useState("");
  const [number, setNumber] = useState("");
  const [success, setSuccess] = useState(false);
  const nav = useNavigate();

  const onCaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignUp();
          },
          "expired-callback": () => {
            console.log("gg");
          },
        },
        auth
      );
    }
  };

  const onSignUp = () => {
    onCaptcha();
    setSuccess(!success);
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = "+" + number;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("otp successfully sent!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onOTPVerify = () => {
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res.user.phoneNumber);
        window.localStorage.setItem("phoneNumber", res.user.phoneNumber);
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div id="recaptcha-container"></div>
      {success ? (
        <div>
          <div>
            <h2>Enter ur OTP</h2>
            <OtpInput
              OTPLength={6}
              otpType="number"
              disabled={false}
              value={otp}
              onChange={setOtp}
            />
            <button onClick={onOTPVerify}>verify otp</button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h2>Enter ur phone number to confirm your appointment</h2>
            <PhoneInput country={"mn"} value={number} onChange={setNumber} />
            <button onClick={onSignUp}>send</button>
          </div>
        </div>
      )}
    </div>
  );
};
