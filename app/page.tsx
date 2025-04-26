import { Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { PdfExportButton } from "@/components/pdf-export-button"
import { PrintFriendlyResume } from "@/components/print-friendly-resume"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Main content wrapper with ID for PDF export */}
      <div id="portfolio-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 md:space-y-6 md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Abdullah Almakhlouf</h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                Digital  Engineer 
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="#contact">Contact Me</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/projects">View All Projects</Link>
                  </Button>
                  <PdfExportButton />
                  <PrintFriendlyResume />
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/abdallah-almakhlouf-326399265/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:abdallahalmakhlouf2000@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                {/* Use a regular img tag with crossOrigin attribute */}
                <img
                  src="/profile.jpeg"
                  alt="Abdullah Almakhlouf"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-top border-4 border-background shadow-lg"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                I'm a results-driven Technical Engineer specializing in digital transformation and automation. With
                expertise in Java, Python, and Dart programming languages, I develop innovative solutions that enhance
                operational efficiency and streamline business processes.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My experience spans from developing automation tools for management platforms to creating custom add-ins
                for engineering software like Revit. I'm passionate about leveraging technology to solve complex
                problems and drive business growth.
              </p>
              <p className="text-lg text-muted-foreground">
                Currently based in Dubai, UAE, I'm seeking opportunities to apply my technical skills and project
                management expertise to challenging projects that make a meaningful impact.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>

            <Tabs defaultValue="technical" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="technical">Technical Skills</TabsTrigger>
                <TabsTrigger value="soft">Soft Skills</TabsTrigger>
              </TabsList>
              <TabsContent value="technical" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Programming Languages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Python</li>
                        <li>Java</li>
                        <li>Dart</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Frameworks & Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Flutter</li>
                        <li>Dynamo (for Revit)</li>
                        <li>Power BI</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Automation & AI</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Robotic Process Automation (RPA)</li>
                        <li>AI Model Integration</li>
                        <li>Power Automate</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Web Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>Web Application Development</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="soft" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Leadership</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Experienced in leading technical teams and coordinating project deliverables.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Problem Solving</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Strong analytical thinking and creative problem-solving abilities.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Communication</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Effective communication skills with clients and team members.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Adaptability</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Ability to work under pressure and adapt to changing requirements.</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-16 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <Button asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project 1 */}
              <Card className="overflow-hidden">
                <div className="h-48 bg-gray-100 dark:bg-gray-800 relative">
                  <Image
                    src="powerbi.jpg?height=192&width=384"
                    alt="Power BI Dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Interactive Power BI Dashboards</CardTitle>
                  <CardDescription>Data visualization and analysis solution</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Developed comprehensive Power BI dashboards for engineering departments, providing real-time
                    insights and KPI tracking.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md">Power BI</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md">Data Analysis</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md">Visualization</span>
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="overflow-hidden">
                <div className="h-48 bg-gray-100 dark:bg-gray-800 relative">
                  <Image
                    src="tile.jpg?height=192&width=384"
                    alt="Tile Optimization Tool"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Tile Optimization Tool</CardTitle>
                  <CardDescription>Waste reduction solution for construction</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Built a specialized tool for optimizing tile usage in construction projects, significantly reducing
                    material waste and costs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md">Python</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md">Optimization</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md">Construction</span>
                  </div>
                </CardContent>
              </Card>

              {/* Project 3 */}
              <Card className="overflow-hidden">
                <div className="h-48 bg-gray-100 dark:bg-gray-800 relative">
                  <Image
                    src="3d.jpg?height=192&width=384"
                    alt="3D Viewer Web Application"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>3D Viewer for Revit Models</CardTitle>
                  <CardDescription>Web-based 3D model visualization</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Developed a web application that extracts metadata from Revit, allowing users to view, filter, and
                    edit 3D models through a browser interface.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md">JavaScript</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md">Revit API</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md">3D Visualization</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>

            <div className="max-w-3xl mx-auto space-y-8">
              {/* Job 1 */}
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>Technical Engineer - Digital Transformation</CardTitle>
                      <CardDescription>Engineering Contracting Company (ECC), Dubai, UAE</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">June 2023 – Present</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      Developed Java-based automation tools for management platforms, improving efficiency and reducing
                      manual errors.
                    </li>
                    <li>
                      Automated workflows in Revit using Python scripts in Dynamo, significantly enhancing design
                      process efficiency.
                    </li>
                    <li>
                      Designed and implemented a custom add-in to streamline repetitive tasks, reducing operational
                      time.
                    </li>
                    <li>
                      Conducted data analysis and developed dashboards in Power BI to support decision-making processes.
                    </li>
                    <li>
                      Developed and integrated an AI model with an RPA framework to automate complex business processes.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Job 2 */}
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>Web Developer & Business Development Specialist</CardTitle>
                      <CardDescription>Just Click Solutions, Amman, Jordan</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">May 2022 – May 2023</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      Developed and maintained web applications, ensuring they met client requirements and industry
                      standards.
                    </li>
                    <li>
                      Collaborated with clients to gather requirements, evaluate project scope, and prepare quotations
                      for management review.
                    </li>
                    <li>
                      Played a key role in business development by adding value through new services and solutions,
                      contributing to company growth.
                    </li>
                    <li>
                      Provided technical support and training to clients, ensuring successful project implementation and
                      customer satisfaction.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="py-16 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>

            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Bachelor of Computer Science</h3>
                    <p className="text-sm text-muted-foreground">Al-Balqa Applied University, Jordan</p>
                    <p className="text-sm">GPA: 3.20 (Very Good)</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Advanced Flutter Course</h3>
                    <p className="text-sm text-muted-foreground">SDK Company, Irbid, Jordan</p>
                    <p className="text-sm">February 2023 – August 2023 (140 hours)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">PMI Agile Certified Practitioner (PMI-ACP)</h3>
                  </div>
                  <div>
                    <h3 className="font-semibold">Flutter Course and Training</h3>
                    <p className="text-sm text-muted-foreground">The Hope International, Amman, Jordan</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Web Development Training</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>

            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out for collaborations or inquiries</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a href="mailto:abdallahalmakhlouf2000@gmail.com" className="text-sm hover:underline">
                      abdallahalmakhlouf2000@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <a href="tel:+971545413043" className="text-sm hover:underline">
                      +971 54 541 3043
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="https://www.linkedin.com/in/abdallah-almakhlouf-326399265/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Abdullah Almakhlouf. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
