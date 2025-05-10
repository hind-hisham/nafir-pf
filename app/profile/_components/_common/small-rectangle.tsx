import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const SmallRectangle = ({
  skill,
  onClick,
}: {
  skill: string;
  onClick: any;
}) => (
  <Badge
    variant="outline"
    className="px-3 py-2 rounded-lg flex items-center gap-2 bg-gray-200"
  >
    {skill}
    <X className="h-3 w-3 cursor-pointer" onClick={onClick} />
  </Badge>
);
