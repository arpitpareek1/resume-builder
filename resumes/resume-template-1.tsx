import Image from "next/image";
import { Mail, Phone, MapPin, Link2 } from "lucide-react";
import { ResumePreviewProps } from "@/types/resume";

export default function ResumeOne({
  personalInfo,
  userSkills,
  employments,
  education,
  extras,
  courses,
  projects,
}: ResumePreviewProps) {
  return (
    <div
      id="resume-preview"
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "32px",
        backgroundColor: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          alignItems: "center", // Align content properly
          minHeight: "100px", // Ensures space for image even if not available
        }}
      >
        <div style={{ width: "100px", height: "100px", flexShrink: 0 }}>
          {personalInfo.image ? (
            <Image
              src={personalInfo.image}
              alt="Profile"
              width={100}
              height={100}
              style={{ borderRadius: "50%" }}
            />
          ) : (
            <div style={{ width: "100px", height: "100px" }}></div>
          )}
        </div>

        <div style={{ flexGrow: 1 }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#1E40AF",
              margin: "4px",
            }}
          >
            {personalInfo.firstName}
          </h1>
          <h2
            style={{
              margin: "4px",
              fontSize: "24px",
              fontWeight: "lighter",
              color: "#333",
            }}
          >
            {personalInfo.lastName}
          </h2>
          <h3
            style={{
              fontSize: "18px",
              color: "#666",
              borderBottom: "2px solid #1E40AF",
              display: "inline-block",
              paddingBottom: "4px",
            }}
          >
            {personalInfo.jobTitle}
          </h3>

          {/* Contact Details */}
          <div
            style={{
              marginTop: "8px",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "center",
            }}
          >
            {personalInfo.phone && (
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <Phone size={16} color="#1E40AF" />
                <p style={{ color: "#333", margin: 0 }}>{personalInfo.phone}</p>
              </div>
            )}
            {personalInfo.email && (
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <Mail size={16} color="#1E40AF" />
                <p style={{ color: "#333", margin: 0 }}>{personalInfo.email}</p>
              </div>
            )}
            {(personalInfo.city || personalInfo.country) && (
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <MapPin size={16} color="#1E40AF" />
                <p style={{ color: "#333", margin: 0 }}>
                  {personalInfo.city}
                  {personalInfo.city && personalInfo.country ? ", " : null}{" "}
                  {personalInfo.country}
                </p>
              </div>
            )}
          </div>
          <div
            style={{
              marginTop: "8px",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "center",
            }}
          >
            {extras.personalInfo.map((info, index) => (
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
                key={index}
              >
                <Link2 size={16} color="#1E40AF" />
                <a
                  style={{
                    fontWeight: "550",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  href={info.url}
                  target="_blank"
                >
                  {info.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <div
        style={{
          marginTop: "32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
        }}
      >
        <div>
          {/* About Me */}
          {extras.summary && (
            <section>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#1E40AF",
                  marginBottom: "8px",
                }}
              >
                ABOUT ME
              </h3>
              <p style={{ color: "#666" }}>{extras.summary}</p>
            </section>
          )}

          {/* Experience */}
          {employments.length ? (
            <section style={{ marginTop: "24px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#1E40AF",
                  marginBottom: "8px",
                }}
              >
                EXPERIENCE
              </h3>
              {employments.map((emp, index) => (
                <div key={index} style={{ marginBottom: "16px" }}>
                  <p style={{ fontWeight: "bold", color: "#333" }}>
                    {emp.startDate} - {emp.endDate}
                  </p>
                  <h4 style={{ fontWeight: "600", color: "#333" }}>
                    {emp.jobTitle}
                  </h4>
                  <p style={{ color: "#666" }}>
                    {emp.employer} - {emp.city}
                  </p>
                  <p style={{ fontSize: "14px", color: "#999" }}>
                    {emp.description}
                  </p>
                </div>
              ))}
            </section>
          ) : null}
          
          {/* COURSES */}
          {courses.length ? (
            <section style={{ marginTop: "24px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#1E40AF",
                  marginBottom: "8px",
                }}
              >
                COURSES
              </h3>
              {courses.map((emp, index) => (
                <div key={index} style={{ marginBottom: "16px" }}>
                  <p style={{ fontWeight: "bold", color: "#333" }}>
                    {emp.startDate} - {emp.endDate}
                  </p>
                  <h4 style={{ fontWeight: "600", color: "#333" }}>
                    {emp.title}
                  </h4>
                  {emp.institution && (
                    <p style={{ color: "#666" }}>{emp.institution}</p>
                  )}
                  <p style={{ fontSize: "14px", color: "#999" }}>
                    {emp.description}
                  </p>
                </div>
              ))}
            </section>
          ) : null}
          {/* PROJECTS */}
          {projects.length ? (
            <section style={{ marginTop: "24px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#1E40AF",
                  marginBottom: "8px",
                }}
              >
                PROJECTS
              </h3>
              {projects.map((project, index) => (
                <div key={index} style={{ marginBottom: "16px" }}>
                  <a
                    style={{
                      fontWeight: "600",
                      color: "#333",
                      textDecoration: "none",
                    }}
                    href={project.link}
                    target="_blank"
                  >
                    {project.title}
                  </a>
                  <p style={{ fontSize: "14px", color: "#999" }}>
                    {project.description}
                  </p>
                </div>
              ))}
            </section>
          ) : null}
        </div>

        <div>
          {/* Education */}
          {education.length ? (
            <section>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#1E40AF",
                  marginBottom: "8px",
                }}
              >
                EDUCATION
              </h3>
              {education.map((edu, index) => (
                <div key={index} style={{ marginBottom: "16px" }}>
                  <p style={{ fontWeight: "bold", color: "#333" }}>
                    {edu.startDate} - {edu.endDate}
                  </p>
                  <h4 style={{ fontWeight: "600", color: "#333" }}>
                    {edu.degree}
                  </h4>
                  <p style={{ color: "#666" }}>
                    {edu.school} - {edu.city}
                  </p>
                  <p style={{ fontSize: "14px", color: "#999" }}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </section>
          ) : null}

          {/* Skills */}
          {userSkills.length ? (
            <section style={{ marginTop: "24px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#1E40AF",
                  marginBottom: "8px",
                }}
              >
                SKILLS
              </h3>
              {userSkills.map((skill, index) => (
                <div key={index} style={{ marginBottom: "8px" }}>
                  <p style={{ fontSize: "14px", color: "#666" }}>
                    {skill.name}
                  </p>
                  <div style={{ display: "flex", gap: "4px" }}>
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          WebkitPrintColorAdjust: "exact",
                          printColorAdjust: "exact",
                          backgroundColor:
                            i < skill.level / 2 ? "#1E40AF" : "#E5E7EB",
                          display: "inline-block",
                          border: "1px solid #ccc",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}
