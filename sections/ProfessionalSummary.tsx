import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Extras } from "@/types/resume";

const ProfessionalSummary = ({
  extras,
  setExtras,
}: {
  extras: Extras;
  setExtras: React.Dispatch<React.SetStateAction<Extras>>;
}) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>
      <Textarea
        placeholder="Write 2-4 short, energetic sentences about your achievements..."
        className="min-h-[200px]"
        value={extras.summary}
        onChange={(e) =>
          setExtras((pre: Extras) => ({ ...pre, summary: e.target.value }))
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setExtras((pre: Extras) => ({
              ...pre,
              summary: pre.summary + "\n",
            }));
          }
        }}
      />
    </Card>
  );
};

export default ProfessionalSummary;