const NavbarComponent = () => {
  return (
    <nav>
  <div className="nav__logo">
    <a href="#">Logo</a>
  </div>
  <ul className="nav__links">
    <li className="link">
      <a href="#">Profile</a>
    </li>
    <li className="link">
      <a href="#">Satkar</a>
    </li>
    <li className="link">
      <a href="#">Pelayanan Public</a>
    </li>
    <li className="link">
      <a href="#">Sarana</a>
    </li>
    <li className="link">
      <a href="#">Publikasi</a>
    </li>
    <li className="link">
      <a href="#">RB</a>
    </li>
    <li className="link">
      <a href="#" className="nav__btn" onclick="loginClicked()">
        Login
      </a>
    </li>
  </ul>
</nav>

  
  )
}

export default NavbarComponent
