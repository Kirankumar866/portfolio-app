import React from "react";

interface ProjectTag {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTag> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
};

export default ProjectTag;