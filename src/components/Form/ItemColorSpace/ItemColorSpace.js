import React from "react";
import { Form, Radio } from "antd";
import "./ItemColorSpace.scss";

export const ItemColorSpace = () => {
  const ckeckColor = async (e) => {
    let value = e.target.value;
    let current = await document.querySelector(`.${value}`);
    await current.classList.add("blancoColor");

    let contineCieloColor = await current.classList.contains("cieloColor");
    if (!contineCieloColor) {
      let cieloColor = await document.querySelector(`.cieloColor`);
      await cieloColor.classList.remove("blancoColor");
    }
  };

  return (
    <>
      <Form.Item
        label="Color del tema"
        name={["color_tema", "color"]}
        className="font-bold"
        initialValue="cieloColor"
      >
        <div className="colorTema">
          <Radio.Group defaultValue="cieloColor">
            <Radio.Button
              className="colorRadio blueColor"
              value="blueColor"
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio greenColor"
              value="greenColor"
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio lemonColor"
              value="lemonColor"
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio yelowColor"
              value="yelowColor"
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio lightOrangeColor"
              value="lightOrangeColor"
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio orangeColor"
              value="orangeColor"
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio redColor"
              value="redColor"
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio pinkColor"
              value="pinkColor"
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio purpleColor"
              value="purpleColor"
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio cieloColor blancoColor"
              value="cieloColor"
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
          </Radio.Group>
        </div>
      </Form.Item>
    </>
  );
};
