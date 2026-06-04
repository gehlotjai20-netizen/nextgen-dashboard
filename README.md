# NextGen Learning Dashboard

## Overview

A futuristic student dashboard built with Next.js App Router, TypeScript, Tailwind CSS, Supabase, Framer Motion, and Lucide React.

## Features

* Dark Mode UI
* Hero Tile with Learning Streak
* Dynamic Course Cards from Supabase
* Activity Tile
* Animated Progress Bars
* Responsive Layout
* Loading and Error States
* Framer Motion Animations

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React

## Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

## Installation

```bash
npm install
npm run dev
```

## Architecture

* Server Components are used to fetch course data from Supabase.
* Reusable components are used for Sidebar, Hero, Course, and Activity sections.
* Tailwind CSS is used for styling.
* Framer Motion is used for animations and hover interactions.

## Deployment

The project can be deployed on Vercel.

Required environment variables:

* NEXT_PUBLIC_SUPABASE_URL
* NEXT_PUBLIC_SUPABASE_ANON_KEY
