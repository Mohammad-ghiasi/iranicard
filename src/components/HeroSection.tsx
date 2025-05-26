import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="w-full">
            <div className="flex justify-between max-w-[1220px] mx-auto px-3 lg:px-5">
                <div className=" flex  items-end">
                    <div className="flex flex-col gap-y-5">
                        <div className=""><p className="text-[30px] lg:text-[40px] xl:text-[50px] text-center md:text-right max-lg:pt-[50px]">همگام با بازارهای جهانی، <span className="text-primary-100">همستر اینجاست!</span></p></div>
                        <div className="hidden md:block  text-base-80"><p className="text-[13px] md:text-[13px] lg:text-[15px] xl:text-[17px] mb-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p></div>
                        <div className="hidden md:block"><Link href="sign-up" className="bg-primary-100 text-primary-20 py-[10px] xl:py-[10px] px-[80.88px] xl:px-[100.88px]  2xl:px-[130.88px]  rounded-lg">ثبت‌نام</Link></div>
                    </div>
                </div>
                <div className="hidden md:block mt-[47px] bg-black"><Image alt="hero image" src="/images/images/heroImage.png" width={459.29} height={325} loading="lazy" /></div>
            </div>
        </div>
    );
}
