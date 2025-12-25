import Link from "next/link";
import { ArrowLeft, Trophy, Star, Users, Smartphone } from "lucide-react";

export default function AchievementsPage() {
  const achievements = [
    {
      icon: Trophy,
      title: "Employee of the Quarter",
      description: "Recognized as top-performing team member for exceptional contributions to project delivery and technical excellence.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Smartphone,
      title: "5+ Published Apps",
      description: "Successfully published more than 5 mobile applications on Google Play Store and Apple App Store, serving thousands of users.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led and mentored teams of 4-5 developers, fostering collaboration and delivering high-quality software solutions.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      title: "Clean Architecture Advocate",
      description: "Implemented scalable and maintainable architecture patterns following SOLID principles across multiple production applications.",
      color: "from-green-500 to-emerald-500",
    },
  ];

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
          Achievements
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          Recognition and milestones throughout my career
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 bg-gradient-to-br ${achievement.color} rounded-xl flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                      {achievement.title}
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Professional Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full" />
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">6+ years</span> in mobile application development
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-full" />
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">4+ years</span> specializing in Flutter development
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-600 dark:bg-green-400 rounded-full" />
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Multiple</span> fintech & digital banking projects
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-orange-600 dark:bg-orange-400 rounded-full" />
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Full lifecycle</span> development experience
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-pink-600 dark:bg-pink-400 rounded-full" />
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Clean Architecture</span> & SOLID principles expert
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-cyan-600 dark:bg-cyan-400 rounded-full" />
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Cross-platform</span> development expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
