// Sample treatment data
const treatmentData = [
  { id: "COW-001", treatment: "Antibiotic - Penicillin", date: "2024-01-15", dosage: "5mg/kg", mrl: "Safe", withdrawal: "7 days", doctorNotes: "" },
  { id: "PIG-042", treatment: "Antibiotic - Tetracycline", date: "2024-01-14", dosage: "10mg/kg", mrl: "Exceeded", withdrawal: "14 days", doctorNotes: "Review dosage urgently" },
  { id: "SHEEP-115", treatment: "Dewormer - Ivermectin", date: "2024-01-13", dosage: "2ml", mrl: "Safe", withdrawal: "21 days", doctorNotes: "" },
  // ... other data
];

const mrlColors = {
  Safe: "text-green-600",
  Exceeded: "text-red-700 font-bold",
  Pending: "text-orange-500",
  "N/A": "text-gray-400",
};

export default function VetReport({ data = treatmentData }) {
  const filteredData = data; // You can add filtering logic here if needed

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Animal ID</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Treatment</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Date</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Dosage</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">MRL Status</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Withdrawal Period</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Doctor Notes</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {filteredData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-3 font-medium text-gray-900">{item.id}</td>
              <td className="px-6 py-3">{item.treatment}</td>
              <td className="px-6 py-3">{item.date}</td>
              <td className="px-6 py-3">{item.dosage}</td>
              <td className={`px-6 py-3 font-semibold ${mrlColors[item.mrl] || "text-gray-400"}`}>
                {item.mrl === "Exceeded" && <span role="img" aria-label="warning">⚠️ </span>}
                {item.mrl}
              </td>
              <td className="px-6 py-3">{item.withdrawal}</td>
              <td className="px-6 py-3 italic text-sm text-gray-600">{item.doctorNotes || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
