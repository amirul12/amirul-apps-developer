import Link from "next/link";
import { ArrowLeft, Building2, MapPin } from "lucide-react";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          Professional Journey
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          A timeline of my professional growth and the impactful projects I've contributed to.
        </p>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />

          {/* Experience Cards */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-[30px] top-6 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full border-4 border-white dark:border-slate-800 shadow-lg" />

                {/* Card */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:gap-8">
                    {/* Left Column - Metadata */}
                    <div className="lg:w-1/3 flex flex-col gap-3 mb-6 lg:mb-0">
                      {/* Date Badge */}
                      <span className="inline-flex items-center w-fit px-4 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold">
                        {exp.period}
                      </span>

                      {/* Job Title */}
                      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {exp.role}
                      </h2>

                      {/* Company */}
                      <div className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {exp.company}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-500 dark:text-slate-500 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:w-2/3 flex flex-col gap-4">
                      {/* Description */}
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                          Key Achievements:
                        </h3>
                        <ul className="space-y-2">
                          {exp.achievements.slice(0, 4).map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm"
                            >
                              <span className="w-1.5 h-1.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                          Technologies:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
