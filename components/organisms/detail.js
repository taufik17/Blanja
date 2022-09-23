import Link from "next/link";
import React from "react";
import { Breadcrumb } from "react-bootstrap";

function Detail() {
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
          <p>Zalora Cloth</p>
        </div>
      </div>
    </>
  );
}

export default Detail;
