import React from "react";
import "./Profile.css";
import Topbackground from "../components/Topbackground.jsx";
function Profile() {
  return (
    <>
      <Topbackground />
      <div className="status">
        <div className="div-rounded-img">
          <div className="white-rounded-img">
            <img
              alt="Profile"
              loading="lazy"
              decoding="async"
              src="https://assets.hackquest.io/users/avatars/avatar-default-10.png"
              class="rounded-full"
            />
          </div>
        </div>
      </div>
      <h1 style={{ fontSize: "5vw" }}>Profile</h1>{" "}
      <p>
        ภาพที่คุณแนบมาดูเหมือนจะเป็นภาพพื้นหลัง (background image)
        ที่ไม่มีการแสดงผลของเนื้อหาใดๆ (text หรือองค์ประกอบอื่นๆ) บนภาพนั้น
        นอกจากนี้ยังเป็นไฟล์ภาพที่มีขนาดเต็มหน้าจอ (fill)
        และมีลักษณะการครอบคลุมพื้นที่ทั้งหมดด้วยการตั้งค่า object-cover
        ซึ่งหมายถึงภาพจะขยายหรือย่อขนาดให้ครอบคลุมพื้นที่ทั้งหมดขององค์ประกอบ
        โดยยังคงอัตราส่วนของภาพเอาไว้ ในทางทฤษฎี
        ภาพพื้นหลังเช่นนี้อาจใช้ในเว็บไซต์หรือแอปพลิเคชันเพื่อให้มีพื้นหลังที่ไม่รบกวนการมองเห็นเนื้อหาหลัก
        หรือสร้างบรรยากาศที่เหมาะสมกับการออกแบบโดยไม่ให้เกิดความยุ่งเหยิงจากรายละเอียดที่ไม่จำเป็น.
        หากคุณมีคำถามเพิ่มเติมเกี่ยวกับการใช้งานหรือการออกแบบภาพพื้นหลังนี้
        คุณสามารถบอกฉันได้ค่ะ
      </p>
    </>
  );
}

export default Profile;
