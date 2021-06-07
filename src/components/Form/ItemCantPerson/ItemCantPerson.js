import React from "react";
import { Form, Radio } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Content } from "antd/lib/layout/layout";

export const ItemCantPerson = () => {
  return (
    <>
      <Form.Item
        label="¿Cuántas personas trabajarán contigo, incluyéndote a ti?"
        name={["cant_personas", "cant"]}
        className="font-bold"
        // initialValue="yo"
      >
        <div className="numeroPersonas">
          <Radio.Group
            defaultValue="yo"
            name="cantPersonas"
            className="d-flex flex-wrap"
          >
            <Radio.Button value="yo">Sólo yo</Radio.Button>
            <Radio.Button value="2-10">2-10</Radio.Button>
            <Radio.Button value="11-25">11-25</Radio.Button>
            <Radio.Button value="26-50">26-50</Radio.Button>
            <Radio.Button value="51-100">51-100</Radio.Button>
            <Radio.Button value="500+">500+</Radio.Button>
          </Radio.Group>
        </div>
      </Form.Item>
      <Content className="flex">
        <div className="mr-2 mt-0">
          <ExclamationCircleOutlined />
        </div>
        <div>
          <p className="mb-0 mt-1">
            Este logo identificará tu espacio entre el resto.
          </p>
          <p>
            Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp
            con fondo transparente.
          </p>
        </div>
      </Content>
    </>
  );
};
