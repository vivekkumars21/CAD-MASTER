export default function TrustedLogos() {
  const companies = ["Autodesk", "Siemens", "Dassault", "PTC", "Tata Motors", "L&T", "Bosch", "Mahindra"]

  return (
    <section className="py-16 border-y border-border/50 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
          Our students are hired by leading companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div
              key={company}
              className="text-muted-foreground/60 hover:text-primary transition-colors text-lg font-semibold"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
