import React from "react";

const PowerBIEmbed = ({ embedUrl }) => {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        title="Power BI Report"
        src={embedUrl}
        style={{ width: "100%", height: "100%", border: "none" }}
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default PowerBIEmbed;
