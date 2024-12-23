import React, { useState } from "react";
import { supabase } from "../../supabaseClient";

export default function Adddata() {
  // = ฟังก์ชันเพิ่มข้อมูล (insert)
  // = from('email').insert([{ fullname: '', email: '', tel:'' },]).select()
  const [fullname_input, setfullname_input] = useState("");
  const [email_input, setemail_input] = useState("");
  const [tel_input, settel_input] = useState("");

  const handle_adddata = async (event) => {
    event.preventDefault();
    try {
      let { data, error } = await supabase
        .from("email")
        .insert([
          { fullname: fullname_input, email: email_input, tel: tel_input },
        ])
        .select();
      if (error) {
        console.log("Error:", error.message);
      } else {
        console.log("Data added :", data);
        console.log("Fetched Data:", typeof data);
      }
    } catch (error) {
      console.log("Error : ", error.message);
    }
  };
  const handle_test = () => {
    console.log(fullname_input);
    console.log(email_input);
    console.log(tel_input);
    
  }

  return (
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
            <button type="submit">ส่งข้อมูล</button>
          </div>
        </form>
        <button onClick={handle_test}>test</button>
      </div>
    </div>
  );
}
