import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { skills } from "@/data/skills";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Technical Skills
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          Technologies and tools I work with
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.values(skills).map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {category.title[0]}
                  </span>
                </div>
                {category.title}
              </h2>

              <div className="space-y-4">
                {category.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
          <h2 className="text-2xl font-bold mb-4">Looking for a developer?</h2>
          <p className="text-blue-100 mb-6">
            I'm always interested in hearing about new opportunities and challenges.
            Feel free to reach out if you'd like to connect!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
