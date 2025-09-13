import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Download } from "lucide-react";

const treatmentData = [
	{
		id: "COW-001",
		treatment: "Antibiotic - Penicillin",
		date: "2024-01-15",
		dosage: "5mg/kg",
		mrl: "Safe",
		withdrawal: "7 days",
	},
	{
		id: "PIG-042",
		treatment: "Antibiotic - Tetracycline",
		date: "2024-01-14",
		dosage: "10mg/kg",
		mrl: "Exceeded",
		withdrawal: "14 days",
	},
	{
		id: "SHEEP-115",
		treatment: "Dewormer - Ivermectin",
		date: "2024-01-13",
		dosage: "2ml",
		mrl: "Safe",
		withdrawal: "21 days",
	},
	{
		id: "COW-023",
		treatment: "Anti-inflammatory - Dexamethasone",
		date: "2024-01-12",
		dosage: "3mg/kg",
		mrl: "Pending",
		withdrawal: "5 days",
	},
	{
		id: "PIG-089",
		treatment: "Antibiotic - Amoxicillin",
		date: "2024-01-11",
		dosage: "15mg/kg",
		mrl: "Safe",
		withdrawal: "10 days",
	},
	{
		id: "SHEEP-067",
		treatment: "Vaccine - Foot and Mouth Disease",
		date: "2024-01-10",
		dosage: "1ml",
		mrl: "N/A",
		withdrawal: "0 days",
	},
];

const mrlColors = {
	Safe: "text-green-600",
	Exceeded: "text-red-600",
	Pending: "text-orange-500",
	"N/A": "text-gray-400",
};

const Report = () => {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("All");

	const filteredData = treatmentData.filter((item) => {
		const matchesSearch =
			item.id.toLowerCase().includes(search.toLowerCase()) ||
			item.treatment.toLowerCase().includes(search.toLowerCase());
		const matchesFilter = filter === "All" || item.mrl === filter;
		return matchesSearch && matchesFilter;
	});

	const downloadReport = () => {
		const csvContent = [
			["Animal ID", "Treatment", "Date", "Dosage", "MRL Status", "Withdrawal Period"],
			...filteredData.map((item) => [item.id, item.treatment, item.date, item.dosage, item.mrl, item.withdrawal]),
		]
			.map((e) => e.join(","))
			.join("\n");

		const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.setAttribute("download", "treatment_report.csv");
		link.click();
	};

	return (
		<>
			<Navbar />
			<div className="p-6 font-sans bg-gray-50 min-h-screen">
				<h2 className="text-2xl font-bold mb-1">Treatment Reports</h2>
				<p className="mb-6 text-gray-600">Comprehensive overview of all treatment records and MRL status</p>

				<div className="mb-6 flex flex-wrap items-center gap-3">
					<input
						type="text"
						placeholder="Search by Animal ID or Treatment..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<select
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
						className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<option>All</option>
						<option>Safe</option>
						<option>Exceeded</option>
						<option>Pending</option>
						<option>N/A</option>
					</select>
					<button
						onClick={downloadReport}
						className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
					>
						<Download size={16} /> Download Report
					</button>
				</div>

				<div className="overflow-x-auto rounded-lg shadow-lg bg-white">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-100">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Animal ID</th>
								<th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Treatment</th>
								<th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Date</th>
								<th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Dosage</th>
								<th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">MRL Status</th>
								<th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Withdrawal Period</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-100">
							{filteredData.map((item) => (
								<tr key={item.id} className="hover:bg-gray-50 transition">
									<td className="px-6 py-3 font-medium text-gray-900">{item.id}</td>
									<td className="px-6 py-3">{item.treatment}</td>
									<td className="px-6 py-3">{item.date}</td>
									<td className="px-6 py-3">{item.dosage}</td>
									<td className={`px-6 py-3 font-semibold ${mrlColors[item.mrl] || "text-gray-400"}`}>{item.mrl}</td>
									<td className="px-6 py-3">{item.withdrawal}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<p className="mt-3 text-gray-600">Showing {filteredData.length} of {treatmentData.length} records</p>
				<p className="text-sm text-gray-400">Last updated: 9/3/2025</p>
			</div>
			<Footer />
		</>
	);
};

export default Report;
