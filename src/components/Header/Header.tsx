import React from "react";
import { StepIndicator } from "../StepIndicator/StepIndicator";

type HeaderProps = {
  bookingNumber: string;
};

export const Header: React.FC<HeaderProps> = ({ bookingNumber }) => {

  const bookingNumberNode = (
    <div className="border-2 border-[#5f7f6a] rounded-full px-4 py-1 text-sm whitespace-nowrap">
      Бронь: {bookingNumber}
    </div>
  )

  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
     
      <div className="hidden md:block">
        {bookingNumberNode}
      </div>

      <a
        href="/"
        className="font-bold text-lg flex items-center gap-1"
        aria-label="На главную страницу"
      >
        <img src="/tripvibe-logo.png" className="h-20 w-20" alt="tripvibe logo" />
        <h1>Tripvibe - make an in-flight vibe</h1>
      </a>

      <StepIndicator />

      <div className="block md:hidden">
        {bookingNumberNode}
      </div>
    </header>
  );
};
