import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const ApplicationFormSchema = z.object({
  companyName: z
    .string()
    .min(2, {
      message: "Company Name must be at least 2 characters.",
    })
    .max(100, {
      message: "Company Name must be at maximum 100 characters.",
    }),
  position: z
    .string()
    .min(2, {
      message: "Position must be at least 2 characters.",
    })
    .max(100, {
      message: "Position must be at maximum 100 characters.",
    }),
});

type CreateApplicationFormProps = {
  onSubmit: (values: z.infer<typeof ApplicationFormSchema>) => void;
  defaultValues?: z.infer<typeof ApplicationFormSchema>;
};

function CreateApplicationForm(props: CreateApplicationFormProps) {
  const { onSubmit, defaultValues } = props;
  const form = useForm<z.infer<typeof ApplicationFormSchema>>({
    resolver: zodResolver(ApplicationFormSchema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Please input Company Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input placeholder="Please input Position" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default CreateApplicationForm;
