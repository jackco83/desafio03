import "./NavBar.css"

const navBar = () => {
  return (
    <header className="main-header">
      <h1>Mi Tienda Virtual</h1>
      <nav>
        <ul>
          <li><a href="/">Verduras</a></li>
          <li><a href="/">Carnes</a></li>
          <li><a href="/">Bebidas</a></li>
        </ul>
      </nav>
    </header>
  )}

export default navBar