import Header from "@/components/layout/header/header";
import HeroSection from "@/components/layout/hero-section/heroSection";
import Navbar from "@/components/shared/navbar/navbar";
import PetList from "@/components/shared/pets/petList";
import Section from "@/components/layout/section/section";
import ProductList from "@/components/layout/products/productList";
import Sponsor from "@/components/layout/sponsor/sponsor";
import Adoption from "@/components/layout/adoption/adoption";
import FaqList from "@/components/layout/faq/faqList";
import Footer from "@/components/shared/footer/footer";


export default function Home() {
  return (
    <>
      <HeroSection>
        <div className="relative flex flex-col sm:gap-0 justify-between h-full md:w-[90%] w-[98%]">
          <div className="w-[500px] h-[500px] bg-[#f7dba7] rounded-[5rem] absolute rotate-45 md:-top-4/5 md:-left-40  -left-16 -top-[30rem] z-10"></div>
          <div className="w-[20px] h-[20px] bg-[#f7dba7] rounded-lg absolute top-1/4 left-1/2 rotate-45 z-10 hidden lg:block"></div>
          <div className="w-[20px] h-[20px] hidden lg:block bg-[#003459] rounded-lg absolute top-[10rem] left-1/2 rotate-45 z-10"></div>
          <div className="w-[10px] h-[10px] bg-[#f7dba7] rounded-lg absolute top-[8rem] left-5/9 rotate-45 z-10"></div>
          <div className="w-[400px] h-[500px] hidden lg:block bg-[#ffd7d7] rounded-[5rem] absolute top-[35rem] left-[13rem] transform rotate-35 z-10"></div>

            <Navbar />
            <Header />
          
        </div>
      </HeroSection>
      <PetList />
      <Section />
      <ProductList />
      <Sponsor />
      <Adoption />
      <FaqList />
      <Footer />
    </>
  );
}
