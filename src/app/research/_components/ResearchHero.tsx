interface ResearchHeroProps {
  title: string;
  subtitle: string;
}

export function ResearchHero({ title, subtitle }: ResearchHeroProps) {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
