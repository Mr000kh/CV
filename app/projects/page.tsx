import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Navbar } from "@/components/navbar"

const projects = [
  {
    title: "Interactive Power BI Dashboards",
    description: "Data visualization and analysis solution",
    imageSrc: "/powerbi.jpg?height=192&width=384",
    tags: ["Power BI", "Data Analysis", "Visualization"],
    summary:
      "Developed comprehensive Power BI dashboards for engineering departments, providing real-time insights and KPI tracking.",
  },
  {
    title: "Tile Optimization Tool",
    description: "Waste reduction solution for construction",
    imageSrc: "/tile.jpg?height=192&width=384",
    tags: ["Python", "VBA", "Construction"],
    summary:
      "Built a specialized tool for optimizing tile usage in construction projects, significantly reducing material waste and costs.",
  },
  {
    title: "3D Viewer for Revit Models",
    description: "Web-based 3D model visualization",
    imageSrc: "/3d.jpg?height=192&width=384",
    tags: ["JavaScript", "Revit API", "3D Visualization"],
    summary:
      "Developed a web application that extracts metadata from Revit, allowing users to view, filter, and edit 3D models through a browser interface.",
  },
  {
    title: "AI Assistant for Engineers",
    description: "Intelligent support system",
    imageSrc: "/aiass.jpg?height=192&width=384",
    tags: ["AI", "Python", "NLP"],
    summary:
      "Created an AI-powered assistant that helps engineering teams with technical queries, documentation, and process automation.",
  },
  {
    title: "Complex Automation Bots",
    description: "Process automation solution",
    imageSrc: "/Aoutomation.jpg?height=192&width=384",
    tags: ["Power Automate", "RPA", "Workflow"],
    summary:
      "Developed sophisticated automation bots using Power Automate to streamline business processes and reduce manual workload.",
  },
  {
    title: "Engineering KPI Application",
    description: "Performance tracking system",
    imageSrc: "/kpi.jpg?height=192&width=384",
    tags: ["Powr App", "Power BI", "Data Integration"],
    summary:
      "Built a KPI application for engineering departments that connects with interactive dashboards to provide comprehensive performance insights.",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-12 px-4 md:px-6">
        <div className="mb-8 flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">My Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              tags={project.tags}
              summary={project.summary}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
