import { ArrowUpRight } from "react-bootstrap-icons";

export default function ViewMoreBtn() {
  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-primary">
        View more
        <span>
          {" "}
          <ArrowUpRight />
        </span>
      </button>
    </div>
  );
}
