
import CoinProvider from "@/components/coins/CoinProvider";
import FAQ from "@/components/FAQ/FaqPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HeaderProvider from "@/components/providers/HeaderProvider";
import UsersPage from "@/components/users/Users";
export default function Home() {

  return (
    <>
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <HeroSection />
      <CoinProvider />
      <FAQ />
      <UsersPage />
      <Footer />
    </>
  );
}
