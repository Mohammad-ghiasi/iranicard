"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // این مسیرها به صورت نمونه هستن
  const items = [
    { label: "قیمت لحظه‌ای", path: "/live-price" },
    { label: "معامله", path: "/trade" },
    { label: "درباره ما", path: "/about" },
    { label: "پشتیبانی", path: "/support" },
  ];

  return (
    <>
      {/* دکمه باز کردن دراور */}
      <button onClick={() => setIsOpen(true)}>
        <img src="/images/logo/Menu.svg" alt="Menu" className="w-[28px] h-[28px]" />
      </button>

      {/* پس‌زمینه نیمه شفاف */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* دراور از راست */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <div className="flex gap-x-1 items-center">
            <img src="/images/logo/icon.svg" alt="Icon" className="w-[23.59px] h-[21.75px] md:w-[28px] md:h-[25.83px]" />
            <img src="/images/logo/textLogo.svg" alt="Logo" className="w-[83.98px] h-[17.99px] md:w-[99.69px] md:h-[21.36px]" />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-xl font-bold text-base-80 rounded-full px-2 border border-base-80"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col gap-y-5 p-4">
          {items.map((item, index) => (
            <div key={index}>
              <p className={`cursor-pointer mb-5 ${
                pathname === item.path ? "text-primary-100" : "text-base-100"
              }`}>
                {item.label}
              </p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
