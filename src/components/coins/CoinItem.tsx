"use client";
import { coin } from "../../types/coinType";
import Image from "next/image";
import Link from "next/link";

export default function CoinItem({ item }: { item: coin }) {
    const dailyChangePercentText =
        typeof item.dailyChangePercent === 'number'
            ? Number(item.dailyChangePercent).toLocaleString('fa-IR', { maximumFractionDigits: 2 })
            : '';


    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-3 cursor-pointer w-full transition-all rounded-md hover:bg-primary-20">
            <div className="flex gap-x-3">
                <div className="flex items-center gap-x-2">
                    {/* <Star className="text-base-80 w-[18px] md:w-[23px] h-[18px] md:h-[23px]" /> */}
                     <img src="/images/icons/star.svg" alt="star" className="text-base-80 w-[18px] md:w-[23px] h-[18px] md:h-[23px]" />
                    <div className="relative w-[30] lg:w-[45] h-[30] lg:h-[45] rounded-full overflow-hidden">
                        <Image
                            alt="coin-image"
                            src={item.logo}
                            fill
                            className="rounded-full"
                        />
                    </div>
                </div>
                <div className="">
                    <p className="text-xs lg:text-sm text-base-100">{item.fa_name}</p>
                    <div className="flex  w-auto  items-center gap-x-2 text-base-80 text-xs">
                        <p className="text-[8px] md:text-[12px] lg:text-xs text-stone-500 mt-1">{item.symbol} / TRI</p>

                    </div>
                </div>
            </div>
            <div className="hidden lg:block my-auto">
                <div className="flex justify-center items-center">
                    <p>
                        {item.quotation?.minPrice && item.buy_from_iranicard_currency_price ? (
                            <>
                                {Number(
                                    (Number(item.quotation.minPrice) * Number(item.buy_from_iranicard_currency_price)).toPrecision(7)
                                ).toLocaleString('fa-IR', { maximumFractionDigits: 2 })}{" "}
                                {item.currencyUnit || <span className="text-xs text-slate-500">تومان</span>}
                            </>
                        ) : (
                            <span className="text-xs text-slate-400">نامشخص</span>
                        )}

                    </p>
                </div>
            </div>
            <div className="flex justify-end lg:justify-center pe-1 lg:pe-0 items-center">
                <div>
                    <p className="text-xs md:text-sm lg:text-base">
                        {item.quotation?.maxPrice && item.buy_from_iranicard_currency_price ? (
                            <>
                                {Number((Number(item?.quotation.maxPrice) * Number(item.buy_from_iranicard_currency_price)).toPrecision(7))
                                    .toLocaleString('fa-IR')}{" "}
                                {item.currencyUnit || <span className="text-xs text-slate-500">تومان</span>}
                            </>
                        ) : (
                            <span className="text-xs text-slate-400">نامشخص</span>
                        )}

                    </p>

                    <div className="flex justify-end">
                        {item.dailyChangePercent && (<p className={`text-xs md:text-sm block lg:hidden ${item.dailyChangePercent < 0 ? 'text-red-500' : 'text-green-500'}`}>
                            {dailyChangePercentText}٪
                        </p>
                        )}
                    </div>
                </div>


            </div>
            <div className="hidden lg:block my-auto">
                <div className="flex justify-center items-center">
                    {item.dailyChangePercent && (<p className={`text-xs md:text-sm ${item.dailyChangePercent < 0 ? 'text-red-500' : 'text-green-500'}`}>
                        {dailyChangePercentText}٪
                    </p>
                    )}
                </div>
            </div>
            <div className="hidden lg:block my-auto">
                <div className="flex justify-end items-center">
                    <Link className="text-primary-20 bg-primary-100 rounded-lg px-6 py-2 text-xs" href="#">خرید و فروش</Link>
                </div>
            </div>
        </div>
    );
}
