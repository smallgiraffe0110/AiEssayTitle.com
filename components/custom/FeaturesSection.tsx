"use client";

import React from "react";

type FeaturesSectionProps = {
  children: React.ReactNode;
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

export default FeaturesSection;
