export default function Sidebar() {
  return (
    <nav className="hidden lg:flex flex-col w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6">
      <h2 className="text-2xl font-bold text-white mb-8">
        🚀 NextGen Dashboard
      </h2>

      <ul className="space-y-3">
        <li className="text-zinc-300 hover:text-white hover:bg-zinc-800 hover:scale-105 p-3 rounded-xl cursor-pointer transition-all duration-300">
          🏠 Home
        </li>

        <li className="text-zinc-300 hover:text-white hover:bg-zinc-800 hover:scale-105 p-3 rounded-xl cursor-pointer transition-all duration-300">
          📚 Courses
        </li>

        <li className="text-zinc-300 hover:text-white hover:bg-zinc-800 hover:scale-105 p-3 rounded-xl cursor-pointer transition-all duration-300">
          📈 Activity
        </li>

        <li className="text-zinc-300 hover:text-white hover:bg-zinc-800 hover:scale-105 p-3 rounded-xl cursor-pointer transition-all duration-300">
          ⚙️ Settings
        </li>
      </ul>

      <div className="mt-auto pt-6 text-xs text-zinc-500">
        Powered by Next.js + Supabase
      </div>
    </nav>
  );
}