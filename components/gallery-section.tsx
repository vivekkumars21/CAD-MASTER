"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Engine Assembly Design",
    category: "SolidWorks",
    description: "Complete V8 engine assembly with motion simulation",
  },
  {
    title: "Architectural Visualization",
    category: "AutoCAD",
    description: "Modern residential building floor plans and elevations",
  },
  {
    title: "Aerospace Component",
    category: "CATIA",
    description: "Aircraft wing section with aerodynamic surface modeling",
  },
  {
    title: "Industrial Robot Arm",
    category: "Fusion 360",
    description: "6-axis robotic arm with generative design optimization",
  },
  {
    title: "3D Printed Prototype",
    category: "3D Printing",
    description: "Functional mechanical gripper with custom toolpath",
  },
]

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Student Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">3D Design Gallery</h2>
          <p className="text-muted-foreground text-lg">
            Explore impressive CAD projects created by our students during their training programs.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="bg-card border-border overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary to-accent/20 flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary/30">{project.category.charAt(0)}</div>
                    </div>
                    <div className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur border border-border rounded-full flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur border border-border rounded-full flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
