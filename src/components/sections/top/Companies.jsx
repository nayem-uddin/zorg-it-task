import Logo from "./Logo";

export default function Companies() {
  return (
    <div className="companies">
      <Logo imgLink={`/logos/fmp.png`} />
      <Logo imgLink={`/logos/verdant.png`} />
      <Logo imgLink={`/logos/duet.png`} />
      <Logo imgLink={`/logos/apex.png`} />
      <Logo imgLink={`/logos/lindholms.png`} />
    </div>
  );
}
