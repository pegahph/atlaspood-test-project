import { IconChevronDown } from "@tabler/icons-react";
import { ReactNode } from "react";

interface AccordionProps {
  summary: ReactNode;
}

const Accordion = ({ summary }: AccordionProps) => {
  return (
    <div className="flex items-center w-full pt-4 text-[15px] border-t cursor-pointer select-none border-t-primary-main">
      <div className="flex-1 font-semibold text-gray-700">{summary}</div>
      <IconChevronDown size={28} />
    </div>
  );
};

export default Accordion;
