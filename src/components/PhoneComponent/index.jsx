import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";

// CSS
import "react-phone-input-2/lib/style.css";

const PhoneComponent = ({ getPhoneValue, ...props }) => {
  const [phone, setPhone] = useState(null);
  useEffect(() => {
    getPhoneValue(phone);
  }, [phone]);
  return (
    <PhoneInput
      country={"in"}
      value={phone}
      onChange={(phone) => setPhone(phone)}
      enableAreaCodes
    />
  );
};

export default PhoneComponent;
