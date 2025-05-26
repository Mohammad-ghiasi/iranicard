import MegamenuContent from "./MegamenuContent";

export default function MegaMenu() {
    return (
        // نوار منو
        <div className="relative group">
            {/* متن اصلی منو */}
            <p className="flex items-center cursor-pointer text-[16px] text-base-100"><span>قیمت لحظه‌ای</span> <span>  <img src="/images/icons/downLogo.svg" alt="My Icon" width={20} height={20} /></span></p>

            {/* بخش مگا منو که موقع hover نمایش داده میشه */}
            <div className="absolute right-[-200px] top-full hidden group-hover:flex w-[800px] h-[] bg-white shadow-lg p-4 space-x-4 z-50 transition-all rounded-lg">
                {/* محتوای داخل مگامنو */}
                <MegamenuContent />
            </div>
        </div>
    );
}