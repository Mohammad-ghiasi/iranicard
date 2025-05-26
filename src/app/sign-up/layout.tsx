import Header from "@/components/Header";
import BodyProvider from "@/components/providers/BodyProvider";
import HeaderProvider from "@/components/providers/HeaderProvider";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "ورود | ثبت نام",
    description: "login | authentication",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className="w-full h-[100vh] md:bg-[#F1F1F1] overflow-hidden">
            <div className="w-full h-[200vh]">
                <HeaderProvider>
                    <Header />
                </HeaderProvider>
                <BodyProvider>
                    {children}
                </BodyProvider>
            </div>
        </div>
    );
}
