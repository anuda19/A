import CarouselHome from "../components/Carousel";
import ContactUs from "./ContactUs/ContactUs";
import Services from "./Services/Services";
import Teams from "./Teams/Teams";

export default async function Home() {
  return (
    <div>
      <CarouselHome />
      <Services />
      <Teams />
      <ContactUs />
    </div>
  );
}
