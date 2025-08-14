import { cn } from "@/lib/utils";
import { ClipLoader } from "react-spinners";

interface LoaderProps {
  className?: string;
  text: string;
}

export const Loader = ({ className = "", text }: LoaderProps) => {
  return (
    <div
      className={cn(
        `flex flex-col items-center justify-center p-2 text-center gap-3`,
        className,
      )}
    >
      <ClipLoader size={32} color="#6366f1" />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
};
