import Image from "next/image";

type AboutUsProps = {
  heading: string;
  bodyHtml: string;
  imageUrl?: string | null;
  imageAlt?: string | null;
};

export default function AboutUs({ heading, bodyHtml, imageUrl, imageAlt }: AboutUsProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-primary">{heading}</h2>
              <div className="h-1 w-20 bg-secondary mb-6" />
              <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
              />
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-square bg-primary/5 rounded-full p-8 relative overflow-hidden">
                <Image
                  src={
                    imageUrl || "https://placehold.co/600x600?text=About+Our+Lab"
                  }
                  fill
                  alt={imageAlt || "About our lab"}
                  className="object-cover rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
