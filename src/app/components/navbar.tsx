"use client";
import React from "react";
import Link from "next/link";
import { RiMovie2AiLine } from "react-icons/ri";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-slate-800 text-white shadow-lg m-3 rounded-2xl">
      <div className="flex items-center gap-2 text-xl font-semibold">
        <RiMovie2AiLine className="text-2xl text-yellow-400" />
        <h2>MOVION</h2>
      </div>

      <div className="flex-1 mx-6 max-w-md">
        <input
          type="search"
          placeholder="Search your movie..."
          className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <Link href="/movies">
        <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition">
          Movies
        </button>
      </Link>
      <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-300 transition">
        Sign In
      </button>
    </nav>
  );
}

export default Navbar;
