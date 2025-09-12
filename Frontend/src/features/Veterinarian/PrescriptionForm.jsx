import React, { useState } from "react";

const PrescriptionForm = () => {
  const [form, setForm] = useState({
    animalId: "",
    medication: "",
    dosage: "",
    timePeriod: "",
    conditionImage: null,
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "conditionImage") {
      setForm({ ...form, conditionImage: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, just save submitted data in state and log
    setSubmitted(form);
    console.log("Prescription Submitted:", form);
    alert("Prescription submitted!");
    // Reset form
    setForm({
      animalId: "",
      medication: "",
      dosage: "",
      timePeriod: "",
      conditionImage: null,
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Doctor Prescription Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="animalId" className="block font-medium mb-1">
            Animal ID
          </label>
          <input
            type="text"
            id="animalId"
            name="animalId"
            value={form.animalId}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="e.g., COW-123"
          />
        </div>

        <div>
          <label htmlFor="medication" className="block font-medium mb-1">
            Medication Name
          </label>
          <input
            type="text"
            id="medication"
            name="medication"
            value={form.medication}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="e.g., Penicillin"
          />
        </div>

        <div>
          <label htmlFor="dosage" className="block font-medium mb-1">
            Dosage
          </label>
          <input
            type="text"
            id="dosage"
            name="dosage"
            value={form.dosage}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="e.g., 5mg/kg"
          />
        </div>

        <div>
          <label htmlFor="timePeriod" className="block font-medium mb-1">
            Time Period (e.g., 7 days)
          </label>
          <input
            type="text"
            id="timePeriod"
            name="timePeriod"
            value={form.timePeriod}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="e.g., 7 days"
          />
        </div>

        <div>
          <label htmlFor="conditionImage" className="block font-medium mb-1">
            Upload Picture of Animal Condition
          </label>
          <input
            type="file"
            id="conditionImage"
            name="conditionImage"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
          {form.conditionImage && (
            <p className="mt-2 text-sm text-gray-600">
              Selected file: {form.conditionImage.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit Prescription
        </button>
      </form>

      {submitted && (
        <div className="mt-6 p-4 border border-green-600 rounded bg-green-50">
          <h3 className="font-semibold mb-2">Prescription Submitted:</h3>
          <p><strong>Animal ID:</strong> {submitted.animalId}</p>
          <p><strong>Medication:</strong> {submitted.medication}</p>
          <p><strong>Dosage:</strong> {submitted.dosage}</p>
          <p><strong>Time Period:</strong> {submitted.timePeriod}</p>
          {submitted.conditionImage && (
            <p><strong>Uploaded Image:</strong> {submitted.conditionImage.name}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PrescriptionForm;
