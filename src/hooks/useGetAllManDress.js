import { useQuery } from "@tanstack/react-query";
import { getAllManDress } from "../services/apiMan";

const useGetAllManDress = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["manAllDress"],
    queryFn: getAllManDress,
  });

  return { data, isError, error, isLoading };
};

export default useGetAllManDress;
