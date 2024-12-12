import React from "react";

function Topbackground() {
  return (
    <>
      <div 
        style={{
          margin: 0, // เอาขอบระหว่าง div และองค์ประกอบอื่นออก
          padding: 0, // เอาการเยื้องภายในออก
          border: "none", // เอาขอบ div ออก
        }}
      >
        {" "}
        {/* ปรับขนาดความสูงของ div โดยใช้ vw */}
        <img
          alt="background image"
          loading="lazy"
          decoding="async"
          src="https://www.hackquest.io/images/user/default-bg.png"
          style={{
            position: "relative",
            height: "15vw",
            width: "100%",
            inset: 0,
            color: "transparent",
            objectFit: "cover",
            margin: 0, // เอาขอบระหว่าง img และ div ออก
            padding: 0, // เอาการเยื้องภายในออก
            border: "none", // เอาขอบ img ออก
          }}
        />
      </div>
    </>
  );
}

export default Topbackground;
