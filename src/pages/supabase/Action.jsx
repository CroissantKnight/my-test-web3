import React, { useState } from "react";
import { supabase } from "../../supabaseClient";

// = ฟังก์ชัน select data
// = from("email").select("*");
const handle_getdata = async (event) => {
  event.preventDefault();
  try {
    let { data, error } = await supabase.from("email").select("*");
    if (error) {
      console.log("Error:", error.message);
    } else {
      console.log("Fetched Data:", data);
      console.log("Fetched Data:", typeof data);
    }
  } catch (error) {
    console.log("Error : ", error.message);
  }
};
export { handle_getdata };

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
export { handle_adddata };
