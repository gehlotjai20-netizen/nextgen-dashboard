"use client";

import { motion } from "framer-motion";

type HeroTileProps = {
  name: string;
  streak: number;
};

export default function HeroTile({
  name,
  streak,
}: HeroTileProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{ scale: 1.01 }}
      className="col-span-2 rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-8 shadow-xl"
    >
      <h1 className="text-4xl font-bold text-white">
        Welcome back, {name} 👋
      </h1>

      <p className="mt-4 text-orange-400 text-lg">
        🔥 {streak} Day Learning Streak
      </p>

      <div className="mt-6 h-3 rounded-full bg-zinc-700 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(streak * 15, 100)}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-orange-400 rounded-full"
        />
      </div>

      <p className="mt-3 text-zinc-400">
        Keep learning every day to maintain your streak.
      </p>
    </motion.section>
  );
}