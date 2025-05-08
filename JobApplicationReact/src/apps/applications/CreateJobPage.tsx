import { z } from "zod";
import CreateApplicationForm, {
  ApplicationFormSchema,
} from "@/features/job-application/components/CreateApplicationForm";
import { useNavigate } from "react-router";
import { APP_ROUTES } from "../route_path";
import { useCreateApplicationMutation } from "@/features/job-application/ApiHooks";

function CreateJobPage() {
  const createApplicationMutation = useCreateApplicationMutation();
  const navigate = useNavigate();
  const handleFormSubmit = async (
    values: z.infer<typeof ApplicationFormSchema>
  ) => {
    await createApplicationMutation.mutate(values);
    navigate(APP_ROUTES.JOB_LIST);
  };

  return (
    <div>
      <h1 className="mb-6">Create a new Job application</h1>
      <CreateApplicationForm
        defaultValues={{ companyName: "", position: "" }}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default CreateJobPage;
