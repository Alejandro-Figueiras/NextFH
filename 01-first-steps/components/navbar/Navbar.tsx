
const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 p-2 m-2 rounded gap-8">
      <span>Home</span>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/pricing">Pricing</a>
    </nav>
  )
}

export default Navbar