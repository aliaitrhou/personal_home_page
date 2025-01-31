"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import fcc from "@/public/certificates/web-design.png";
import infomath from "@/public/certificates/infomath.png";
import ai from "@/public/certificates/ai-path.png";
import advancedReact from "@/public/certificates/react.png";
import CertificateBox from "@/components/certificate-box";

const certs = [
  {
    src: fcc,
    name: "web-design",
    alt: "web design certeficate",
  },
  {
    src: infomath,
    name: "infomath",
    alt: "design officer certeficate",
  },
  {
    src: ai,
    name: "ai-developer",
    alt: "ai dev certeficate",
  },
  {
    src: advancedReact,
    name: "advnaced-react",
    alt: "advanced react certeficate",
  },
];

const Certificates = () => {
  const params = useSearchParams();

  const certToOpen = params.get("cert");

  return (
    <div className="w-full px-4 sm:px-6  mx-auto pt-4">
      <section className="flex flex-col gap-8 sm:gap-4">
        {certs.map((cert, index) => (
          <CertificateBox
            key={index}
            position={index % 2 == 0 ? "sm:justify-start" : "sm:justify-end"}
            alt={cert.alt}
            path={cert.src}
            openCert={cert.name === certToOpen ? true : false}
          />
        ))}
      </section>
    </div>
  );
};

export default Certificates;
