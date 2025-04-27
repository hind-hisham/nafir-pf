
const TemTwo = ({ data }: { data: any }) => {
  return (
    <div className="bg-white p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-red-400">{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.phone}</p>
    </div>
  );
};

export default TemTwo;