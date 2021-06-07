import React, { useState } from "react";
import { Form, Button, message, Popconfirm } from "antd";
import "antd/dist/antd.css";
import { Content } from "antd/lib/layout/layout";
import "./CollectInformation.scss";
import { ItemAvatar } from "./ItemAvatar/ItemAvatar";
import { ItemColorSpace } from "./ItemColorSpace/ItemColorSpace";
import { ItemPrivacity } from "./ItemPrivacity/ItemPrivacity";
import { ItemCantPerson } from "./ItemCantPerson/ItemCantPerson";
import { ItemUrlSpace } from "./ItemUrlSpace/ItemUrlSpace";
import { ItemNameSpace } from "./ItemNameSpace/ItemNameSpace";

export const CollectInformation = ({ setFormData, formData }) => {
  const [form] = Form.useForm();

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log("Success:", values);
      message
        .loading("Enviando...", 1.5)
        .then(() => message.success("Cambios guardados!!!", 1.5))
        .then(() =>
          message.info(
            "Puede ver los datos en consola, presione la tecla F12!",
            2.5
          )
        );
    } catch (errorInfo) {
      // console.log("Failed:", errorInfo);
    }
  };

  const onChangeForm = async () => {
    try {
      const values = await form.getFieldsValue();
      // console.log(values);
      setFormData(values);
    } catch (errorInfo) {
      // console.log("Failed:", errorInfo);
    }
  };

  const onDiscard = () => {
    form.resetFields();
    setFormData({
      cant_personas: { cant: "yo" },
      color_tema: { color: "cieloColor" },
      logo_space: { src: undefined },
      name_web_space: { name: undefined },
      privacity_space: { privacity: "privado" },
      url_web_space: { url: undefined },
    });
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      onDiscard();
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <div className="contentCollectInformation flex flex-col mt-10">
      <div className="formCollectInformation">
        <h1 className="font-bold text-lg">Configuración</h1>
        <Form
          form={form}
          layout="vertical"
          onChange={onChangeForm}
          encType="multipart/form-data"
        >
          <ItemAvatar setFormData={setFormData} formData={formData} />

          <ItemNameSpace />

          <ItemUrlSpace />

          <ItemCantPerson />

          <ItemColorSpace />

          <ItemPrivacity />

          <Form.Item>
            <Content className="mt-7 pt-4 mb-5">
              <Button
                type="primary"
                onClick={onCheck}
                className="mr-5 btn-guardar"
              >
                Guardar cambios
              </Button>

              <Popconfirm
                title="Perdera los cambios si presiona en Ok! ¿Está seguro?"
                visible={visible}
                onConfirm={handleOk}
                okButtonProps={{ loading: confirmLoading }}
                onCancel={() => setVisible(false)}
              >
                <Button
                  type="primary"
                  onClick={() => setVisible(true)}
                  className="btn-descartar"
                >
                  Descartar
                </Button>
              </Popconfirm>
            </Content>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
