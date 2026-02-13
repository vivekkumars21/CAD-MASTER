import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Join Thousands of Students Building Amazing Careers in Design & Engineering
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Start your journey today with a free career counseling session. Our experts will help you choose the right
          path.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base px-8">
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-secondary gap-2 text-base px-8 bg-transparent"
          >
            <Phone className="w-5 h-5" />
            Talk to Counselor
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">✓</span>
            No Credit Card Required
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">✓</span>
            7-Day Free Trial
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">✓</span>
            Money-Back Guarantee
          </div>
        </div>
      </div>
    </section>
  )
}
