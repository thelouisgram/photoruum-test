import Image from 'next/image';
import React from 'react'
import { useState } from 'react'

interface ContactFormProps {
  setForm: (value: boolean) => void;
  form: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({setForm, form}) => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setForm(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      details: "",
    });
  }

  return (
    <div
      className={`w-full min-h-screen h-full md:w-[656px] ${!form ? '-right-[100%] md:-right-[656px]' : "right-0"} fixed z-[10] bg-white  overflow-y-scroll space-y-14 md:space-y-20 transition-all`}
    >
      <div className="w-full flex justify-between items-center py-9 border-b-[1px] border-[#E0E0E0] px-[14px] md:px-8">
        <h2 className="text-[20px] md:text-[24px] text-[#26272D]">
          Contact Ntokozo Maseko
        </h2>
        <button
          onClick={() => setForm(false)}
          className="text-[#26272D] text-[16px] w-auto flex items-center transition gap-2 cursor-pointer"
        >
          Exit
          <Image src="/assets/exit.svg" alt="exit" width={16} height={16} />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="mb-20 px-[14px] md:px-9">
        <div className="space-y-10 ">
          <div className="h-[84px] flex flex-col justify-between">
            <label className="block text-[#26272D] text-[18px]">
              Name & Surname
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name here"
              className="w-full text-[#A5A5A5] font-[300] h-24 focus:outline-none"
              onChange={handleChange}
              required
            />
            <div className="h-[0.75px] w-full bg-[#A5A5A5]" />
          </div>

          {/* Email Address */}
          <div className="h-[84px] flex flex-col justify-between">
            <label className="block text-[#26272D] text-[18px]">
              Your Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email address here"
              className="w-full text-[#A5A5A5] font-[300] h-24 focus:outline-none"
              onChange={handleChange}
              required
            />
            <div className="h-[0.75px] w-full bg-[#A5A5A5]" />
          </div>

          {/* Phone Number */}
          <div className="h-[84px] flex flex-col justify-between">
            <label className="block text-[#26272D] text-[18px]">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number here"
              className="w-full text-[#A5A5A5] font-[300] h-24 focus:outline-none"
              onChange={handleChange}
              required
            />
            <div className="h-[0.75px] w-full bg-[#A5A5A5]" />
          </div>

          {/* Shoot Detail */}
          <div className="h-[84px] flex flex-col justify-between">
            <label className="block text-[#26272D] text-[18px]">
              Shoot Detail
            </label>
            <textarea
              name="details"
              placeholder="e.g. Pre-wedding shoot, Birthday shoot, Single portrait"
              className="w-full text-[#A5A5A5] font-[300] h-24 focus:outline-none resize-none"
              rows={3}
              onChange={handleChange}
              required
            />
            <div className="h-[0.75px] w-full bg-[#A5A5A5]" />
          </div>
        </div>
        <div className="w-full flex md:justify-center">
          <button
            type="submit"
            className=" bg-[#26272D] w-[174px] py-4 text-white text-[16px] rounded-[100px] hover:bg-gray-800 transition mt-6 md:mt-20"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm
