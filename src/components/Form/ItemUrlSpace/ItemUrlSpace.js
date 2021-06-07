import React from "react";
import { Input, Form } from "antd";
import { Content } from "antd/lib/layout/layout";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export const ItemUrlSpace = () => {
  return (
    <>
      <Form.Item
        label="URL del espacio (dirección web)"
        name={["url_web_space", "url"]}
        className="font-bold"
        rules={[
          {
            required: true,
            message: "La url del espacio es requerida!",
          },
        ]}
      >
        <Input
          name="urlWeb"
          placeholder="Ep: mi.dominio"
          addonAfter=".dofleini.com"
          maxLength={40}
        />
      </Form.Item>
      <Content className="flex">
        <div className="mr-2 mt-0">
          <ExclamationCircleOutlined />
        </div>
        <div>
          <p className="mb-0 mt-1">
            Puedes cambiar la URL de tu espacio (dirección web) en cualquier
            momento, pero por cortesía hacia tus compañeros de trabajo y otros
            usuarios de Plankton, porfavor no lo hagas muy seguido :)
          </p>
          <p>
            Nota: Si cambias la URL de tu espacio, Plankton automáticamente
            redireccionará desde la antigua dirección hacia la nueva. En
            cualquier caso, deberías asegurarte que tus compañeros sepan acerca
            del cambio porque la dirección anterior pasará a estar libre y puede
            ser usada por otro espacio en el futuro.
          </p>
        </div>
      </Content>
    </>
  );
};
