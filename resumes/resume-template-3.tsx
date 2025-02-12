import Image from "next/image";
import { MapPin, Phone, Mail, Link2 } from "lucide-react";
import type { ResumePreviewProps } from "@/types/resume";

export default function ResumeThree({
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
        backgroundColor: "#F9FAFB",
      }}
      id="resume-preview"
    >
      <style>
        {`
          h1, h2, h3, h4, h5 {
            margin: 0;
          }
        `}
      </style>
      <div
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "1fr auto",
        }}
      >
        {/* Main Content */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "1rem",
              width: "1px",
              backgroundColor: "#E5E7EB",
            }}
          />

          {/* Header */}
          <div
            style={{
              position: "relative",
              marginBottom: "30px",
              paddingLeft: "3rem",
            }}
          >
            <h1
              style={{
                fontSize: "1.875rem",
                letterSpacing: "6px",
                fontWeight: "300",
                margin: 0,
              }}
            >
              {personalInfo.firstName}
            </h1>
            <h1
              style={{
                fontSize: "2.25rem",
                letterSpacing: "6px",
                fontWeight: "700",
                margin: 0,
              }}
            >
              {personalInfo.lastName}
            </h1>
            <h2
              style={{
                color: "#6B7280",
                letterSpacing: "0.1em",
                margin: 0,
              }}
            >
              {personalInfo.jobTitle}
            </h2>
          </div>

          {/* Contact */}
          {personalInfo.phone ||
          personalInfo.email ||
          personalInfo.country ||
          personalInfo.city ||
          extras.personalInfo.length ? (
            <section
              style={{
                position: "relative",
                marginBottom: "3rem",
                paddingLeft: "3rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  letterSpacing: "0.1em",
                  fontWeight: "700",
                  marginBottom: "10px",
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
                {(personalInfo.city || personalInfo.country) && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <MapPin size={16} style={{ color: "#9CA3AF" }} />
                    <span>
                      {personalInfo.city}{" "}
                      {personalInfo.city && personalInfo.country ? ", " : null}{" "}
                      {personalInfo.country}
                    </span>
                  </div>
                )}
                {personalInfo.phone && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <Phone size={16} style={{ color: "#9CA3AF" }} />
                    <span>{personalInfo.phone}</span>
                  </div>
                )}
                {personalInfo.email && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <Mail size={16} style={{ color: "#9CA3AF" }} />
                    <span>{personalInfo.email}</span>
                  </div>
                )}
                {extras.personalInfo.map((info, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <Link2 size={16} style={{ color: "#9CA3AF" }} />
                    <a
                      href={info.url}
                      target="_blank"
                      style={{
                        fontWeight: "550",
                        color: "#333",
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                    >
                      {info.title}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* Skills */}
          {userSkills.length ? (
            <section
              style={{
                position: "relative",
                marginBottom: "3rem",
                paddingLeft: "3rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  letterSpacing: "0.1em",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                SKILLS
              </h3>
              <div>
                <h4
                  style={{
                    fontSize: "0.875rem",
                    letterSpacing: "0.1em",
                    color: "#6B7280",
                    marginBottom: "1rem",
                  }}
                >
                  PROFESSIONAL
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {userSkills.map((skill, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "9999px",
                          backgroundColor: "#9CA3AF",
                          WebkitPrintColorAdjust: "exact",
                          printColorAdjust: "exact",
                        }}
                      />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {/* Education */}
          {education.length ? (
            <section
              style={{
                position: "relative",
                paddingLeft: "3rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  letterSpacing: "0.1em",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                EDUCATION
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {education.map((edu, index) => (
                  <div key={index}>
                    <h4
                      style={{
                        fontSize: "0.875rem",
                        letterSpacing: "0.1em",
                        color: "#6B7280",
                        marginBottom: "8px",
                      }}
                    >
                      {edu.degree}
                    </h4>
                    <p style={{ fontWeight: "500" }}>{edu.school}</p>
                    <p style={{ fontSize: "0.875rem", color: "#6B7280" }}>
                      {edu.startDate} - {edu.endDate}
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "#6B7280" }}>
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        {/* Profile Image & Experience */}
        <div style={{ width: "400px" }}>
          {personalInfo.image && (
            <div
              style={{
                marginBottom: "2rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Image
                alt="Profile Image"
                src={personalInfo.image ?? "/placeholder.svg"}
                width={120}
                height={120}
                style={{ borderRadius: "9999px" }}
              />
            </div>
          )}

          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {extras.summary && (
              <section>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    letterSpacing: "0.1em",
                    fontWeight: "700",
                    // marginBottom: "1rem",
                  }}
                >
                  PROFILE
                </h3>
                <p
                  style={{
                    color: "#4B5563",
                    fontSize: "0.875rem",
                    lineHeight: "1.625",
                  }}
                >
                  {extras.summary}
                </p>
              </section>
            )}

            {employments.length ? (
              <section>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    letterSpacing: "0.1em",
                    fontWeight: "700",
                    // marginBottom: "1.5rem",
                  }}
                >
                  EXPERIENCE
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}
                >
                  {employments.map((employment, index) => (
                    <div key={index}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "8px",
                        }}
                      >
                        <h4 style={{ fontWeight: "500", margin: "1px" }}>
                          {employment.jobTitle}
                        </h4>
                        <span
                          style={{ fontSize: "0.875rem", color: "#6B7280" }}
                        >
                          {employment.startDate} - {employment.endDate}
                        </span>
                      </div>
                      <h5 style={{ color: "#4B5563", margin: "1px" }}>
                        {employment.employer}
                      </h5>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "#4B5563",
                        }}
                      >
                        {employment.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Courses */}
            {courses.length ? (
              <section>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    letterSpacing: "0.1em",
                    fontWeight: "700",
                  }}
                >
                  COURSES
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {courses.map((course, index) => (
                    <div key={index}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "8px",
                        }}
                      >
                        <h4 style={{ fontWeight: "500", marginTop: "10px" }}>
                          {course.title}
                        </h4>
                        <span
                          style={{ fontSize: "0.875rem", color: "#6B7280" }}
                        >
                          {course.startDate} - {course.endDate}
                        </span>
                      </div>
                      <h5 style={{ color: "#4B5563", marginBottom: "8px" }}>
                        {course.institution}
                      </h5>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "#4B5563",
                        }}
                      >
                        {course.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Projects */}
            {projects.length ? (
              <section>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    letterSpacing: "0.1em",
                    fontWeight: "700",
                    marginBottom: "1.5rem",
                  }}
                >
                  PROJECTS
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}
                >
                  {projects.map((project, index) => (
                    <div key={index}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "8px",
                        }}
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          style={{
                            fontWeight: "600",
                            color: "#333",
                            textDecoration: "none",
                          }}
                          rel="noreferrer"
                        >
                          {project.title}
                        </a>
                      </div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "#4B5563",
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
