import { resumeData } from "@/data/resume-data"

export default function GreenResume() {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      <header className="bg-[#C7D7C5] p-8">
        <h1 className="text-3xl font-bold mb-2">{resumeData.name}</h1>
        <div className="text-sm">
          {resumeData.contact.email} • {resumeData.contact.phone}
        </div>
        <div className="text-sm">{resumeData.contact.address}</div>
      </header>

      <div className="p-8 space-y-8">
        <p className="text-gray-700">{resumeData.profile}</p>

        <section>
          <h2 className="text-2xl font-semibold text-[#6B8E66] mb-4">Career Experience</h2>
          {resumeData.employment.map((job, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold">{job.title}</h3>
                <span className="text-[#6B8E66]">{job.period}</span>
              </div>
              <p className="mt-2 text-gray-700">{job.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#6B8E66] mb-4">Education</h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold">{edu.course || edu.degree}</h3>
                <span className="text-[#6B8E66]">{edu.period}</span>
              </div>
              {edu.institution && <p className="text-gray-700">{edu.institution}</p>}
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#6B8E66] mb-4">Areas of Expertise</h2>
          <div className="grid grid-cols-3 gap-4">
            {resumeData.skills.map((skill, index) => (
              <div key={index} className="text-gray-700">
                • {skill.name}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

