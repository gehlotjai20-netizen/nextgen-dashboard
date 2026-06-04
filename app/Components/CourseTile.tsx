"use client";

import { motion } from "framer-motion";

type CourseProps = {
  course: {
    id: string;
    title: string;
    progress: number;
  };
};

export default function CourseTile({
  course,
}: CourseProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{ scale: 1.02 }}
      className="rounded-3xl bg-zinc-900 p-5 border border-zinc-800 hover:border-blue-500 transition-all"
    >
      <h3 className="text-white font-semibold text-lg">
        {course.title}
      </h3>

      <div className="mt-4 h-3 bg-zinc-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${course.progress}%` }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className={`h-full ${
            course.progress >= 80
              ? "bg-green-500"
              : course.progress >= 50
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        />
      </div>

      <p className="mt-2 text-sm text-zinc-400">
        {course.progress}% Complete
      </p>
    </motion.article>
  );
}