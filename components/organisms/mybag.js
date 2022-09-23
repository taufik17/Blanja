import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import StyleLogin from "../../styles/login.module.css";
import StyleMyBag from "../../styles/mybag.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";
import Image from "next/image";

function MyBag() {
  return (
    <>
      <h3>My Bag</h3>

      <div className="row">
        <div className="col-8">
          <div className="card my-3">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                </div>
                <div className="col-9">
                  <div className="d-flex">
                    <h6>Select all items</h6> (2 items selected)
                  </div>
                </div>
                <div className="col-2">
                  <Link href="/" passHref>
                    <a className="rmdecoration">
                      <h6 className={StyleLogin.textRed}>Delete</h6>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-1">
                  <input
                    className="form-check-input mt-1"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                </div>
                <div className="col-6">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <Image
                        src="/image/new.jpg"
                        alt="Logo"
                        width={150}
                        height={150}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-9">
                      <h6 className="mb-0">Men{"'"} formal suit - Black</h6>
                      <small class>Zalora Cloth</small>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="row">
                    <div className="col">
                      <FiMinus className={StyleMyBag.iconMinus} />
                    </div>
                    <div className="col">
                      <h6 className="text-center mt-1">1</h6>
                    </div>
                    <div className="col">
                      <FiPlus className={StyleMyBag.iconPlus} />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <h6>$ 20.0</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-1">
                  <input
                    className="form-check-input mt-1"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                </div>
                <div className="col-6">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <Image
                        src="/image/new.jpg"
                        alt="Logo"
                        width={150}
                        height={150}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-9">
                      <h6 className="mb-0">Men{"'"} formal suit - Black</h6>
                      <small class>Zalora Cloth</small>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="row">
                    <div className="col">
                      <FiMinus className={StyleMyBag.iconMinus} />
                    </div>
                    <div className="col">
                      <h6 className="text-center mt-1">1</h6>
                    </div>
                    <div className="col">
                      <FiPlus className={StyleMyBag.iconPlus} />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <h6>$ 20.0</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card my-3">
            <div className="card-body">
              <h6>Shopping summary</h6>
              <div className="row">
                <div className="d-flex justify-content-between my-2">
                  <p>Total price</p>
                  <h6>$ 40.0</h6>
                </div>
              </div>
              <div className="d-grid gap-2 my-2">
                <Button className={StyleLogin.btnLogin} size="md">
                  Buy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBag;
