export default function Logo({ imgLink }) {
  return (
    <div className="logo">
      <img src={imgLink} alt={imgLink} width="163px" height="80px" />
    </div>
  );
}
