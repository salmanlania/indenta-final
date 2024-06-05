import Image from "next/image";
import React from "react";
import Link from "next/link";

import brandOne from "../../public/images/brand/brand-01.png";
import brandTwo from "../../public/images/brand/brand-02.png";
import brandThree from "../../public/images/brand/brand-03.png";
import brandFour from "../../public/images/brand/brand-04.png";

import brandImg1 from "../../public/images/brand/newera.png";
import brandImg2 from "../../public/images/brand/cgd.png";
import brandImg3 from "../../public/images/brand/habibi.png";
import brandImg4 from "../../public/images/brand/brokr.png";
import brandImg5 from "../../public/images/brand/mafco.png";

const BrandTwo = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 mt--10">
          <ul className="brand-list brand-style-2">
            <li>
              <Link href="#">
                <Image
                  src={brandImg1}
                  width={119}
                  height={34}
                  alt="Brand Image"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src={brandImg2}
                  width={155}
                  height={34}
                  alt="Brand Image"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src={brandImg3}
                  width={183}
                  height={34}
                  alt="Brand Image"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src={brandImg4}
                  width={197}
                  height={34}
                  alt="Brand Image"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src={brandImg5}
                  width={197}
                  height={34}
                  alt="Brand Image"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BrandTwo;
