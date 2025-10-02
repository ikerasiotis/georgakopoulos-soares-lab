type ContactHeroProps = {
  title: string;
  subtitle?: string | null;
};

export function ContactHero({ title, subtitle }: ContactHeroProps) {
  return (
    <header className="bg-primary text-white py-16" role="banner">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl">{subtitle}</p>}
        </div>
      </div>
    </header>
  );
}

