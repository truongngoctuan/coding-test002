import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";
import type { JobApplicationStatus } from "../../api/types";
import { getNextStatuses } from "../../utils";
import ApplicationStatusBadge from "./ApplicationStatusBadge";
import { useUpdateApplicationStatusMutation } from "../../ApiHooks";

type DropdownMenuActionButtonProps = {
  id: number;
  status: JobApplicationStatus;
};
function DropdownMenuActionButton(props: DropdownMenuActionButtonProps) {
  const { id, status } = props;
  const nextStatuses = getNextStatuses(status);

  const updateApplicationStatusMutation = useUpdateApplicationStatusMutation();

  const handleChangeStatus = (newStatus: JobApplicationStatus) => {
    updateApplicationStatusMutation.mutate({
      id,
      data: { status: newStatus },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
          size="icon"
        >
          <MoreVerticalIcon />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem disabled>Edit</DropdownMenuItem>
        <DropdownMenuSeparator />
        {nextStatuses.map((status) => (
          <DropdownMenuItem
            key={status}
            onClick={() => handleChangeStatus(status)}
          >
            Change Status to <ApplicationStatusBadge status={status} />
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownMenuActionButton;
