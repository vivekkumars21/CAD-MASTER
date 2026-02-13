import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const benefits = [
  "Resume building & interview preparation",
  "Direct referrals to hiring partners",
  "Mock interviews with industry experts",
  "LinkedIn profile optimization",
  "Soft skills & communication training",
  "Lifetime job assistance",
]

export default function CareerSection() {
  return (
    <section id="careers" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Career Support
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Your Career Success is Our Priority
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our dedicated placement cell works tirelessly to connect you with top employers in the engineering and
              design industry.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Explore Placement Support
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right - Company Logos Grid */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Our Hiring Partners</h3>
            <div className="grid grid-cols-3 gap-6">
              {["Tata Motors", "L&T", "Bosch", "Mahindra", "Siemens", "Autodesk", "Wipro", "Infosys", "HCL"].map(
                (company) => (
                  <div
                    key={company}
                    className="h-16 bg-secondary/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors text-sm font-medium"
                  >
                    {company}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
