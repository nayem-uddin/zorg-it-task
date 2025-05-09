import Item from "./Item";

export default function Showcase() {
  return (
    <div className="showcase">
      <Item
        title={`Rely`}
        desc={"All-In-One (AIO) Service"}
        imgSrc={"/rely.png"}
      />
      <Item
        title={`Finace website`}
        desc={"All-In-One (AIO) Service"}
        imgSrc={"/finance.png"}
      />
    </div>
  );
}
