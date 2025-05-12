
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExerciseSection from "@/components/ExerciseSection";

const Exercises = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ExerciseSection />
      <Footer />
    </div>
  );
};

export default Exercises;
