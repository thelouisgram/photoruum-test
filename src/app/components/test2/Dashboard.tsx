"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Reusable Collapsible Card Component
const CollapsibleCard = ({
  title,
  isCollapsed,
  toggleCollapse,
  children,
  isDarkMode,
}: {
  title: string;
  isCollapsed: boolean;
  toggleCollapse: () => void;
  children: React.ReactNode;
  isDarkMode: boolean;
}) => {
  return (
    <div
      className={`w-full rounded-2xl ${!isCollapsed ? "h-[64px]" : "h-auto"} ${
        isDarkMode ? "bg-[#000000]" : "bg-[#fff]"
      } `}
    >
      {isCollapsed ? (
        <div className="w-full h-full relative">
          <button
            onClick={toggleCollapse}
            className="absolute w-6 h-6 top-4 right-4 justify-center items-center flex cursor-pointer z-10"
          >
            <div className="w-[14px] h-[1.5px] bg-[#A5A5A5]" />
          </button>
          {children}
        </div>
      ) : (
        <div className="flex justify-between w-full h-full items-center px-4">
          <h3 className="font-[400] text-[20px] leading-[18px] tracking-[-0.02em]">
            {title}
          </h3>
          <button
            onClick={toggleCollapse}
            className="flex cursor-pointer w-6 h-4 justify-center items-center"
          >
            <Image src="/assets/down.svg" width={12} height={6} alt="down" />
          </button>
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  // Toggle light/dark mode
  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
    document.documentElement.classList.toggle("light", !newMode);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const [isUserCardCollapsed, setIsUserCardCollapsed] = useState(false);
  const [isSubmitPhotosCollapsed, setIsSubmitPhotosCollapsed] = useState(false);
  const [isSubmissionsCollapsed, setIsSubmissionsCollapsed] = useState(false);

  const logoSrc = isDarkMode ? "/assets/logoDark.svg" : "/assets/logoLight.svg";
  const burgerSrc = isDarkMode
    ? "/assets/burgerDark.svg"
    : "/assets/burgerLight.svg";
  const stucrummSrc = isDarkMode
    ? "/assets/stucruumDark.svg"
    : "/assets/stucruumLight.svg";
  const userSrc = isDarkMode
    ? "/assets/userDark.svg"
    : "/assets/userLight.svg";
  const imageSrc = isDarkMode
    ? "/assets/imageDark.svg"
    : "/assets/imageLight.svg";

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-[#161616] text-white" : "bg-[#EFEFEF] text-black"
      } flex flex-col justify-between`}
    >
      <div>
        <header className="h-[72px] px-4 w-full flex justify-between items-center">
          <div className="flex gap gap-[7.79px] items-center">
            <Image src={logoSrc} width={35.37} height={35.37} alt="logo" />
            <Image
              src={stucrummSrc}
              width={108.8394775390625}
              height={15.396738052368164}
              alt="logo"
            />
          </div>
          <div>
            <Image src={burgerSrc} width={24} height={8} alt="burger" />
          </div>
        </header>
        <div className="w-full px-[15px] space-y-2">
          {/* User Card */}
          <CollapsibleCard
            isDarkMode={isDarkMode}
            title="Content Dash"
            isCollapsed={isUserCardCollapsed}
            toggleCollapse={() => setIsUserCardCollapsed(!isUserCardCollapsed)}
          >
            <div
              className={`w-full h-[320px] pt-4 rounded-2xl  px-[30px] flex flex-col justify-between items-center relative ${
                isDarkMode ? "bg-[#000000]" : "bg-[#fff]"
              }`}
            >
              <div className="w-full flex flex-col items-center gap-4">
                <div className="flex gap-2 items-center">
                  <Image src={userSrc} width={24} height={24} alt="avatar" />
                  <Image
                    src="/assets/down.svg"
                    width={12}
                    height={6}
                    alt="down"
                  />
                </div>
                <h2 className="font-medium text-[32px] leading-[24px] tracking-[-0.02em]">
                  Fiifi Junior
                </h2>
                <p className="font-light text-[20px] leading-[16px] tracking-[-0.02em] text-[#808080]">
                  Good afternoon!
                </p>
              </div>
              <div className="flex gap-1 font-light items-center mb-12 text-[14px] leading-[16px] tracking-[-0.02em] text-[#808080]">
                <Image
                  src="/assets/Info Circle.svg"
                  width={18}
                  height={18}
                  alt="info"
                />
                <p>Content data appears here</p>
              </div>
            </div>
          </CollapsibleCard>

          {/* Submit Photos Card */}
          <CollapsibleCard
            isDarkMode={isDarkMode}
            title="Submit Photos"
            isCollapsed={isSubmitPhotosCollapsed}
            toggleCollapse={() =>
              setIsSubmitPhotosCollapsed(!isSubmitPhotosCollapsed)
            }
          >
            <div className="w-full min-h-[282px] p-4 flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <h3 className="text-[#000000] font-[400] text-[20px] leading-[18px] tracking-[-0.02em]">
                  Submit Photos
                </h3>
                <p className="text-[#808080] font-light text-[14px] leading-[20px] tracking-[-0.02em]">
                  Submit your works for review for our{" "}
                  <span className="font-[500]">STUCRUUM</span> project. Remember
                  to tick ☑ the ‘ARTRUUM’ checkbox if you’re also submitting for
                  our <span className="font-[500]">ARTRUUM</span> project.
                </p>
              </div>
              <button
                className={` ${
                  isDarkMode
                    ? "bg-[#fff] text-black"
                    : "bg-[#000000] text-white"
                } 
                mt-4 w-full flex items-center justify-center gap-2   py-2 rounded-lg 
                `}
              >
                <Image src={imageSrc} width={24} height={24} alt="upload" />
                <p>Submit</p>
              </button>
            </div>
          </CollapsibleCard>

          {/* Submissions Card */}
          <CollapsibleCard
            isDarkMode={isDarkMode}
            title="Submissions"
            isCollapsed={isSubmissionsCollapsed}
            toggleCollapse={() =>
              setIsSubmissionsCollapsed(!isSubmissionsCollapsed)
            }
          >
            <div className="w-full min-h-[320px] h-auto p-4 flex flex-col justify-between">
              <div className="flex flex-col gap-6 h-full">
                <h3 className="text-[#000000] font-[400] text-[20px] leading-[18px] tracking-[-0.02em]">
                  Submissions
                </h3>
                <div className="w-full h-full flex justify-center items-center">
                  <div className="flex gap-1 items-center mt-[118px]">
                    <Image
                      src="/assets/Info Circle.svg"
                      width={18}
                      height={18}
                      alt="info"
                    />
                    <p className="text-[#808080] font-light text-[14px] leading-[20px] tracking-[-0.02em]">
                      All submissions will appear here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleCard>
        </div>
      </div>

      {/* Footer */}
      <div className="flex w-full justify-between h-full items-center pt-[82px] pb-[22px] px-4">
        <button
          onClick={toggleMode}
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 flex items-center px-1 cursor-pointer
      ${isDarkMode ? "bg-[#000000]" : "bg-[#fff]"}`}
        >
          <div
            className={`w-4 h-4  rounded-full shadow-md transform transition-transform duration-300 
        ${
          isDarkMode ? "translate-x-6 bg-[#fff]" : "translate-x-0 bg-[#000000]"
        }`}
          ></div>
        </button>
        <p
          className={`text-center  text-[12px] ${
            isDarkMode ? "text-[#fff]" : "text-[#000000]"
          }`}
        >
          2024 © PHOTORUUM FACILITY
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
