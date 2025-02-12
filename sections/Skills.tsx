import React from "react";
import { CircleX } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Skills } from "@/types/resume";

const SkillsSection = ({
  userSkills,
  setSkills,
}: {
  userSkills: Skills[];
  setSkills: React.Dispatch<React.SetStateAction<Skills[]>>;
}) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="space-y-4">
        <div className="grid gap-4">
          <div>
            <div className="flex flex-wrap gap-4">
              {userSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 w-full sm:w-[calc(50%-8px)]"
                >
                  <Input
                    value={skill.name}
                    onChange={(e) => {
                      const newSkills = [...userSkills];
                      newSkills[index].name = e.target.value;
                      setSkills(newSkills);
                    }}
                    className="w-[50%] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Skill Name"
                  />
                  <div className="flex flex-col items-center w-24">
                    <span className="text-sm font-medium">
                      Level: {skill.level}
                    </span>
                    <Slider
                      min={1}
                      max={10}
                      value={[skill.level]}
                      onValueChange={(value) => {
                        const newSkills = [...userSkills];
                        newSkills[index].level = value[0];
                        setSkills(newSkills);
                      }}
                      className="w-full"
                    />
                  </div>
                  <CircleX
                    className="h-5 w-5 text-red-500 cursor-pointer"
                    onClick={() => {
                      const newSkills = userSkills.filter(
                        (_, i) => i !== index
                      );
                      setSkills(newSkills);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Button
        variant="outline"
        className="mt-4"
        onClick={() => setSkills([...userSkills, { name: "", level: 5 }])}
      >
        Add Skill
      </Button>
    </Card>
  );
};

export default SkillsSection;
