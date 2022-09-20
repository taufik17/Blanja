import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import StyleLogin from "../../styles/login.module.css";

function New() {
  return (
    <>
      <h1 className="pt-3 mb-0">New</h1>
      <small>You{"'"}ve never seen it before!</small>
      <div className="row d-flex pt-3">
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <Image
              src="/image/new.jpg"
              alt="Logo"
              width={350}
              height={210}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Men{"'"}s formal suit - Black & White
              </h5>
              <div className="card-text">
                <h5 className={StyleLogin.textRed}>$ 40.0</h5>
                <small>Zalora Cloth</small>
              </div>
              <Image
                src="/image/5star.svg"
                alt="Logo"
                width={120}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <Image
              src="/image/new.jpg"
              alt="Logo"
              width={350}
              height={210}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Men{"'"}s formal suit - Black & White
              </h5>
              <div className="card-text">
                <h5 className={StyleLogin.textRed}>$ 40.0</h5>
                <small>Zalora Cloth</small>
              </div>
              <Image
                src="/image/5star.svg"
                alt="Logo"
                width={120}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <Image
              src="/image/new.jpg"
              alt="Logo"
              width={350}
              height={210}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Men{"'"}s formal suit - Black & White
              </h5>
              <div className="card-text">
                <h5 className={StyleLogin.textRed}>$ 40.0</h5>
                <small>Zalora Cloth</small>
              </div>
              <Image
                src="/image/5star.svg"
                alt="Logo"
                width={120}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <Image
              src="/image/new.jpg"
              alt="Logo"
              width={350}
              height={210}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Men{"'"}s formal suit - Black & White
              </h5>
              <div className="card-text">
                <h5 className={StyleLogin.textRed}>$ 40.0</h5>
                <small>Zalora Cloth</small>
              </div>
              <Image
                src="/image/5star.svg"
                alt="Logo"
                width={120}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <Image
              src="/image/new.jpg"
              alt="Logo"
              width={350}
              height={210}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Men{"'"}s formal suit - Black & White
              </h5>
              <div className="card-text">
                <h5 className={StyleLogin.textRed}>$ 40.0</h5>
                <small>Zalora Cloth</small>
              </div>
              <Image
                src="/image/5star.svg"
                alt="Logo"
                width={120}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <Image
              src="/image/new.jpg"
              alt="Logo"
              width={350}
              height={210}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                Men{"'"}s formal suit - Black & White
              </h5>
              <div className="card-text">
                <h5 className={StyleLogin.textRed}>$ 40.0</h5>
                <small>Zalora Cloth</small>
              </div>
              <Image
                src="/image/5star.svg"
                alt="Logo"
                width={120}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default New;
