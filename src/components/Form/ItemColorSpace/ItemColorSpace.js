import React, { useEffect, useState } from "react";
import { Form, Radio } from "antd";
import "./ItemColorSpace.scss";

export const ItemColorSpace = () => {
  const [blueColor, setBlueColor] = useState("");
  const [greenColor, setGreenColor] = useState("");
  const [lemonColor, setLemonColor] = useState("");
  const [yelowColor, setyelowColor] = useState("");
  const [lightOrangeColor, setLightOrangeColor] = useState("");
  const [orangeColor, setOrangeColor] = useState("");
  const [redColor, setRedColor] = useState("");
  const [pinkColor, setPinkColor] = useState("");
  const [purpleColor, setPurpleColor] = useState("");
  const [cieloColor, setCieloColor] = useState("");

  useEffect(() => {
    restablecerColor();
    setCieloColor("#ffffff")
  }, []);

  const restablecerColor = () => {
    setBlueColor("#39B0FF");
    setGreenColor("#04B58B");
    setLemonColor("#3E9C4B");
    setyelowColor("#B6BC00");
    setLightOrangeColor("#E59100");
    setOrangeColor("#E55C00");
    setRedColor("#EE1F50");
    setPinkColor("#D6198A");
    setPurpleColor("#D6198A");
    setCieloColor("#48B5FE");
  };

  //blancoColor
  const ckeckColor = async (e) => {
    let value = e.target.value;
    if (e.target.checked) {
      restablecerColor();
      switch (value) {
        case (value = "blueColor"):
          setBlueColor("#ffffff");
          break;
        case (value = "greenColor"):
          setGreenColor("#ffffff");
          break;
        case (value = "lemonColor"):
          setLemonColor("#ffffff");
          break;
        case (value = "yelowColor"):
          setyelowColor("#ffffff");
          break;
        case (value = "lightOrangeColor"):
          setLightOrangeColor("#ffffff");
          break;
        case (value = "orangeColor"):
          setOrangeColor("#ffffff");
          break;
        case (value = "redColor"):
          setRedColor("#ffffff");
          break;
        case (value = "pinkColor"):
          setPinkColor("#ffffff");
          break;
        case (value = "purpleColor"):
          setPurpleColor("#ffffff");
          break;
        case (value = "cieloColor"):
          setCieloColor("#ffffff");
          break;

        default:
          break;
      }
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
          <Radio.Group
            defaultValue="cieloColor"
          >
            <Radio.Button
              className="colorRadio blueColor"
              value="blueColor"
              style={{ background: blueColor }}
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio greenColor"
              value="greenColor"
              style={{ background: greenColor }}
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio lemonColor"
              value="lemonColor"
              style={{ background: lemonColor }}
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio yelowColor"
              value="yelowColor"
              style={{ background: yelowColor }}
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio lightOrangeColor"
              value="lightOrangeColor"
              style={{ background: lightOrangeColor }}
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio orangeColor"
              value="orangeColor"
              style={{ background: orangeColor }}
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio redColor"
              value="redColor"
              style={{ background: redColor }}
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio pinkColor"
              value="pinkColor"
              style={{ background: pinkColor }}
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio purpleColor"
              value="purpleColor"
              style={{ background: purpleColor }}
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
            <Radio.Button
              className="colorRadio cieloColor"
              value="cieloColor"
              style={{ background: cieloColor }}
              onChange={(e) => ckeckColor(e)}
            ></Radio.Button>
          </Radio.Group>
        </div>
      </Form.Item>
    </>
  );
};
