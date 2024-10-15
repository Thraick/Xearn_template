export default function Navbar() {
  return (
    <header className="bg-gray-400 shadow p-4">
      <ul className="flex space-x-4 list-none p-0">
        <li>
          <a href="/" className="text-gray-800 hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="/login" className="text-gray-800 hover:text-blue-500">
            Login
          </a>
        </li>
        <li>
          <a href="/register" className="text-gray-800 hover:text-blue-500">
            Register
          </a>
        </li>
        <li>
          <a href="/profile" className="text-gray-800 hover:text-blue-500">
            Profile
          </a>
        </li>
      </ul>
    </header>
  );
}
