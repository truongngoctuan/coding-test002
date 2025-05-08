import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createApplication, getApplications } from "./api/Service";

export const useGetApplications = () => {
  return useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useCreateApplicationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
  });
}