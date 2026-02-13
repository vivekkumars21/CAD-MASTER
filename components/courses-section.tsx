import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Box, Cog, Cpu, Layers, Printer, Wrench } from "lucide-react"

const courses = [
  {
    icon: Box,
    title: "AutoCAD",
    description: "2D/3D drafting, blueprints, technical drawings for architecture and engineering.",
    duration: "3 Months",
    level: "Beginner",
  },
  {
    icon: Cog,
    title: "SolidWorks",
    description: "Parametric modeling, assembly design, simulation for mechanical engineering.",
    duration: "4 Months",
    level: "Intermediate",
  },
  {
    icon: Layers,
    title: "CATIA",
    description: "Advanced surface modeling, aerospace design, automotive engineering.",
    duration: "5 Months",
    level: "Advanced",
  },
  {
    icon: Cpu,
    title: "Fusion 360",
    description: "Cloud-based CAD/CAM/CAE, generative design, manufacturing workflows.",
    duration: "3 Months",
    level: "Beginner",
  },
  {
    icon: Wrench,
    title: "CAM & CNC",
    description: "G-code programming, toolpath generation, CNC machining operations.",
    duration: "4 Months",
    level: "Intermediate",
  },
  {
    icon: Printer,
    title: "3D Printing",
    description: "Additive manufacturing, slicing software, material selection, post-processing.",
    duration: "2 Months",
    level: "Beginner",
  },
]

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Programs
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Industry-Leading CAD Courses
          </h2>
          <p className="text-muted-foreground text-lg">
            Master the tools used by top engineers and designers worldwide with our comprehensive hands-on training
            programs.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.title}
              className="bg-card border-border hover:border-primary/50 transition-all group cursor-pointer"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <course.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      {course.duration}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2 bg-transparent">
            View All Courses
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
