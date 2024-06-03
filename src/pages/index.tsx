import { Inter } from "next/font/google";
import { FaRegCircle } from "react-icons/fa";
import { PiWaveSineDuotone } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [creatorStatus, setCreatorStatus] = useState("solo");
  const [firstName, setFirstName] = useState("");
  const [secondtName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState("");
  const [err, setErr] = useState("");

  return (
    <main
      className={` ${inter.className} h-screen bg-zinc-900 w-full flex items-center p-40 justify-center`}
    >
      <div className="w-full  bg-zinc-800 border border-gray-600 rounded-lg flex flex-row">
        <div className="w-[50%] py-20 flex flex-col justify-center px-20">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl tracking-tight font-semibold text-white">
              Chat to our team
            </h1>
            <p className="text-sm text-gray-300">
              Need help with something? Want a demo? Get in touch with friendly
              team and we'll get in touch within 2 hours
            </p>
          </div>
          <form className="py-6 flex flex-col gap-6">
            <div className="flex w-full flex-row gap-6 items-center">
              <input
                className="w-1/2 bg-transparent border-b border-gray-500 font-light text-sm py-2 outline-none  focus:border-b focus:border-gray-200"
                placeholder="First Name"
              />
              <input
                className="w-1/2 bg-transparent border-b border-gray-500 font-light text-sm py-2 outline-none  focus:border-b focus:border-gray-200"
                placeholder="Last Name"
              />
            </div>
            <input
              className="w-full bg-transparent border-b border-gray-500 font-light text-sm py-2 outline-none  focus:border-b focus:border-gray-200"
              placeholder="Job Title"
            />
            <input
              className="w-full bg-transparent border-b border-gray-500 font-light text-sm py-2 outline-none  focus:border-b focus:border-gray-200"
              placeholder="Email Address"
            />
            <input
              className="w-full bg-transparent border-b border-gray-500 font-light text-sm py-2 outline-none  focus:border-b focus:border-gray-200"
              placeholder="Phone Number"
            />
            <div className="flex flex-col py-4">
              <p className="text-white font-medium text-sm">
                Number of employees
              </p>
              <div
                onClick={() => setCreatorStatus("solo")}
                className={`flex gap-3 transition-all hover:opacity-80 cursor-pointer items-center flex-row py-3 w-full px-3 mt-2 rounded border ${
                  creatorStatus === "solo" ? "border=white" : "border-gray-500"
                } `}
              >
                <div className="">
                  <div className="p-2 border border-gray-500 rounded">
                    <GoPerson className="text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-sm">I'm a solo creator</h1>
                  <p className="w-max text-xs font-light text-gray-300">
                    I need to set up an account for myself
                  </p>
                </div>
              </div>
              <div
                onClick={() => setCreatorStatus("team")}
                className={`flex gap-3 transition-all hover:opacity-80 cursor-pointer items-center flex-row py-3 w-full px-3 mt-2 rounded border ${
                  creatorStatus === "team" ? "border=white" : "border-gray-500"
                } `}
              >
                <div className="">
                  <div className="p-2 border border-gray-500 rounded">
                    <GoPeople className="text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-sm">I'm part of a team</h1>
                  <p className="w-max text-xs font-light text-gray-300">
                    I need to set up an account for my team
                  </p>
                </div>
              </div>
            </div>
            <button className="text-sm tracking-tight text-black py-2 font-semibold transition-all hover:opacity-70 bg-white rounded-lg">
              Get in touch
            </button>
          </form>
        </div>
        <div className="relative w-[50%] flex flex-col justify-between flex-1 bg-[url('/bgmain.jpg')] m-1 rounded-lg bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative flex w-full justify-end z-10 py-3 px-4">
            <div className="flex flex-row items-center gap-2">
              <div className="bg-clip-padding border border-gray-500 rounded p-[0.1rem] bg-gray-200 backdrop-filter backdrop-blur-sm bg-opacity-20">
                <PiWaveSineDuotone className="text-gray-300" />
              </div>
              <p className="w-max text-white tracking-tight text-lg font-medium">
                Untitled UI
              </p>
            </div>
          </div>
          <div className="relative w-full py-6 flex gap-6 flex-col z-10 px-4">
            <p className="text-white leading-tight text-lg">
              Empowering innovation through cutting-edge software solutions. At
              Untitled UI, we transform ideas into reality with robust,
              scalable, and intuitive technologies tailored to your needs
            </p>
            <div className="flex flex-row w-full items-center justify-between">
              <div className="flex flex-col">
                <p className="w-max text-white text-sm tracking-tight">
                  Maya Rodwell
                </p>
                <p className="w-max text-xs font-light text-gray-300">
                  Founder & CEO
                </p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <FaRegCircle className="text-gray-300 -mt-[0.1rem]" />

                <p className="w-max text-white tracking text-sm font-medium">
                  Open Ventures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
