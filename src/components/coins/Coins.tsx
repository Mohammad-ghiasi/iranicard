"use client";
import { useEffect, useState } from "react";
import { coins, coin } from "../../types/coinType";
import CoinItem from "./CoinItem";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import BodyProvider from "../providers/BodyProvider";

const fetchCoins = async (index: number) => {
    // fetch data with dynamin queries
    let sort_key = "created_at";
    let sort_type = "desc";

    if (index === 1) {
        sort_key = "dailyChangePercent";
        sort_type = "desc";
    } else if (index === 2) {
        sort_key = "dailyChangePercent";
        sort_type = "asc";
    }

    const url = `https://main-api.ir-xe.com/api/public/modules/crypto/v1/client/listProduct?paginate=true&page=1&sort_key=${sort_key}&sort_type=${sort_type}&query=`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch");
    const { data } = await res.json();
    return data;
};

export default function Coins({ data }: { data: coins }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const { data: coins, isLoading } = useQuery({
        queryKey: ["coins", activeIndex],
        queryFn: () => fetchCoins(activeIndex),
        initialData: mounted ? undefined : data,
    });



    const items = [
        { label: "همه ارز ها", icon: "/images/icons/category.svg" },
        { label: "پرسود‌ترین", icon: "/images/icons/trend-up.svg" },
        { label: "ضررده‌ترین", icon: "/images/icons/trend-up.svg" },
    ];

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="w-8 h-8 border-4 border-primary-100 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <BodyProvider >
            <div className="mt-10 md:mt-20 w-full transition-all">
                <p className="text-center text-[15px] md:text-[20px]">بیش از ۲۰۰۰ رمزارز در ایران‌اکسچنج</p>
                <div className="mt-5 md:mt-10 border-b border-gray-300 flex gap-x-4 py-1 relative overflow-x-auto overflow-y-hidden md:overflow-visible">

                    {/* map the filter key items */}
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="text-[14px] cursor-pointer flex items-center justify-center relative min-w-max"
                            onClick={() => setActiveIndex(i)}
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="w-[24.98px] h-[17.99px] md:w-[24px] md:h-[17px]"
                            />
                            <span className={`${activeIndex === i ? "text-primary-100" : ""} mt-[-4px]`}>{item.label}</span>

                            {activeIndex === i && (
                                <span className="absolute bottom-[-5px] left-0 right-0 h-[1px] bg-primary-100" />
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-5">
                    <div className="grid grid-cols-1 gap-y-5">
                        {/* map all coins */}
                        {!mounted ? (<> {data?.map((item: coin) => (
                            <CoinItem key={item._id} item={item} />
                        ))}</>) : (<>{coins?.map((item: coin) => (
                            <CoinItem key={item._id} item={item} />
                        ))}</>)}
                    </div>
                </div>
                <div className="w-full flex justify-center"><Link href="#" className="text-sm md:text-base my-8 text-primary-100 w-full text-center">مشاهده همه رمزارز ها</Link></div>
            </div>
        </BodyProvider>
    );
}
