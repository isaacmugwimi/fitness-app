import React, { useRef, useState } from "react";
import "./Email.css";
import emailjs from "@emailjs/browser";

const Email = () => {
  const form = useRef();
  const [toastMessage, setToastMessage] = useState(null);
  const [isError, setIsError] = useState("");

  // const style1 = { color: "green" };

  // const style2 = { color: "red" };
  // const toastState = isError === true ? style1 : style2;

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        "service_ohmi7p3",
        "template_8djtbwg",
        form.current,
        {
          publicKey: "XhOimFyTjNLxJu6y5",
        }
      );

      if (response && response.status === 200) {
        // Success
        setToastMessage("Email sent successfully!");
        setIsError = false;
      } else {
        // Failed

        setToastMessage("Failed to send email. Please try again.");
        setIsError = true;
      }
    } catch (error) {
      setToastMessage("An error occurred. Please try again.");
      setIsError = true;
    }
    // Hide the toast after 3 seconds
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="email" id="joinUs">
      <div className="email-left">
        <hr />
        <span>
          <span className="transparent-text">Ready to </span>
          <span>level up </span>
        </span>

        <span>
          your body <span className="transparent-text">with us?</span>
        </span>
      </div>
      <div className="email-right">
        <form
          action=""
          onSubmit={sendEmail}
          ref={form}
          className="email-right-div"
        >
          <input
            type="text"
            name="user_email"
            id=""
            placeholder="Enter email address"
          />
          <button>Join Now</button>
        </form>
        <div className="toastSpace">
          {toastMessage && (
            <div className={`${isError ? "error" : ""}`}>
              {toastMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Email;
