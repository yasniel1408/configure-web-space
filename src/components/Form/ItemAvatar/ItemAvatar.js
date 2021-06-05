import React, { useRef, useState } from "react";
import { Form, Button, Upload, message } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import ImgCrop from "antd-img-crop";
import uploadIcon from "../../../img/uploadIcon.svg";
import { Content } from "antd/lib/layout/layout";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export const ItemAvatar = () => {
  const [fileList, setFileList] = useState([]);

  const uploadedImage = useRef(null);

  const [logoSrc, setLogoSrc] = useState("");

  const props = {
    name: "logoSpace",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    fileList,
    onChange: ({ fileList }) => {
      setFileList(fileList);
      let file = fileList[0];
      if (file) {
        if (file.status === "done") {
          message.success(`La foto ${file.name} fue subida correctamente!`);
          setFileList(null);
          setLogoSrc(file);
          const reader = new FileReader();
          const { current } = uploadedImage;
          current.file = file;
          reader.onload = (e) => {
            current.src = e.target.result;
          };
          reader.readAsDataURL(file.originFileObj);
        } else if (fileList[0].status === "error") {
          message.error(
            `La foto ${fileList[0].name} tuvo problemas para ser subida al servidor!`
          );
          setFileList(null);
        }
      }
    },
    beforeUpload: (file) => {
      if (file.type !== "image/png" && file.type !== "image/jpg") {
        message.error(
          `El archivo ${file.name} no tiene una extenciones válida(.png o .jpg)!`
        );
      }
      return file.type === "image/png" || file.type === "image/jpg"
        ? true
        : Upload.LIST_IGNORE;
    },
    onPreview: async (file) => {
      let src = file.url;
      if (!src) {
        src = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
      }
    },
  };

  return (
    <>
      <Form.Item
        label="Logo del espacio"
        className="font-bold"
        name={["logo_space", "src"]}
      >
        <Content className="mt-2">
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
          <ImgCrop rotate>
            <Upload
              accept="image/*"
              fileList={fileList}
              {...props}
              className="ml-3"
            >
              <Button
                className="btn-upload-image"
                icon={<img src={uploadIcon} alt={"uploadIcon"} />}
              >
                Subir logo
              </Button>
            </Upload>
          </ImgCrop>
        </Content>
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
