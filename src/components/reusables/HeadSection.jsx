export default function HeadSection({ headLine, desc }) {
  return (
    <div className="head-section">
      <h2>{headLine}</h2>
      <p>{desc}</p>
    </div>
  );
}
