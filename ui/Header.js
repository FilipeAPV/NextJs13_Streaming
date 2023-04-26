import Link from "next/link";
function Header() {
  return (
    <div className="bg-[#5A7EBF] h-14 flex items-center  p-2 justify-between">
      <div className="space-x-3">
        <Link
          className="p-1 inline-flex justify-center items-center gap-2 rounded-md border-2
 border-gray-200 font-semibold text-white hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
          href="/load"
        >
          loading.js
        </Link>
        <Link
          className="p-1 inline-flex justify-center items-center gap-2 rounded-md border-2
 border-gray-200 font-semibold text-white hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
          href="/suspense"
        >
          Suspense
        </Link>
      </div>
      <Link
        className="p-1 inline-flex justify-center items-center gap-2 rounded-md border-2
 border-gray-200 font-semibold text-white hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
        href="/"
      >
        Home
      </Link>
    </div>
  );
}

export default Header;
