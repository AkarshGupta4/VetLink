import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function MedicalRecords() {
  const [records, setRecords] = useState([
    {
      id: "A001",
      species: "Cow",
      breed: "Jersey",
      age: 4,
      weight: "350kg",
      owner: "Farmer Ram Singh",
      visits: [
        {
          date: "2025-09-01",
          reason: "Fever",
          vet: "Dr. Sharma",
          symptoms: "High temperature, low appetite",
          diagnosis: "Viral Fever",
          severity: "Moderate",
          treatment: {
            medicines: "Paracetamol",
            dosage: "1 tab/day",
            injections: "Vitamin B12",
            feeding: "Light diet",
          },
          labReports: ["Blood Test: Mild Infection"],
          vaccinations: ["FMD Vaccine (Next: 2026-01-10)"],
          followUp: {
            date: "2025-09-15",
            notes: "Check recovery progress",
            progress: "Ongoing treatment",
          },
          documents: ["prescription1.pdf"],
        },
      ],
    },
  ]);

  const [selectedRecord, setSelectedRecord] = useState(null);

  // Download record as PDF
  const downloadPDF = (animal) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Medical Record - ${animal.id}`, 14, 20);

    doc.setFontSize(12);
    doc.text(`Species: ${animal.species}`, 14, 30);
    doc.text(`Breed: ${animal.breed}`, 14, 37);
    doc.text(`Age: ${animal.age} years`, 14, 44);
    doc.text(`Weight: ${animal.weight}`, 14, 51);
    doc.text(`Owner: ${animal.owner}`, 14, 58);

    doc.autoTable({
      startY: 70,
      head: [["Date", "Reason", "Diagnosis", "Severity", "Treatment"]],
      body: animal.visits.map((v) => [
        v.date,
        v.reason,
        v.diagnosis,
        v.severity,
        v.treatment.medicines,
      ]),
    });

    doc.save(`Medical_Record_${animal.id}.pdf`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Medical Records</h1>

      {/* Records Table */}
      <table className="w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-green-900 text-white">
            <th className="p-3 text-left">Animal ID</th>
            <th className="p-3 text-left">Species</th>
            <th className="p-3 text-left">Breed</th>
            <th className="p-3 text-left">Owner</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((animal) => (
            <tr key={animal.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{animal.id}</td>
              <td className="p-3">{animal.species}</td>
              <td className="p-3">{animal.breed}</td>
              <td className="p-3">{animal.owner}</td>
              <td className="p-3 flex gap-3">
                <button
                  onClick={() => setSelectedRecord(animal)}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  View
                </button>
                <button
                  onClick={() => downloadPDF(animal)}
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for details */}
      {selectedRecord && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              Medical Record - {selectedRecord.id}
            </h2>
            <p>
              <b>Species:</b> {selectedRecord.species} | <b>Breed:</b>{" "}
              {selectedRecord.breed}
            </p>
            <p>
              <b>Age:</b> {selectedRecord.age} years | <b>Weight:</b>{" "}
              {selectedRecord.weight}
            </p>
            <p>
              <b>Owner:</b> {selectedRecord.owner}
            </p>

            <hr className="my-4" />
            <h3 className="font-semibold text-lg mb-2">Visit History</h3>
            {selectedRecord.visits.map((v, i) => (
              <div
                key={i}
                className="border rounded-lg p-3 mb-3 bg-gray-50 shadow-sm"
              >
                <p>
                  <b>Date:</b> {v.date} | <b>Reason:</b> {v.reason}
                </p>
                <p>
                  <b>Vet:</b> {v.vet} | <b>Diagnosis:</b> {v.diagnosis} (
                  {v.severity})
                </p>
                <p>
                  <b>Symptoms:</b> {v.symptoms}
                </p>
                <p>
                  <b>Medicines:</b> {v.treatment.medicines} |{" "}
                  <b>Dosage:</b> {v.treatment.dosage}
                </p>
                <p>
                  <b>Injections:</b> {v.treatment.injections} |{" "}
                  <b>Feeding:</b> {v.treatment.feeding}
                </p>
                <p>
                  <b>Lab Reports:</b> {v.labReports.join(", ")}
                </p>
                <p>
                  <b>Vaccinations:</b> {v.vaccinations.join(", ")}
                </p>
                <p>
                  <b>Follow-up:</b> {v.followUp.date} - {v.followUp.notes} (
                  {v.followUp.progress})
                </p>
              </div>
            ))}

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setSelectedRecord(null)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
