import React from 'react'
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-white w-[100%] min-h-screen relative flex justify-center items-center">
      <div className="flex gap-4 flex-col">
        <Link
        href='/test1'
          className="w-full text-[#FFFFFF] cursor-pointer bg-[#26272D]
        md:rounded-[100px] px-8 py-[13px] border-[1px] border-[#26272D]
        rounded-b-[5px] flex justify-center items-center"
        >
          Test 1
        </Link>
        <Link
        href='/test2/signup'
          className="w-full text-[#FFFFFF] cursor-pointer bg-[#26272D]
        md:rounded-[100px] px-8 py-[13px] border-[1px] border-[#26272D]
        rounded-b-[5px] flex justify-center items-center"
        >
          Test 2
        </Link>
      </div>
    </div>
  );
}

export default Home;
