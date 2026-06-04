export default function ActivityTile() {
  return (
    <div className="rounded-3xl bg-zinc-900 p-5 border border-zinc-800 hover:border-purple-500 hover:scale-105 transition-all duration-300">
      <h3 className="text-white text-xl font-bold">
        Recent Activity
      </h3>

      <ul className="mt-4 space-y-4 text-zinc-400">
        <li className="flex items-center gap-2">
          ✅ Completed React Hooks
        </li>

        <li className="flex items-center gap-2">
          🚀 Started Next.js Course
        </li>

        <li className="flex items-center gap-2">
          🔥 Maintained 5 Day Streak
        </li>
      </ul>

      <div className="mt-5 pt-4 border-t border-zinc-800">
        <p className="text-sm text-zinc-500">
          Last updated: Today
        </p>
      </div>
    </div>
  );
}