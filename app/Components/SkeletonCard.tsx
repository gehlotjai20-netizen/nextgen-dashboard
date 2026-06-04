export default function SkeletonCard() {
  return (
    <div className="rounded-3xl bg-zinc-800 p-6 animate-pulse">
      <div className="h-5 w-32 bg-zinc-700 rounded" />

      <div className="mt-4 h-3 w-full bg-zinc-700 rounded" />

      <div className="mt-2 h-3 w-20 bg-zinc-700 rounded" />
    </div>
  );
}