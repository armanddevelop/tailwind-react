export const Card = (): JSX.Element => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-3 w-full h-4/5">
        <span className="absolute bottom-0 left-0 font-semibold text-black text-sm mx-1 mb-3">
          Electronics
        </span>
        <img
          src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image-name"
          className="w-full h-full object-cover rounded-lg"
        />
        <button className="absolute top-0 right-0 flex justify-center bg-stone-300 items-center w-8 h-8 rounded-full font-semibold border-2 border-neutral-300 m-2 p-1">
          +
        </button>
      </figure>
      <p className="flex justify-around items-center">
        <span className="text-sm font-light">Headphones</span>
        <span className="text-lg font-medium">$300</span>
      </p>
    </div>
  );
};
