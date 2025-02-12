import { ResumePreviewProps } from "@/types/resume";
import { Mail, MapPin, Phone } from "lucide-react";

export default function TraditionalResume({
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
        maxWidth: "1024px",
        margin: "0 auto",
        padding: "40px",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Inter', sans-serif",
        color: "#2D3748",
      }}
      id="resume-preview"
    >
      <header style={{ marginBottom: "32px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "16px",
            color: "#1A202C",
          }}
        >
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div style={{ fontSize: "16px", color: "#4A5568" }}>
          {personalInfo.jobTitle}
        </div>
        <div
          style={{
            fontSize: "16px",
            color: "#4A5568",
            padding: "10px",
            marginBottom: "8px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {personalInfo.email && (
            <p
              className="flex items-center gap-1"
              style={{ marginLeft: "8px" }}
            >
              <Mail size={16} /> {personalInfo.email}
            </p>
          )}
          {personalInfo.phone && (
            <p
              className="flex items-center gap-1"
              style={{ marginLeft: "8px" }}
            >
              <Phone size={16} /> {personalInfo.phone}
            </p>
          )}
          {(personalInfo.city || personalInfo.country) && (
            <p
              className="flex items-center gap-1"
              style={{ marginLeft: "8px" }}
            >
              <MapPin size={16} /> {personalInfo.city}{" "}
              {personalInfo.city && personalInfo.country ? ", " : null}{" "}
              {personalInfo.country}
            </p>
          )}
        </div>
        <div
          style={{
            fontSize: "16px",
            color: "#3182CE",
            textDecoration: "none",
            marginBottom: "4px",
            display: "block",
            fontWeight: "500",
          }}
        >
          {extras.personalInfo.map((info, index) => (
            <a
              key={index}
              href={info.url}
              target="_blank"
              style={{
                color: "#3182CE",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              {info.title} &nbsp;
            </a>
          ))}
        </div>
      </header>

      {extras.summary && (
        <section style={{ marginBottom: "15px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              textTransform: "uppercase",
              marginBottom: "5px",
              color: "#2D3748",
            }}
          >
            Profile
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4A5568" }}>
            {extras.summary.split("\n").map((summary, index) => (
              <div key={index} style={{ marginBottom: "8px" }}>
                {summary}
              </div>
            ))}
          </p>
        </section>
      )}

      {employments.length ? (
        <section style={{ marginBottom: "15px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              textTransform: "uppercase",
              marginBottom: "5px",
              color: "#2D3748",
            }}
          >
            Employment History
          </h2>
          {employments.map((emp, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                borderBottom: "1px solid #E2E8F0",
                paddingBottom: "12px",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: "600" }}>
                {emp.jobTitle}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#4A5568",
                  marginBottom: "4px",
                }}
              >
                {emp.employer}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#4A5568",
                  marginBottom: "4px",
                }}
              >
                {emp.city}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#4A5568",
                  marginBottom: "8px",
                }}
              >
                {emp.startDate} - {emp.endDate}
              </p>
              <p style={{ fontSize: "16px", color: "#4A5568" }}>
                {emp.description}
              </p>
            </div>
          ))}
        </section>
      ) : null}

      {education.length ? (
        <section style={{ marginBottom: "15px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              textTransform: "uppercase",
              marginBottom: "5px",
              color: "#2D3748",
            }}
          >
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "600" }}>
                {edu.degree}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#4A5568",
                  marginBottom: "4px",
                }}
              >
                {edu.startDate} - {edu.endDate}
              </p>
              {edu.school && (
                <p style={{ fontSize: "16px", color: "#4A5568" }}>
                  {edu.school}
                </p>
              )}
              {edu.description && (
                <p style={{ fontSize: "16px", color: "#4A5568" }}>
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </section>
      ) : null}

      {userSkills.length ? (
        <section
          style={{
            marginBottom: "15px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              textTransform: "uppercase",
              marginBottom: "5px",
              color: "#2D3748",
            }}
          >
            Skills
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
              gap: "12px", // Spacing between items
            }}
          >
            {userSkills.map((skill, index) => (
              <div
                key={index}
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#4A5568",
                  padding: "8px",
                  border: "1px solid rgb(241 241 242)",
                  borderRadius: "6px",
                  textAlign: "center", // Center-align the text
                }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {projects.length ? (
        <section style={{ marginBottom: "15px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              textTransform: "uppercase",
              marginBottom: "5px",
              color: "#2D3748",
            }}
          >
            Projects
          </h2>
          {projects.map((info, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                borderBottom: "1px solid #E2E8F0",
                paddingBottom: "12px",
              }}
            >
              <a
                href={info.link}
                target="_blank"
                style={{
                  color: "#3182CE",
                  textDecoration: "none",
                  fontWeight: "500",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                {info.title}
              </a>
              <p style={{ fontSize: "16px", color: "#4A5568" }}>
                {info.description}
              </p>
            </div>
          ))}
        </section>
      ) : null}

      {courses.length ? (
        <section>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              textTransform: "uppercase",
              marginBottom: "5px",
              color: "#2D3748",
            }}
          >
            Courses
          </h2>
          {courses.map((course, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "600" }}>
                {course.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#4A5568",
                  marginBottom: "4px",
                }}
              >
                {course.institution}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#4A5568",
                  marginBottom: "4px",
                }}
              >
                {course.startDate} - {course.endDate}
              </p>
              <p style={{ fontSize: "16px", color: "#4A5568" }}>
                {course.description}
              </p>
            </div>
          ))}
        </section>
      ) : null}
    </div>
  );
}
