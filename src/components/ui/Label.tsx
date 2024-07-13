import { PropsWithChildren } from "react";

const Label = ({ children }: PropsWithChildren) => {
  return (
    <label className="block mb-2 font-medium text-primary-main">
      {children}
    </label>
  );
};

export default Label;
