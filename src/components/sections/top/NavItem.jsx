export default function NavItem({ name, link }) {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href={link}>
          {name}
        </a>
      </li>
    </>
  );
}
