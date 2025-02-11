import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl">Cricket Analytics</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="hover:text-blue-600">
              Dashboard
            </Link>
            <Link href="/players" className="hover:text-blue-600">
              Players
            </Link>
            <Link href="/matches" className="hover:text-blue-600">
              Matches
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
