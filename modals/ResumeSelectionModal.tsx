"use client";

import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Template } from "@/types/resume";

export default function ResumeSelectionModal({
  onContinue,
}: {
  onContinue: (t: Template) => void;
}) {
  const [selectedResume, setSelectedResume] = useState<Template | null>(null);
  const resumes: {
    id: string;
    imageUrl: string;
    title: Template;
  }[] = [
    { id: "1", imageUrl: "/resume-1.png", title: "Professional Resume" },
    { id: "2", imageUrl: "/resume-4.png", title: "Modern Resume" },
    { id: "3", imageUrl: "/resume-3.png", title: "Creative Resume" },
    {
      id: "4",
      imageUrl: "/resume-2.png",
      title: "Minimalist Resume",
    },
    {
      id: "6",
      imageUrl: "/resume-5.png",
      title: "Executive Resume",
    },
  ];

  const handleContinue = () => {
    if (selectedResume) {
      onContinue(selectedResume);
    } else {
      alert("Please select a template to continue");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Select template</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Choose Your Resume Template
          </DialogTitle>
        </DialogHeader>
        <div
          className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 custom-scrollbar overflow-auto"
          style={{ maxHeight: "70vh" }}
        >
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className={`border rounded-lg p-2 flex flex-col items-center cursor-pointer transition ${
                selectedResume === resume.title
                  ? "border-primary shadow-lg scale-105"
                  : "border-border hover:border-primary hover:shadow-md"
              }`}
              onClick={() => setSelectedResume(resume.title)}
            >
              <div className="relative w-full rounded-md overflow-hidden group">
                <img
                  src={resume.imageUrl || "/placeholder.svg"}
                  alt={resume.title}
                  className="object-cover w-full rounded-md transition-transform duration-3000 ease-in-out group-hover:scale-110 group-hover:shadow-xl"
                  style={{
                    height: "200px",
                  }}
                />
              </div>
              <p className="text-center font-medium mt-2 text-sm">
                {resume.title}
              </p>
            </div>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              disabled={!selectedResume}
              onClick={handleContinue}
              className="w-full"
            >
              Continue with Selected Template
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
