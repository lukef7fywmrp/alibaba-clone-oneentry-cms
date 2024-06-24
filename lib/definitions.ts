import { HTMLInputTypeAttribute } from "react";

export const attributeTypeToInputType: Record<string, HTMLInputTypeAttribute> =
  {
    string: "text",
    text: "text",
    textWithHeader: "text",
    integer: "number",
    real: "number",
    float: "number",
    dateAndTime: "datetime-local",
    date: "date",
    time: "time",
    file: "file",
    image: "file",
    groupOfImages: "file",
    radioButton: "radio",
    list: "radio",
    button: "button",
  };

export interface IErroredResponse {
  statusCode: number;
  message: string;
}
