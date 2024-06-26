"use client";

import React from "react";
import { useRecoilValue } from "recoil";

import { UserData } from "@/app/auth/type";
import { isHeaderAtom } from "@/utils/states";

import MainLogo from "./mainLogo";
import Menu from "./menu";
import MobileMenu from "./MobileMenu";
import Notification from "./notification";

const Header = ({
  veryfied
}: {
  veryfied: {
    ok: true;
    payload: UserData;
} | {
    ok: false;
    message: string;
}
}) => {
  const isHeader = useRecoilValue(isHeaderAtom);
  return veryfied.ok && isHeader ? (
    <>
      <header 
        className="-mt-safe pt-safe min-h-14 z-50 bg-background/50 backdrop-blur-xl fixed top-0 left-0 w-full px-4 border-b border-text/10 flex flex-row items-center justify-center"
        style={{
          height: "calc(env(safe-area-inset-top) + 3.5rem)",
        }}
      >
        <div className="flex flex-row items-center justify-between w-full max-w-[700px]">
          <MainLogo />
          <Menu />
        </div>
        <div className="flex flex-row items-center relative">
          <Notification />
          <MobileMenu />
        </div>
      </header>
      <div 
        className="min-h-14" 
        style={{
          height: "calc(env(safe-area-inset-top) + 3.5rem)",
        }}
      />
    </>
  ) : null;
};

export default Header;