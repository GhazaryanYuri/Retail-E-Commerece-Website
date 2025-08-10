interface ButtonProps {
  innerText: string;
  onClick?: () => void;
}

// Button component
const Button = ({ innerText, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="py-4 px-10 cursor-pointer bg-white text-black font-bold tracking-wide hover:opacity-70 transition-all rounded-md"
    >
      {innerText}
    </button>
  );
};

export default Button;
