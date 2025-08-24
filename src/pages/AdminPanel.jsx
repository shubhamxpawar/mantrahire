import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "../components/DataTable";

const AdminPanel = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    axios
      .get("https://mantra-hire-solutions-backend-v1.vercel.app/api/v1/admin/dashboard/show")
      .then((res) => {
        const updatedData = res.data.data.map((item) => {
          // Convert the buffer to Blob and create a downloadable URL
          if (item.resume && item.resume.data) {
            const blob = new Blob([new Uint8Array(item.resume)], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            return { ...item, resumeUrl: url };
          }
          return item;
        });
        setSubmissions(updatedData);
      })
      .catch((err) => console.error("Failed to fetch submissions:", err));
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100 py-22">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#3e86c4]">
        Form Submissions
      </h1>

      {submissions.length === 0 ? (
        <p className="text-center text-gray-500">No submissions found.</p>
      ) : (
        <DataTable sub={submissions} />
      )}
    </div>
  );
};

export default AdminPanel;
