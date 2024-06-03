import { Inter } from "next/font/google";
import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { PiWaveSineDuotone } from "react-icons/pi";
import { FaRegCircle } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [creatorStatus, setCreatorStatus] = useState("solo");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState<any>(null);
  const [jobTitle, setJobTitle] = useState("");
  const [err, setErr] = useState("");

  const handleSumbit = async (e: any) => {
    e.preventDefault();

    const formData = {
      firstName: firstName,
      secondName: secondName,
      email: email,
      number: number,
      jobTitle: jobTitle,
      creatorStatus: creatorStatus,
    };

    setStatus("loading");
    setErr("");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("done");
      } else {
        console.log("Error submitting form");
        setErr("Error Submitting Form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setErr("Error Submitting Form");
    }
  };

  return (
    <main
      className={` ${inter.className} h-screen w-full bg-zinc-900 flex items-center justify-center p-40`}
    >
      <div className="flex bg-zinc-800 border border-gray-500 rounded-lg flex-row  w-full">
        <div className="w-1/2 flex flex-col justify-center py-20 px-20">
          <div className="flex flex-col gap-1">
            <h1 className="text-white text-2xl font-semibold tracking-tight">
              Chat to our team
            </h1>
            <p className="text-sm text-gray-200">
              Need help with something? Want a demo? Get in touch with friendly
              team and we'll get in touch within 2 hours
            </p>
          </div>
          <form onSubmit={handleSumbit} className="py-6 flex flex-col gap-6">
            <div className="flex flex-row gap-6 items-center">
              <input
                required
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="First Name"
                className="w-1/2 bg-transparent text-gray-200 border-b border-gray-500 font-light text-sm py-2 outline-none focus:border-b focus:border-gray-200"
              />
              <input
                required
                value={secondName}
                onChange={(event) => setSecondName(event.target.value)}
                className="w-1/2 bg-transparent border-b text-gray-200 border-gray-500 font-light text-sm py-2 outline-none focus:border-b focus:border-gray-200"
                placeholder="Second Name"
              />
            </div>
            <input
              required
              value={jobTitle}
              onChange={(event) => setJobTitle(event.target.value)}
              placeholder="Job Title"
              className="w-full bg-transparent border-b text-gray-200 border-gray-500 font-light text-sm py-2 outline-none focus:border-b focus:border-gray-200"
            />
            <input
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b text-gray-200 border-gray-500 font-light text-sm py-2 outline-none focus:border-b focus:border-gray-200"
            />
            <input
              required
              value={number}
              maxLength={11}
              pattern="[0-9]{11}"
              onChange={(event) => setNumber(event.target.value)}
              placeholder="Phone Number"
              className="w-full bg-transparent border-b text-gray-200 border-gray-500 font-light text-sm py-2 outline-none focus:border-b focus:border-gray-200"
            />
            <div className="flex flex-col py-4">
              <p className="text-white text-sm font-medium">
                Number of employees
              </p>
              <div
                onClick={() => setCreatorStatus("solo")}
                className={`flex transition-all hover:opacity-80 cursor-pointer flex-row gap-3 items-center py-3 w-full px-3 mt-2 rounded border ${
                  creatorStatus === "solo" ? "border-white" : "border-gray-500"
                }`}
              >
                <div>
                  <div className="p-2 border border-gray-500 rounded ">
                    <GoPerson className="text-white text-lg" />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-white text-sm">I'm a solo creator</h1>
                  <p className="text-xs text-gray-300 font-light w-max">
                    {" "}
                    I need to set up an account for myself
                  </p>
                </div>
              </div>
              <div
                onClick={() => setCreatorStatus("team")}
                className={`flex transition-all hover:opacity-80 cursor-pointer flex-row gap-3 items-center py-3 w-full px-3 mt-2 rounded border ${
                  creatorStatus === "team" ? "border-white" : "border-gray-500"
                }`}
              >
                <div>
                  <div className="p-2 border border-gray-500 rounded ">
                    <GoPeople className="text-white text-lg" />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-white text-sm">I'm part of a team</h1>
                  <p className="text-xs text-gray-300 font-light w-max">
                    {" "}
                    I need to set up an account for my team
                  </p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="text-sm text-black bg-white py-2 rounded-lg font-semibold transition-all hover:opacity-70"
            >
              {!status
                ? "Get in touch"
                : status === "loading"
                ? "Sending.."
                : status === "done"
                ? "Sent!"
                : null}
            </button>
            <div>
              {err && <p className="py-2 text-red-300 text-sm">{err}</p>}
            </div>
          </form>
        </div>
        <div className="relative w-1/2 flex flex-col justify-between bg-[url('/bgmain.jpg')] rounded-lg m-1 bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative flex w-full justify-end z-10 py-3 px-4">
            <div className="flex flex-row items-center gap-2">
              <div className="p-[0.2rem] bg-clip-padding border border-gray-500 rounded bg-gray-200 backdrop-filter backdrop-blur-sm bg-opacity-20">
                <PiWaveSineDuotone className="text-white" />
              </div>
              <h1 className="text-white w-max text-lg font-medium">
                Untitled UI
              </h1>
            </div>
          </div>
          <div className="relative w-full py-6 flex gap-6 flex-col z-10 px-4">
            <p className="text-white font-light text-lg leading-tight">
              {" "}
              Empowering innovation through cutting-edge software solutions. At
              Untitled UI, we transform ideas into reality with robust,
              scalable, and intuitive technologies tailored to your needs
            </p>
            <div className="w-full flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <p className="w-max text-white font-medium text-sm tracking-tight">
                  Maya Rodwell
                </p>
                <p className="text-xs font-light text-gray-300">
                  Founder & CEO
                </p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <FaRegCircle className="text-gray-300" />
                <p className="text-sm font-medium text-white">Open Ventures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
