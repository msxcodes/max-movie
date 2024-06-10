import React from "react";

function ContentWrapper({ children }: { children: React.ReactElement }) {
  return <div className="max-w-7xl mx-auto px-5">{children}</div>;
}

export default ContentWrapper;
