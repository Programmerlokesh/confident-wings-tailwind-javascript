const Button = ({ children }) => {
  return (
    <button
      className="cursor-pointer transition-all duration-150 p-2 hover:scale-[0.98] bg-indigo-500 text-white hover:bg-white hover: ring-2 border-indigo-500 hover:text-indigo-600 uppercase"
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
