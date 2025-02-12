import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Extras, PersonalInfo } from "@/types/resume";
import { Label } from "@/components/ui/label";

const PersonalDetails = ({
  personalInfo,
  setPersonalInfo,
  setExtras,
  extras,
}: {
  personalInfo: PersonalInfo;
  setPersonalInfo: (personalInfo: PersonalInfo) => void;
  setExtras: (extras: Extras) => void;
  extras: Extras;
}) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Personal details</h2>
      <div className="grid gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input
            id="picture"
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                  setPersonalInfo({
                    ...personalInfo,
                    image: e.target?.result as string,
                  });
                };
                reader.readAsDataURL(file);
              }
            }}
          />
        </div>
        <div>
          <Label className="block text-sm font-medium mb-1">Job Title</Label>
          <Input
            placeholder="e.g. Software Engineer"
            value={personalInfo.jobTitle}
            onChange={(e) =>
              setPersonalInfo({
                ...personalInfo,
                jobTitle: e.target.value,
              })
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="block text-sm font-medium mb-1">First Name</Label>
            <Input
              value={personalInfo.firstName}
              onChange={(e) =>
                setPersonalInfo({
                  ...personalInfo,
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Last Name</Label>
            <Input
              value={personalInfo.lastName}
              onChange={(e) =>
                setPersonalInfo({
                  ...personalInfo,
                  lastName: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="block text-sm font-medium mb-1">Email</Label>
            <Input
              type="email"
              value={personalInfo.email}
              onChange={(e) =>
                setPersonalInfo({
                  ...personalInfo,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Phone</Label>
            <Input
              type="tel"
              value={personalInfo.phone}
              onChange={(e) =>
                setPersonalInfo({
                  ...personalInfo,
                  phone: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="block text-sm font-medium mb-1">City</Label>
            <Input
              value={personalInfo.city}
              onChange={(e) =>
                setPersonalInfo({
                  ...personalInfo,
                  city: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Country</Label>
            <Input
              value={personalInfo.country}
              onChange={(e) =>
                setPersonalInfo({
                  ...personalInfo,
                  country: e.target.value,
                })
              }
            />
          </div>
        </div>
        {extras.personalInfo &&
          extras.personalInfo.map((info, index) => (
            <div className="grid grid-cols-2 gap-4" key={index}>
              <div>
                <Label className="block text-sm font-medium mb-1">Title</Label>
                <Input
                  value={info.title}
                  onChange={(e) => {
                    const newCourses = [...extras.personalInfo];
                    newCourses[index].title = e.target.value;
                    setExtras({
                      ...extras,
                      personalInfo: newCourses,
                    });
                  }}
                />
              </div>
              <div>
                <Label className="block text-sm font-medium mb-1">Link</Label>
                <Input
                  value={info.url}
                  onChange={(e) => {
                    const newCourses = [...extras.personalInfo];
                    newCourses[index].url = e.target.value;
                    setExtras({
                      ...extras,
                      personalInfo: newCourses,
                    });
                  }}
                />
              </div>
            </div>
          ))}
        <Button
          variant="outline"
          onClick={() =>
            setExtras({
              ...extras,
              personalInfo: extras.personalInfo.concat({
                title: "",
                url: "",
                icon: "",
              }),
            })
          }
        >
          Add More
        </Button>
      </div>
    </Card>
  );
};

export default PersonalDetails;
