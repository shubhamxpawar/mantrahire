import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-lvh bg-gray-100 text-center px-6">
      <h1 className="text-9xl font-bold text-[#015eae]">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <div className="mt-6 flex gap-4">
        <Link
          to="/"
          className="px-6 py-3 bg-[#015eae] text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
        <Link
          to="/careers"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        >
          Browse Jobs
        </Link>
      </div>
    </div>
  );
}
