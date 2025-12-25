import Link from "next/link";
import { ArrowLeft, Smartphone, Store } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
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

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Banking Apps
            </h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Real-world fintech applications delivered to production and available on both stores
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                      {project.title}
                    </h2>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">
                  {project.company}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {project.role} | {project.duration}
                </p>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3 uppercase tracking-wide">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3 uppercase tracking-wide">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg text-sm font-medium">
                  <Store className="w-4 h-4" />
                  Available on Both Stores
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
          <h2 className="text-2xl font-bold mb-4">All Projects Live on App Stores</h2>
          <p className="text-blue-100 mb-6">
            All four banking applications are successfully deployed and available on both Google Play Store and Apple App Store,
            serving thousands of users with secure and reliable banking services.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
              <Smartphone className="w-5 h-5" />
              <span className="font-medium">Google Play Store</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
              <Store className="w-5 h-5" />
              <span className="font-medium">Apple App Store</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
