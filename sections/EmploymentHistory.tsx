import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Employment } from "@/types/resume";

const EmploymentHistory = ({
  employments,
  setEmployments,
}: {
  employments: Employment[];
  setEmployments: React.Dispatch<React.SetStateAction<Employment[]>>;
}) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Employment History</h2>
      {employments.map((employment, index) => (
        <div key={index} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Job Title
                </label>
                <Input
                  value={employment.jobTitle}
                  onChange={(e) => {
                    const newEmployments = [...employments];
                    newEmployments[index].jobTitle = e.target.value;
                    setEmployments(newEmployments);
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Employer
                </label>
                <Input
                  value={employment.employer}
                  onChange={(e) => {
                    const newEmployments = [...employments];
                    newEmployments[index].employer = e.target.value;
                    setEmployments(newEmployments);
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
                    const newEmployments = [...employments];
                    newEmployments[index].startDate = e.target.value;
                    setEmployments(newEmployments);
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
                    const newEmployments = [...employments];
                    newEmployments[index].endDate = e.target.value;
                    setEmployments(newEmployments);
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <Input
                value={employment.city}
                onChange={(e) => {
                  const newEmployments = [...employments];
                  newEmployments[index].city = e.target.value;
                  setEmployments(newEmployments);
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>

              <Textarea
                value={employment.description}
                onChange={(e) => {
                  const newEmployments = [...employments];
                  newEmployments[index].description = e.target.value;
                  setEmployments(newEmployments);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const newEmployments = [...employments];
                    newEmployments[index].description += " \n";
                    setEmployments(newEmployments);
                  }
                }}
                className="min-h-[150px]"
              />
            </div>
          </div>
          <Button
            variant="destructive"
            onClick={() => {
              const newEmployments = employments.filter((_, i) => i !== index);
              setEmployments(newEmployments);
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
          setEmployments([
            ...employments,
            {
              jobTitle: "",
              employer: "",
              startDate: "",
              endDate: "",
              city: "",
              description: "",
            },
          ])
        }
      >
        Add Employment
      </Button>
    </Card>
  );
};

export default EmploymentHistory;
