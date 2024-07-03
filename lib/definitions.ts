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

export type Value = {
  plainValue: string;
  htmlValue: string | TrustedHTML;
};

export interface Product {
  id: number;
  localizeInfos: {
    title: string;
  };
  statusIdentifier: null;
  statusLocalizeInfos: {};
  attributeSetIdentifier: string;
  position: number;
  templateIdentifier: null;
  shortDescTemplateIdentifier: null;
  price: number;
  additional: { prices: { min: number; max: number } };
  sku: null;
  isSync: boolean;
  attributeValues?: {
    productimage: {
      type: string;
      value: {
        size: number;
        filename: string;
        previewLink: string;
        downloadLink: string;
      };
      position: number;
      isProductPreview: boolean;
    };
    productprice: {
      type: string;
      value: string;
      position: number;
      isProductPreview: boolean;
    };
    producttitle: {
      type: string;
      value: Value;
      position: number;
      isProductPreview: boolean;
    };
    productsubtitle: {
      type: string;
      value: Value;
      position: number;
      isProductPreview: boolean;
    };
    productdescription: {
      type: string;
      value: Value;
      position: number;
      isProductPreview: boolean;
    };
  };
}
