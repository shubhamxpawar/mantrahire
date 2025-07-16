import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "../components/DataTable";

const AdminPanel = () => {
  const [submissions, setSubmissions] = useState([]);

  // const submissions = [
  //   {
  //     _id: "1",
  //     name: "Aarav Sharma",
  //     email: "aaravsharma@gmail.com",
  //     phone: "9876543210",
  //     position: "Frontend Developer",
  //     jobType: "Job",
  //     workMode: "In-Office",
  //     resumeUrl: "https://example.com/resume-aarav.pdf",
  //     profileInterest: "React, Tailwind, UI/UX"
  //   },
  //   {
  //     _id: "2",
  //     name: "Isha Mehta",
  //     email: "isha.mehta@outlook.com",
  //     phone: "9123456789",
  //     position: "Marketing Intern",
  //     jobType: "Internship",
  //     workMode: "Work From Home",
  //     resumeUrl: "https://example.com/resume-isha.pdf",
  //     profileInterest: "Content Writing, SEO, Brand Strategy"
  //   },
  //   {
  //     _id: "3",
  //     name: "Rohan Patil",
  //     email: "rohan.patil@mail.com",
  //     phone: "9988776655",
  //     position: "HR Assistant",
  //     jobType: "Job",
  //     workMode: "In-Office",
  //     resumeUrl: "https://example.com/resume-rohan.pdf",
  //     profileInterest: "Employee Relations, HR Analytics"
  //   }
  // ];

  useEffect(() => {
    axios
      .get("https://mantra-hire-solutions-backend-v1.vercel.app/api/v1/admin/dashboard/show")
      .then((res) => setSubmissions(res.data.data))
      .catch((err) => console.error("Failed to fetch submissions:", err));
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100 py-22">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#3e86c4]">
        Form Submissions
      </h1>

        {submissions.length === 0 ? (<p className="text-center text-gray-500">No submissions found.</p>) : (
            <DataTable sub={submissions} />
        )}
    </div>
  );
};

export default AdminPanel;
