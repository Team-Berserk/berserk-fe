import { MuiOtpInput } from "mui-one-time-password-input";
import { useContext, useEffect, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Providers/DataContext";
import { toast } from "react-toastify";
import Phone from "../Assets/Phone.svg";
import Message from "../Assets/Message.svg";

export const OTP = () => {
  const nav = useNavigate();
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(false);
  const [seconds, setSeconds] = useState(59);
  const [success, setSuccess] = useState(false);

  const { Confitrm, requestAppointment, phoneNumber, setPhoneNumber } =
    useContext(DataContext);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds !== 0 && timer) {
        setSeconds(seconds - 1);
      } else {
        setSeconds(59);
        setTimer(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, timer]);

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
    setTimer(true);
    if (phoneNumber.length === 8) {
      setSuccess(true);
      await onCaptcha();
      const appVerifier = window.recaptchaVerifier;

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        "+976" + phoneNumber,
        appVerifier
      );
      Sent();
      window.confirmationResult = confirmationResult;
      return confirmationResult;
    }
  };

  const onOTPVerify = () => {
    if (otp) {
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
    }
  };

  function isNumber(char) {
    return !isNaN(parseFloat(char)) && isFinite(char);
  }

  const numberValidator = (e) => {
    if (isNumber(e.target.value)) {
      setPhoneNumber(e.target.value);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div id="recaptcha-container"></div>
      {success ? (
        <div className="flex flex-col justify-between h-96 items-center">
          <div className="flex flex-col items-center gap-4 w-96">
            <img src={Message} alt="message" className="w-10" />
            <h2 className="text-3xl font-extrabold text-center">
              Утасны дугаар баталгаажуулах
            </h2>
            <h2 className="text-sm text-center font-medium">
              {`Таны  ******${phoneNumber.slice(
                6,
                8
              )} дугаарт мессежээр ирсэн 6 оронтой тоог оруулна yy.`}
            </h2>
            <MuiOtpInput
              value={otp && otp}
              onChange={setOtp}
              length={6}
              itemType={Number}
            />
          </div>

          <div className="flex flex-col items-center">
            <div className="flex gap-3">
              <div>00:{`${seconds < 10 ? "0" : ""}` + `${seconds}`}</div>
            </div>

            <button
              onClick={onSignUp}
              disabled={timer}
              className={`${timer ? "text-gray-400" : "text-green-500"}`}
            >
              Дахин илгээх
            </button>
          </div>

          <button
            onClick={onOTPVerify}
            className={`${
              otp.length === 6
                ? "ConfirmButton rounded-2xl"
                : "DisabledButton rounded-2xl"
            }`}
            disabled={!otp}
          >
            Verify OTP
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-around h-96 items-center">
          <div className="flex flex-col items-center gap-4 w-96">
            <img src={Phone} alt="PhoneVector" className="w-10" />
            <h2 className="text-3xl font-extrabold">Утасны дугаар</h2>
            <h2 className="text-sm text-center font-medium">
              Уулзалтаа баталгаажуулахын тулд утасны дугаараа оруулна уу.
            </h2>
            <div className="flex justify-center items-center border p-4 bg-gray-100 rounded-md w-60 gap-2">
              <div>+976</div>
              <input
                maxLength={8}
                type="tel"
                className="bg-gray-100 outline-none"
                placeholder="xxxxxxxx"
                value={phoneNumber}
                onChange={numberValidator}
              />
            </div>
          </div>
          <button
            onClick={onSignUp}
            className={`${
              phoneNumber && phoneNumber.length === 8
                ? "ConfirmButton rounded-2xl"
                : "DisabledButton rounded-2xl"
            }`}
            disabled={!phoneNumber}
          >
            send
          </button>
        </div>
      )}
    </div>
  );
};
