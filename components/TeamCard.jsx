"use client";

import FlipCard from "./animata/card/flip-card";
import { DirectionAwareTabs } from "./ui/direction-aware-tabs";

const TeamCard = () => {
  const tabs = [
    {
      id: 0,
      label: "organizer",
      content: (
        <div className="w-full flex justify-center items-center p-4 rounded-lg gap-3">
          <div className="grid grid-cols-3 gap-4">
          <div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="Organizer"
  title="Sumona"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div>
<div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="What is programming?"
  title="Programming"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div>
<div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="What is programming?"
  title="Programming"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div></div>
        </div>
      ),
    },
    {
      id: 1,
      label: "web",
      content: (
        <div className="w-full flex justify-center items-center p-4 rounded-lg gap-3">
          <div className="grid grid-cols-3 gap-4">
          <div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="Organizer"
  title="Sumona"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div>
<div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="What is programming?"
  title="Programming"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div>
<div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="What is programming?"
  title="Programming"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div></div>
        </div>
      ),
    },
    {
      id: 2,
      label: "sponsorship",
      content: (
        <div className="w-full flex justify-center items-center p-4 rounded-lg gap-3">
          <div className="grid grid-cols-3 gap-4">
          <div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="Organizer"
  title="Sumona"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div>
<div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="What is programming?"
  title="Programming"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div>
<div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="What is programming?"
  title="Programming"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div></div>
        </div>
      ),
    },
    {
      id: 4,
      label: "design",
      content: (
        <div className="w-full flex justify-center items-center p-4 rounded-lg gap-3">
          <div className="grid grid-cols-3 gap-4">
          <div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="Organizer"
  title="Sumona"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div>
<div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="What is programming?"
  title="Programming"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div>
<div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="What is programming?"
  title="Programming"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div></div>
        </div>
      ),
    },
    {
      id: 5,
      label: "management",
      content: (
        <div className="w-full flex justify-center items-center p-4 rounded-lg gap-3">
          <div className="grid grid-cols-3 gap-4">
          <div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="Organizer"
  title="Sumona"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div>
<div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="What is programming?"
  title="Programming"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div>
<div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="What is programming?"
  title="Programming"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div></div>
        </div>
      ),
    },
    {
      id: 6,
      label: "outreach",
      content: (
        <div className="w-full flex justify-center items-center p-4 rounded-lg gap-3">
          <div className="grid grid-cols-3 gap-4">
          <div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="Organizer"
  title="Sumona"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div>
<div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="What is programming?"
  title="Programming"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div>
<div><FlipCard
  description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
  image=" https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  rotate="y"
  subtitle="What is programming?"
  title="Programming"
  linkedinUrl="https://www.linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-profile"
/></div></div>
        </div>
      ),
    },
  ];

  return (
    <div className="">
      <DirectionAwareTabs tabs={tabs} />
    </div>
  );
};

export default TeamCard;

