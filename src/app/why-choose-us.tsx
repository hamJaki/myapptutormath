"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  ChartPieIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import BackgroundCard from "@/components/background-card";

interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="mb-2 md:w-10/12 font-normal !text-gray-500">
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h2" className="text-center mb-2" color="blue-gray">
        Why choose our platform?
      </Typography>
      <Typography
        variant="lead"
        className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
      >
        Discover the unique advantages, benefits, and standout features that set
        our platform apart from the rest.
      </Typography>
      <div className="mt-8">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <BackgroundCard title="trained AI model Instructors">
            Learn from highly developed AI model with years of hands-on experience
            in math and teaching technique.
          </BackgroundCard>
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={CloudIcon} title="Math Fundamentals">
                Start with the basics. Understand math&apos;s core concepts,
                component structure.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={ChartPieIcon} title="efficient learning">
                Learn how to manage time and solve easily problems.
              </Option>
            </div>
            <Option icon={Cog6ToothIcon} title="Ask the question">
              You can ask any question for AI tutor about math.
            </Option>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
