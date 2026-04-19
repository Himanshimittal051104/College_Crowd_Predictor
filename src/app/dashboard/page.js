// "use client";

// import { useState } from "react";

// export default function Dashboard() {
//   const [library, setLibrary] = useState(49);
//   const [cc, setCC] = useState(30);




//   return (
//     <div style={styles.page}>
//       {/* HEADER */}
//       <div style={styles.header}>
//         <h1 style={styles.title}>Admin Dashboard</h1>
//         <p style={styles.subtitle}>Real-time Crowd Monitoring</p>
//       </div>

      

//       {/* MAIN CONTENT */}
//       <div style={styles.container}>
//         <Card
//           title="Library"
//           value={library}
//           setValue={setLibrary}
//           color="#6366f1"
//         />
//         <Card
//           title="Computer Centre"
//           value={cc}
//           setValue={setCC}
//           color="#06b6d4"
//         />
//       </div>
//     </div>
//   );
// }

// function Card({ title, value, setValue, color }) {
//   return (
//     <div style={styles.card}>
//       <h3 style={styles.cardTitle}>{title}</h3>

//       <h1 style={{ ...styles.value, color }}>{value}</h1>

//       <div style={styles.btnGroup}>
//         <button
//           onClick={() => setValue(value + 1)}
//           style={{ ...styles.btn, background: color }}
//         >
//           +
//         </button>
//         <button
//           onClick={() => setValue(value - 1)}
//           style={{ ...styles.btn, background: "#111827" }}
//         >
//           −
//         </button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   page: {
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
//     fontFamily: "sans-serif",
//   },

//   header: {
//     textAlign: "center",
//     padding: "40px 20px",
//   },

//   title: {
//     fontSize: "36px",
//     fontWeight: "700",
//     color: "#1f2937",
//   },

//   subtitle: {
//     marginTop: "8px",
//     color: "#6b7280",
//     fontSize: "16px",
//   },

//   container: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "40px",
//     marginTop: "40px",
//     flexWrap: "wrap",
//   },

//   card: {
//     background: "rgba(255,255,255,0.7)",
//     backdropFilter: "blur(12px)",
//     padding: "30px",
//     borderRadius: "20px",
//     width: "260px",
//     textAlign: "center",
//     boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
//     transition: "0.3s",
//   },

//   cardTitle: {
//   color: "#111827",
//   fontSize: "22px",
//   fontWeight: "700",
//   marginBottom: "12px",
//   letterSpacing: "0.5px",
// },

//   value: {
//     fontSize: "48px",
//     fontWeight: "700",
//   },

//   btnGroup: {
//     marginTop: "20px",
//     display: "flex",
//     justifyContent: "center",
//     gap: "12px",
//   },

//   btn: {
//     padding: "12px 16px",
//     border: "none",
//     borderRadius: "10px",
//     color: "white",
//     fontSize: "18px",
//     cursor: "pointer",
//     transition: "0.2s",
//   },
// };










"use client";

import { useState } from "react";
import { updateCount } from "@/lib/api";

export default function Dashboard() {
  const [library, setLibrary] = useState(50);
  const [cc, setCC] = useState(30);

  const updateBackend = async (location, value) => {
    try {
      await updateCount({ location, value });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <h2>Library</h2>
      <p>{library}</p>

      <button onClick={() => {
        const newVal = library + 1;
        setLibrary(newVal);
        updateBackend("library", newVal);
      }}>+</button>

      <button onClick={() => {
        const newVal = library - 1;
        setLibrary(newVal);
        updateBackend("library", newVal);
      }}>-</button>

      <h2>Computer Centre</h2>
      <p>{cc}</p>

      <button onClick={() => {
        const newVal = cc + 1;
        setCC(newVal);
        updateBackend("cc", newVal);
      }}>+</button>

      <button onClick={() => {
        const newVal = cc - 1;
        setCC(newVal);
        updateBackend("cc", newVal);
      }}>-</button>
    </div>
  );
}