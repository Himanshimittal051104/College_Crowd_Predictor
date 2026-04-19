// "use client";

// import { useRouter } from "next/navigation";

// import { useState } from "react";



// export default function Prediction() {

//   const router = useRouter();

//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [location, setLocation] = useState("");
//   const [result, setResult] = useState("");

//   // const handlePredict = () => {
//   //   if (!date || !time || !location) {
//   //     alert("Please fill all fields");
//   //     return;
//   //   }


//   const handlePredict = () => {
//   if (!location || !date || !time) {
//     alert("Please fill all fields");
//     return;
//   }

//   // Redirect to analytics
//   router.push(
//     `/analytics?location=${location}&date=${date}&time=${time}`
//   );

//     // Dummy prediction logic
//     const output = Math.random() > 0.5 ? "Crowded" : "Not Crowded";
//     setResult(output);
//   };

//   return (
//     <div className="container">
//       <div className="card" style={{ width: "350px", textAlign: "center" }}>
//         <h2>Crowd Prediction</h2>

//         {/* LOCATION DROPDOWN */}
//         <select
//           className="input"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         >
//           <option value="">Select Location</option>
//           <option value="library">Library</option>
//           <option value="computer_centre">Computer Centre</option>
//         </select>

//         {/* DATE INPUT */}
//         <input
//           type="date"
//           className="input"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />

//         {/* TIME INPUT */}
//         <input
//           type="time"
//           className="input"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//         />

//         {/* BUTTON */}
//         <button className="button" onClick={handlePredict}>
//           Predict Crowd
//         </button>

//         {/* RESULT */}
//         {result && (
//           <div
//             style={{
//               marginTop: "20px",
//               padding: "12px",
//               borderRadius: "8px",
//               background: result === "Crowded" ? "#fee2e2" : "#dcfce7",
//             }}
//           >
//             <strong>{result}</strong>
//             <p style={{ fontSize: "12px", marginTop: "5px" }}>
//               {location} | {date} | {time}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }






"use client";

import { useState } from "react";
import { predict } from "@/lib/api";

export default function Prediction() {
  const [location, setLocation] = useState("Library");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);

      const res = await predict({
        location,
        date,
        time
      });

      console.log("Prediction:", res.data);
      setResult(res.data);

    } catch (err) {
      console.log(err);
      alert("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Crowd Prediction</h1>

      <div style={{ marginTop: "20px" }}>
        
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option>Library</option>
          <option>Computer Centre</option>
        </select>

        <br /><br />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <br /><br />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <br /><br />

        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h2>Result</h2>
          <p><b>Location:</b> {location}</p>
          <p><b>Crowd Level:</b> {result.crowd}</p>
        </div>
      )}
    </div>
  );
}