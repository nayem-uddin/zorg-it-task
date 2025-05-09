import FooterLeft from "./FooterLeft";
import FooterMid from "./FooterMid";
import FooterRight from "./FooterRight";

export default function FooterContent() {
  return (
    <div className="d-flex footer-content justify-content-evenly">
      <FooterLeft />
      <FooterMid />
      <FooterRight />
    </div>
  );
}
