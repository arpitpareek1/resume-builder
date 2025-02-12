import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Courses } from "@/types/resume";

const CoursesSection = ({
  courses,
  setCourses,
}: {
  courses: Courses[];
  setCourses: React.Dispatch<React.SetStateAction<Courses[]>>;
}) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Courses</h2>
      {courses.map((employment, index) => (
        <div key={index} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Courses Title
                </label>
                <Input
                  value={employment.title}
                  onChange={(e) => {
                    const newCourses = [...courses];
                    newCourses[index].title = e.target.value;
                    setCourses(newCourses);
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Institution
                </label>
                <Input
                  value={employment.institution}
                  onChange={(e) => {
                    const newCourses = [...courses];
                    newCourses[index].institution = e.target.value;
                    setCourses(newCourses);
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
                  value={employment.startDate}
                  onChange={(e) => {
                    const newCourses = [...courses];
                    newCourses[index].startDate = e.target.value;
                    setCourses(newCourses);
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  End Date
                </label>
                <Input
                  type="month"
                  value={employment.endDate}
                  onChange={(e) => {
                    const newCourses = [...courses];
                    newCourses[index].endDate = e.target.value;
                    setCourses(newCourses);
                  }}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <Textarea
                value={employment.description}
                onChange={(e) => {
                  const newCourses = [...courses];
                  newCourses[index].description = e.target.value;
                  setCourses(newCourses);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const newCourses = [...courses];
                    newCourses[index].description += " \n";
                    setCourses(newCourses);
                  }
                }}
                className="min-h-[150px]"
              />
            </div>
          </div>
          <Button
            variant="destructive"
            onClick={() => {
              const newCourses = courses.filter((_, i) => i !== index);
              setCourses(newCourses);
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
          setCourses([
            ...courses,
            {
              institution: "",
              title: "",
              startDate: "",
              endDate: "",
              description: "",
            },
          ])
        }
      >
        Add Course
      </Button>
    </Card>
  );
};

export default CoursesSection;