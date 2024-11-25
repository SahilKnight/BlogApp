import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold" style={{fontSize:'40px', fontFamily:'-moz-initial'}}>Blog App</h1>
        <div className="space-x-4" style={{gap:'50px', display:'flex'}}>
          <Link legacyBehavior href="/">
            <a className="hover:underline">Home</a>
          </Link>
          <Link legacyBehavior href="/auth/login">
            <a className="hover:underline">Login</a>
          </Link>
          <Link legacyBehavior href="/auth/register">
            <a className="hover:underline">Register</a>
          </Link>
          <Link legacyBehavior href="/auth/register">
            <a className="hover:underline">Contact</a>
          </Link>
          <Link legacyBehavior href="/auth/register">
            <a className="hover:underline">Feedback</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
