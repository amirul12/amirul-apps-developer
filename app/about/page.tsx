import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          About Me
        </h1>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            {profile.summary}
          </p>

          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            I specialize in building robust, scalable mobile applications with a focus on fintech and
            digital banking solutions. With extensive experience in Flutter development, I've led teams
            and delivered production-ready applications that serve thousands of users.
          </p>

          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            My approach combines technical expertise with strong leadership skills, ensuring that
            projects are not only well-architected but also delivered on time and meet business
            objectives. I'm passionate about clean code, best practices, and continuous learning.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            Contact Information
          </h2>

          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Email</p>
                <p className="text-slate-900 dark:text-slate-100 font-medium">{profile.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-lg">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Phone</p>
                <p className="text-slate-900 dark:text-slate-100 font-medium">{profile.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Location</p>
                <p className="text-slate-900 dark:text-slate-100 font-medium">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
