export interface Employment {
  jobTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
  city: string;
  description: string;
}

export interface Courses {
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  description?: string;
}
export interface Projects {
  title: string;
  description?: string;
  link?: string;
}

export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  city: string;
  description: string;
}

export interface ResumePreviewProps {
  education: Education[];
  employments: Employment[];
  extras: {
    personalInfo: { title: string; url: string }[];
    summary: string;
  };
  personalInfo: PersonalInfo;
  courses: Courses[];
  projects: Projects[];
  userSkills: Skills[];
}

export interface PersonalInfo {
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  image: string;
}

export interface Extras {
  personalInfo: {
    title: string;
    icon: string;
    url: string;
  }[];
  summary: string;
}

export type Template =
  | "Professional Resume"
  | "Modern Resume"
  | "Creative Resume"
  | "Minimalist Resume"
  | "Academic Resume"
  | "Executive Resume";

export interface Skills {
  name: string;
  level: number;
}
