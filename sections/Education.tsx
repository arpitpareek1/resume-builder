import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Education } from "@/types/resume";

const EducationSection = ({
  education,
  setEducation,
}: {
  education: Education[];
  setEducation: React.Dispatch<React.SetStateAction<Education[]>>;
}) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">School</label>
                <Input
                  value={edu.school}
                  onChange={(e) => {
                    const newEducation = [...education];
                    newEducation[index].school = e.target.value;
                    setEducation(newEducation);
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Degree</label>
                <Input
                  value={edu.degree}
                  onChange={(e) => {
                    const newEducation = [...education];
                    newEducation[index].degree = e.target.value;
                    setEducation(newEducation);
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Start Date
                </label>
                <Input
                  type="month"
                  value={edu.startDate}
                  onChange={(e) => {
                    const newEducation = [...education];
                    newEducation[index].startDate = e.target.value;
                    setEducation(newEducation);
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  End Date
                </label>
                <Input
                  type="month"
                  value={edu.endDate}
                  onChange={(e) => {
                    const newEducation = [...education];
                    newEducation[index].endDate = e.target.value;
                    setEducation(newEducation);
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <Input
                value={edu.city}
                onChange={(e) => {
                  const newEducation = [...education];
                  newEducation[index].city = e.target.value;
                  setEducation(newEducation);
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <Textarea
                value={edu.description}
                onChange={(e) => {
                  const newEducation = [...education];
                  newEducation[index].description = e.target.value;
                  setEducation(newEducation);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const newEducation = [...education];
                    newEducation[index].description += " \n";
                    setEducation(newEducation);
                  }
                }}
                placeholder="e.g. Graduated with High Honors"
                className="min-h-[100px]"
              />
            </div>
          </div>
          <Button
            variant="destructive"
            onClick={() => {
              const newEducation = education.filter((_, i) => i !== index);
              setEducation(newEducation);
            }}
          >
            Remove
          </Button>

          <hr className="my-6" />
        </div>
      ))}
      <Button
        variant="outline"
        onClick={() =>
          setEducation([
            ...education,
            {
              school: "",
              degree: "",
              startDate: "",
              endDate: "",
              city: "",
              description: "",
            },
          ])
        }
      >
        Add Education
      </Button>
    </Card>
  );
};

export default EducationSection;
