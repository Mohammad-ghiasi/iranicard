import Link from "next/link";
import Drawer from "./Drawer";
import MegaMenu from "./MegaMenu";
import { cookies } from "next/headers";
import { decryptData } from "@/utils/cookies";

export default async function Header() {
    const cookieStore = await cookies(); // ✅ اول استور رو بگیر
    const fullName = cookieStore.get("full_name")?.value || ""; // ✅ بعد بخون
    const decryptedName = decryptData(fullName).replace(/^"|"$/g, "");

    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-x-1 items-center">
                <img src="/images/logo/icon.svg" alt="My Icon" className="w-[23.59] h-[21.75] md:w-[28px] md:h-[25.83px]" />
                <img src="/images/logo/textLogo.svg" alt="My Icon" className="w-[83.98px] h-[17.99px] md:w-[99.69px] md:h-[21.36]" />
            </div>
            <div className="hidden lg:block">
                <div className="flex items-center gap-x-[28px]">
                    <MegaMenu />

                    <p className="cursor-pointer text-[16px] text-base-100">معامله</p>
                    <p className="cursor-pointer text-[16px] text-base-100">درباره ما</p>
                    <p className="cursor-pointer text-[16px] text-base-100">پشتیبانی</p>
                </div>
            </div>
            <div className="hidden lg:block">
                {decryptedName ? (<p className="text-sm border text-base-80 border-primary-100 p-2 transition-all rounded-lg hover:bg-primary-40 cursor-pointer">{decryptedName}</p>) : (<div className="flex gap-x-[28px]">
                    <div className=""><Link href='/sign-up' className="text-primary-100 py-[6px] px-[24px] border border-primary-100 rounded-lg">ورود</Link></div>
                    <div className=""><Link href='/sign-in'>ثبت نام</Link></div>
                </div>)}
            </div>
            <div className="block lg:hidden">
                <Drawer />
            </div>
        </div>
    );
}
