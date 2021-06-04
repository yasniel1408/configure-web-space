import React, { useRef, useState } from "react";
import { Form, Input, Button, Radio, Upload, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Avatar from "antd/lib/avatar/avatar";
import { Content } from "antd/lib/layout/layout";
import { UploadOutlined } from "@ant-design/icons";
import "./CollectInformation.scss";

export const CollectInformation = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");

  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const [avatar, setAvatar] = useState();

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange: (info) => {
      if (info.file.status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        const file = info.file.originFileObj;
        if (file) {
          const reader = new FileReader();
          const { current } = uploadedImage;
          current.file = file;
          reader.onload = (e) => {
            current.src = e.target.result;
          };
          reader.readAsDataURL(file);
          // reader.onprogress = (e) => {
          //   console.log(e.total, e.loaded);
          // };
        }
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    beforeUpload: (file) => {
      console.log(file);
      if (file.type !== "image/png") {
        message.error(`${file.name} is not a png file`);
      }
      return file.type === "image/png" ? true : Upload.LIST_IGNORE;
    },
    previewFile(file) {
      console.log('Your upload file:', file);
      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      })
      .then(res => res.json())
      .then(({ thumbnail }) =>console(thumbnail))
      .then(({ thumbnail }) => setAvatar(thumbnail));
    },
  };

  return (
    <div className="contentCollectInformation flex ml-24 flex-col mt-10">
      <div>
        <h1 className="font-bold text-lg">Configuración</h1>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            requiredMarkValue: requiredMark,
          }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
          encType="multipart/form-data"
        >
          <div>
            <label className="font-bold">Logo del espacio</label>
            <Content className="mt-2">
              <Avatar
                icon={!avatar ? "" : <img src={avatar} ref={uploadedImage} />}
                style={{ fontSize: 35 }}
                className="avatar"
                size="large"
              >
                B
              </Avatar>
              <Upload
                accept="image/*"
                {...props}
                className="ml-3"
                ref={imageUploader}
              >
                <Button className="btn-upload-image" icon={<UploadOutlined />}>
                  Subir logo
                </Button>
              </Upload>
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
                  Preferiblemente sube una imagen .png igual o superior a 65px a
                  72ppp con fondo transparente.
                </p>
              </div>
            </Content>
          </div>

          <Form.Item label="Nombre del espacio" required>
            <Input placeholder="Ep: Mi espacio de trabajo" />
          </Form.Item>

          <Form.Item label="URL del espacio (dirección web)" required>
            <Input placeholder="Ep: mi.dominio" addonAfter=".dofleini.com" />
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

          <div className="numeroPersonas">
            <h4 className="font-bold">
              ¿Cuántas personas trabajarán contigo, incluyéndote a ti?
            </h4>
            <Radio.Group defaultValue="a">
              <Radio.Button value="a">Sólo yo</Radio.Button>
              <Radio.Button value="b">2-10</Radio.Button>
              <Radio.Button value="c">11-25</Radio.Button>
              <Radio.Button value="d">26-50</Radio.Button>
              <Radio.Button value="e">51-100</Radio.Button>
              <Radio.Button value="f">500+</Radio.Button>
            </Radio.Group>
          </div>

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

          <div className="colorTema">
            <h4 className="font-bold mt-2">Color del tema</h4>
            <Radio.Group defaultValue="j">
              <Radio.Button value="a"></Radio.Button>
              <Radio.Button value="b"></Radio.Button>
              <Radio.Button value="c"></Radio.Button>
              <Radio.Button value="d"></Radio.Button>
              <Radio.Button value="e"></Radio.Button>
              <Radio.Button value="f"></Radio.Button>
              <Radio.Button value="g"></Radio.Button>
              <Radio.Button value="h"></Radio.Button>
              <Radio.Button value="i"></Radio.Button>
              <Radio.Button value="j"></Radio.Button>
            </Radio.Group>
          </div>

          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
