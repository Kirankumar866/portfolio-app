import EmailSection from "@/components/EmailSection";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import Qualifications from "@/components/Qualifications";
import ResumeSection from "@/components/ResumeSection";
import Shuffle from "@/components/shuffle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero/>
      <Qualifications/>
      <Main/>
      <ResumeSection/>
      <Shuffle/>
      <EmailSection/>
      <Footer/>
    </div>
  );
}
