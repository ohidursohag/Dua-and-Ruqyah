"use client";

import { useState } from "react";
import { IoGridOutline, IoLanguage } from "react-icons/io5";
import { HiOutlineCollection } from "react-icons/hi";
import { AiOutlineFontSize } from "react-icons/ai";

const Settings = () => {
  const [open, setOpen] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [selectedArabicScript, setSelectedArabicScript] =
    useState<string>("Uthmani");
  const [selectedArabicFont, setSelectedArabicFont] =
    useState<string>("Noor E Huda");
  // array of options
  const options1 = ["Uthmani", "Indopack"];
  const options2 = ["Noor E Huda", "Noor E Hedayet", "Noor E Hira"];
  // console.log(open);
  return (
    <div className="p-3 h-full scrollbar-thin overflow-y-auto">
      <div>
      <h2 className="text-xl font-bold text-center my-5 ">Settings</h2>
      <div className="space-y-5 ">
        {/* Language Settings */}
        <div>
          <div
            onClick={() => setOpen((prev) => (prev === 1 ? null : 1))}
            className={`bg-secondary-bg  rounded-lg p-2 flex items-center gap-2 cursor-pointer relative 
            ${open === 1 ? "" : ""}
            `}>
            <div
              className={` w-[3px] h-14 bg-primary absolute left-0
              ${open === 1 ? "block" : "hidden"}`}
            />
            <div
              className={`w-max duration-300 sm:bg-primary-bg rounded-full relative z-10 flex justify-center items-center  sm:size-10`}>
              <IoLanguage
                size={20}
                className={`duration-300 ${
                  open === 1 ? "text-primary" : "text-secondary-text"
                }`}
              />
            </div>
            <p
              className={` duration-300 ${
                open === 1 ? "text-primary" : "text-secondary-text"
              }`}>
              Language Settings
            </p>
          </div>
          <div
            className={`flex items-center justify-center gap-2 px-5 pt-20 pb-6 border-x border-b rounded-lg -mt-14 ${
              open === 1 ? "block" : "hidden"
            }`}>
            <button className=" text-black  border  rounded-md   w-29 h-10 text-ms xs:w-full sm:w-full">
              English
            </button>
            <button className="bg-primary border text-white rounded-md w-29 h-10 text-ms xs:w-full sm:w-full">
              বাংলা
            </button>
          </div>
        </div>
        {/* General Settings */}
        <div>
          <div
            onClick={() => setOpen((prev) => (prev === 2 ? null : 2))}
            className={`bg-secondary-bg  rounded-lg p-2 flex items-center gap-2 cursor-pointer relative 
            ${open === 2 ? "" : ""}
            `}>
            <div
              className={` w-[3px] h-14 bg-primary absolute left-0
              ${open === 2 ? "block" : "hidden"}`}
            />
            <div
              className={`w-max duration-300 sm:bg-primary-bg rounded-full relative z-10 flex justify-center items-center  sm:size-10`}>
              <HiOutlineCollection
                size={20}
                className={`duration-300 ${
                  open === 2 ? "text-primary" : "text-secondary-text"
                }`}
              />
            </div>
            <p
              className={` duration-300 ${
                open === 2 ? "text-primary" : "text-secondary-text"
              }`}>
              General Settings
            </p>
          </div>
          {/* General Settings content */}
          <div
            className={` gap-2 px-5 pt-20 pb-6 border-x border-b rounded-lg -mt-14 ${
              open === 2 ? "block" : "hidden"
            }`}>
            <form className="space-y-2">
              {/* Show Arabic */}
              <div className="flex justify-between items-center">
                <span className="text-secondary-text">Show Arabic</span>
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center  rounded-full cursor-pointer"
                    htmlFor="arabic">
                    <input
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border  transition-all duration-300 border-secondary-text/50 checked:border-primary checked:bg-primary checked:before:bg-primary"
                      id="arabic"
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              {/* Show Translation */}
              <div className="flex justify-between items-center">
                <span className="text-secondary-text">Show Translation</span>
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center  rounded-full cursor-pointer"
                    htmlFor="translation">
                    <input
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border  transition-all duration-300 border-secondary-text/50 checked:border-primary checked:bg-primary checked:before:bg-primary"
                      id="translation"
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              {/* Show Transliteration */}
              <div className="flex justify-between items-center">
                <span className="text-secondary-text">
                  Show Transliteration
                </span>
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center  rounded-full cursor-pointer"
                    htmlFor="Transliteration">
                    <input
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border  transition-all duration-300 border-secondary-text/50 checked:border-primary checked:bg-primary checked:before:bg-primary"
                      id="Transliteration"
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              {/* Show Reference */}
              <div className="flex justify-between items-center">
                <span className="text-secondary-text">Show Reference</span>
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center  rounded-full cursor-pointer"
                    htmlFor="reference">
                    <input
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border  transition-all duration-300 border-secondary-text/50 checked:border-primary checked:bg-primary checked:before:bg-primary"
                      id="reference"
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Fonts Settings */}
        <div className="">
          <div
            onClick={() => setOpen((prev) => (prev === 3 ? null : 3))}
            className={`bg-secondary-bg  rounded-lg p-2 flex items-center gap-2 cursor-pointer relative 
            ${open === 3 ? "" : ""}
            `}>
            <div
              className={` w-[3px] h-14 bg-primary absolute left-0
              ${open === 3 ? "block" : "hidden"}`}
            />
            <div
              className={`w-max duration-300 sm:bg-primary-bg rounded-full relative z-10 flex justify-center items-center  sm:size-10`}>
              <AiOutlineFontSize 
                size={20}
                className={`duration-300 ${
                  open === 3 ? "text-primary" : "text-secondary-text"
                }`}
              />
            </div>
            <p
              className={` duration-300 ${
                open === 3 ? "text-primary" : "text-secondary-text"
              }`}>
              Font Settings
            </p>
          </div>
          <div
            className={`flex items-center gap-2 px-5 pt-20 pb-6 border-x border-b rounded-lg -mt-14 ${
              open === 3 ? "block" : "hidden"
            }`}>
            <div className="space-y-5">
              {/* Font Size */}
              <div>
                <div className="text-primary-text">Translation Font Size</div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="14"
                    max="24"
                    defaultValue={16}
                    name="fontSize"
                    id="fontSize"
                    className="h-[4px] w-[200px] outline-none bg-white rounded-lg accent-green-500 "
                  />
                  <span className="text-secondary-text">16</span>
                </div>
              </div>
              {/* Arabic Script */}
              <div className="relative">
                <div className="text-primary-text mb-1">
                  Select Arabic Script
                </div>
                <div
                  onClick={() => setIsOpen((prev) => (prev === 1 ? null : 1))}
                  className="mx-auto flex items-center w-ful justify-between rounded-xl bg-white px-6 py-2 border cursor-pointer">
                  <h1 className="font-medium text-gray-600 ">
                    {selectedArabicScript}
                  </h1>
                  <svg
                    className={`${
                      isOpen === 1 ? "-rotate-180" : "rotate-0"
                    } duration-300`}
                    width={25}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>{" "}
                    </g>
                  </svg>
                </div>
                {/* dropdown - options  */}
                <div
                  className={`${
                    isOpen === 1 ? "block  " : "hidden  "
                  } absolute z-50 top-16 mx-auto bg-white my-4 w-full rounded-xl py-4 border duration-300 `}>
                  {options1?.map((option, idx) => (
                    <div
                      key={idx}
                      onClick={(e) => {
                        setSelectedArabicScript(option);
                        setIsOpen(null);
                      }}
                      className="px-6 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer">
                      {option}
                    </div>
                  ))}
                </div>
              </div>
              {/* Arabic Font */}
              <div className="relative">
                <div className="text-primary-text mb-1">Arabic Font</div>
                <div
                  onClick={() => setIsOpen((prev) => (prev === 2 ? null : 2))}
                  className="mx-auto flex items-center w-ful justify-between rounded-xl bg-white px-6 py-2 border cursor-pointer">
                  <h1 className="font-medium text-gray-600 ">
                    {selectedArabicFont}
                  </h1>
                  <svg
                    className={`${
                      isOpen === 2 ? "-rotate-180" : "rotate-0"
                    } duration-300`}
                    width={25}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>{" "}
                    </g>
                  </svg>
                </div>
                {/* dropdown - options  */}
                <div
                  className={`${
                    isOpen === 2 ? "block  " : "hidden  "
                  } absolute z-50 top-16 mx-auto bg-white my-4 w-full rounded-xl py-4 border duration-300 `}>
                  {options2?.map((option2, idx) => (
                    <div
                      key={idx}
                      onClick={(e) => {
                        setSelectedArabicFont(option2);
                        setIsOpen(null);
                      }}
                      className="px-6 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer">
                      {option2}
                    </div>
                  ))}
                </div>
              </div>

              {/* Arabic Font Size */}
              <div>
                <div className="text-primary-text">Translation Font Size</div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="18"
                    max="40"
                    defaultValue={20}
                    name="fontSize"
                    id="fontSize"
                    className="h-[4px] w-[200px] outline-none bg-white rounded-lg accent-green-500 "
                  />
                  <span className="text-secondary-text">20</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appearance Settings */}
        <div>
          <div
            onClick={() => setOpen((prev) => (prev === 4 ? null : 4))}
            className={`bg-secondary-bg  rounded-lg p-2 flex items-center gap-2 cursor-pointer relative 
            ${open === 4 ? "" : ""}
            `}>
            <div
              className={` w-[3px] h-14 bg-primary absolute left-0
              ${open === 4 ? "block" : "hidden"}`}
            />
            <div
              className={`w-max duration-300 sm:bg-primary-bg rounded-full relative z-10 flex justify-center items-center  sm:size-10`}>
              <IoGridOutline 
                size={20}
                className={`duration-300 ${
                  open === 4 ? "text-primary" : "text-secondary-text"
                }`}
              />
            </div>
            <p
              className={` duration-300 ${
                open === 4 ? "text-primary" : "text-secondary-text"
              }`}>
              Appearance Settings
            </p>
          </div>
          <div
            className={`flex items-center gap-2 px-5 pt-20 pb-6 border-x border-b rounded-lg -mt-14 ${
              open === 4 ? "block" : "hidden"
            }`}>
            <div className="flex justify-between items-center w-full">
              <p className="text-secondary-text">Night Mode</p>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-[42px] h-5 bg-icon peer-focus:outline-none   rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top- after:start-[1px] after:end-[1px] after:bg-secondary-bg after:border-gray-300 after:border after:rounded-full after:size-5  after:transition-all  peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Settings;
