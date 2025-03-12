"use client";
import Image from "next/image";
import { useState } from "react";
import Screen from "./components/Screen";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [form, setForm] = useState(false);
  return (
    <div className="bg-white w-[100%] min-h-screen  relative">
      {form && (
        <>
          <Screen setForm={setForm} />
          <ContactForm setForm={setForm} />
        </>
      )}
      <div className="w-full h-full py-30 md:py-32 px-[14px] md:px-0 flex justify-center items-center">
        <div className="w-full md:w-[512px] h-auto flex flex-col justify-center items-center space-y-6 md:space-y-8 ">
          <div className="aspect-[400.1/569.24] md:aspect-auto w-full md:h-[652px] rounded-[12px] overflow-hidden flex justify-center items-center">
            <Image
              src="/assets/model.jpeg"
              alt="logo"
              width={512}
              height={652}
              className="object-cover"
            />
          </div>
          <div className="flex md:gap-[16px] flex-col md:flex-row w-full ">
            <button className="w-full text-[16px] text-[#26272D] py-[13px] rounded-t-[5px] md:rounded-[8px] border-[1px] border-[#E0E0E0]">
              Ntokozo Maseko • April 2024
            </button>
            <button
              onClick={() => setForm(!form)}
              className="w-full text-[#FFFFFF] cursor-pointer bg-[#26272D] md:rounded-[100px] py-[13px] border-[1px] border-[#26272D] rounded-b-[5px]  flex justify-center items-center"
            >
              Talk to Ntokozo Maseko
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
