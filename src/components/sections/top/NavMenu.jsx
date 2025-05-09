import NavItem from "./NavItem";
export default function NavMenu() {
  return (
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNav"
    >
      <ul className="navbar-nav">
        <NavItem name={"Work"} link={"#"} />
        <NavItem name={"About"} link={"#"} />
        <NavItem name={"Blog"} link={"#"} />
        <NavItem name={"Contact"} link={"#"} />
      </ul>
    </div>
  );
}
