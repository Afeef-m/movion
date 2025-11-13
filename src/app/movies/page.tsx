"use client"
import axiosInstance from "@/lib/api";
import React, { useEffect, useState } from "react"
import toast from "react-hot-toast";
import Image from "next/image";

interface Movie{
        id:string;
        title:string;
        rating:number;
        poster:string;
        description: string;
        genre: string[];
        duration: string;
        releaseYear: number;
    }
export default function Movie(){
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchMovie = async ()=>{
            try{
                const res = await axiosInstance.get("/movies")
                setMovies(res.data);
            }catch{
                toast.error("Error fetching movies")
            }finally{
                setLoading(false)
            }
        }
        fetchMovie();
    },[])

    if(loading){
        <div className="flex justify-center items-center h-screen text-lg">
            Loading Movies...
        </div>
    }
    return(
        <div className="min-h-screen bg-slate-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">
        🎬 Now Showing
      </h1>

      <div className="grid gap-8 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
          >
            <div className="relative w-full h-64">
              <Image
                src={movie.poster}
                alt={movie.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="mt-4 flex flex-col flex-1">
              <h2 className="text-xl font-semibold text-slate-800">
                {movie.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {movie.description}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                🎭 {movie.genre.join(", ")}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                🕒 {movie.duration} • 📅 {movie.releaseYear}
              </p>
              <p className="mt-2 font-semibold text-yellow-600">
                ⭐ {movie.rating}
              </p>
            </div>

            <button className="mt-4 bg-yellow-400 text-black font-medium rounded-lg py-2 hover:bg-yellow-300 transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
    )
}