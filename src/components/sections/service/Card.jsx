export default function Card({ src }) {
  return (
    <div className="card">
      <img src={src} alt={src} />
    </div>
  );
}
