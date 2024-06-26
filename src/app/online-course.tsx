"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: InboxIcon,
    title: "Hands-On tests",
    description:
      "Apply your knowledge to real-time test, improve your time management.",
  },
  {
    icon: AcademicCapIcon,
    title: "Generate new problems",
    description:
      "AI can generate new problems for you!",
  },
  {
    icon: CheckBadgeIcon,
    title: "Flexible Learning",
    description: "Access course materials whenever it suits your schedule.",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/online-course2.png"
            className="h-full max-h-[250px] w-full object-cover scale-70"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Problem solving
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            Dive into our Problem Solving section to practice and master specific math topics. Choose a topic and tackle a variety of problems categorized by difficulty level. Get immediate feedback and detailed solutions to help you understand and improve. Perfect for reinforcing concepts and building confidence in your math skills.
          </Typography>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;
