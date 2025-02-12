import React from "react";
import { ResumePreviewProps } from "../types/resume";
import { MapPin, Phone, Mail } from "lucide-react";

const ProfessionalResume = ({
  personalInfo,
  userSkills,
  employments,
  education,
  extras,
  courses,
  projects,
}: ResumePreviewProps) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        padding: "32px",
        maxWidth: "1200px",
        margin: "0 auto",
        overflowY: "auto",
        textAlign: "left",
      }}
      id="resume-preview"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "40px",
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            textAlign: "left",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "16px" }}>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#1F2937",
                marginBottom: "8px",
                textAlign: "left",
              }}
            >
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            <p
              style={{ fontSize: "16px", color: "#6B7280", textAlign: "left" }}
            >
              {personalInfo.jobTitle}
            </p>
          </div>

          {/* Profile */}
          {extras.summary && (
            <div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1F2937",
                  marginBottom: "12px",
                  textAlign: "left",
                }}
              >
                Profile
              </h2>
              <div
                style={{
                  fontSize: "14px",
                  color: "#374151",
                  lineHeight: "1.8",
                  textAlign: "left",
                }}
              >
                <p style={{ textAlign: "left" }}>
                  {extras.summary.split("\n").map((summary, index) => (
                    <div key={index}>{summary}</div>
                  ))}
                </p>
              </div>
            </div>
          )}

          {/* Employment History */}
          {employments.length > 0 && (
            <div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1F2937",
                  marginBottom: "7px",
                }}
              >
                Employment History
              </h2>
              {employments.map((emp, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "10px",
                    paddingBottom: "10px",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#6B7280",
                    }}
                  >
                    {emp.jobTitle} at {emp.employer}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#6B7280" }}>
                    {emp.startDate} - {emp.endDate}
                  </p>
                  <div
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.8",
                      color: "#374151",
                    }}
                  >
                    {emp.description.split("\n").map((desc, idx) => (
                      <p key={idx} style={{ margin: "8px", textAlign: "left" }}>
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1F2937",
                  marginBottom: "12px",
                }}
              >
                Education
              </h2>
              {education.map((edu, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "16px",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#6B7280",
                    }}
                  >
                    {edu.school}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#6B7280" }}>
                    {edu.degree}
                  </p>
                  <p style={{ fontSize: "14px", color: "#6B7280" }}>
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              ))}
            </div>
          )}
          {courses.length > 0 && (
            <div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1F2937",
                  marginBottom: "12px",
                }}
              >
                Courses
              </h2>
              {courses.map((course, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "16px",
                    paddingBottom: "8px",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#6B7280",
                    }}
                  >
                    {course.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#6B7280" }}>
                    {course.institution}
                  </p>
                  <p style={{ fontSize: "14px", color: "#6B7280" }}>
                    {course.startDate} - {course.endDate}
                  </p>
                  {course.description && (
                    <div className="text-sm mt-2">
                      {course.description.split("\n").map((summary) => (
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {summary}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            textAlign: "left",
          }}
        >
          {/* Details */}
          {Object.values(personalInfo).some((v) => Boolean(v)) && (
            <div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1F2937",
                  marginBottom: "12px",
                }}
              >
                Details
              </h2>
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "1.8",
                  color: "#374151",
                }}
              >
                <p className="flex items-center gap-1">
                  <MapPin size={16} /> {personalInfo.city}
                  {", "}
                  {personalInfo.country}
                </p>
                <a
                  href={`tel:${personalInfo.phone}`}
                  target="_blank"
                  style={{
                    color: "#2563EB",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  <p className="flex items-center gap-1">
                    <Phone size={16} /> {personalInfo.phone}
                  </p>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  target="_blank"
                  style={{
                    color: "#2563EB",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  <p className="flex items-center gap-1">
                    <Mail size={16} /> {personalInfo.email}
                  </p>
                </a>
                {extras.personalInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.url}
                    target="_blank"
                    style={{
                      color: info.url ? "#2563EB" : undefined,
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    {info.title}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {userSkills.length > 0 && (
            <div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1F2937",
                  marginBottom: "12px",
                }}
              >
                Skills
              </h2>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {userSkills.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: "14px",
                      color: "#374151",
                      padding: "4px 0",
                      borderBottom: "1px solid #2563EB",
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          {projects.length > 0 && (
            <div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1F2937",
                  marginBottom: "12px",
                }}
              >
                Projects
              </h2>
              {projects.map((project, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "16px",
                    paddingBottom: "8px",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  <h3 style={{ fontWeight: "500", fontSize: "16px" }}>
                    <a
                      key={index}
                      href={project.link}
                      target="_blank"
                      style={{
                        color: project.link ? "#2563EB" : undefined,
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      {project.title}
                    </a>
                  </h3>
                  {project.description && (
                    <div className="text-sm mt-2">
                      {project.description.split("\n").map((summary) => (
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {summary}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalResume;
