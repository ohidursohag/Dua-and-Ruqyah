"use client";
import Image from "next/image";
import profileIcon from "@/assets/icons/profile.svg";
import settingIcon from "@/assets/icons/settings.svg";
import support from "@/assets/icons/nav/support.svg";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import SettingAsSideBar from "../Settings/SettingAsSideBar";
import Link from "next/link";
import useOutsideClikToClose from "@/Components/Hooks/useOutsideClikToClose";
const Profile = () => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  // console.log(openSettings)
  const refWraper = useOutsideClikToClose(setOpenDropdown);
  return (
    <div className="flex md:flex-row-reverse justify-end xl:flex-row items-center gap-5 relative">
      <div
        ref={refWraper}
        onClick={() => setOpenDropdown((prev) => !prev)}
        className="hidden md:flex gap-1 items-center rounded-full cursor-pointer">
        <Image src={profileIcon} alt="profile icon" width={45} height={45} />
        <FaCaretDown
          size={20}
          className={`text-icon duration-300 ${
            openDropdown ? "rotate-180" : ""
          }`}
        />
      </div>

      <button
        onClick={() => setOpenSettings((openSettings) => !openSettings)}
        className="2xl:hidden cursor-pointer">
        <Image src={settingIcon} width={24} height={24} alt="setting icon" />
      </button>
      <div
        className={`w-[288px]  bg-white rounded-2xl absolute z-20 shadow-[0px_0px_10px_1px_rgba(0,0,0,0.2)] top-14 right-0 xl:right-7 2xl:right-0 before:bg-pri before:absolute before:size-0 before:border-b-[30px] before:border-b-white before:border-r-[20px] before:border-r-transparent before:border-l-[20px] before:border-l-transparent before:-top-5 before:right-7 before:xl:right-10 before:2xl:right-7 p-3 text-sm ${
          openDropdown ? "block" : "hidden"
        }`}>
        {/* support us */}
        <Link
          href={"#"}
          className="flex cursor-pointer items-center gap-5 hover:bg-secondary-bg py-2 px-3 rounded-2xl duration-300">
          <span>
            <svg
              className="fill-primary size-5"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.0721 9.2375C24.6359 8.65625 24.9846 7.8525 24.9846 6.965C24.9846 6.0775 24.6359 5.27375 24.0721 4.6925C23.787 4.39497 23.4448 4.15812 23.0659 3.99616C22.687 3.8342 22.2792 3.75047 21.8671 3.75C21.8671 3.75 20.3121 3.74625 18.7496 5.3575C17.1871 3.74625 15.6321 3.75 15.6321 3.75C15.2202 3.75052 14.8126 3.83415 14.4337 3.99588C14.0548 4.15762 13.7125 4.39412 13.4271 4.69125C12.8634 5.27375 12.5146 6.07625 12.5146 6.96375C12.5146 7.85125 12.8634 8.65625 13.4271 9.23625L17.2805 13.409C18.0723 14.2665 19.4271 14.2666 20.219 13.4092L24.0721 9.2375Z"
                fill="#1FA45B"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.0325 16.275L19.9228 19.5619C19.5682 19.8455 19.1276 20 18.6736 20H13.75C13.4048 20 13.125 19.7202 13.125 19.375C13.125 19.0298 13.4048 18.75 13.75 18.75H18.2062C18.3193 18.7499 18.4302 18.7192 18.5272 18.6611C18.6242 18.603 18.7036 18.5197 18.7569 18.42C18.8103 18.3203 18.8356 18.2081 18.8302 18.0951C18.8248 17.9822 18.7889 17.8729 18.7262 17.7788L17.6163 16.1138C17.3885 15.771 17.0796 15.4899 16.7169 15.2956C16.3541 15.1013 15.949 14.9997 15.5375 15H8.75C8.41848 15 8.10054 15.1317 7.86612 15.3661C7.83339 15.3988 7.7844 15.4518 7.72092 15.5205C7.32965 15.9437 6.388 16.9623 5.3125 17.5H1.875V23.75H4.6875C6.25 23.75 7.65616 23.9062 8.125 24.375C8.59384 24.8438 9.33696 25 10 25H18.9237C19.4583 25.0001 19.9866 24.886 20.4734 24.6652C20.9602 24.4445 21.3942 24.1222 21.7463 23.72L28.008 17.5885C28.6325 16.977 28.3892 15.9214 27.56 15.645C26.9662 15.4471 26.3323 15.401 25.7161 15.5111C25.0999 15.6211 24.5211 15.8838 24.0325 16.275Z"
                fill="#1FA45B"
              />
            </svg>
          </span>
          <p className="text-secondary-text ">Support Us</p>
        </Link>
        {/* DownLoad Dua App */}
        <Link
          href={"#"}
          className="flex cursor-pointer items-center gap-5 hover:bg-secondary-bg py-2 px-3 rounded-2xl duration-300">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.6667 12.4974C17.1269 12.4974 17.5 12.8705 17.5 13.3307V16.6641C17.5 17.5846 16.7538 18.3307 15.8333 18.3307H4.16667C3.24619 18.3307 2.5 17.5846 2.5 16.6641V13.3307C2.5 12.8705 2.8731 12.4974 3.33333 12.4974C3.79357 12.4974 4.16667 12.8705 4.16667 13.3307V16.6641H15.8333V13.3307C15.8333 12.8705 16.2064 12.4974 16.6667 12.4974ZM10 1.66406C10.4602 1.66406 10.8333 2.03716 10.8333 2.4974V11.0329L12.9462 8.91998C13.2717 8.59448 13.7993 8.59448 14.1247 8.91998C14.4502 9.2454 14.4502 9.77306 14.1247 10.0985L10.7366 13.4866C10.3297 13.8935 9.67025 13.8935 9.26342 13.4866L5.87521 10.0985C5.54977 9.77306 5.54977 9.2454 5.87521 8.91998C6.20065 8.59448 6.72828 8.59448 7.05372 8.91998L9.16667 11.0329V2.4974C9.16667 2.03716 9.53975 1.66406 10 1.66406Z"
                fill="#1FA45B"
              />
            </svg>
          </span>
          <p className="text-secondary-text ">Download Dua App</p>
        </Link>
        {/* Privacy Policy */}
        <Link
          href={"#"}
          className="flex cursor-pointer items-center gap-5 hover:bg-secondary-bg py-2 px-3 rounded-2xl duration-300">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.41483 1.83267C9.74493 1.70888 10.1046 1.6934 10.442 1.78625L10.5852 1.83267L16.4185 4.02017C17.0257 4.24785 17.4416 4.80475 17.4943 5.44284L17.5 5.58072V10.0497C17.5 12.8069 15.988 15.3344 13.5758 16.6424L13.3541 16.7579L10.559 18.1554C10.2462 18.3118 9.88418 18.3292 9.56044 18.2075L9.441 18.1554L6.6459 16.7579C4.17975 15.5248 2.59522 13.0421 2.50415 10.2997L2.5 10.0497V5.58072C2.5 4.93231 2.87541 4.34736 3.45435 4.07391L3.58146 4.02017L9.41483 1.83267ZM12.8608 7.19415L9.029 11.0259L7.55589 9.55273C7.23045 9.22732 6.70282 9.22732 6.37738 9.55273C6.05194 9.87815 6.05194 10.4058 6.37738 10.7312L8.38083 12.7347C8.73883 13.0927 9.31925 13.0927 9.67725 12.7347L14.0392 8.37265C14.3647 8.04722 14.3647 7.51958 14.0392 7.19415C13.7138 6.86871 13.1862 6.86871 12.8608 7.19415Z"
                fill="#1FA45B"
              />
            </svg>
          </span>
          <p className="text-secondary-text ">Privacy Policy</p>
        </Link>
        {/* Thanks & Credits */}
        <Link
          href={"#"}
          className="flex cursor-pointer items-center gap-5 hover:bg-secondary-bg py-2 px-3 rounded-2xl duration-300">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.8219 1.75378C9.43856 1.13716 10.4181 1.10471 11.0729 1.65642L11.1789 1.75378L12.7618 3.33669H15.0004C15.8791 3.33669 16.5989 4.01659 16.6625 4.87897L16.6671 5.00336V7.24191L18.25 8.82481C18.8666 9.44147 18.8991 10.421 18.3474 11.0759L18.25 11.1819L16.6671 12.7648V15.0034C16.6671 15.882 15.9872 16.6019 15.1248 16.6655L15.0004 16.6701H12.7618L11.1789 18.2529C10.5623 18.8696 9.58278 18.902 8.92792 18.3503L8.8219 18.2529L7.239 16.6701H5.00041C4.12178 16.6701 3.40194 15.9901 3.33832 15.1278L3.33374 15.0034V12.7647L1.75084 11.1819C1.13423 10.5652 1.10178 9.58569 1.65349 8.93083L1.75085 8.82481L3.33374 7.24195V5.00336C3.33374 4.12472 4.01364 3.40489 4.87603 3.34126L5.00041 3.33669H7.239L8.8219 1.75378ZM12.5667 7.48882L9.02949 11.0259L7.55635 9.55281C7.23092 9.2274 6.70329 9.2274 6.37784 9.55281C6.05241 9.87823 6.05241 10.4059 6.37784 10.7313L8.38132 12.7348C8.73932 13.0927 9.31974 13.0927 9.67765 12.7348L13.7452 8.66731C14.0706 8.3419 14.0706 7.81426 13.7452 7.48882C13.4197 7.16339 12.8921 7.16339 12.5667 7.48882Z"
                fill="#1FA45B"
              />
            </svg>
          </span>
          <p className="text-secondary-text ">Thanks & Credits</p>
        </Link>
        {/* About Us*/}
        <Link
          href={"#"}
          className="flex cursor-pointer items-center gap-5 hover:bg-secondary-bg py-2 px-3 rounded-2xl duration-300">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7617 1.66406C13.2037 1.66406 13.6277 1.83965 13.9402 2.15222L17.8455 6.05746C18.1581 6.37002 18.3337 6.79395 18.3337 7.23597V12.7588C18.3337 13.2008 18.1581 13.6248 17.8455 13.9373L13.9402 17.8426C13.6277 18.1551 13.2037 18.3307 12.7617 18.3307H7.2389C6.79688 18.3307 6.37295 18.1551 6.06039 17.8426L2.15515 13.9373C1.84258 13.6247 1.66699 13.2008 1.66699 12.7588V7.23597C1.66699 6.79395 1.84258 6.37002 2.15515 6.05746L6.06039 2.15222C6.37295 1.83965 6.79688 1.66406 7.2389 1.66406H12.7617ZM10.0003 12.4974C9.54008 12.4974 9.16699 12.8705 9.16699 13.3307C9.16699 13.791 9.54008 14.1641 10.0003 14.1641C10.4606 14.1641 10.8337 13.791 10.8337 13.3307C10.8337 12.8705 10.4606 12.4974 10.0003 12.4974ZM10.0003 4.9974C9.57295 4.9974 9.22073 5.3191 9.1726 5.73355L9.16699 5.83073V10.8307C9.16699 11.291 9.54008 11.6641 10.0003 11.6641C10.4277 11.6641 10.7799 11.3424 10.8281 10.9279L10.8337 10.8307V5.83073C10.8337 5.3705 10.4606 4.9974 10.0003 4.9974Z"
                fill="#1FA45B"
              />
            </svg>
          </span>
          <p className="text-secondary-text ">About Us</p>
        </Link>
        {/* Copyright Warning*/}
        <Link
          href={"#"}
          className="flex cursor-pointer items-center gap-5 hover:bg-secondary-bg py-2 px-3 rounded-2xl duration-300">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0003 1.66406C5.39795 1.66406 1.66699 5.39502 1.66699 9.9974C1.66699 14.5997 5.39795 18.3307 10.0003 18.3307C14.6027 18.3307 18.3337 14.5997 18.3337 9.9974C18.3337 5.39502 14.6027 1.66406 10.0003 1.66406ZM7.50033 9.9974C7.50033 8.61665 8.61958 7.4974 10.0003 7.4974C10.7469 7.4974 11.4162 7.8236 11.8756 8.34398C12.1801 8.68906 12.7067 8.7219 13.0517 8.41731C13.3968 8.11277 13.4297 7.58615 13.1251 7.2411C12.3628 6.37745 11.2449 5.83073 10.0003 5.83073C7.69914 5.83073 5.83366 7.69621 5.83366 9.9974C5.83366 12.2986 7.69914 14.1641 10.0003 14.1641C11.2449 14.1641 12.3628 13.6173 13.1251 12.7537C13.4297 12.4086 13.3968 11.8821 13.0517 11.5775C12.7067 11.2729 12.1801 11.3057 11.8756 11.6508C11.4162 12.1712 10.7469 12.4974 10.0003 12.4974C8.61958 12.4974 7.50033 11.3781 7.50033 9.9974Z"
                fill="#1FA45B"
              />
            </svg>
          </span>
          <p className="text-secondary-text ">Copyright Warning</p>
        </Link>
        {/*Our Other Projects*/}
        <Link
          href={"#"}
          className="flex cursor-pointer items-center gap-5 hover:bg-secondary-bg py-2 px-3 rounded-2xl duration-300">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 3C6.73478 3 6.48043 3.10536 6.29289 3.29289C6.10536 3.48043 6 3.73478 6 4C6 4.26522 6.10536 4.51957 6.29289 4.70711C6.48043 4.89464 6.73478 5 7 5H13C13.2652 5 13.5196 4.89464 13.7071 4.70711C13.8946 4.51957 14 4.26522 14 4C14 3.73478 13.8946 3.48043 13.7071 3.29289C13.5196 3.10536 13.2652 3 13 3H7ZM4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H15C15.2652 6 15.5196 6.10536 15.7071 6.29289C15.8946 6.48043 16 6.73478 16 7C16 7.26522 15.8946 7.51957 15.7071 7.70711C15.5196 7.89464 15.2652 8 15 8H5C4.73478 8 4.48043 7.89464 4.29289 7.70711C4.10536 7.51957 4 7.26522 4 7ZM2 11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H16C16.5304 9 17.0391 9.21071 17.4142 9.58579C17.7893 9.96086 18 10.4696 18 11V15C18 15.5304 17.7893 16.0391 17.4142 16.4142C17.0391 16.7893 16.5304 17 16 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V11Z"
                fill="#1FA45B"
              />
            </svg>
          </span>
          <p className="text-secondary-text ">Our Other Projects</p>
        </Link>
      </div>
      <SettingAsSideBar
        openSettings={openSettings}
        setOpenSettings={setOpenSettings}
      />
    </div>
  );
};

export default Profile;
