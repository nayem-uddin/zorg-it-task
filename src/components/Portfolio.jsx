import HeadSection from "./reusables/HeadSection";
import ViewMoreBtn from "./reusables/ViewMoreBtn";
import Showcase from "./sections/portfolio/Showcase";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <HeadSection
        headLine={"Our most recent works"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,minus?"
        }
      />
      <Showcase />
      <ViewMoreBtn />
    </div>
  );
}
