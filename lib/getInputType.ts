import { attributeTypeToInputType } from "./definitions";

const getInputType = (attributeType: string, marker: string) =>
  marker.includes("password")
    ? "password"
    : marker.includes("email")
    ? "email"
    : attributeTypeToInputType[attributeType];

export default getInputType;
