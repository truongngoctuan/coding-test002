import { Badge } from "@/components/ui/badge";
import { CheckCircle2Icon } from "lucide-react";
import { getJobApplicationStatusString } from "../../utils";
import { JobApplicationStatus } from "../../api/types";

type ApplicationStatusBadgeProps = {
  status: JobApplicationStatus;
};
function ApplicationStatusBadge(props: ApplicationStatusBadgeProps) {
  const { status } = props;
  return (
    <Badge
      variant="outline"
      className="flex gap-1 px-1.5 text-muted-foreground [&_svg]:size-3"
    >
      {status === JobApplicationStatus.Offer && (
        <CheckCircle2Icon className="text-green-500 dark:text-green-400" />
      )}
      {getJobApplicationStatusString(status)}
    </Badge>
  );
}

export default ApplicationStatusBadge;
