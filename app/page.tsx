"use client";

import Image from "next/image";
import { Mail, Linkedin as LinkedinIcon, Github as GithubIcon, MapPin, Phone, ExternalLink, Building, Calendar, Award, Shield, Code, Wrench, Briefcase } from "lucide-react";
import { profile } from "@/data/profile";
import { experience as experienceData } from "@/data/experience";
import { projects as projectsData } from "@/data/projects";
import { skills as skillsData } from "@/data/skills";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center py-20">
          <div className="mb-8 relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                <Image
                  src="/avatar.png"
                  alt={profile.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            {profile.name}
          </h1>

          <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-8 font-semibold">
            {profile.role}
          </p>

          <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
            {profile.summary}
          </p>

          <div className="flex gap-6 mb-12">
            <a
              href={`mailto:${profile.email}`}
              className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6 text-slate-900 dark:text-slate-300" />
            </a>
          </div>

          <div className="flex items-center gap-8 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{profile.phone}</span>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 scroll-mt-20" id="experience">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Work Experience
            </h2>
          </div>

          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                        {exp.company}
                      </h3>
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-2">
                      {exp.role}
                    </p>
                    {exp.department && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        {exp.department}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                      >
                        <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {"projects" in exp && exp.projects && exp.projects.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                      Key Projects:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.projects.map((project, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
                        >
                          <Code className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-700 dark:text-slate-300">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 scroll-mt-20" id="projects">
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-10 h-10 text-purple-600 dark:text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Banking Applications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 mb-2">
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
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
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
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3 uppercase tracking-wide">
                    Tech Stack
                  </h4>
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
                  {project.links.appStore && (
                    <a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                    >
                      <Award className="w-4 h-4" />
                      App Store
                    </a>
                  )}
                  {project.links.playStore && (
                    <a
                      href={project.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                    >
                      <Code className="w-4 h-4" />
                      Play Store
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 scroll-mt-20" id="skills">
          <div className="flex items-center gap-3 mb-12">
            <Wrench className="w-10 h-10 text-green-600 dark:text-green-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400">
              Technical Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.values(skillsData).map((category, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {category.title[0]}
                    </span>
                  </div>
                  {category.title}
                </h3>

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
            <h2 className="text-2xl font-bold mb-4">Employee of the Quarter</h2>
            <p className="text-blue-100 mb-6">
              Recognized for exceptional contributions to project delivery and technical excellence.
              Demonstrated strong leadership in delivering production-grade fintech applications used by
              hundreds of thousands of real users.
            </p>
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8" />
              <span className="font-semibold">March 2023</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 scroll-mt-20" id="contact">
          <div className="flex items-center gap-3 mb-12">
            <Mail className="w-10 h-10 text-pink-600 dark:text-pink-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-600 dark:from-pink-400 dark:to-red-400">
              Get In Touch
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href={`mailto:${profile.email}`}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Email</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-500">Direct response</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium break-all">{profile.email}</p>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">LinkedIn</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-500">Professional network</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium">Connect with me</p>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">GitHub</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-500">Check out my code</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium">View repositories</p>
            </a>

            <a
              href={profile.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl group-hover:scale-110 transition-transform">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Portfolio</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-500">More projects</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium">Explore my work</p>
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
        </section>

        {/* Footer */}
        <footer className="py-12 text-center text-slate-600 dark:text-slate-400">
          <p className="mb-2">© 2025 {profile.name}. All rights reserved.</p>
          <p className="text-sm">Built with Next.js, TypeScript, and Tailwind CSS</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
