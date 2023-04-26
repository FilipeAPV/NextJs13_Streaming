import Link from "next/link";
function Header() {
    return (
        <div className="bg-[#5A7EBF] h-14 flex items-center space-x-3 p-2">
<Link  class="p-1 inline-flex justify-center items-center gap-2 rounded-md border-2
 border-gray-200 font-semibold text-white hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
 href="/loading"
 >
  loading.js
</Link>
<button type="button" class="p-1 inline-flex justify-center items-center gap-2 rounded-md border-2
 border-gray-200 font-semibold text-white hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500">
  Suspense
</button>
        </div>
    )
}

export default Header;