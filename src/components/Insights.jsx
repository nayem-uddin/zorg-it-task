import HeadSection from "./reusables/HeadSection";
import ViewMoreBtn from "./reusables/ViewMoreBtn";
import Container from "./sections/insights/Container";

export default function Insights() {
  return (
    <div className="mt-4 mt-md-5 insights">
      <HeadSection
        headLine={"featured insights"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, unde."
        }
      />
      <Container />
    </div>
  );
}
