// "use client";
// import { Line } from "react-chartjs-2";

// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement
// } from "chart.js";

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement
// );

// export default function Analytics() {
//   const data = {
//     labels: ["Mon", "Tue", "Wed"],
//     datasets: [
//       {
//         label: "Library Crowd",
//         data: [30, 50, 80]
//       },
//       {
//         label: "Computer Centre",
//         data: [20, 40, 60]
//       }
//     ]
//   };

//   return (
//     <div className="p-6">
//       <h1>Analytics</h1>
//       <Line data={data} />
//     </div>
//   );
// }





"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Analytics() {

  const data = {
    labels: ["9AM", "11AM", "1PM", "3PM", "5PM"],
    datasets: [
      {
        label: "Library",
        data: [20, 40, 60, 80, 50],
        borderColor: "blue",
        fill: false
      },
      {
        label: "Computer Centre",
        data: [15, 30, 45, 70, 40],
        borderColor: "green",
        fill: false
      }
    ]
  };

  const maxLibrary = Math.max(...data.datasets[0].data);
  const minLibrary = Math.min(...data.datasets[0].data);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Analytics</h1>

      <Line data={data} />

      <div style={{ marginTop: "20px" }}>
        <h3>Library Stats</h3>
        <p>Max Crowd: {maxLibrary}</p>
        <p>Min Crowd: {minLibrary}</p>
      </div>
    </div>
  );
}