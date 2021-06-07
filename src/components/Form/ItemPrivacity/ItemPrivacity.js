import React from "react";
import "./ItemPrivacity.scss";
import { Form, Radio } from "antd";

export const ItemPrivacity = () => {
  return (
    <>
      <Form.Item
        label="Privacidad del espacio"
        name={["privacity_space", "privacity"]}
        className="font-bold privacityRadioGroup"
        // initialValue={"privado"}
      >
        <Radio.Group
          defaultValue={"privado"}
          buttonStyle="outline"
          optionType="button"
        >
          <div className="ckeck">
            <Radio value={"privado"}>
              Privado
            </Radio>
            <p>
              El contenido será visible sólo para tí y los miembros de tu
              Organización.
            </p>
          </div>

          <div className="ckeck">
            <Radio value={"publico"}>Público</Radio>
            <p>
              Cualquiera con el vínculo podrá ver la actividad de tu
              Organización
            </p>
          </div>
        </Radio.Group>
      </Form.Item>
    </>
  );
};
