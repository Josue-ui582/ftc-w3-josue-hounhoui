import HeroSection from "@/components/layout/hero-section/heroSection";


export default function Home() {
  return (
    <>
      <HeroSection>
        <div className="h-screen w-full bg-[#fff7e9] overflow-hidden relative">
          <div className="w-[500px] h-[500px] bg-[#f7dba7] rounded-[5rem] absolute rotate-45 -top-4/5 -left-40 z-10"></div>
          <div className="w-[50px] h-[50px] bg-[#f7dba7] rounded-2xl absolute top-1/4 left-1/9 rotate-45 z-10"></div>
          <div className="w-[20px] h-[20px] bg-[#f7dba7] rounded-lg absolute top-1/4 left-1/2 rotate-45 z-10"></div>
          <div className="w-[20px] h-[20px] bg-[#003459] rounded-lg absolute top-[10rem] left-1/2 rotate-45 z-10"></div>
          <div className="w-[10px] h-[10px] bg-[#f7dba7] rounded-lg absolute top-[8rem] left-5/9 rotate-45 z-10"></div>
          <div className="w-[400px] h-[400px] bg-[#003459] rounded-[5rem] absolute top-5/8 left-1/2 rotate-12 z-10"></div>
          <div className="w-[400px] h-[700px] bg-[#f7dba7] rounded-[5rem] absolute top-[20rem] left-[42rem] transform rotate-35 z-10"></div>
          <div className="w-[400px] h-[500px] bg-[#ffecec] rounded-[5rem] absolute top-[35rem] left-[10rem] transform rotate-35 z-10"></div>
        </div>
      </HeroSection>
    </>
  );
}
