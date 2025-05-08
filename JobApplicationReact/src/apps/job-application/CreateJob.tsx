import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function CreateJob() {
  return (
    <div>
      <h1 className="mb-6">Create a new Job application</h1>
      <form>
        <div className="flex flex-col gap-6">
          <div className="grid gap-3">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              type="text"
              placeholder="Company Name"
              required
            />
          </div>
          <div className="grid gap-3">
            <div className="flex items-center">
              <Label htmlFor="position">Position</Label>
            </div>
            <Input id="position" type="text" required />
          </div>
          <div className="flex flex-col gap-3">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateJob;
