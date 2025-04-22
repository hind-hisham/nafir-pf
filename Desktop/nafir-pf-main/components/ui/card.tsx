import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

type CardSectionProps = {
  children: ReactNode;
};

export const CardHeader = ({ children }: CardSectionProps) => {
  return <div className=" p-2">{children}</div>;
};

export const CardContent = ({ children }: CardSectionProps) => {
  return <div className="p-2">{children}</div>;
};

export const CardTitle = ({ children }: CardSectionProps) => {
  return <h2 className="text-lg font-semibold text-center">{children}</h2>;
};
