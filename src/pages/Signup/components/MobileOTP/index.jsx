import React, { useState } from "react";
import PhoneComponent from "../../../../components/PhoneComponent";
import Spinner from "../../../../components/Spinner";

// LIBS
import { showWarningToast } from "../../../../libs/toastify";

const MobileOTP = () => {
  const [mobile, setMobile] = useState(null);
  const [otp, setOtp] = useState(null);
  const [loadingOTP, setLoadingOTP] = useState(false);
  const [otpReceived, setOTPReceived] = useState(false);

  const handleMobileChange = (value) => {
    setMobile(`+${value}`);
  };
  const handleOTPChange = (e) => {
    setOtp(e.target.value);
  };
  const disableSendOTPButton = mobile === null;

  const handleSendOTP = () => {
    setLoadingOTP(true);
    console.log(
      "**CALL THE FIREBASE API WITH MOBILE NUMBER TO GET OTP VERIFIED: ",
      mobile
    );
  };

  const handleVerifyOTP = () => {
    console.log("**CALL THE FIREBASE API TO VERIFY OTP: ", otp);
  };
  return (
    <>
      <div className="title">Enter Your Mobile Number</div>
      <div className="input">
        {/* <input
          className="inputField"
          type="number"
          placeholder="Mobile Number"
          onChange={handleMobileChange}
          onWheel={(e) => e.target.blur()}
          disable={loadingOTP || otpReceived}
        /> */}
        <PhoneComponent getPhoneValue={handleMobileChange} />
      </div>
      {otpReceived && (
        <>
          <div className="title">Enter OTP</div>
          <div className="input">
            <input
              className="inputField"
              type="number"
              placeholder="One Time Password"
              onChange={handleOTPChange}
              onWheel={(e) => e.target.blur()}
            />
          </div>
        </>
      )}
      <div className="getStarted">
        {!loadingOTP && (
          <button
            className={`buttonField ${
              disableSendOTPButton && `disabledButton`
            }`}
            disabled={disableSendOTPButton}
            onClick={handleSendOTP}
          >
            SEND OTP
          </button>
        )}
        {otpReceived && (
          <button
            className={`buttonField ${
              disableSendOTPButton && `disabledButton`
            }`}
            disabled={disableSendOTPButton}
            onClick={handleVerifyOTP}
          >
            VERIFY OTP
          </button>
        )}
        {loadingOTP && <Spinner text="Sending OTP" />}
      </div>
    </>
  );
};

export default MobileOTP;
