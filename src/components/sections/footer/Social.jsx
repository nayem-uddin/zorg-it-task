export default function Social({ name, link }) {
  return (
    <div className="d-block">
      <a href={link}>{name}</a>
    </div>
  );
}
