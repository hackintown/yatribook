import Hero from "@/components/Home/Hero";
import MovingCards from "@/components/Home/MovingCards";
import GetID from "@/components/Home/GetID";
import Partner from "@/components/Home/Partner";
import WhyJoinUs from "@/components/Home/WhyJoinUs";
export default function Home() {
  return (
    <div className="">
      <MovingCards />
      <Hero />
      <GetID />
      <WhyJoinUs />
      <Partner />
    </div>
  );
}
