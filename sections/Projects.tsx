import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Courses, Projects } from "@/types/resume";

const ProjectSelection = ({
  projects,
  setProjects,
}: {
  projects: Projects[];
  setProjects: React.Dispatch<React.SetStateAction<Projects[]>>;
}) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Project</h2>
      {projects.map((employment, index) => (
        <div key={index} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Project Title
                </label>
                <Input
                  value={employment.title}
                  onChange={(e) => {
                    const newCourses = [...projects];
                    newCourses[index].title = e.target.value;
                    setProjects(newCourses);
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Project url
                </label>
                <Input
                  value={employment.link}
                  onChange={(e) => {
                    const newCourses = [...projects];
                    newCourses[index].link = e.target.value;
                    setProjects(newCourses);
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
                  const newCourses = [...projects];
                  newCourses[index].description = e.target.value;
                  setProjects(newCourses);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const newCourses = [...projects];
                    newCourses[index].description += " \n";
                    setProjects(newCourses);
                  }
                }}
                className="min-h-[150px]"
              />
            </div>
          </div>
          <Button
            variant="destructive"
            onClick={() => {
              const newCourses = projects.filter((_, i) => i !== index);
              setProjects(newCourses);
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
          setProjects([
            ...projects,
            {
              title: "",
              description: "",
              link: "",
            },
          ])
        }
      >
        Add Course
      </Button>
    </Card>
  );
};

export default ProjectSelection;
