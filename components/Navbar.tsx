export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 border-b border-gray-800">
      <h1 className="font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}
