import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  tags: string[]
  summary: string
  link?: string
}

export function ProjectCard({ title, description, imageSrc, tags, summary, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-48 bg-gray-100 dark:bg-gray-800 relative">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="flex-none">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-sm text-muted-foreground mb-4">{summary}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md">
                {tag}
              </span>
            ))}
          </div>
          {link && (
            <Link href={link} className="text-sm font-medium text-primary hover:underline">
              View Project →
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
