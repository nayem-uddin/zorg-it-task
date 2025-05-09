import Item from "./Item";

export default function Showcase() {
  return (
    <div className="showcase">
      <Item
        title={`alcohol tracker`}
        desc={"All-In-One (AIO) Service"}
        imgSrc={"/portfolio/alc-tracker.png"}
      />
      <Item
        title={`Finace website`}
        desc={"All-In-One (AIO) Service"}
        imgSrc={"/portfolio/finance.png"}
      />
    </div>
  );
}
