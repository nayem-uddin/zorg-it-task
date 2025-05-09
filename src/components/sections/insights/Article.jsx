import { ArrowUpRight } from "react-bootstrap-icons";

export default function Article({ no, caption }) {
  return (
    <div className="d-flex justify-content-between article">
      <p>
        <span>
          {no < 10 ? 0 : ""}
          {no}{" "}
        </span>
        {caption}
      </p>
      <p>
        <ArrowUpRight />
      </p>
    </div>
  );
}
