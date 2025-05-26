import Image from "next/image";
import { Root2 } from "../types/coinType";
import { ChevronLeft } from "lucide-react";

export default async function MegamenuContent() {
    const res = await fetch(
        'https://main-api.ir-xe.com/api/public/modules/crypto/v1/client/listProduct?paginate=true&page=1&sort_key=&sort_type=&query=',
        {
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) throw new Error('Failed to fetch coins');

    const data = await res.json();
    const limitedData = data.data.slice(0, 15); // فقط ۱۴ آیتم

    const itemsPerColumn = 5;
    const columns = [];
    for (let i = 0; i < limitedData.length; i += itemsPerColumn) {
        columns.push(limitedData.slice(i, i + itemsPerColumn));
    }


    return (
        <div className="flex gap-10">
            {columns.map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-x-5 gap-y-6">
                    {col.map((item: Root2) => (
                        <div key={item._id} className="flex items-center gap-x-3 cursor-pointer">
                            <div className="rounded-full overflow-hidden">
                                <Image
                                    alt="coin-image"
                                    src={item.logo}
                                    width={45}
                                    height={45}
                                    className="rounded-full"
                                />
                            </div>
                            <div className="">
                                <p className="text-sx text-base-100">{item.fa_name}</p>
                                <div className="flex  w-auto  items-center gap-x-2 text-base-80 text-xs">
                                    <p className="text-xs text-base-80">{item.symbol}</p>
                                    {item.dailyChangePercent && (<p className={`text-xs ${item.dailyChangePercent < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                        {Number(item.dailyChangePercent).toLocaleString('fa-IR', { maximumFractionDigits: 2 })}٪
                                    </p>)}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <p className="mt-2 text-sm text-primary-100 flex cursor-pointer"><span>مشاهده همه {data.data.length} رمزارز </span><span><ChevronLeft /></span></p>
        </div>
    );
}
