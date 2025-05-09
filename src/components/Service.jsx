import Collection from "./sections/service/Collection";
import IntroText from "./sections/service/IntroText";

export default function Service() {
  return (
    <div className="service">
      <div className="contents">
        <IntroText />
      </div>
      <Collection />
    </div>
  );
}
