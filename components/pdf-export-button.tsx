"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function PdfExportButton() {
  const [isExporting, setIsExporting] = useState(false)

  const exportToPdf = async () => {
    setIsExporting(true)

    try {
      // Create a simplified version of the content for PDF export
      const pdfContent = document.createElement("div")
      pdfContent.innerHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
          <h1 style="font-size: 24px; margin-bottom: 5px;">Abdullah Almakhlouf</h1>
          <p style="font-size: 16px; margin-bottom: 20px;">Technical Engineer specializing in Digital Transformation & Automation</p>
          
          <div style="margin-bottom: 20px;">
            <p>Email: abdallahalmakhlouf2000@gmail.com | Phone: +971 54 541 3043</p>
            <p>LinkedIn: linkedin.com/in/abdallah-almakhlouf-326399265</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h2 style="font-size: 18px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Professional Summary</h2>
            <p>Results-driven Technical Engineer specializing in digital transformation and automation. Expertise in Java, Python, and Dart programming languages, developing innovative solutions that enhance operational efficiency and streamline business processes.</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h2 style="font-size: 18px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Professional Experience</h2>
            
            <div style="margin-bottom: 15px;">
              <h3 style="font-size: 16px; margin-bottom: 5px;">Technical Engineer - Digital Transformation</h3>
              <p style="font-style: italic;">Engineering Contracting Company (ECC), Dubai, UAE</p>
              <p style="color: #666;">June 2023 – Present</p>
              <ul style="padding-left: 20px;">
                <li>Developed Java-based automation tools for management platforms, improving efficiency and reducing manual errors.</li>
                <li>Automated workflows in Revit using Python scripts in Dynamo, significantly enhancing design process efficiency.</li>
                <li>Designed and implemented a custom add-in to streamline repetitive tasks, reducing operational time.</li>
                <li>Conducted data analysis and developed dashboards in Power BI to support decision-making processes.</li>
                <li>Developed and integrated an AI model with an RPA framework to automate complex business processes.</li>
              </ul>
            </div>
            
            <div style="margin-bottom: 15px;">
              <h3 style="font-size: 16px; margin-bottom: 5px;">Web Developer & Business Development Specialist</h3>
              <p style="font-style: italic;">Just Click Solutions, Amman, Jordan</p>
              <p style="color: #666;">May 2022 – May 2023</p>
              <ul style="padding-left: 20px;">
                <li>Developed and maintained web applications, ensuring they met client requirements and industry standards.</li>
                <li>Collaborated with clients to gather requirements, evaluate project scope, and prepare quotations for management review.</li>
                <li>Played a key role in business development by adding value through new services and solutions, contributing to company growth.</li>
                <li>Provided technical support and training to clients, ensuring successful project implementation and customer satisfaction.</li>
              </ul>
            </div>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h2 style="font-size: 18px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Education</h2>
            <h3 style="font-size: 16px; margin-bottom: 5px;">Bachelor of Computer Science</h3>
            <p>Al-Balqa Applied University, Jordan</p>
            <p>GPA: 3.20 (Very Good)</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h2 style="font-size: 18px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Technical Skills</h2>
            <ul style="padding-left: 20px;">
              <li><strong>Programming Languages:</strong> Python, Java, Dart</li>
              <li><strong>Frameworks & Tools:</strong> Flutter, Dynamo (for Revit), Power BI</li>
              <li><strong>Automation & AI:</strong> Robotic Process Automation (RPA), AI Model Integration, Power Automate</li>
              <li><strong>Web Development:</strong> HTML/CSS, JavaScript, Web Application Development</li>
            </ul>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h2 style="font-size: 18px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Projects</h2>
            <ul style="padding-left: 20px;">
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
          
          <div style="margin-bottom: 20px;">
            <h2 style="font-size: 18px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Contact Information</h2>
            <p>Email: abdallahalmakhlouf2000@gmail.com</p>
            <p>Phone: +971 54 541 3043</p>
            <p>LinkedIn: linkedin.com/in/abdallah-almakhlouf-326399265</p>
          </div>
        </div>
      `

      // Use browser's built-in print functionality instead of html2pdf
      const printWindow = window.open("", "_blank")

      if (!printWindow) {
        alert("Please allow popups for this website to export your resume as PDF")
        setIsExporting(false)
        return
      }

      // Add print-specific styling
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
            <h3>Save as PDF Instructions</h3>
            <p>To save this resume as a PDF:</p>
            <ol>
              <li>Click the "Save as PDF" button below, or</li>
              <li>Press Ctrl+P (Windows) or Cmd+P (Mac) to open the print dialog</li>
              <li>Change the destination to "Save as PDF" or similar option</li>
              <li>Click "Save" to create your PDF</li>
            </ol>
            <p>For best results, choose "No margins" or "Minimum margins" in your print settings.</p>
          </div>
          
          ${pdfContent.innerHTML}
          
          <button onclick="window.print();" class="print-button">
            Save as PDF
          </button>
        </body>
        </html>
      `

      // Write the content to the new window
      printWindow.document.open()
      printWindow.document.write(printContent)
      printWindow.document.close()

      // Wait for content to load
      printWindow.onload = () => {
        setIsExporting(false)
      }
    } catch (error) {
      console.error("Error exporting PDF:", error)
      alert("There was an error generating the PDF. Please try the Print Resume option instead.")
      setIsExporting(false)
    }
  }

  return (
    <Button onClick={exportToPdf} disabled={isExporting} variant="outline" className="flex items-center gap-2">
      <Download className="h-4 w-4" />
      {isExporting ? "Generating PDF..." : "Export to PDF"}
    </Button>
  )
}
