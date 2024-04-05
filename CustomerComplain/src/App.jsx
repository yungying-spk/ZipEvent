import background from "./assets/image/complaint-6161776.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'



function App() {
  
  const [error, setError] = useState({});
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    complaint: "",
  });

  function addToObject(e) {
    let newValues = { ...values, [e.target.name]: e.target.value };
    setValues(newValues);
  }

  function handleValidation(e) {
    
    e.preventDefault();

    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phonePattern = /^0\d{9}$/;
    const namePattern = /^[a-zA-Z]+$/;

    if (values.firstname === "") {
      errors.firstname = "Please enter your Firstname";
    } else if (!namePattern.test(values.firstname)) {
      errors.firstname = "Invalid characters: Only alphabets are allowed.";
    }

    if (values.lastname === "") {
      errors.lastname = "Please enter your Lastname";
    } else if (!namePattern.test(values.lastname)) {
      errors.lastname = "Invalid characters: Only alphabets are allowed.";
    }

    if (values.phone === "" && values.email === "") {
      errors.phone = "Please enter your Phone Number";
      errors.email = "Please enter your Email";
    } else if (values.phone !== "" || values.email === "") {
      if (!phonePattern.test(values.phone)) {
        console.log(values.phone);
        errors.phone = "Invalid Phone format";
    }  
    } else if (values.email!=="" && values.phone === "") {
      if( !emailPattern.test(values.email)){ errors.email = "Invalid Email format";}
     
    }

    if (values.complaint === "") {
      errors.complaint = "Please enter your Complaint";
    }
    if (Object.keys(errors).length == 0) {
      Swal.fire({
        title: "Please check your complaint again before submit",
        text: values.complaint,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Submit"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Successfully submitted",
            text: "Your  complaint has been received.",
            icon: "success"
          });
        }
      });
      console.log(values)
    }
    setError(errors);
  }

  return (
    <>
      <section className="  flex bg-[#00AEC7] gap-10 max-w-[1440px]">
        <img className="h-40" src={background} alt="image description" />
        <h1 className="title text-6xl flex flex-col w-full justify-center text-left text-white">
          Complaint Form
        </h1>
      </section>
      <section className="pt-10 pb-10 flex justify-center border-[2px] shadow-md">
        <form className="flex flex-col text-2xl">
          <div className="flex gap-10 items-center relative ">
            <label htmlFor="firstname" className=" flex gap-1">
              <p>Firstname</p> <p className="text-red-500">*</p>
            </label>

            <input
              type="text"
              id="firstname"
              name="firstname"
              className={
                error.firstname
                  ? "border-2 bg-gray-50 border-red-500 rounded-lg w-[300px] h-8 outline-none text-xl"
                  : " text-xl border bg-gray-50 border-gray-300 rounded-lg w-[300px] h-8 outline-none"
              }
              placeholder="EX. Jame"
              onChange={(e) => {
                addToObject(e);
              }}
            />
            {error.firstname && (
              <p className=" text-red-500 text-sm  absolute top-12 left-40">
                {error.firstname}
              </p>
            )}

            <label htmlFor="lastname" className="flex gap-2">
              <p>Lastname</p> <p className="text-red-500">*</p>
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="EX. Smith"
              onChange={(e) => {
                addToObject(e);
              }}
              className={
                error.lastname
                  ? "border-2 bg-gray-50 border-red-500 rounded-lg w-[300px] h-8 outline-none text-xl"
                  : " text-xl border bg-gray-50 border-gray-300 rounded-lg w-[300px] h-8 outline-none"
              }
            />
            {error.lastname && (
              <p className=" text-red-500 text-sm  absolute top-12 right-8">
                {error.lastname}
              </p>
            )}
          </div>

          <div className=" flex gap-10 items-center  relative">
            <label htmlFor="email" className=" flex gap-2">
              <p>Email</p> <p className=" text-red-500">*</p>{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="jame@example.com"
              onChange={(e) => {
                addToObject(e);
              }}
              className={
                error.email
                  ? "border-2 bg-gray-50 border-red-500 rounded-lg w-[300px] h-8 outline-none text-xl"
                  : " text-xl border bg-gray-50 border-gray-300 rounded-lg w-[300px] h-8 outline-none"
              }
            />
            {error.email && (
              <p className=" text-red-500 text-sm  absolute top-12 left-28">
                {error.email}
              </p>
            )}
          </div>

          <div className=" flex gap-10 items-center relative">
            <label htmlFor="phone" className=" flex gap-2">
              <p>Phone Number</p> <p className=" text-red-500">*</p>{" "}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="0999999999"
              maxLength={10}
              onChange={(e) => {
                addToObject(e);
              }}
              className={
                error.phone
                  ? "border-2 bg-gray-50 border-red-500 rounded-lg w-[300px] h-8 outline-none text-xl"
                  : " text-xl border bg-gray-50 border-gray-300 rounded-lg w-[300px] h-8 outline-none"
              }
            />
            {error.phone && (
              <p className=" text-red-500 text-sm  absolute top-12 left-52">
                {error.phone}
              </p>
            )}
          </div>

          <div className=" flex gap-10 items-start relative pt-4">
            <label
              htmlFor="complaint"
              className=" text-gray-900 dark:text-white flex gap-2"
            >
              <p>Complaint Abount</p> <p className=" text-red-500">*</p>
            </label>
            <textarea
              id="complaint"
              name="complaint"
              maxLength={1000}
              onChange={(e) => {
                addToObject(e);
              }}
              className={
                error.complaint
                  ? "w-[750px] h-[100px] border-  bg-gray-50 border-red-500 rounded-lg outline-none text-xl"
                  : "w-[750px] h-[100px] border-  bg-gray-50 border-gray-300 rounded-lg outline-none text-xl"
              }
            ></textarea>
            {error.complaint && (
              <p className=" text-red-500 text-sm  absolute top-28 left-60">
                {error.complaint}
              </p>
            )}
          </div>

          <div className="pt-10 flex justify-end">
            <button
              className="p-4 pl-10 pr-10 border-none rounded-xl text-xl bg-green-500 disabled:bg-slate-200"
              type="submit"
              onClick={handleValidation}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default App;
