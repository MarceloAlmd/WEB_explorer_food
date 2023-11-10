import React, { useState } from "react";

interface TooltipProps {
  mensagem: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ mensagem, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333",
            color: "#fff",
            padding: "5px",
            borderRadius: "4px",
            zIndex: 1,
          }}
        >
          {mensagem}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
