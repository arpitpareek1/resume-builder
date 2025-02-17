import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import { storeInDb, getDataFromDb, removeSavedData } from "@/lib/utils";
import { toast } from "react-hot-toast";
import { Template } from "@/types/resume";

const MenuToggle = ({
  callback,
  data = {},
}: {
  callback: (data: any) => void;
  data: any;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <AlignJustify />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() =>
            toast.promise(storeInDb(data), {
              loading: "Saving Info...",
              success: "Info Saved!",
              error: "Failed to save info!",
            })
          }
        >
          Save Info
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            toast.promise(
              getDataFromDb((data) => {
                callback(data);
              }),
              {
                loading: "Fetching Info...",
                success: "Info Fetched!",
                error: "Failed to fetch info!",
              }
            )
          }
        >
          Auto Fill Info
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            toast.promise(
              removeSavedData(() => {
                setTimeout(() => {
                  window.location.reload();
                }, 1500);
              }),
              {
                loading: "Removing Saved Info...",
                success: "Saved Info Removed!",
                error: "Failed to remove saved info!",
              }
            )
          }
        >
          Remove Saved Info
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuToggle;
