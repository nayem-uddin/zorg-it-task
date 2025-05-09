import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavMenuToggler from "./NavMenuToggler";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLogo />
        <NavMenuToggler />
        <NavMenu />
      </div>
    </nav>
  );
}
