import React from "react";
import BiometricsOverview from "../biometrics/biometrics-overview.component";
import VitalsOverview from "./vitals-overview.component";

export default function VitalsChartOverview() {
  const config = ["vitals", "biometrics"];

  const coreComponents = {
    vitals: VitalsOverview,
    biometrics: BiometricsOverview
  };

  return (
    <>
      {config.map((widget, index) => {
        let Component;
        if (typeof widget === "string") {
          Component = coreComponents[widget];
        } else {
          Component = widget["module"];
        }

        return <Component key={index} />;
      })}
    </>
  );
}
