const brands = [
  { name: 'LiftMaster', logo: 'LM' },
  { name: 'DoorKing', logo: 'DK' },
  { name: 'Linear', logo: 'LN' },
  { name: 'Viking', logo: 'VK' },
  { name: 'Apollo', logo: 'AP' },
  { name: 'Nice', logo: 'NC' },
  { name: 'FAAC', logo: 'FC' },
  { name: 'Elite', logo: 'EL' },
];

export function BrandLogos() {
  return (
    <section className="py-12 border-t border-border overflow-hidden">
      <div className="container-main">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Authorized Service Provider for Leading Gate Brands
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-display font-bold text-sm">
                {brand.logo}
              </div>
              <span className="text-sm font-medium text-muted-foreground">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
