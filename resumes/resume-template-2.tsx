import { Mail, Phone, MapPin, Link2 } from "lucide-react";
import type { ResumePreviewProps } from "@/types/resume";

export default function ResumeTwo({
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
      style={{
        maxWidth: "56rem",
        margin: "0 auto",
        padding: "2rem",
        backgroundColor: "white",
      }}
      id="resume-preview"
    >
      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <h1
          style={{
            fontSize: "2.25rem",
            fontWeight: "700",
            color: "#111827",
          }}
        >
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h2
          style={{
            fontSize: "1.125rem",
            color: "#4B5563",
            marginTop: "0.25rem",
          }}
        >
          {personalInfo.jobTitle}
        </h2>
      </div>

      {/* Profile */}
      {extras.summary && (
        <section style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "0.5rem",
              borderBottom: "1px solid #E5E7EB",
              paddingBottom: "0.25rem",
            }}
          >
            PROFILE
          </h3>
          <p style={{ color: "#4B5563" }}>{extras.summary}</p>
        </section>
      )}

      <div
        style={{
          display: "grid",
          // gridTemplateColumns: "1fr",
          gap: "2rem",
          gridTemplateColumns: "1fr 2fr",
        }}
      >
        <div>
          {/* Contact */}
          {(personalInfo.phone ||
            personalInfo.email ||
            personalInfo.country ||
            personalInfo.city) && (
            <section style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "1rem",
                  borderBottom: "1px solid #E5E7EB",
                  paddingBottom: "0.25rem",
                }}
              >
                CONTACT
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {personalInfo.phone && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#4B5563",
                    }}
                  >
                    <Phone size={16} />
                    <span>{personalInfo.phone}</span>
                  </div>
                )}
                {personalInfo.email && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#4B5563",
                    }}
                  >
                    <Mail size={16} />
                    <span>{personalInfo.email}</span>
                  </div>
                )}
                {(personalInfo.city || personalInfo.country) && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#4B5563",
                    }}
                  >
                    <MapPin size={16} />
                    <span>
                      {personalInfo.city}{" "}
                      {personalInfo.city && personalInfo.country ? ", " : null}{" "}
                      {personalInfo.country}
                    </span>
                  </div>
                )}
                {extras.personalInfo.map((info, index) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#4B5563",
                    }}
                  >
                    <a
                      key={index}
                      href={info.url}
                      target="_blank"
                      style={{
                        color: "#3182CE",
                        textDecoration: "none",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Link2 size={16} />
                      <p
                        style={{
                          margin: 0,
                        }}
                      >
                        {info.title}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length ? (
            <section style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "1rem",
                  borderBottom: "1px solid #E5E7EB",
                  paddingBottom: "0.25rem",
                }}
              >
                EDUCATION
              </h3>
              {education.map((edu, index) => (
                <div key={index} style={{ marginBottom: "1rem" }}>
                  <h4 style={{ fontWeight: "700" }}>{edu.degree}</h4>
                  <p style={{ color: "#4B5563", fontStyle: "italic" }}>
                    {edu.school} - {edu.city}
                  </p>
                  <p style={{ color: "#6B7280" }}>
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.description && (
                    <p style={{ color: "#6B7280" }}>{edu.description}</p>
                  )}
                </div>
              ))}
            </section>
          ) : null}

          {/* Skills */}
          {userSkills.length ? (
            <section>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "1rem",
                  borderBottom: "1px solid #E5E7EB",
                  paddingBottom: "0.25rem",
                }}
              >
                SKILLS
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {userSkills.map((skill, index) => (
                  <div key={index} style={{ marginBottom: "0.25rem" }}>
                    <div style={{ color: "#4B5563", marginBottom: "0.25rem" }}>
                      {skill.name}
                    </div>
                    <div
                      style={{
                        height: "0.375rem",
                        backgroundColor: "#E5E7EB",
                        borderRadius: "0.25rem",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          backgroundColor: "#4B5563",
                          borderRadius: "0.25rem",
                          width: `${skill.level * 10}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        {/* Experience */}
        <div>
          {employments.length ? (
            <section style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "1rem",
                  borderBottom: "1px solid #E5E7EB",
                  paddingBottom: "0.25rem",
                }}
              >
                EXPERIENCE
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {employments.map((emp, index) => (
                  <div
                    key={index}
                    style={{
                      position: "relative",
                      paddingLeft: "2rem",
                      borderLeft: "2px solid #E5E7EB",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "1rem",
                        height: "1rem",
                        backgroundColor: "white",
                        border: "2px solid #9CA3AF",
                        borderRadius: "9999px",
                        left: "-11px",
                        top: "0",
                      }}
                    />
                    <div>
                      <h4 style={{ fontWeight: "700", color: "#111827" }}>
                        {emp.jobTitle}
                      </h4>
                      <p style={{ color: "#4B5563", fontStyle: "italic" }}>
                        {emp.employer} - {emp.city}
                      </p>
                      <p style={{ color: "#6B7280", fontSize: "0.875rem" }}>
                        {emp.startDate} - {emp.endDate}
                      </p>
                      <p
                        style={{
                          marginLeft: "1rem",
                          marginTop: "0.5rem",
                          color: "#4B5563",
                        }}
                      >
                        {emp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* Courses */}
          {courses.length ? (
            <section style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "1rem",
                  borderBottom: "1px solid #E5E7EB",
                  paddingBottom: "0.25rem",
                }}
              >
                COURSES
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {courses.map((course, index) => (
                  <div
                    key={index}
                    style={{
                      position: "relative",
                      paddingLeft: "2rem",
                      borderLeft: "2px solid #E5E7EB",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "1rem",
                        height: "1rem",
                        backgroundColor: "white",
                        border: "2px solid #9CA3AF",
                        borderRadius: "9999px",
                        left: "-11px",
                        top: "0",
                      }}
                    />
                    <div>
                      <h4 style={{ fontWeight: "700", color: "#111827" }}>
                        {course.title}
                      </h4>
                      <p style={{ color: "#4B5563", fontStyle: "italic" }}>
                        {course.institution}
                      </p>
                      <p style={{ color: "#6B7280", fontSize: "0.875rem" }}>
                        {course.startDate} - {course.endDate}
                      </p>
                      <p
                        style={{
                          marginLeft: "1rem",
                          marginTop: "0.5rem",
                          color: "#4B5563",
                        }}
                      >
                        {course.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* Projects */}
          {projects.length ? (
            <section style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "1rem",
                  borderBottom: "1px solid #E5E7EB",
                  paddingBottom: "0.25rem",
                }}
              >
                PROJECTS
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {projects.map((project, index) => (
                  <div
                    key={index}
                    style={{
                      position: "relative",
                      paddingLeft: "2rem",
                      borderLeft: "2px solid #E5E7EB",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "1rem",
                        height: "1rem",
                        backgroundColor: "white",
                        border: "2px solid #9CA3AF",
                        borderRadius: "9999px",
                        left: "-11px",
                        top: "0",
                      }}
                    />
                    <div>
                      <a
                        href={project.link}
                        target="_blank"
                        style={{
                          color: "#3182CE",
                          textDecoration: "none",
                          fontWeight: "700",
                        }}
                      >
                        {project.title}
                      </a>
                      <p
                        style={{
                          marginLeft: "1rem",
                          marginTop: "0.5rem",
                          color: "#4B5563",
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}
