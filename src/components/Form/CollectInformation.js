import React from "react";
import { Form, Input, Button, Radio, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Content } from "antd/lib/layout/layout";
import "./CollectInformation.scss";
import { ItemAvatar } from "./ItemAvatar/ItemAvatar";
import { ItemColorSpace } from "./ItemColorSpace/ItemColorSpace";

export const CollectInformation = () => {
  const [form] = Form.useForm();

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log("Success:", values);
      message
        .loading('Action in progress..', 2.5)
        .then(() => message.success('Loading finished', 2.5))
        .then(() => message.info('Puede ver los datos en consola, presione la tecla F12!', 2.5));
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <div className="contentCollectInformation flex flex-col mt-10">
      <div>
        <h1 className="font-bold text-lg">Configuración</h1>
        <Form form={form} layout="vertical" encType="multipart/form-data">
          <ItemAvatar />

          <Form.Item
            label="Nombre del espacio"
            className="font-bold"
            name={["name_web_space", "name"]}
          >
            <Input placeholder="Ep: Mi espacio de trabajo" />
          </Form.Item>

          <Form.Item
            label="URL del espacio (dirección web)"
            name={["url_web_space", "url"]}
            className="font-bold"
          >
            <Input
              name="urlWeb"
              placeholder="Ep: mi.dominio"
              addonAfter=".dofleini.com"
            />
          </Form.Item>
          <Content className="flex">
            <div className="mr-2 mt-0">
              <ExclamationCircleOutlined />
            </div>
            <div>
              <p className="mb-0 mt-1">
                Puedes cambiar la URL de tu espacio (dirección web) en cualquier
                momento, pero por cortesía hacia tus compañeros de trabajo y
                otros usuarios de Plankton, porfavor no lo hagas muy seguido :)
              </p>
              <p>
                Nota: Si cambias la URL de tu espacio, Plankton automáticamente
                redireccionará desde la antigua dirección hacia la nueva. En
                cualquier caso, deberías asegurarte que tus compañeros sepan
                acerca del cambio porque la dirección anterior pasará a estar
                libre y puede ser usada por otro espacio en el futuro.
              </p>
            </div>
          </Content>

          <Form.Item
            label="¿Cuántas personas trabajarán contigo, incluyéndote a ti?"
            name={["cant_personas", "cant"]}
            className="font-bold"
          >
            <div className="numeroPersonas">
              <Radio.Group
                defaultValue="a"
                name="cantPersonas"
                className="d-flex flex-wrap"
              >
                <Radio.Button value="yo">Sólo yo</Radio.Button>
                <Radio.Button value="2-10">2-10</Radio.Button>
                <Radio.Button value="11-15">11-25</Radio.Button>
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
                Preferiblemente sube una imagen .png igual o superior a 65px a
                72ppp con fondo transparente.
              </p>
            </div>
          </Content>

          <ItemColorSpace />

          <Form.Item>
            <Button
              type="primary"
              onClick={onCheck}
              className="mr-5 btn-guardar"
            >
              Guardar cambios
            </Button>
            <Button type="primary" onClick={onCheck} className="btn-descartar">
              Descartar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
