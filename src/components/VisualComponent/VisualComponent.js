import React, { useEffect, useRef, useState } from "react";
import "./VisualComponent.scss";
import logoDefautl from "../../img/defaultLogo.svg";
import icoDefautl from "../../img/icoDefault.svg";

export const VisualComponent = ({ formData }) => {
  const uploadedImage = useRef(null);
  const uploadedImage2 = useRef(null);
  const [file, setFile] = useState();

  useEffect(() => {
    setFile(
      formData.logo_space.src !== undefined
        ? formData.logo_space.src.file.originFileObj
        : null
    );
    if (file) {
      showImage({ uploadedImage, file });
      showImage({ uploadedImage: uploadedImage2, file });
    }
  }, [formData]);

  const showImage = ({ uploadedImage, file }) => {
    const reader = new FileReader();
    const { current } = uploadedImage;
    current.file = file;
    reader.onload = (e) => {
      current.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="h-screen flex items-center visualComponent">
        <img
          src={logoDefautl}
          ref={uploadedImage}
          alt={"logoDefault"}
          className="logoDefault"
        />
        <img
          src={icoDefautl}
          ref={uploadedImage2}
          alt={"logoDefault"}
          className="icoDefault"
        />
        <svg width="807" height="598" viewBox="0 0 807 598">
          <defs>
            <clipPath id="a">
              <rect
                className="a"
                width="807"
                height="598"
                transform="translate(1093 225)"
              />
            </clipPath>
            <filter
              id="b"
              x="135"
              y="34"
              width="830"
              height="602"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="32" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="25" result="c" />
              <feFlood floodOpacity="0.059" />
              <feComposite operator="in" in2="c" />
              <feComposite in="SourceGraphic" />
            </filter>
            <clipPath id="d">
              <rect
                className="b"
                width="680"
                height="452"
                transform="translate(3689 642)"
              />
            </clipPath>
            <filter
              id="e"
              x="276"
              y="273"
              width="573"
              height="46"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="1" input="SourceAlpha" />
              <feGaussianBlur result="f" />
              <feFlood floodColor="#c1d2db" />
              <feComposite operator="in" in2="f" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter
              id="g"
              x="276"
              y="320"
              width="573"
              height="46"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="1" input="SourceAlpha" />
              <feGaussianBlur result="h" />
              <feFlood floodColor="#c1d2db" />
              <feComposite operator="in" in2="h" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter
              id="i"
              x="276"
              y="367"
              width="573"
              height="46"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="1" input="SourceAlpha" />
              <feGaussianBlur result="j" />
              <feFlood floodColor="#c1d2db" />
              <feComposite operator="in" in2="j" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter
              id="k"
              x="276"
              y="414"
              width="573"
              height="46"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="1" input="SourceAlpha" />
              <feGaussianBlur result="l" />
              <feFlood floodColor="#c1d2db" />
              <feComposite operator="in" in2="l" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter
              id="m"
              x="276"
              y="461"
              width="573"
              height="46"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="1" input="SourceAlpha" />
              <feGaussianBlur result="n" />
              <feFlood floodColor="#c1d2db" />
              <feComposite operator="in" in2="n" />
              <feComposite in="SourceGraphic" />
            </filter>
            <clipPath id="o">
              <path
                className="c"
                d="M5,0H680a0,0,0,0,1,0,0V447a5,5,0,0,1-5,5H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z"
                transform="translate(3689 642)"
              />
            </clipPath>
          </defs>
          <g className="d" transform="translate(-1093 -225)">
            <g transform="translate(1321.7 224.819)">
              <g transform="translate(14.087)">
                <ellipse
                  className="e"
                  cx="37.944"
                  cy="37.944"
                  rx="37.944"
                  ry="37.944"
                  transform="translate(211.027 21.048)"
                />
                <rect
                  className="f"
                  width="70.618"
                  height="187.611"
                  transform="translate(299.162 0.351) rotate(30)"
                />
                <path
                  className="g"
                  d="M344.817,589.12c-5.217,3.069-11.438,7.973-18.217,15.848"
                  transform="translate(-170.071 -428.453)"
                />
              </g>
              <g className="h" transform="translate(210.099 26.108)">
                <circle className="af" cx="3.502" cy="3.502" r="3.502" />
                <circle className="ac" cx="3.502" cy="3.502" r="3.002" />
              </g>
            </g>
            <g transform="translate(1175.7 502.819)">
              <g transform="translate(14.087)">
                <rect
                  className="i"
                  width="102.37"
                  height="97.16"
                  transform="translate(48.775 70.727)"
                />
                <path
                  className="j"
                  d="M569.246,70.93,517.6,119.941,615.622,175.8Z"
                  transform="translate(-517.6 -70.93)"
                />
              </g>
              <g className="h" transform="translate(0 106.145)">
                <circle className="af" cx="3.502" cy="3.502" r="3.502" />
                <circle className="ac" cx="3.502" cy="3.502" r="3.002" />
              </g>
              <g className="h" transform="translate(46.022 184.182)">
                <circle className="af" cx="3.502" cy="3.502" r="3.502" />
                <circle className="ac" cx="3.502" cy="3.502" r="3.002" />
              </g>
            </g>
            <g transform="translate(-2386 -340)">
              <g className="al" transform="matrix(1, 0, 0, 1, 3479, 565)">
                <path
                  className="k"
                  d="M5,0H680a0,0,0,0,1,0,0V447a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0Z"
                  transform="translate(210 77)"
                />
              </g>
              <g className="l">
                <g className="b" transform="translate(3689 717)">
                  <rect className="af" width="688" height="377" />
                  <rect
                    className="ac"
                    x="0.5"
                    y="0.5"
                    width="687"
                    height="376"
                  />
                </g>
                <g className="m" transform="translate(3767 688)">
                  <rect className="af" width="626" height="24" rx="12" />
                  <rect
                    className="ac"
                    x="0.5"
                    y="0.5"
                    width="625"
                    height="23"
                    rx="11.5"
                  />
                </g>
              </g>
              <g transform="translate(-28 -11)">
                <rect
                  className="n"
                  width="8"
                  height="46"
                  transform="translate(3781 849)"
                />
                <rect
                  className="n"
                  width="8"
                  height="46"
                  transform="translate(3781 896)"
                />
                <rect
                  className="n"
                  width="8"
                  height="46"
                  transform="translate(3781 990)"
                />
                <rect
                  className="n"
                  width="8"
                  height="46"
                  transform="translate(3781 1037)"
                />
                <g className="ak" transform="matrix(1, 0, 0, 1, 3507, 576)">
                  <rect
                    className="c"
                    width="573"
                    height="45"
                    transform="translate(276 273)"
                  />
                </g>
                <g className="aj" transform="matrix(1, 0, 0, 1, 3507, 576)">
                  <rect
                    className="c"
                    width="573"
                    height="45"
                    transform="translate(276 320)"
                  />
                </g>
                <g className="ai" transform="matrix(1, 0, 0, 1, 3507, 576)">
                  <rect
                    className={`${formData.color_tema.color} opacity-20`}
                    width="573"
                    height="45"
                    transform="translate(276 367)"
                  />
                </g>
                <g className="ah" transform="matrix(1, 0, 0, 1, 3507, 576)">
                  <rect
                    className="c"
                    width="573"
                    height="45"
                    transform="translate(276 414)"
                  />
                </g>
                <g className="ag" transform="matrix(1, 0, 0, 1, 3507, 576)">
                  <rect
                    className="c"
                    width="573"
                    height="45"
                    transform="translate(276 461)"
                  />
                </g>
                <rect
                  className={`${formData.color_tema.color} opacity-10`}
                  width="177"
                  height="45"
                  transform="translate(4119 849)"
                />
                <rect
                  className={`${formData.color_tema.color} opacity-10`}
                  width="177"
                  height="45"
                  transform="translate(4119 896)"
                />
                <rect
                  className={`${formData.color_tema.color} opacity-20`}
                  width="177"
                  height="45"
                  transform="translate(4119 943)"
                />
                <rect
                  className={`${formData.color_tema.color} opacity-10`}
                  width="177"
                  height="45"
                  transform="translate(4119 990)"
                />
                <rect
                  className={`${formData.color_tema.color} opacity-10`}
                  width="177"
                  height="45"
                  transform="translate(4119 1037)"
                />
                <rect
                  className="r"
                  width="145"
                  height="19"
                  rx="9.5"
                  transform="translate(3781 817)"
                />
                <rect
                  className="r"
                  width="107"
                  height="9"
                  rx="4.5"
                  transform="translate(3797 867)"
                />
                <rect
                  className="r"
                  width="107"
                  height="9"
                  rx="4.5"
                  transform="translate(3910 867)"
                />
                <rect
                  className="r"
                  width="83"
                  height="9"
                  rx="4.5"
                  transform="translate(4135 867)"
                />
                <rect
                  className="r"
                  width="28"
                  height="9"
                  rx="4.5"
                  transform="translate(4135 913)"
                />
                <rect
                  className="r"
                  width="85"
                  height="9"
                  rx="4.5"
                  transform="translate(4169 913)"
                />
                <rect
                  className={formData.color_tema.color}
                  width="95"
                  height="9"
                  rx="4.5"
                  transform="translate(4135 960)"
                />
                <rect
                  className="r"
                  width="28"
                  height="9"
                  rx="4.5"
                  transform="translate(4226 1007)"
                />
                <rect
                  className="r"
                  width="85"
                  height="9"
                  rx="4.5"
                  transform="translate(4135 1007)"
                />
                <rect
                  className="r"
                  width="102"
                  height="9"
                  rx="4.5"
                  transform="translate(4135 1054)"
                />
                <rect
                  className="r"
                  width="51"
                  height="9"
                  rx="4.5"
                  transform="translate(4023 867)"
                />
                <rect
                  className="r"
                  width="44"
                  height="9"
                  rx="4.5"
                  transform="translate(3797 913)"
                />
                <rect
                  className={formData.color_tema.color}
                  width="117"
                  height="9"
                  rx="4.5"
                  transform="translate(3797 960)"
                />
                <rect
                  className="r"
                  width="103"
                  height="9"
                  rx="4.5"
                  transform="translate(3847 913)"
                />
                <rect
                  className="r"
                  width="44"
                  height="9"
                  rx="4.5"
                  transform="translate(3816 1054)"
                />
                <rect
                  className="r"
                  width="103"
                  height="9"
                  rx="4.5"
                  transform="translate(3797 1007)"
                />
                <rect
                  className="r"
                  width="72"
                  height="9"
                  rx="4.5"
                  transform="translate(3975 913)"
                />
                <rect
                  className={formData.color_tema.color}
                  width="103"
                  height="9"
                  rx="4.5"
                  transform="translate(3920 960)"
                />
                <rect
                  className="r"
                  width="13"
                  height="9"
                  rx="4.5"
                  transform="translate(3956 913)"
                />
                <rect
                  className="r"
                  width="44"
                  height="9"
                  rx="4.5"
                  transform="translate(4015 1007)"
                />
                <rect
                  className={formData.color_tema.color}
                  width="44"
                  height="9"
                  rx="4.5"
                  transform="translate(4029 960)"
                />
                <rect
                  className="r"
                  width="103"
                  height="9"
                  rx="4.5"
                  transform="translate(3906 1007)"
                />
                <rect
                  className="r"
                  width="103"
                  height="9"
                  rx="4.5"
                  transform="translate(3866 1054)"
                />
                <rect
                  className="r"
                  width="13"
                  height="9"
                  rx="4.5"
                  transform="translate(4065 1007)"
                />
                <rect
                  className="r"
                  width="112"
                  height="9"
                  rx="4.5"
                  transform="translate(3975 1054)"
                />
                <rect
                  className="r"
                  width="13"
                  height="9"
                  rx="4.5"
                  transform="translate(3797 1054)"
                />
                <rect
                  className={formData.color_tema.color}
                  width="6"
                  height="46"
                  transform="translate(3781 943)"
                />
              </g>
              <path
                className="t"
                d="M5,0H680a0,0,0,0,1,0,0V42a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z"
                transform="translate(3689 642)"
              />
              <rect
                className="u"
                width="680"
                height="1"
                transform="translate(3689 716)"
              />
              <path
                className="k"
                d="M3716.049,651h192.556c3.97,0,7.189,2.239,7.189,5v21s-.331,7,8.659,7H3701.231c6.676,0,7.629-7,7.629-7V656C3708.861,653.238,3712.079,651,3716.049,651Z"
              />
              <text className="v" transform="translate(3791.538 705.215)">
                <tspan x="0" y="0">
                  Secure
                </tspan>
              </text>
              <text className="v" transform="translate(3850.538 705.215)">
                <tspan x="0" y="0">
                  https:
                </tspan>
              </text>
              <text className="w" transform="translate(3892.538 705.215)">
                <tspan x="0" y="0" style={{ fontFamily: "sans-serif" }}>
                  {formData.url_web_space.url
                    ? formData.url_web_space.url.replace(/ /g, "").toLowerCase() +
                      ".dofleini.com"
                    : "mi_dominio.plankton.com/proyectos/plan_de_ventas"}
                </tspan>
              </text>
              <text className="w" transform="translate(3742.538 673.215)">
                <tspan x="0" y="0" style={{ fontFamily: "sans-serif" }}>
                  {formData.name_web_space.name
                    ? formData.name_web_space.name
                    : "Plankton - Mi Espacio"}
                </tspan>
              </text>
              <rect
                className="x"
                width="1"
                height="16"
                transform="translate(3843 692)"
              />
              <circle
                className="u"
                cx="10"
                cy="10"
                r="10"
                transform="translate(3716 658)"
              />
              <g transform="translate(3719.776 661.963)">
                <rect
                  className="k"
                  width="10.252"
                  height="2.239"
                  rx="1.12"
                  transform="translate(0 6.718)"
                />
                <rect
                  className="k"
                  width="7.831"
                  height="2.239"
                  rx="1.12"
                  transform="translate(2.421)"
                />
                <rect
                  className="k"
                  width="6.155"
                  height="2.239"
                  rx="1.12"
                  transform="translate(6.337 3.359)"
                />
                <rect
                  className="k"
                  width="4.479"
                  height="2.239"
                  rx="1.12"
                  transform="translate(0.182 3.359)"
                />
                <rect
                  className="k"
                  width="4.479"
                  height="2.239"
                  rx="1.12"
                  transform="translate(0.182 10.097)"
                />
              </g>
              <g className="y">
                <g transform="translate(3689 716)">
                  <g className="b">
                    <rect className="af" width="49" height="378" />
                    <rect
                      className="ac"
                      x="0.5"
                      y="0.5"
                      width="48"
                      height="377"
                    />
                  </g>
                  <rect
                    className={`${formData.color_tema.color} opacity-10`}
                    width="34"
                    height="37"
                    rx="3"
                    transform="translate(7 90)"
                  />
                  <g transform="translate(14 14.941)"></g>
                  <g transform="translate(12.827)">
                    <circle
                      className="aa"
                      cx="11.5"
                      cy="11.5"
                      r="11.5"
                      transform="translate(0.173 205)"
                    />
                    <circle
                      className="aa"
                      cx="11.5"
                      cy="11.5"
                      r="11.5"
                      transform="translate(0.173 169)"
                    />
                    <circle
                      className="aa"
                      cx="11.5"
                      cy="11.5"
                      r="11.5"
                      transform="translate(0.173 133)"
                    />
                    <circle
                      className={formData.color_tema.color}
                      cx="11.5"
                      cy="11.5"
                      r="11.5"
                      transform="translate(0.173 97)"
                    />
                    <circle
                      className="aa"
                      cx="11.5"
                      cy="11.5"
                      r="11.5"
                      transform="translate(0.173 61)"
                    />
                  </g>
                </g>
                <g transform="translate(3737 716)">
                  <g className="b">
                    <rect className="af" width="589" height="56" />
                    <rect
                      className="ac"
                      x="0.5"
                      y="0.5"
                      width="588"
                      height="55"
                    />
                  </g>
                  <rect
                    className={formData.color_tema.color}
                    width="119"
                    height="32"
                    rx="16"
                    transform="translate(409 12)"
                  />
                  {formData.cant_personas.cant ? (
                    <g transform="translate(235.443 19.562)">
                      <path
                        className="ab"
                        d="M255.65,4329.04a1,1,0,0,1,.56,1.75l-3.67,3.18,1.1,4.73a1,1,0,0,1-1.49,1.08l-4.15-2.51-4.15,2.5a1,1,0,0,1-1.49-1.08l1.1-4.72-3.67-3.18a1,1,0,0,1,.57-1.75l4.83-.41,1.89-4.459a1,1,0,0,1,1.84,0l1.89,4.45,4.84.42Z"
                        transform="translate(-239.443 -4323.562)"
                      />
                    </g>
                  ) : (
                    ""
                  )}
                  {formData.cant_personas.cant !== "yo" ? (
                    <g transform="translate(253.443 19.562)">
                      <path
                        className="ab"
                        d="M255.65,4329.04a1,1,0,0,1,.56,1.75l-3.67,3.18,1.1,4.73a1,1,0,0,1-1.49,1.08l-4.15-2.51-4.15,2.5a1,1,0,0,1-1.49-1.08l1.1-4.72-3.67-3.18a1,1,0,0,1,.57-1.75l4.83-.41,1.89-4.459a1,1,0,0,1,1.84,0l1.89,4.45,4.84.42Z"
                        transform="translate(-239.443 -4323.562)"
                      />
                    </g>
                  ) : (
                    ""
                  )}
                  {formData.cant_personas.cant !== "yo" &&
                  formData.cant_personas.cant !== "2-10" ? (
                    <g transform="translate(272.443 19.562)">
                      <path
                        className="ab"
                        d="M255.65,4329.04a1,1,0,0,1,.56,1.75l-3.67,3.18,1.1,4.73a1,1,0,0,1-1.49,1.08l-4.15-2.51-4.15,2.5a1,1,0,0,1-1.49-1.08l1.1-4.72-3.67-3.18a1,1,0,0,1,.57-1.75l4.83-.41,1.89-4.459a1,1,0,0,1,1.84,0l1.89,4.45,4.84.42Z"
                        transform="translate(-239.443 -4323.562)"
                      />
                    </g>
                  ) : (
                    ""
                  )}
                  {formData.cant_personas.cant !== "yo" &&
                  formData.cant_personas.cant !== "2-10" &&
                  formData.cant_personas.cant !== "11-25" ? (
                    <g transform="translate(290.443 19.562)">
                      <path
                        className="ab"
                        d="M255.65,4329.04a1,1,0,0,1,.56,1.75l-3.67,3.18,1.1,4.73a1,1,0,0,1-1.49,1.08l-4.15-2.51-4.15,2.5a1,1,0,0,1-1.49-1.08l1.1-4.72-3.67-3.18a1,1,0,0,1,.57-1.75l4.83-.41,1.89-4.459a1,1,0,0,1,1.84,0l1.89,4.45,4.84.42Z"
                        transform="translate(-239.443 -4323.562)"
                      />
                    </g>
                  ) : (
                    ""
                  )}
                  {formData.cant_personas.cant !== "yo" &&
                  formData.cant_personas.cant !== "2-10" &&
                  formData.cant_personas.cant !== "11-25" &&
                  formData.cant_personas.cant !== "26-50" ? (
                    <g transform="translate(308.443 19.562)">
                      <path
                        className="ab"
                        d="M255.65,4329.04a1,1,0,0,1,.56,1.75l-3.67,3.18,1.1,4.73a1,1,0,0,1-1.49,1.08l-4.15-2.51-4.15,2.5a1,1,0,0,1-1.49-1.08l1.1-4.72-3.67-3.18a1,1,0,0,1,.57-1.75l4.83-.41,1.89-4.459a1,1,0,0,1,1.84,0l1.89,4.45,4.84.42Z"
                        transform="translate(-239.443 -4323.562)"
                      />
                    </g>
                  ) : (
                    ""
                  )}
                  {formData.cant_personas.cant !== "yo" &&
                  formData.cant_personas.cant !== "2-10" &&
                  formData.cant_personas.cant !== "11-25" &&
                  formData.cant_personas.cant !== "26-50" &&
                  formData.cant_personas.cant !== "51-100" ? (
                    <g transform="translate(326.443 19.562)">
                      <path
                        className="ab"
                        d="M255.65,4329.04a1,1,0,0,1,.56,1.75l-3.67,3.18,1.1,4.73a1,1,0,0,1-1.49,1.08l-4.15-2.51-4.15,2.5a1,1,0,0,1-1.49-1.08l1.1-4.72-3.67-3.18a1,1,0,0,1,.57-1.75l4.83-.41,1.89-4.459a1,1,0,0,1,1.84,0l1.89,4.45,4.84.42Z"
                        transform="translate(-239.443 -4323.562)"
                      />
                    </g>
                  ) : (
                    ""
                  )}
                  <rect
                    className="r"
                    width="211"
                    height="21"
                    rx="10.5"
                    transform="translate(16 18)"
                  />
                </g>
              </g>
              <g transform="translate(3740 693)">
                <path className="ac" d="M0,0H14.931V14.931H0Z" />
                <path
                  d="M12.5,5.462a4.978,4.978,0,1,0,1.294,4.759H12.5A3.731,3.731,0,1,1,8.981,5.244a3.68,3.68,0,0,1,2.625,1.107l-2,2h4.355V4Z"
                  transform="translate(-1.515 -1.511)"
                />
              </g>
              <g className="ad" transform="translate(3718 693)">
                <path className="ac" d="M0,0H15V15H0Z" />
                <path
                  d="M9,4l-.881.881,3.488,3.494H4v1.25h7.606L8.119,13.119,9,14l5-5Z"
                  transform="translate(-1.5 -1.5)"
                />
              </g>
              <g transform="translate(3697 693)">
                <path className="ac" d="M15,0H0V15H15Z" />
                <path
                  d="M9,4l.881.881L6.394,8.375H14v1.25H6.394l3.488,3.494L9,14,4,9Z"
                  transform="translate(-1.5 -1.5)"
                />
              </g>
              <g transform="translate(3891.797 660.796)">
                <path className="ac" d="M0,0H14.407V14.407H0Z" />
                <path
                  d="M13.4,5.846,12.558,5,9.2,8.356,5.846,5,5,5.846,8.356,9.2,5,12.558l.846.846L9.2,10.049,12.558,13.4l.846-.846L10.049,9.2Z"
                  transform="translate(-1.998 -1.998)"
                />
              </g>
              <g transform="translate(3924.893 658.524)">
                <path className="ac" d="M0,0H17.583V17.583H0Z" />
                <path
                  d="M15.257,10.861h-4.4v4.4H9.4v-4.4H5V9.4H9.4V5h1.465V9.4h4.4Z"
                  transform="translate(-1.337 -1.337)"
                />
              </g>
              <g transform="translate(3776 693.857)">
                <path className="ac" d="M0,0H12.794V12.794H0Z" />
                <path
                  className="ae"
                  d="M11.463,4.732H10.93V3.665a2.665,2.665,0,1,0-5.331,0V4.732H5.066A1.069,1.069,0,0,0,4,5.8v5.331a1.069,1.069,0,0,0,1.066,1.066h6.4a1.069,1.069,0,0,0,1.066-1.066V5.8A1.069,1.069,0,0,0,11.463,4.732Zm-3.2,4.8A1.066,1.066,0,1,1,9.331,8.463,1.069,1.069,0,0,1,8.265,9.529Zm1.653-4.8H6.612V3.665a1.653,1.653,0,1,1,3.305,0Z"
                  transform="translate(-1.868 -0.467)"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};
