import React from 'react'

export const DataTable = (props) => {
  return (
    <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-[#3e86c4] text-white">
                <tr>
                    <th className="py-2 ">Name</th>
                    <th className="py-2 ">Email</th>
                    <th className="py-2 ">Job/Internship</th>
                    <th className="py-2 ">WFH/In-Office</th>
                    <th className="py-2 ">Resume</th>
                    {/* <th className="py-2 ">Date</th> */}
                </tr>
            </thead>
            <tbody className='text-center'>
                {props.sub.map((entry, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2">{entry.fullName}</td>
                    <td className="py-2">{entry.email}</td>
                    <td className="py-2">{entry.jobType}</td>
                    <td className="py-2">{entry.workProfile}</td>
                    <td className="py-2">
                        <a href={entry.resume} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline cursor-pointer"> View </a>
                    </td>
                    {/* <td className="py-2">{new Date(entry.createdAt).toLocaleString()}</td> */}
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
