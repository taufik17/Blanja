import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Breadcrumb, Button } from "react-bootstrap";
import HomeStyle from "../../styles/Home.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";
import StyleMyBag from "../../styles/mybag.module.css";
import StyleLogin from "../../styles/login.module.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Detail() {
  const images = [
    {
      original: "/image/satu.png",
      thumbnail: "/image/satu.png",
    },
    {
      original: "/image/dua.png",
      thumbnail: "/image/dua.png",
    },
    {
      original: "/image/tiga.png",
      thumbnail: "/image/tiga.png",
    },
    {
      original: "/image/empat.png",
      thumbnail: "/image/empat.png",
    },
    {
      original: "/image/lima.png",
      thumbnail: "/image/lima.png",
    },
  ];

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
        <div className="col-4">
          <ImageGallery items={images} />
        </div>
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
          <div className="mt-3 row">
            <div className="col-3">
              <div className="d-grid gap-2 my-2">
                <Button className={`${StyleLogin.btnRegister} px-5`}>
                  Chat
                </Button>
              </div>
            </div>
            <div className="col-3">
              <div className="d-grid gap-2 my-2">
                <Button className={`${StyleLogin.btnRegister} px-5`}>
                  Add bag
                </Button>
              </div>
            </div>
            <div className="col-6">
              <div className="d-grid gap-2 my-2">
                <Button className={`${StyleLogin.btnLogin} mx-2 px-4`}>
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h5>Informasi Produk</h5>
      <h6>Condition</h6>
      <b className={StyleLogin.textRed}>New</b>
      <h5>Description</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <p>
        Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus
        quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit
        imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque
        a consequat mauris, vel suscipit ipsum. Donec ac mauris vitae diam
        commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare
        suscipit magna.
      </p>

      <p>
        Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus
        quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit
        imperdiet ac ac felis.
      </p>

      <p>In ultricies rutrum tempus. Mauris vel molestie orci.</p>

      <h5 className="mt-3">Product review</h5>
      <div className="row mt-3 mb-5">
        <div className="col-2">
          <div className="d-flex">
            <h1 className={StyleMyBag.rating}>5.0</h1>
            <p className="pt-4">/10</p>
          </div>
          <div className="d-flex">
            <Image src="/image/Star.svg" alt="Logo" width={20} height={20} />
            <Image src="/image/Star.svg" alt="Logo" width={20} height={20} />
            <Image src="/image/Star.svg" alt="Logo" width={20} height={20} />
            <Image src="/image/Star.svg" alt="Logo" width={20} height={20} />
            <Image src="/image/Star.svg" alt="Logo" width={20} height={20} />
          </div>
        </div>
        <div className="col-4">
          <table>
            <tbody>
              <tr>
                <td>
                  <Image
                    src="/image/Star.svg"
                    alt="Logo"
                    width={15}
                    height={15}
                  />
                </td>
                <td>5</td>
                <td className="px-3">
                  <Image
                    src="/image/line.svg"
                    alt="Logo"
                    width={150}
                    height={15}
                  />
                </td>
                <td>4</td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/image/Star.svg"
                    alt="Logo"
                    width={15}
                    height={15}
                  />
                </td>
                <td>4</td>
                <td></td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/image/Star.svg"
                    alt="Logo"
                    width={15}
                    height={15}
                  />
                </td>
                <td>3</td>
                <td></td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/image/Star.svg"
                    alt="Logo"
                    width={15}
                    height={15}
                  />
                </td>
                <td>2</td>
                <td></td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/image/Star.svg"
                    alt="Logo"
                    width={15}
                    height={15}
                  />
                </td>
                <td>1</td>
                <td></td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Detail;
