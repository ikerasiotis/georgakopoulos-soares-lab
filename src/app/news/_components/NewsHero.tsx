interface NewsHeroProps {
  title: string;
  subtitle?: string | null;
}

export function NewsHero({ title, subtitle }: NewsHeroProps) {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {subtitle ? <p className="text-xl">{subtitle}</p> : null}
        </div>
      </div>
    </section>
  );
}
