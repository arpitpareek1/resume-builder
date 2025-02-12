import ProfessionalResume from "@/resumes/ProfessionalResume";
import ResumeOne from "@/resumes/resume-template-1";
import ResumeTwo from "@/resumes/resume-template-2";
import ResumeThree from "@/resumes/resume-template-3";
import TraditionalResume from "@/resumes/traditional-resume";
import { ResumePreviewProps, Template } from "@/types/resume";

const ResumeProvider = ({
  courses,
  education,
  employments,
  extras,
  personalInfo,
  projects,
  template,
  userSkills,
}: ResumePreviewProps & {
  template?: Template;
}) => {
  switch (template) {
    case "Professional Resume":
      return (
        <ProfessionalResume
          courses={courses}
          education={education}
          employments={employments}
          extras={extras}
          personalInfo={personalInfo}
          projects={projects}
          userSkills={userSkills}
        />
      );
    case "Modern Resume":
      return (
        <ResumeTwo
          courses={courses}
          education={education}
          employments={employments}
          extras={extras}
          personalInfo={personalInfo}
          projects={projects}
          userSkills={userSkills}
        />
      );
    case "Creative Resume":
      return (
        <ResumeOne
          courses={courses}
          education={education}
          employments={employments}
          extras={extras}
          personalInfo={personalInfo}
          projects={projects}
          userSkills={userSkills}
        />
      );

    case "Executive Resume":
      return (
        <ResumeThree
          courses={courses}
          education={education}
          employments={employments}
          extras={extras}
          personalInfo={personalInfo}
          projects={projects}
          userSkills={userSkills}
        />
      );
    case "Minimalist Resume":
      return (
        <TraditionalResume
          courses={courses}
          education={education}
          employments={employments}
          extras={extras}
          personalInfo={personalInfo}
          projects={projects}
          userSkills={userSkills}
        />
      );
    default:
      return (
        <ResumeThree
          courses={courses}
          education={education}
          employments={employments}
          extras={extras}
          personalInfo={personalInfo}
          projects={projects}
          userSkills={userSkills}
        />
      );
  }
};

export default ResumeProvider;
