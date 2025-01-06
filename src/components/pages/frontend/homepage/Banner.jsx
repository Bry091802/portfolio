import { imgPath } from "@/components/helpers/functions-general";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="banner py-16 px-32">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-black gap-5">
              <h1 className="text-[100px]">About me</h1>
              <div className="max-w-[800px] text-[19px] text-justify flex flex-col gap-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ultrices aliquam amet
                  adipiscing aliquam sed eget. Tristique odio fringilla mauris
                  viverra maecenas malesuada. A nibh nec eu facilisi varius
                  scelerisque nunc diam. Aliquam vitae massa platea sit
                  elementum mi fermentum odio quisque. Sit est consequat
                  imperdiet sollicitudin morbi vulputate sed. Tincidunt enim
                  orci vitae ac ipsum fringilla nullam. Est non scelerisque
                  dictum magna amet tellus ultrices. Habitasse cursus eget
                  porttitor eget egestas ac viverra massa et. Arcu orci aliquet
                  condimentum est amet eget amet. Diam morbi in scelerisque orci
                  augue morbi convallis. Tellus enim vitae consectetur mi. Justo
                  sit nullam fames ac duis imperdiet cursus.
                </p>
                <p>
                  Blandit dictum sapien mauris adipiscing quisque commodo quam.
                  Aliquet suscipit non lectus eleifend lacus tincidunt turpis
                  mauris egestas. . Congue nec leo nulla in eu. In etiam
                  imperdiet condimentum habitant neque. Convallis est leo eros
                  Aliquet suscipit non lectus eleifend lacus tincidunt turpis
                  mauris egestas. . Congue nec leo nulla in eu. In etiam
                  imperdiet condimentum habitant neque. Convallis est leo eros
                  eleifend lectus id in diam. Lacus ipsum egestas pharetra
                  mollis et. Gravida laoreet molestie ullamcorper in et diam
                  consectetur lectus neque. Etiam leo porta ornare sed.
                </p>
              </div>
              <ul className="mt-8 flex gap-5">
                <li className="hover:text-myred">
                  <a href="#">
                    <FaFacebookF size={30} />
                  </a>
                </li>
                <li className="hover:text-myred">
                  <a href="#">
                    <FaTwitter size={30} />
                  </a>
                </li>
                <li className="hover:text-myred">
                  <a href="#">
                    <FaInstagram size={30} />
                  </a>
                </li>
                <li className="hover:text-myred">
                  <a href="#">
                    <FaYoutube size={30} />
                  </a>
                </li>
                <li className="hover:text-myred">
                  <a href="#">
                    <FaLinkedin size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src={`${imgPath}/me.png`}
              alt=""
              className="w-[500px] items-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
