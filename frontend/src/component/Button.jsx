import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";

const Button = ({ variant, sizes, children, icon, to }) => {
  const ButtonStyle = cva(
    [
      "flex",
      "justify-center",
      "items-center",
      "gap-3",
      "rounded-full",
      "text-nowrap",
      "cursor-pointer",
    ],
    {
      variants: {
        variant: {
          default: ["px-0", "py-0"],
          primary: [
            "bg-primary",
            // "hover:border",
            // "hover:border-black",
            // "hover:bg-white",
            "px-6",
            "py-2",
          ],
          light: [
            "bg-white",
            "text-black",
            "border",
            "border-black",
            // "hover:bg-black",
            // "hover:text-white",
          ],
          dark: [
            "bg-black",
            "text-white",
            "border",
            "border-black",
            // "hover:bg-white",
            // "hover:text-black",
            "px-6",
            "py-2",
          ],
          dashboard: [
            "bg-white",
            "rounded-md",
            "border-[0.3px]",
            "border-black/30",
            "w-[160px]",
            "py-1",
            "text-sm",
            "font-light",
          ],
          dashboardGray: [
            "bg-[#B6BFC3]",
            "rounded-md",
            "border-[0.3px]",
            "border-[#B6BFC3]",
            "w-[160px]",
            "py-1",
            "text-sm",
            "font-light",
          ],
        },
        sizes: {
          default: ["px-6", "py-2"],
          small: ["px-3", "py-1"],
        },
      },
      defaultVariants: {
        variant: "default",
        sizes: "default",
      },
    }
  );

  const variantClass = ButtonStyle({ variant, sizes });

  return (
    <div className={variantClass}>
      <Link to={to} className='flex justify-center items-center gap-3'>
        <div>{children}</div>
        {icon && <div>{icon}</div>}
      </Link>
    </div>
  );
};

export default Button;
