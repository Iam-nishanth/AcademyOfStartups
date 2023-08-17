import { MapContainer } from "@/styles/components/Common/MapStyles";
import React from "react";

export default function Map() {
  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.88511948787405!2d78.39358588680624!3d17.451962897221215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c7192bf19f%3A0xdf32f134e04248be!2sGR%20group%20corporate%20office!5e0!3m2!1sen!2sin!4v1690608762753!5m2!1sen!2sin"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </MapContainer>
  );
}
