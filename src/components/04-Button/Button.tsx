interface ButtonProps {
  innerText: string;
  bg?: string;
  color?: string;
  onClick?: () => void;
}

// Button component
const Button = ({ innerText, bg, color, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="py-4 px-10 cursor-pointer font-bold tracking-wide hover:opacity-70 transition-all rounded-md"
      style={{ backgroundColor: bg || "white", color: color || "black" }}
    >
      {innerText.toUpperCase()}
    </button>
  );
};

export default Button;
