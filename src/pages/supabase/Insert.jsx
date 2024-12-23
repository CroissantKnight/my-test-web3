import React, { useState } from "react";
import { handle_adddata } from "./Action";

export default function Adddata() {
  return(
    <div>
      <div>
        <form onSubmit={handle_adddata}>
          <h2>ฟอร์มกรอกข้อมูล</h2>
          <div>
            <label htmlFor="fullname">ชื่อเต็ม:</label>
            <input
              type="text"
              id="fullname"
              name="fullname_input"
              onChange={(e) => setfullname_input(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email">อีเมล:</label>
            <input
              type="email"
              id="email"
              name="email_input"
              onChange={(e) => setemail_input(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="tel">เบอร์โทรศัพท์:</label>
            <input
              type="tel"
              id="tel"
              name="tel_input"
              pattern="[0-9]{10}"
              onChange={(e) => settel_input(e.target.value)}
              required
            />
          </div>

          <div>
            <button type="submit">ส่งข้อมูล</button>
          </div>
        </form>
        <button onClick={handle_test}>test</button>
      </div>
    </div>
  );
}
