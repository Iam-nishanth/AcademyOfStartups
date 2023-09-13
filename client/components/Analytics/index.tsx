// import React, { useState, useEffect } from "react";
// import { getGoogleAnalyticsData } from "google-analytics-api";

// interface GoogleAnalyticsDataProps {
//   // Define your props here
// }

// // {
// //   "compilerOptions": {
// //     "typeRoots": ["./node_modules/@types", "./src"]
// //   }
// // }

// const GoogleAnalyticsData: React.FC<GoogleAnalyticsDataProps> = () => {
//   const [data, setData] = useState<{ rows: any[] }>({ rows: [] });

//   useEffect(() => {
//     const getChartData = async () => {
//       const data = await getGoogleAnalyticsData({
//         Credentials: {
//             project_id: "academyofstartups",
//             private_key_id: "7f9eeaccd86031542c3638754a39e3e20acf8cf9",
//             private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDTb0+gkgZX0beD\n9ziZL6Swa7xeCDlzuoXksOG1EerN9Gk/cU4Y0xOiBDDhtc+3fXG7SVhN/PV8LqqA\nWLv8tWQcvzpZE71rX5et0qdysiTCmx99oPK8peupND80WhYi0qQIKyYEf0KCEYGO\nv+ElUSCIiX2y5XbnZoVBKO6nnN34zpoLgXai+2lm+usLZWzC8AGUxkDWDQRGRNC2\nanTSiP+CYWeFjQR6Rnv/PPvtdILXSZvLtn0ayeIM1ICs/btPq1cw/6QiEmYeyACu\nP0Th5fUO0rDRek1odAEKvsVW8BiG7WQf/VcREqLDgsTkjeQzuBBz0O7V3vLUcunl\nJQ1sGfstAgMBAAECggEABdvCnF1F14VKk4zNxys54d+IvFKrBA9jg8PFuHNfvhQr\nHf4BBXdEk7H2ofjPlOYUOPXEmhvLuFFzGccbpY1n620xa/1vIeLOSTUzvMRXeDYj\n7ojl1B9SAwHp5gTAmN3QSLlCJOn0lekJREM1Ae7Lbkas/0BHbD/IqnA8m9O6lmW9\nXh3VLu90JS0Clm07n2M61nIB5pmrOM0PjQZZqcJM0cprxRbJLfnkKOF6/RCGOiG9\npljvHUa/81+XHp7QnkxA51Fa0qZA3qwbnQGmzltcBT/rmWVePzwd7/S9jps4hdBM\nfLrUuKK419Vc2DtbwxWznvuAjve1WyJtqGV+dyI/YQKBgQD8Tq5lrtegDREv9fq3\noUqqJ/K4eEmRkMLieYtLFGGiTqQuNeCprrJGyLsMHp38Els4vxZvxEJGJhrXA3KI\nFxtxV51EnG4bHFYm2y08mRLPykCstoZYBFus6L3ZhDIFcerxutQy4e9JEfFBk3kU\n9x+7OqmxTLfQOXD7+gnTAQmPfQKBgQDWh34rgQ4bZUg0YAE8WoXNKI8U9iK3mDcJ\nTrDpBNvfu+OTPS7ukpYJF1FcRO67vZAInUF2RAKp963SWMJUqKvBMv69L7904EZq\n/IXJaFaGcSQ6/D0a/TcUYwoVNRrulAp0R7x7tRL8ZsBKzMKJRyGSuDoDQpk9Ey2w\nj81qEINJcQKBgCYtzcwLOgu5DnnAchDpcj/vTZZGdXN2gVb952sUCXYjCksH0hg7\nHDUD2PILjAKB0JX0rHN7MkAlMfiJSAJ55KgxBtZECZFGp263yc+apjMVOtYnxIp7\nFlhC27+Xdm5Gf7PWfpe4gpn/Ag/XPgJDJuURCm6O2l3C42rtuiDYzlaNAoGAGzpr\nOx5QKg360hr1TTG4Fcf2ERUEZwT8x0OjlI+3UHhKdB+p20HjpRe+jdV5734pz84V\nxuru45+6Ah6d25zk38qXJm/u/uiQR3fxixShFsM5c/sbzlchLIc9el+ZIXrMsOGB\n/LmIxVxNP7EpZ78Ndc/IHS3QwT2z6Nr3mWSrJSECgYBK5alB8HwXIvYI5rDbSldD\nWgBOojSIYjYT8ZbRUpkrpHsCDm6G40U2lXAmNkbYGdmWA47gtZlBE8k9PkfTp4AD\nfJiKOVABMhP3rEj6AinaESQet5OJbzXJ7zAAl3avKJoqjwAT6HVKBqt2feQ3/VKU\nNd3t12taIHxtUVqzNSRVLg==\n-----END PRIVATE KEY-----\n",
//             client_email: "aos-890@academyofstartups.iam.gserviceaccount.com",
//         },
//         metrics: ["ga:sessions"],
//         dimensions: ["ga:source"],
//       });

//       setData(data);
//     };

//     getChartData();
//   }, []);

//   return (
//     <div>
//       <h1>Google Analytics Data</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Source</th>
//             <th>Sessions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.rows.map((row) => (
//             <tr key={row.ga_source}>
//               <td>{row.ga_source}</td>
//               <td>{row.ga_sessions}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default GoogleAnalyticsData;