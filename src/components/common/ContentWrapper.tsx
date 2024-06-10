import React from "react";

interface ContentWrapperProps {
  children: React.ReactElement;
  className?: string;
}

function ContentWrapper({ children, className }: ContentWrapperProps) {
  return (
    <div className={`max-w-7xl mx-auto px-5 ${className}`}>{children}</div>
  );
}

export default ContentWrapper;
