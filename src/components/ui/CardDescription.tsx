import React from "react";

interface CardDescriptionProps {
  children: React_NODE;
}

function CardDescription({ children }: CardDescriptionProps) {
  return (
    <div className="p-4">
      {children}
    </div>
  );
}

export default CardDescription;
