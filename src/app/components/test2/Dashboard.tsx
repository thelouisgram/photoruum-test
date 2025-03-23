"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Reusable Collapsible Card Component
const CollapsibleCard = ({
  title,
  isCollapsed,
  toggleCollapse,
  children,
}: {
  title: string;
  isCollapsed: boolean;
  toggleCollapse: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`w-full rounded-2xl ${
        !isCollapsed ? "h-[64px]" : "h-auto"
      } bg-white relative`}
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

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-[#EFEFEF] text-black"
      }`}
    >
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
      <div className="w-full px-[15px] space-y-2">
        {/* User Card */}
        <CollapsibleCard
          title="Content Dash"
          isCollapsed={isUserCardCollapsed}
          toggleCollapse={() => setIsUserCardCollapsed(!isUserCardCollapsed)}
        >
          <div
            className={`w-full h-[320px] pt-4 rounded-2xl bg-white  px-[30px] flex flex-col justify-between items-center relative`}
          >
            <div className="w-full flex flex-col items-center gap-4">
              <div className="flex gap-2 items-center">
                <Image
                  src="/assets/userLight.svg"
                  width={24}
                  height={24}
                  alt="avatar"
                />
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
                Submit your works for review for our STUCRUUM project. Remember
                to tick ☑ the ‘ARTRUUM’ checkbox if you’re also submitting for
                our ARTRUUM project.
              </p>
            </div>
            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-black text-white  py-2 rounded-lg  ">
              Submit
            </button>
          </div>
        </CollapsibleCard>

        {/* Submissions Card */}
        <CollapsibleCard
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

      {/* Footer */}
      <p className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm">
        2024 © PHOTORUUM FACILITY
      </p>
    </div>
  );
};

export default Dashboard;
