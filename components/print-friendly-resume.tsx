"use client"

import { useState } from "react"
import { Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PrintFriendlyResume() {
  const [isPrinting, setIsPrinting] = useState(false)

  const printResume = () => {
    setIsPrinting(true)

    // Create a new window for printing
    const printWindow = window.open("", "_blank")

    if (!printWindow) {
      alert("Please allow popups for this website to print your resume")
      setIsPrinting(false)
      return
    }

    // Basic styling for the print version
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Abdullah Almakhlouf - Resume</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            font-size: 24px;
            margin-bottom: 5px;
          }
          h2 {
            font-size: 18px;
            margin-top: 20px;
            padding-bottom: 5px;
            border-bottom: 1px solid #ddd;
          }
          h3 {
            font-size: 16px;
            margin-bottom: 5px;
          }
          .contact {
            margin-bottom: 20px;
          }
          .section {
            margin-bottom: 20px;
          }
          .job {
            margin-bottom: 15px;
          }
          .job-title {
            font-weight: bold;
          }
          .job-company {
            font-style: italic;
          }
          .job-date {
            color: #666;
          }
          ul {
            padding-left: 20px;
          }
          .print-instructions {
            background-color: #f8f9fa;
            border: 1px solid #ddd;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 4px;
          }
          .print-instructions h3 {
            margin-top: 0;
            color: #0070f3;
          }
          .print-button {
            margin-top: 20px;
            padding: 10px 15px;
            background-color: #0070f3;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
          }
          .print-button:hover {
            background-color: #0051a2;
          }
          @media print {
            .print-instructions, .print-button {
              display: none;
            }
            body {
              padding: 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="print-instructions">
          <h3>Print Instructions</h3>
          <p>To print this resume:</p>
          <ol>
            <li>Click the "Print Resume" button below, or</li>
            <li>Press Ctrl+P (Windows) or Cmd+P (Mac) to open the print dialog</li>
            <li>Select your printer and adjust settings as needed</li>
            <li>Click "Print" to print your resume</li>
          </ol>
          <p>For best results, choose "No margins" or "Minimum margins" in your print settings.</p>
        </div>
        
        <div class="header">
          <h1>Abdullah Almakhlouf</h1>
          <p>Technical Engineer specializing in Digital Transformation & Automation</p>
          
          <div class="contact">
            <p>Email: abdallahalmakhlouf2000@gmail.com | Phone: +971 54 541 3043</p>
            <p>LinkedIn: linkedin.com/in/abdallah-almakhlouf-326399265</p>
          </div>
        </div>
        
        <div class="section">
          <h2>Professional Summary</h2>
          <p>Results-driven Technical Engineer specializing in digital transformation and automation. Expertise in Java, Python, and Dart programming languages, developing innovative solutions that enhance operational efficiency and streamline business processes.</p>
        </div>
        
        <div class="section">
          <h2>Professional Experience</h2>
          
          <div class="job">
            <h3 class="job-title">Technical Engineer - Digital Transformation</h3>
            <p class="job-company">Engineering Contracting Company (ECC), Dubai, UAE</p>
            <p class="job-date">June 2023 – Present</p>
            <ul>
              <li>Developed Java-based automation tools for management platforms, improving efficiency and reducing manual errors.</li>
              <li>Automated workflows in Revit using Python scripts in Dynamo, significantly enhancing design process efficiency.</li>
              <li>Designed and implemented a custom add-in to streamline repetitive tasks, reducing operational time.</li>
              <li>Conducted data analysis and developed dashboards in Power BI to support decision-making processes.</li>
              <li>Developed and integrated an AI model with an RPA framework to automate complex business processes.</li>
            </ul>
          </div>
          
          <div class="job">
            <h3 class="job-title">Web Developer & Business Development Specialist</h3>
            <p class="job-company">Just Click Solutions, Amman, Jordan</p>
            <p class="job-date">May 2022 – May 2023</p>
            <ul>
              <li>Developed and maintained web applications, ensuring they met client requirements and industry standards.</li>
              <li>Collaborated with clients to gather requirements, evaluate project scope, and prepare quotations for management review.</li>
              <li>Played a key role in business development by adding value through new services and solutions, contributing to company growth.</li>
              <li>Provided technical support and training to clients, ensuring successful project implementation and customer satisfaction.</li>
            </ul>
          </div>
        </div>
        
        <div class="section">
          <h2>Education</h2>
          <h3>Bachelor of Computer Science</h3>
          <p>Al-Balqa Applied University, Jordan</p>
          <p>GPA: 3.20 (Very Good)</p>
        </div>
        
        <div class="section">
          <h2>Certifications</h2>
          <ul>
            <li>Advanced Flutter Course - SDK Company, Irbid, Jordan (140 hours)</li>
            <li>PMI Agile Certified Practitioner (PMI-ACP)</li>
            <li>Flutter Course and Training - The Hope International, Amman, Jordan</li>
            <li>Web Development Training</li>
          </ul>
        </div>
        
        <div class="section">
          <h2>Technical Skills</h2>
          <ul>
            <li><strong>Programming Languages:</strong> Python, Java, Dart</li>
            <li><strong>Frameworks & Tools:</strong> Flutter, Dynamo (for Revit), Power BI</li>
            <li><strong>Automation & AI:</strong> Robotic Process Automation (RPA), AI Model Integration, Power Automate</li>
            <li><strong>Web Development:</strong> HTML/CSS, JavaScript, Web Application Development</li>
          </ul>
        </div>
        
        <div class="section">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Interactive Power BI Dashboards:</strong> Developed comprehensive Power BI dashboards for engineering departments, providing real-time insights and KPI tracking.
            </li>
            <li>
              <strong>Tile Optimization Tool:</strong> Built a specialized tool for optimizing tile usage in construction projects, significantly reducing material waste and costs.
            </li>
            <li>
              <strong>3D Viewer for Revit Models:</strong> Developed a web application that extracts metadata from Revit, allowing users to view, filter, and edit 3D models through a browser interface.
            </li>
          </ul>
        </div>
        
        <div class="section">
          <h2>Soft Skills</h2>
          <ul>
            <li><strong>Leadership:</strong> Experienced in leading technical teams and coordinating project deliverables</li>
            <li><strong>Problem Solving:</strong> Strong analytical thinking and creative problem-solving abilities</li>
            <li><strong>Communication:</strong> Effective communication skills with clients and team members</li>
            <li><strong>Adaptability:</strong> Ability to work under pressure and adapt to changing requirements</li>
          </ul>
        </div>
        
        <button onclick="window.print();" class="print-button">
          Print Resume
        </button>
      </body>
      </html>
    `

    // Write the content to the new window
    printWindow.document.open()
    printWindow.document.write(printContent)
    printWindow.document.close()

    // Wait for content to load before printing
    printWindow.onload = () => {
      setIsPrinting(false)
    }
  }

  return (
    <Button onClick={printResume} disabled={isPrinting} variant="outline" className="flex items-center gap-2">
      <Printer className="h-4 w-4" />
      {isPrinting ? "Preparing..." : "Print Resume"}
    </Button>
  )
}
