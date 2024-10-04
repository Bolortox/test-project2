export const Card = ({ name, category, price }) => {
  return (
    <div>
      <div className=" w-[400px] h-full shadow-xl bg-gray-300 rounded-3xl flex flex-col items-baseline p-4">
        <div>
          <p>Product name:</p>
          <p>Product type:</p>
          <p>Price:</p>
        </div>
        <div className="flex  gap-4">
          <button className="w-28 h-10 rounded-3xl bg-slate-400 flex justify-center items-center font-bold">
            Edit
          </button>
          <button className="w-28 h-10 rounded-3xl bg-slate-400 flex justify-center items-center font-bold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
