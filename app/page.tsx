import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <div className="mb-8 relative">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-6xl font-bold text-slate-600 dark:text-slate-300">
                {profile.name.split(" ").map((n) => n[0]).join("")}
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            {profile.name}
          </h1>

          <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-8 font-semibold">
            {profile.role}
          </p>

          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link
              href="/experience"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 rounded-full font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

          <div className="flex gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
