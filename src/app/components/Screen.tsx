import React from 'react'

interface ScreenProps {
  setForm: (value: boolean) => void;
}

const Screen: React.FC<ScreenProps> = ({ setForm }) => {
  return <div onClick={() => setForm(false)}
  className="w-full h-full bg-[#26272D80] absolute" />;
}

export default Screen
