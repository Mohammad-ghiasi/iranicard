import BodyProvider from "./providers/BodyProvider";
type FooterLink = {
    title: string;
    items: string[];
};

const footerLinks: FooterLink[] = [
    {
        title: "ایران‌اکسچنج",
        items: [
            "درباره‌ي ما",
            "بلاگ",
            "موقعیت‌های شغلی",
            "امنیت",
            "قوانین و مقررات",
            "اخبار",
        ],
    },
    {
        title: "آموزش",
        items: [
            "آموزش‌های جدید",
            "اخبار محصول",
            "رویدادها",
            "دوره‌ها",
            "آکادمی",
        ],
    },
    {
        title: "دسترسی",
        items: [
            "بازار ‌ارزها",
            "معامله",
            "کارمزد مالیات",
            "سطوح",
        ],
    },
    {
        title: "پشتیبانی",
        items: [
            "مرکز‌ شتیبانی",
            "ارتباط با ما",
            "گزارش مشکل",
        ],
    },
];

export default function Footer() {
    return (
        <BodyProvider>
            <footer className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-28 gap-y-1 pb-10">
                {/* لوگو و توضیح و شبکه‌های اجتماعی */}
                <div className="flex flex-col justify-start gap-y-6 lg:w-1/3 mb-6 lg:mb-0">
                    <div className="flex gap-x-2 items-center">
                        <img src="/images/logo/icon.svg" alt="Icon" className="w-6 h-6 md:w-7 md:h-7" />
                        <img src="/images/logo/textLogo.svg" alt="Logo Text" className="w-[84px] h-5 md:w-[100px] md:h-6" />
                    </div>
                    <p className="text-sm text-base-80">معامله‌ی آسان و راحت رمزارز</p>
                    <div className="flex flex-wrap gap-2">
                        <img src="/images/logo/youtub.svg" alt="Youtube" className="w-6 h-6 md:w-7 md:h-7 cursor-pointer" />
                        <img src="/images/logo/linkedin.svg" alt="LinkedIn" className="w-6 h-6 md:w-7 md:h-7 cursor-pointer" />
                        <img src="/images/logo/insta.svg" alt="Instagram" className="w-6 h-6 md:w-7 md:h-7 cursor-pointer" />
                        <img src="/images/logo/twitter.svg" alt="Twitter" className="w-6 h-6 md:w-7 md:h-7 cursor-pointer" />
                        <img src="/images/logo/facebook.svg" alt="Facebook" className="w-6 h-6 md:w-7 md:h-7 cursor-pointer" />
                    </div>
                </div>

                {/* لینک‌ها */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4 w-full lg:w-2/3">
                    {footerLinks.map((section, idx) => (
                        <div key={idx} className="flex flex-col gap-y-2 text-sm">
                            <p className="font-semibold mb-2">{section.title}</p>
                            {section.items.map((item, i) => (
                                <p
                                    key={i}
                                    className="text-base-80 transition-all hover:text-primary-100 cursor-pointer lg:hover:scale-[101%]"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </footer>

            <hr />
            <div className="flex flex-col-reverse gap-y-4 lg:gap-y-0 lg:flex-row lg:justify-between mt-10 mb-4">
                <p className="text-sm text-base-60 text-center ">تمامی حقوق متعلق به سایت ایران‌اکسچنج ‌می‌باشد.</p>
                <p className="text-sm text-base-60 text-center ">۲۰۲۵  |  V.۱۲.۰۳</p>
            </div>
        </BodyProvider>
    );
}
