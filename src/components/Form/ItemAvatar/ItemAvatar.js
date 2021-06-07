import React, { useRef, useState } from "react";
import { Form, Button, Upload, message } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import uploadIcon from "../../../img/uploadIcon.svg";
import { Content } from "antd/lib/layout/layout";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export const ItemAvatar = ({ setFormData, formData }) => {
  const uploadedImage = useRef(null);
  const [logoSrc, setLogoSrc] = useState("");
  const [fileList] = useState([])

  const dummyRequest = ({ file }) => {
    message.success(`La foto ${file.name} fue subida correctamente!`);
    setLogoSrc(file);
    const reader = new FileReader();
    const { current } = uploadedImage;
    current.file = file;
    reader.onload = (e) => {
      current.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const beforeUpload = (file) => {
    // console.log(file);
    if (
      file.type !== "image/png" &&
      file.type !== "image/jpg" &&
      file.type !== "image/jpeg"
    ) {
      message.error(
        `El archivo ${file.name} no tiene una extenciones válida(.png)!`
      );
      return Upload.LIST_IGNORE;
    }

    const is4MB = file.size / 1024 / 1024 < 4;
    if (!is4MB) {
      message.error("La imagen no puede ser mayor de 4MB!");
      return Upload.LIST_IGNORE;
    }

    setFormData({
      ...formData,
      logo_space: { src: { file: { originFileObj: file } } },
    });

    return true;
  };

  return (
    <>
      <h4 className="ml-0">Logo del espacio</h4>
      <Content className="d-flex flex">
        <Avatar
          icon={
            !logoSrc ? (
              ""
            ) : (
              <img
                className="logoEspacio"
                src={logoSrc}
                alt={"Logo"}
                ref={uploadedImage}
              />
            )
          }
          style={{ fontSize: 33 }}
          className="avatar"
          size="large"
        >
          B
        </Avatar>
        <Form.Item
          label=""
          className="font-bold"
          name={["logo_space", "src"]}
          rules={[
            {
              required: true,
              message: "El logo del espacio es requerido!",
            },
          ]}
        >
          <Upload
            showUploadList={false}
            accept={"image/*"}
            multiple={false}
            fileList={fileList}
            beforeUpload={beforeUpload}
            customRequest={(f) => dummyRequest(f)}
            className="ml-3"
          >
            <Button
              className="btn-upload-image mt-5"
              icon={<img src={uploadIcon} alt={"uploadIcon"} />}
            >
              Subir logo
            </Button>
          </Upload>
        </Form.Item>
      </Content>
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
