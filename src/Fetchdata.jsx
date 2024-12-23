import React, { useState } from "react";
import { supabase } from "./supabaseClient";

export default function Getdata() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

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
        console.log("Fetched Data:", typeof (data));
      }
    } catch (error) {
      console.log("Error : ", error.message);
    }
  };

  return (
    <div>
      {/* fetch data btn */}
      <div>
        <h2>chick to get data</h2>
        <button onClick={handle_getdata}>clickme</button>
      </div>

    </div>
  );
}
