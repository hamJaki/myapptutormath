"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
      <div className="relative min-h-screen w-full bg-[url('/image/course.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/60"/>
        <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography
          variant="h1"
          color="white"
          className="md:max-w-full lg:max-w-3xl"
        >
          Personalized AI math tutor
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
        >
          Our web app brings math to life for students in grades 1-6 with interactive lessons, exciting challenges, and AI-powered personalized feedback. Perfect for both beginners and advanced learners.
        </Typography>
        <div>
          <Button variant="gradient" color="white">
            start
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
