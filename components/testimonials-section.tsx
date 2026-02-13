import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CAD Engineer at Tata Motors",
    content:
      "The hands-on training at CAD Masters completely transformed my career. Within 3 months of completing the SolidWorks course, I landed my dream job.",
    rating: 5,
    course: "SolidWorks",
  },
  {
    name: "Rahul Patel",
    role: "Design Engineer at L&T",
    content:
      "The CATIA course was incredibly comprehensive. The real project experience made me confident during interviews. Highly recommend!",
    rating: 5,
    course: "CATIA",
  },
  {
    name: "Ananya Reddy",
    role: "Product Designer at Bosch",
    content:
      "Best investment in my career. The mentors here are true industry experts who go above and beyond to ensure your success.",
    rating: 5,
    course: "Fusion 360",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Student Success
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">What Our Students Say</h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of successful graduates who transformed their careers with our training programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                {/* Course Badge */}
                <Badge variant="outline" className="mt-4">
                  {testimonial.course}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
