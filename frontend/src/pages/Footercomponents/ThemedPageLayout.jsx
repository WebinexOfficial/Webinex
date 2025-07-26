import React from "react";

const ThemedPageLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-white text-[#0C2228] px-6 py-12">

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 border-b border-gray-600 pb-2">
          {title}
        </h1>
        <div className="text-gray-300 leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

export default ThemedPageLayout;
