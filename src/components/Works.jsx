import Work from "./sections/works/Work";

export default function Works() {
  return (
    <div className="works">
      <Work imgSource="/work1.png" />
      <Work imgSource="/work2.png" />
      <Work imgSource="/work3.png" />
    </div>
  );
}
