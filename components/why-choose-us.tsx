import { Award, BookOpen, Briefcase, Users } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Real Project Labs",
    description:
      "Work on actual industry projects with professional-grade software and hardware in our state-of-the-art labs.",
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Learn from industry professionals with 10+ years of experience in CAD/CAM/CAE domains.",
  },
  {
    icon: Award,
    title: "Industry Certification",
    description: "Get certified by Autodesk, Dassault, and Siemens with our official partnership programs.",
  },
  {
    icon: Briefcase,
    title: "100% Placement Support",
    description: "Dedicated placement cell with tie-ups across 50+ companies for guaranteed career opportunities.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
              Transform Your Career with Practical CAD Training
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We don&apos;t just teach software—we build engineering mindsets. Our project-based curriculum ensures
              you&apos;re job-ready from day one.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats Card */}
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-secondary/50 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">15K+</div>
                  <div className="text-sm text-muted-foreground">Students Graduated</div>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Hiring Partners</div>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Placement Rate</div>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                  <div className="text-sm text-muted-foreground">Student Rating</div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
