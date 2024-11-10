import React from "react";
import Link from "next/link";
import { BookOpen, GraduationCap, Medal } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative bg-gradient-to-b from-cyan-900 to-[#1e1e1e] text-white py-10 md:py-28 overflow-hidden">
      {/* Background SVG Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path
            d="M 30 0 L 0 0 0 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Flowing Lines SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full  opacity-20 "
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50 L1000,100 L0,100 Z"
          fill="currentColor"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50 L1000,100 L0,100 Z;
              M0,50 C150,80 350,20 500,50 C650,80 850,20 1000,50 L1000,100 L0,100 Z;
              M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50 L1000,100 L0,100 Z"
          />
        </path>
      </svg>

      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            About Wisdom School
          </h3>
          <p className="text-sm text-gray-300">
            Wisdom School is dedicated to providing transformative education
            that focuses on practical life skills, personal growth, and
            real-world knowledge that truly matters.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm hover:text-cyan-400 transition-colors"
              prefetch={false}
            >
              <TwitterIcon className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-cyan-400 transition-colors"
              prefetch={false}
            >
              <LinkedInIcon className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-cyan-400 transition-colors"
              prefetch={false}
            >
              <YoutubeIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            Popular Courses
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2"
                prefetch={false}
              >
                <Medal className="w-4 h-4" />
                Personal Finance
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2"
                prefetch={false}
              >
                <Medal className="w-4 h-4" />
                Critical Thinking
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2"
                prefetch={false}
              >
                <Medal className="w-4 h-4" />
                Emotional Intelligence
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2"
                prefetch={false}
              >
                <Medal className="w-4 h-4" />
                Life Management
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-cyan-400" />
            Contact Us
          </h3>
          <p className="text-sm text-gray-300">
            Have questions about our courses or need guidance? Our education
            advisors are here to help.
          </p>
          <div className="flex flex-col gap-2">
            <Link
              href="#"
              className="text-sm hover:text-cyan-400 transition-colors"
              prefetch={false}
            >
              <MailIcon className="w-5 h-5 mr-2 inline-block" />
              contact@wisdomschool.edu
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-cyan-400 transition-colors"
              prefetch={false}
            >
              <PhoneIcon className="w-5 h-5 mr-2 inline-block" />
              +1 (555) 123-4567
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Wisdom School. All rights reserved.
        </p>
        <nav className="flex gap-4 md:gap-6 text-sm text-gray-400">
          <Link
            href="#"
            className="hover:text-cyan-400 transition-colors"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="hover:text-cyan-400 transition-colors"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="hover:text-cyan-400 transition-colors"
            prefetch={false}
          >
            Student Guidelines
          </Link>
        </nav>
      </div>
    </footer>
  );
}

function LinkedInIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Reuse the other icon components from your original code
function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
