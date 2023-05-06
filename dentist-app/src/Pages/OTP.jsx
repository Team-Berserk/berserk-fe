import OtpInput from "otp-input-react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useContext, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { DataContext } from "../Providers/DataContext";
import { toast } from "react-toastify";

export const OTP = () => {
  const [otp, setOtp] = useState("");
  const [number, setNumber] = useState("");
  const [success, setSuccess] = useState(false);
  const nav = useNavigate();
  const { Confitrm, requestAppointment } = useContext(DataContext);

  const Sent = () => {
    toast.success("Sent!", {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      closeOnClick: true,
      autoClose: 1000,
    });
  };

  const onCaptcha = async () => {
    if (!window?.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {},
        },
        auth
      );
    }
  };

  const onSignUp = async () => {
    await onCaptcha();
    setSuccess(!success);
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = "+" + number;

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    );
    Sent();
    window.confirmationResult = confirmationResult;
    return confirmationResult;
  };

  const onOTPVerify = () => {
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res.user.phoneNumber);
        requestAppointment();
        Confitrm();
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div id="recaptcha-container" />
      {success ? (
        <div className="border-2 border-rose-500 p-4 my-24 gap-2">
          <h2>Enter ur OTP</h2>
          <OtpInput
            OTPLength={6}
            otpType="number"
            disabled={false}
            value={otp}
            onChange={setOtp}
            className="border-2 border-rose-500"
          />
          <button
            onClick={onOTPVerify}
            className="bg-sky-400 p-3 rounded-2xl text-white shadow-md w-32 active:bg-sky-600 hover:bg-sky-500"
          >
            verify otp
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 w-96">
          <h2 className="text-center">Enter ur phone number to confirm</h2>
          <div className="flex justify-center">
            <PhoneInput
              defaultCountry="MN"
              placeholder="Утасны дугаар оруулна yy."
              value={number}
              onChange={setNumber}
              className="w-64"
            />
          </div>
          <button
            onClick={onSignUp}
            className="bg-sky-400 p-3 rounded-2xl text-white shadow-md w-32 active:bg-sky-600 hover:bg-sky-500"
          >
            send
          </button>
        </div>
      )}
    </div>
  );
};
