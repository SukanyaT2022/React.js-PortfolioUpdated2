import React from "react";
import Card from "./Component/Card";
import { dataReactNative } from "./Data";

const ReactNative = () => {
  return (
    <div>
      <h2 className=" targetTitle text-center pt-10 text-3xl md:text-3xl font-bold">
        React Native Projects
      </h2>
      <Card data={dataReactNative} />
    </div>
  );
};

export default ReactNative;
