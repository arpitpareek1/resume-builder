"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import type {
  Employment,
  Education,
  Courses,
  Extras,
  Projects,
  Template,
  Skills,
  PersonalInfo,
} from "@/types/resume";
import Preview from "./resumes/ProfessionalResume";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import PersonalDetails from "./sections/PersonalDetails";
import ProfessionalSummary from "./sections/ProfessionalSummary";
import SkillsSection from "./sections/Skills";
import EmploymentHistory from "./sections/EmploymentHistory";
import EducationSection from "./sections/Education";
import CoursesSection from "./sections/Courses";

import "./styles/globals.css";
import ProjectSelection from "./sections/Projects";
import ResumeSelectionModal from "./modals/ResumeSelectionModal";
import ResumeProvider from "./components/resume-provider";
import { ModeToggle } from "./components/ModeToggle";

export default function ResumeBuilder() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    jobTitle: "",
    image: "",
  });

  const [employments, setEmployments] = useState<Employment[]>([]);

  const [courses, setCourses] = useState<Courses[]>([]);

  const [projects, setProjects] = useState<Projects[]>([]);

  const [education, setEducation] = useState<Education[]>([]);

  const [userSkills, setSkills] = useState<Skills[]>([]);

  const [extras, setExtras] = useState<Extras>({
    personalInfo: [],
    summary: "",
  });

  const [selectedTemplate, setSelectedTemplate] = useState<Template>();

  const handlePrint = () => {
    const content = document.getElementById("resume-preview");
    if (!content || !personalInfo) return;
    const newWindow = window.open("", "_blank");

    if (!newWindow) {
      alert("Popup blocked! Allow popups to generate PDF.");
      return;
    }

    newWindow.document.write(`
      <html>
        <head>
          <title>${personalInfo.firstName} ${personalInfo.lastName} - ${
      personalInfo.jobTitle
    } - Resume Builder - ${new Date().getUTCMilliseconds()}</title>
          <style>
            body { margin: 0 }
          </style>
        </head>
        <body>
          ${content.innerHTML}
          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `);
    newWindow.document.close();
  };

  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Resume Builder</h1>
          <div className="flex items-center gap-4">
            <ResumeSelectionModal
              onContinue={(t: Template) => {
                setSelectedTemplate(t);
              }}
            />
            <Button variant="outline" onClick={handlePrint}>
              Download PDF
            </Button>
            {/* <ModeToggle /> */}
          </div>
        </div>
      </header>

      <main>
        <ResizablePanelGroup
          direction="horizontal"
          className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 custom-scrollbar"
        >
          <ResizablePanel defaultSize={40}>
            <div className="space-y-6 h-[90vh] overflow-auto custom-scrollbar">
              {/* Personal Details */}
              <PersonalDetails
                extras={extras}
                personalInfo={personalInfo}
                setExtras={setExtras}
                setPersonalInfo={setPersonalInfo}
              />

              {/* Professional Summary */}
              <ProfessionalSummary extras={extras} setExtras={setExtras} />

              {/* Skills */}
              <SkillsSection userSkills={userSkills} setSkills={setSkills} />

              {/* Employment History */}
              <EmploymentHistory
                employments={employments}
                setEmployments={setEmployments}
              />

              {/* Education */}
              <EducationSection
                education={education}
                setEducation={setEducation}
              />

              {/* Courses */}
              <CoursesSection courses={courses} setCourses={setCourses} />

              {/* ProjectSelection */}
              <ProjectSelection projects={projects} setProjects={setProjects} />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          {/* Preview */}
          <ResizablePanel defaultSize={60}>
            <div className="space-y-6 h-[90vh] overflow-auto custom-scrollbar bg-background">
              <ResumeProvider
                education={education}
                employments={employments}
                extras={extras}
                personalInfo={personalInfo}
                userSkills={userSkills}
                courses={courses}
                projects={projects}
                template={selectedTemplate}
              />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  );
}
