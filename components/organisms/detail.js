import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import HomeStyle from "../../styles/Home.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";
import StyleMyBag from "../../styles/mybag.module.css";

function Detail() {
  const [black, setblack] = useState(false);
  const [red, setred] = useState(false);
  const [yellow, setyellow] = useState(false);
  const [blue, setblue] = useState(false);

  const uncheckblack = () => setblack(false);
  const checkblack = () => setblack(true);
  const uncheckred = () => setred(false);
  const checkred = () => setred(true);
  const uncheckyellow = () => setyellow(false);
  const checkyellow = () => setyellow(true);
  const uncheckblue = () => setblue(false);
  const checkblue = () => setblue(true);

  return (
    <>
      <Breadcrumb>
        <Link href="/" passHref>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Link>
        <Link href="/category" passHref>
          <Breadcrumb.Item>Category</Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item active>T-Shirt</Breadcrumb.Item>
      </Breadcrumb>
      <div className="row mt-4">
        <div className="col-4">preview gambar</div>
        <div className="col-8">
          <h5>Baju muslim pria</h5>
          <p className="mb-1">Zalora Cloth</p>
          <div className="d-flex mb-3">
            <Image src="/image/Star.svg" alt="Logo" width={20} height={20} />
            <Image src="/image/Star.svg" alt="Logo" width={20} height={20} />
            <Image src="/image/Star.svg" alt="Logo" width={20} height={20} />
            <Image src="/image/Star.svg" alt="Logo" width={20} height={20} />
            <Image src="/image/Star.svg" alt="Logo" width={20} height={20} />
            <p className="mb-0">(10)</p>
          </div>
          <p className="mb-0">Price</p>
          <h4 className="mb-3">$20.0</h4>
          <b>Color</b>
          <div className="row mb-4">
            <div className="col-1">
              {black ? (
                <>
                  <div
                    className={`${HomeStyle.colorBlack} ${HomeStyle.activeBlack}`}
                    onClick={uncheckblack}
                  />
                </>
              ) : (
                <>
                  <div
                    className={`${HomeStyle.colorBlack}`}
                    onClick={checkblack}
                  />
                </>
              )}
            </div>
            <div className="col-1">
              {red ? (
                <>
                  <div
                    className={`${HomeStyle.colorRed} ${HomeStyle.activeRed}`}
                    onClick={uncheckred}
                  />
                </>
              ) : (
                <>
                  <div
                    className={`${HomeStyle.colorRed} `}
                    onClick={checkred}
                  />
                </>
              )}
            </div>
            <div className="col-1">
              {yellow ? (
                <>
                  <div
                    className={`${HomeStyle.colorDarkYellow} ${HomeStyle.activeYellow}`}
                    onClick={uncheckyellow}
                  />
                </>
              ) : (
                <>
                  <div
                    className={`${HomeStyle.colorDarkYellow} `}
                    onClick={checkyellow}
                  />
                </>
              )}
            </div>
            <div className="col-1">
              {blue ? (
                <>
                  <div
                    className={`${HomeStyle.colorBlue} ${HomeStyle.activeBlue}`}
                    onClick={uncheckblue}
                  />
                </>
              ) : (
                <>
                  <div
                    className={`${HomeStyle.colorBlue} `}
                    onClick={checkblue}
                  />
                </>
              )}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-2">
              <b>Size</b>
              <div className="mt-2 d-flex justify-content-between">
                <FiMinus className={StyleMyBag.iconMinus} />
                <h6 className="text-center mt-1">28</h6>
                <FiPlus className={StyleMyBag.iconPlus} />
              </div>
            </div>
            
            <div className="col-2 offset-2">
              <b>Jumlah</b>
              <div className="mt-2 d-flex justify-content-between">
                <FiMinus className={StyleMyBag.iconMinus} />
                <h6 className="text-center mt-1">1</h6>
                <FiPlus className={StyleMyBag.iconPlus} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
