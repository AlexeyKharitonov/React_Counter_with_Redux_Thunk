import React from "react";
import { useSelector } from "react-redux";

export const Value: React.FC = () => {
  const { value }: any = useSelector((state) => state);
  return <div>Значение: {value}</div>;
};
