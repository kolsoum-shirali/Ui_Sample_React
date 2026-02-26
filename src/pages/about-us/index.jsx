import AboutCompany from "./components/AboutCompany";
import WhyChoose from "./components/WhyChoose";
export default function AboutUs() {
  return (
    <div className="container mx-auto my-7 md:my-16 p-5 space-y-10 lg:space-y-32">
      <AboutCompany />
      <WhyChoose />
    </div>
  );
}
