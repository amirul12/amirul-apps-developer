import Link from "next/link";
import { ArrowLeft, Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";

export default function ContactPage() {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Get In Touch
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href={`mailto:${profile.email}`}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Email
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  Direct response
                </p>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-medium break-all">
              {profile.email}
            </p>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  LinkedIn
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  Professional network
                </p>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              Connect with me
            </p>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl group-hover:scale-110 transition-transform">
                <Github className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  GitHub
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  Check out my code
                </p>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              View repositories
            </p>
          </a>

          <a
            href={profile.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl group-hover:scale-110 transition-transform">
                <Send className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Portfolio
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  More projects
                </p>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              Explore my work
            </p>
          </a>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to collaborate?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Send Me a Message
          </a>
        </div>

        <div className="mt-12 text-center text-slate-600 dark:text-slate-400">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="w-4 h-4" />
            <p>{profile.location}</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            <p>{profile.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
