import useGetAllManDress from "../hooks/useGetAllManDress";

const Man = () => {
  const { data, isError, error, isLoading } = useGetAllManDress();
  // console.log(data.man);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {data.man.map((item) => (
        <div key={item.id} className="flex gap-2">
          <div className="max-w-40">
            <img src={item.image} alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <span>{item.mater}</span>
            <span>{item.price}</span>
            <span>{item.size}</span>
            <span>{item.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Man;
