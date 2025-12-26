"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Mail, Linkedin as LinkedinIcon, Github as GithubIcon, MapPin, Phone, ExternalLink, Building, Award, Shield, Code, Wrench, Briefcase, Menu, X, User, Trophy, Building2, GraduationCap, Award as Certificate, Youtube } from "lucide-react";
import { profile } from "@/data/profile";
import { experience as experienceData } from "@/data/experience";
import { projects as projectsData } from "@/data/projects";
import { skills as skillsData } from "@/data/skills";
import { education as educationData } from "@/data/education";
import { certifications as certificationsData } from "@/data/certifications";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl font-bold text-primary">
              AMIRUL
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 dark:text-slate-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Animated Background - Updated to use primary color */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-primary/10 dark:to-teal-950" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 dark:bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-400 dark:bg-teal-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Content */}
      <div className="min-h-screen   mx-auto px-6">
        {/* Hero Section - FreeFolio Style - Full Width Background */}
        <section id="home" className="min-h-screen flex items-center -mx-6 px-6 py-20 bg-primary">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <div className="order-2 md:order-1 flex justify-center">
                <div className="w-80 h-80 rounded-full shadow-2xl overflow-hidden">
                  <Image
                    src="/avatar.png"
                    alt={profile.name}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Hero Content */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <h3 className="text-white text-2xl md:text-3xl font-light mb-3">
                  I'm
                </h3>
                <h1 className="text-3xl md:text-7xl font-bold text-white uppercase mb-4" style={{ WebkitTextStroke: "2px #ffffff" }}>
                  {profile.name}
                </h1>
                <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-6">
                  {profile.role}
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    Hire Me
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-semibold hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Download CV
                  </a>
                  {profile.youtube && (
                    <a
                      href={profile.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      <Youtube className="w-5 h-5" />
                      Watch Video
                    </a>
                  )}
                </div>

                {/* Contact Info */}
                <div className="space-y-2 text-white/90">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <Mail className="w-5 h-5" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <Phone className="w-5 h-5" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <MapPin className="w-5 h-5" />
                    <span>{profile.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-primary p-1 shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/avatar.png"
                    alt={profile.name}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <User className="w-12 h-12 text-primary dark:text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
                  About Me
                </h2>
              </div>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                {profile.summary}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-5 h-5 text-primary dark:text-primary" />
                  <span className="text-lg">{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <Mail className="w-5 h-5 text-primary dark:text-primary" />
                  <span className="text-lg">{profile.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <Phone className="w-5 h-5 text-primary dark:text-primary" />
                  <span className="text-lg">{profile.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-12 h-12 text-yellow-600 dark:text-yellow-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
                Achievements
              </h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-400">My professional milestones and recognition</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary dark:text-primary mb-2">5+</div>
              <div className="text-slate-700 dark:text-slate-300 font-medium">Years Experience</div>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-primary rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary dark:text-primary mb-2">15+</div>
              <div className="text-slate-700 dark:text-slate-300 font-medium">Projects Completed</div>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">500K+</div>
              <div className="text-slate-700 dark:text-slate-300 font-medium">Users Impacted</div>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">3</div>
              <div className="text-slate-700 dark:text-slate-300 font-medium">Awards Won</div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-12 h-12" />
              <h3 className="text-2xl font-bold">Employee of the Quarter</h3>
            </div>
            <p className="text-blue-100 mb-6 text-lg">
              Recognized for exceptional contributions to project delivery and technical excellence.
              Demonstrated strong leadership in delivering production-grade fintech applications used by
              hundreds of thousands of real users.
            </p>
            <div className="text-lg font-semibold">March 2023</div>
          </div>
        </section>

        {/* Professional Journey Section */}
        <section id="experience" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Professional Journey
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              A timeline of my professional growth and the impactful projects I've contributed to.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />

            {/* Experience Cards */}
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-[30px] top-6 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg" />

                  {/* Card */}
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:gap-8">
                      {/* Left Column - Metadata */}
                      <div className="lg:w-1/3 flex flex-col gap-3 mb-6 lg:mb-0">
                        {/* Date Badge */}
                        <span className="inline-flex items-center w-fit px-4 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold">
                          {exp.period}
                        </span>

                        {/* Job Title */}
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                          {exp.role}
                        </h3>

                        {/* Company */}
                        <div className="flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">
                            {exp.company}
                          </span>
                          {exp.website && (
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
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
                          <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            Key Achievements:
                          </h4>
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
                          <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            Technologies:
                          </h4>
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
        </section>

        {/* Academic Qualification Section */}
        <section id="education" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Academic Qualification
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              My educational background and academic achievements
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />

            {/* Education Cards */}
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-[30px] top-6 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg" />

                  {/* Card */}
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:gap-8">
                      {/* Left Column - Metadata */}
                      <div className="lg:w-1/3 flex flex-col gap-3 mb-6 lg:mb-0">
                        {/* Year/Period Badge */}
                        <span className="inline-flex items-center w-fit px-4 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold">
                          {edu.period}
                        </span>

                        {/* Degree */}
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                          {edu.level}
                        </h3>

                        {/* Institution */}
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">
                            {edu.institution}
                          </span>
                          {edu.website && (
                            <a
                              href={edu.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>

                        {/* Location */}
                        {edu.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-slate-500 dark:text-slate-500 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-400">
                              {edu.location}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Right Column - Content */}
                      <div className="lg:w-2/3 flex flex-col gap-4">
                        {/* Description */}
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {edu.description}
                        </p>

                        {/* Degree Details */}
                        <div>
                          <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            Degree Details:
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                              <span className="w-1.5 h-1.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                              <span><strong>Program:</strong> {edu.degree}</span>
                            </li>
                            {edu.field && (
                              <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                                <span className="w-1.5 h-1.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                                <span><strong>Field:</strong> {edu.field}</span>
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* Achievements (if available) */}
                        {edu.achievements && (
                          <div>
                            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                              Key Achievements:
                            </h4>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
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
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Training Section */}
        <section id="certifications" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Certifications & Training
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Professional certifications, competitions, and training programs
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />

            {/* Certification Cards */}
            <div className="space-y-8">
              {certificationsData.map((cert, index) => (
                <div
                  key={index}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-[30px] top-6 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg" />

                  {/* Card */}
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:gap-8">
                      {/* Left Column - Metadata */}
                      <div className="lg:w-1/3 flex flex-col gap-3 mb-6 lg:mb-0">
                        {/* Year Badge */}
                        <span className="inline-flex items-center w-fit px-4 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold">
                          {cert.year}
                        </span>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                          {cert.title}
                        </h3>

                        {/* Organization */}
                        <div className="flex items-center gap-2">
                          <Certificate className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">
                            {cert.organization}
                          </span>
                        </div>

                        {/* Type */}
                        {cert.type && (
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-slate-500 dark:text-slate-500 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-400">
                              {cert.type}
                            </span>
                          </div>
                        )}

                        {/* Position/Achievement Badge */}
                        {cert.position && (
                          <div className="inline-flex items-center w-fit px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-semibold">
                            🏆 {cert.position}
                          </div>
                        )}
                      </div>

                      {/* Right Column - Content */}
                      <div className="lg:w-2/3 flex flex-col gap-4">
                        {/* Description */}
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {cert.description}
                        </p>

                        {/* Period/Duration */}
                        {cert.period && (
                          <div>
                            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                              Duration:
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 text-sm">
                              {cert.period}
                            </p>
                          </div>
                        )}

                        {/* Key Achievements */}
                        {cert.achievements && cert.achievements.length > 0 && (
                          <div>
                            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                              Key Highlights:
                            </h4>
                            <ul className="space-y-2">
                              {cert.achievements.map((achievement, i) => (
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
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code className="w-12 h-12 text-primary dark:text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
                Projects
              </h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-400">Featured banking applications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary dark:text-primary font-medium mb-1">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">
                      {project.company}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {project.role} | {project.duration}
                    </p>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                        >
                          <span className="w-1 h-1 bg-primary dark:bg-primary rounded-full mt-1 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 5).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-3 border-t border-slate-200 dark:border-slate-700">
                    {project.links.appStore && (
                      <a
                        href={project.links.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black rounded text-xs font-medium hover:shadow-lg transition-shadow"
                      >
                        <Award className="w-3 h-3" />
                        App Store
                      </a>
                    )}
                    {project.links.playStore && (
                      <a
                        href={project.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded text-xs font-medium hover:shadow-lg transition-shadow"
                      >
                        <Code className="w-3 h-3" />
                        Play Store
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wrench className="w-12 h-12 text-green-600 dark:text-green-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
                Skills
              </h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-400">Technical expertise & technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(skillsData).map((category, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {category.title[0]}
                    </span>
                  </div>
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.items.map((skill, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-primary to-primary-dark h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-12 h-12 text-primary dark:text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
                Contact
              </h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-400">Let's connect and collaborate</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a
              href={`mailto:${profile.email}`}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl group-hover:scale-110 transition-transform">
                <Mail className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Email</h3>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Direct response</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 break-all">{profile.email}</p>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">LinkedIn</h3>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Professional network</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Connect with me</p>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 p-3 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl group-hover:scale-110 transition-transform">
                <GithubIcon className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">GitHub</h3>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">Check out my code</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">View repositories</p>
            </a>

            <a
              href={profile.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 p-3 bg-gradient-to-br from-primary to-purple-700 rounded-xl group-hover:scale-110 transition-transform">
                <ExternalLink className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Portfolio</h3>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">More projects</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Explore my work</p>
            </a>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to collaborate?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Send Me a Message
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
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
