import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertManDress } from "../services/apiMan";

const useInsertManDress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: insertManDress,
    onSuccess: () => {
      console.log("item add succ");
      queryClient.invalidateQueries(["manAllDress"]);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
};

export default useInsertManDress;
