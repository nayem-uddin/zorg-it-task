import ViewMoreBtn from "../../reusables/ViewMoreBtn";
import Article from "./Article";

export default function Container() {
  const headLines = [
    "How to Protect Your Identity While Traveling",
    "How to Protect Your Identity While Traveling",
    "How to Protect Your Identity While Traveling",
    "How to Protect Your Identity While Traveling",
    "How to Protect Your Identity While Traveling",
  ];
  return (
    <div className="container-fluid articles-container">
      {headLines.map((head, index) => (
        <Article caption={head} no={index + 1} />
      ))}
      <ViewMoreBtn />
    </div>
  );
}
