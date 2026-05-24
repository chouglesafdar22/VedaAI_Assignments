"use client";
import SideBar from "@/components/layout/SideBar";
import Navbar from "@/components/layout/Navbar";
import BottomNavbar from "@/components/layout/BottomNavbar";
import MoblieNavbar from "@/components/layout/MoblieNavbar";
import Image from "next/image";
import Filter from "@/components/Filter";
import AssignmentCard from "@/components/AssignmentCard";
import { FaArrowLeft } from "react-icons/fa6";

const assignments = [
  {
    id: 1, assName: "CS", assignedDate: "20-5-26", dueDate: "21-5-26"
  },
  {
    id: 2, assName: "VedaAI Hiring Assignments", assignedDate: "22-05-26", dueDate: "24-5-26"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#EEEEEE] to-[#DADADA]">
      <div className="flex w-full h-full">
        <SideBar />
        <div className="flex flex-col flex-1 lg:p-4 p-0 gap-4">
          <Navbar />
          <MoblieNavbar />
          <div className="flex flex-col w-full min-h-screen lg:min-h-0 gap-2 pt-28 pb-28">
            {assignments.length === 0 ? (
              <div className="flex flex-col justify-center items-center w-full flex-1 gap-6 px-4">
                <div className="flex flex-col justify-center items-center w-auto h-auto gap-3">
                  <Image
                    src={"/Images/Illustrations.png"}
                    alt="Illustration"
                    width={150}
                    height={150}
                    className="lg:w-75 lg:h-75 w-45 h-45"
                  />
                  <div className="flex flex-col justify-center items-center max-w-121.5 w-full gap-1">
                    <h2 className="bricolage-grotesque-bold lg:text-xl text-base leading-[140%] tracking-[0.04em] align-middle text-center text-[#303030]">No Assignment yet</h2>
                    <p className="bricolage-grotesque-regular lg:text-base text-xs leading-[140%] tracking-[0.04em] text-center align-middle text-[#5E5E5E]/80 wrap-break-word">Create your first assignment to start collecting and grading student submissions. You can set up rubrics, define marking criteria, and let AI assist with grading.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-full h-auto px-2 gap-4">
                <div className="lg:flex hidden items-center w-auto h-auto gap-3">
                  <span className="flex lg:w-3 w-1.5 lg:h-3 h-1.5 rounded-full border-4 bg-[#4BC26D] border-[#4BC26D]/40 shadow-[0_32px_48px_rgba(0,0,0,0.2),0_16px_48px_rgba(0,0,0,0.12)]"></span>
                  <div className="flex items-start text-center flex-col w-auto h-auto gap-0.5">
                    <h3 className="bricolage-grotesque-bold lg:text-xl text-base leading-[140%] tracking-[0.04em] text-center align-middle text-[#303030]">Assignments</h3>
                    <p className="bricolage-grotesque-regular lg:text-sm text-xs eading-[140%] tracking-[0.04em] lg:text-center text-left align-middle text-[#5E5E5E]/55 line-clamp-2">Manage and create assignments for your classes.</p>
                  </div>
                </div>
                <div className="lg:hidden flex w-full h-auto">
                  <span className="flex justify-center items-center w-12 h-12 rounded-full bg-white/25 backdrop-blur-xl">
                    <FaArrowLeft className="text-base bricolage-grotesque-medium text-[#303030]" />
                  </span>
                  <div className="flex justify-center w-full items-center">
                    <h3 className="bricolage-grotesque-bold lg:text-xl text-base leading-[140%] tracking-[0.04em] text-center align-middle text-[#303030]">Assignments</h3>
                  </div>
                </div>
                <Filter />
                <div className="grid lg:grid-cols-2 grid-cols-1 w-full px-2.5 gap-4 justify-center items-center">
                  {
                    assignments.map((ass) => (
                      <AssignmentCard
                        key={ass.id}
                        id={ass.id}
                        assName={ass.assName}
                        assignedDate={ass.assignedDate}
                        dueDate={ass.dueDate}
                      />
                    ))
                  }
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <BottomNavbar />
    </main>
  );
};