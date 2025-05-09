import Companies from "./sections/top/Companies";
import Hero from "./sections/top/Hero";
import Navbar from "./sections/top/Navbar";

export default function Top() {
  return (
    <div className="header">
      <Navbar />
      <Hero />
      <Companies />
    </div>
  );
}
