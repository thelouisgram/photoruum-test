"use client";
import Image from "next/image";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const ValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    console.log("FormData", values);
    router.push("/test2/dashboard");
  };

  return (
    <div className="w-[100%] h-[100%] min-h-screen bg-[#fff] relative">
      <header className="h-[72px] px-4 w-full flex justify-between items-center">
        <div className="flex gap gap-[7.79px] items-center">
          <Image
            src="/assets/logoLight.svg"
            width={35.36527633666992}
            height={35.36527633666992}
            alt="logo"
          />
          <Image
            src="/assets/stucruumLight.svg"
            width={108.8394775390625}
            height={15.396738052368164}
            alt="logo"
          />
        </div>
        <div>
          <Image
            src="/assets/burgerLight.svg"
            width={24}
            height={8}
            alt="burger"
          />
        </div>
      </header>
      <div className="w-full relative h-[312px]">
        <Image
          src="/assets/players.png"
          width={472}
          height={320}
          alt="players"
          priority
          className="w-full object-cover h-full"
        />
        <div className="font-light text-[14px] leading-[14px] tracking-[-0.02em] absolute z-[11] left-[15px] bottom-[25px] flex gap-1">
          Work by <span className=" font-[400]">Kenneth Gueke</span>
          <Image
            src="/assets/togoFlag.png"
            width={1280}
            height={792}
            alt="Ghana Flag"
            className='w-6 h-4'
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/72"></div>
      </div>

      <div className="w-full py-12 px-[15px] flex flex-col gap-4 border-b-[.5px] border-[#A5A5A5]">
        <div className="flex flex-wrap gap-2 text-[#000000]">
          <h3 className="font-[500] text-[24px] leading-[24px] tracking-[-0.02em]">
            Sign up
          </h3>
          <p>•</p>
          <h4 className="flex font-[300] text-[18px] leading-[24px] tracking-[-0.02em]">
            Already have an account?{" "}
            <span className="ml-1 font-[400] underline"> Login</span>
          </h4>
        </div>
        <p className="text-[#808080] font-light text-[16px] leading-[22px] tracking-[-0.02em]">
          Create your account to unlock your creative potential with our
          photography community
        </p>
      </div>
      <div className="px-[15px] py-12 w-full">
        <Formik
          initialValues={initialValues}
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* First Name */}
              <div className="flex flex-col gap-4">
                <label className="block text-[#000000] font-[400]">
                  First name
                </label>
                <Field
                  type="text"
                  name="firstName"
                  required
                  placeholder="Your name"
                  className="w-full p-3 border border-[#A5A5A5] rounded-lg  placeholder:text-[#A5A5A5] text-[#000000] font-light"
                />
              </div>
              {/* Last Name */}
              <div className="flex flex-col gap-4">
                <label className="block text-[#000000] font-[400]">
                  Last name
                </label>
                <Field
                  type="text"
                  name="lastName"
                  required
                  placeholder="Your last name"
                  className="w-full p-3 border border-[#A5A5A5] rounded-lg  placeholder:text-[#A5A5A5] text-[#000000] font-light"
                />
              </div>
              {/* Email */}
              <div className="flex flex-col gap-4">
                <label className="block text-[#000000] font-[400]">Email</label>
                <Field
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  className="w-full p-3 border border-[#A5A5A5] rounded-lg  placeholder:text-[#A5A5A5] text-[#000000] font-light"
                />
              </div>
              {/* Password */}
              <div className="flex flex-col gap-4">
                <label className="block text-[#000000] font-[400]">
                  Create password
                </label>
                <Field
                  type="password"
                  name="password"
                  required
                  placeholder="Enter password"
                  className="w-full p-3 border border-[#A5A5A5] rounded-lg  placeholder:text-[#A5A5A5] text-[#000000] font-light"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white p-3 rounded-lg font-[400] transition mt-2 cursor-pointer"
              >
                Let&apos;s go!
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="text-center font-light text-[12px] leading-[12px] tracking-[0em] mt-[78px] pb-[16px] text-[#000000] ]">
        2024 © PHOTORUUM FACILITY{" "}
      </div>
    </div>
  );
};

export default SignUp;
