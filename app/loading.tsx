export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="h-40 rounded-3xl bg-zinc-800 animate-pulse"
        />
      ))}
    </div>
  );
}