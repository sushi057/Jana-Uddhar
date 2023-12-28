import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setName("");
    setPhoneNumber("");
    setEmail("");
    setMessage("");
    window.alert("Form submitted!");
  };

  return (
    <div className="mx-32 py-36 text-xl flex flex-col">
      <div className="text-7xl pb-10 font-bold text-secondary-600">
        Message us
      </div>
      <div className="flex flex-row justify-between font-semibold">
        <form onSubmit={submitForm} className="flex flex-col gap-4 items-start">
          <input
            type="text"
            value={name}
            name="Name"
            placeholder="Name"
            className="w-96 py-2 pl-4 rounded-md"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="number"
            value={phoneNumber}
            name="Phone Number"
            placeholder="Phone Number"
            className="w-96 py-2 pl-4 rounded-md"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <input
            type="text"
            value={email}
            name="Email"
            placeholder="Email"
            className="w-96 py-2 pl-4 rounded-md"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            value={message}
            placeholder="Message"
            className="w-96 h-48 py-2 pl-4 rounded-md"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <button
            type="submit"
            className=" px-4 py-3 mt-6 w-fit text-xl font-bold bg-secondary-500 hover:bg-secondary-600 transition-color duration-500 rounded-md"
          >
            Submit
          </button>
        </form>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.5347209947126!2d85.36280537418519!3d27.76249362305943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1c0f81d44d11%3A0x1447bdc26d5264d1!2sJana%20Uddhar%20Secondary%20School!5e0!3m2!1sen!2snp!4v1703769365865!5m2!1sen!2snp"
            width="700"
            height="460"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
