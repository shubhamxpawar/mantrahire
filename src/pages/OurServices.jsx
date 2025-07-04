import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Recruitment and Staffing',
    sub: `We help organizations find, assess, and hire the right candidates — whether it's full-time, part-time, contractual, or project-based.` ,
    content: `   • Client Needs Analysis
    • Job Description Development
    • Talent Sourcing
    • Screening & Shortlisting
    • Candidate Coordination
    • Offer Negotiation & Onboarding Assistance
    • Temporary & Contract Staffing: Place short-term professionals for seasonal or project-based roles.
    • Campus Hiring & Intern Recruitment

    Our Role: We act as a full recruitment partner — from strategy to sourcing to onboarding — saving time, cost, and effort for our clients.`
  },
  {
    id: 2,
    title: 'HR Consultancy and Compliance',
    sub : `We advise companies on building or improving HR systems, ensuring legal compliance, and optimizing policies and processes.`,
    content: `   • HR Policy Design & Implementation:
      Attendance, Leave, Remote Work, Disciplinary, Sexual Harassment, etc.
    • Organizational Structuring:
      Define reporting lines, department structures, roles/responsibilities
    • Employee Handbooks & Documentation
    • Labour Law Compliance:
      Shops & Establishment Act, Minimum Wages, PF/ESI/Gratuity, POSH compliance
    • Maintain statutory registers and returns
    • HR Strategy Consulting:
      Develop performance appraisal systems
      Improve hiring efficiency, employee retention, etc.
    • HR Tech Recommendation & Setup:
      Help clients choose and configure HRMS software or attendance tracking tools

    Our Role: We will be a trusted advisor who ensures companies follow the law, reduce HR risks, and build stronger, scalable HR systems.`
  },
  {
    id: 3,
    title: 'Payroll Management',
    sub : `We manage monthly payroll processing, statutory deductions, and salary compliance for clients so they can focus on their core business.`,
    content: `    • Data Collection: Gather attendance, leaves, bonus data, etc.
    • Payroll Calculation: Gross salary, deductions (TDS, PF, ESI), bonuses, reimbursements
    • Payslip Generation & Distribution: Automated or manual generation and sharing
    • TDS & Tax Filing: Assist with quarterly TDS filings, Form 16, etc.
    • Compliance Filings: PF, ESI, PT, and other state/national requirements
    • Salary Structuring: Optimize CTC to reduce tax burdens

    Our Role: Provide secure, error-free, and on-time payroll services while ensuring complete statutory compliance.`
  },
  {
    id: 4,
    title: 'Freelance HR Service',
    sub : `We offer on-demand HR expertise for startups, small businesses, or solo founders who don't have a full-time HR team.`,
    content: `   • Virtual HR Manager Services: A dedicated freelance HR expert for daily operations
    • One-Time Projects: Create leave policies, setup hiring process, design onboarding flows
    • Remote Recruitment: Handle hiring from start to finish remotely (like an agency)
    • Employee Grievance Handling: Provide external HR support for unbiased complaint resolution
    • Performance Review Setup: Design appraisal systems, templates, rating scales
    • Freelancer Hiring for Clients: Help clients build remote/freelance teams using different platforms

    Our Role: We want to become a flexible, budget-friendly HR partner for smaller businesses — acting as your outsourced HR department.`
  }
];

export const OurServices = () => {
  
  const bglink = "https://cdn.leonardo.ai/users/ecbf1e78-6285-4000-b1be-5901b2b7098e/generations/b371d300-41da-476c-bc62-c0c3a0aad59c/segments/1:4:1/Lucid_Realism_highresolution_stock_photo_of_professiona_56l_co_0.jpg"
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full aspect-[4/1] flex items-center justify-center text-white "
        style={{
          backgroundImage: `url(${bglink})`, 
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">Our Services</h1>
      </section>

      <div className="flex-grow w-full max-w-6xl mx-auto py-12 px-4">
        {services.map((item, idx) => (
          <div key={item.id} className="my-6 shadow-xl">

            {/* heading */}

            <div className="flex flex-col justify-between bg-[#3e86c4] text-white px-6 py-4 cursor-pointer w-full" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
              <div className="text-lg md:text-2xl mb-5 font-semibold flex flex-row justify-between">
                <h2 className='flex'> 
                  <div>{item.id}.</div>
                  <div className='ml-2'>{item.title}</div> 
                </h2>
                {openIndex === idx ? <ChevronUp /> : <ChevronDown />}
              </div>
              <p className='text-slate-50'>{item.sub}</p>
            </div>

            {/* content */}

            {openIndex === idx && (
              <motion.div className="px-6 py-4 whitespace-pre-wrap bg-white text-gray-800" initial={{ opacity: 0, y: -100, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.4, ease: "easeOut" }} viewport={{ once: true }}>
                <h3 className="text-base font-bold text-[#3e86c4] mb-3">What We Do:</h3>
                <p>{item.content}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
