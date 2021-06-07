import React from "react";
import { Input, Form } from "antd";

export const ItemNameSpace = () => {
  return (
    <>
      <Form.Item
        label="Nombre del espacio"
        className="font-bold"
        name={["name_web_space", "name"]}
        rules={[
          {
            required: true,
            message: "El nombre del espacio es requerido!",
          },
        ]}
      >
        <Input placeholder="Ep: Mi espacio de trabajo" maxLength={21} />
      </Form.Item>
    </>
  );
};
