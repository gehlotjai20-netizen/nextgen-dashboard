import HeroTile from "./Components/HeroTile";
import CourseTile from "./Components/CourseTile";
import ActivityTile from "./Components/ActivityTile";
import { supabase } from "../lib/supabaseClient";

export default async function DashboardPage() {
  const { data: courses, error } =
    await supabase.from("courses").select("*");

  if (error) {
    return (
      <div className="text-red-500">
        {error.message}
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <HeroTile
        name="Jaishnu"
        streak={5}
      />

<div className="rounded-3xl bg-zinc-900 p-5 border border-zinc-800 hover:border-blue-500 hover:scale-105 transition-all duration-300">        <h3 className="text-zinc-400 text-sm">
          Courses
        </h3>

        <p className="text-3xl font-bold text-white">
          {courses?.length || 0}
        </p>
      </div>

<div className="rounded-3xl bg-zinc-900 p-5 border border-zinc-800 hover:border-orange-500 hover:scale-105 transition-all duration-300">        <h3 className="text-zinc-400 text-sm">
          Streak
        </h3>

        <p className="text-3xl font-bold text-orange-400">
          5 Days
        </p>
      </div>


        {courses?.length === 0 && (
  <div className="text-zinc-400">
    No courses available
  </div>
)}
      {courses?.map((course) => (
        <CourseTile
          key={course.id}
          course={course}
        />
      ))}

      <ActivityTile />
      <div className="col-span-full text-center text-zinc-500 text-sm py-4">
  Built with using Next.js, Tailwind CSS & Supabase
</div>
    </section>
  );
}