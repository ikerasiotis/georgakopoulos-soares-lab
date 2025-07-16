import Image from 'next/image';

export default function AboutUs({
  aboutText,
  aboutImage,
}: {
  aboutText:
    | string
    | {
        type: string;
        children: {
          type: string;
          text: string;
        }[];
      }[];
  aboutImage?: {
    data: {
      attributes: {
        url: string;
        formats?: {
          medium?: { url: string };
          large?: { url: string };
          small?: { url: string };
          thumbnail?: { url: string };
        };
      };
    };
  };
}) {
  const imageUrl =
    aboutImage?.data?.attributes?.formats?.medium?.url ||
    aboutImage?.data?.attributes?.url;

  console.log('Image URL:', imageUrl);

  const fullImageUrl = imageUrl
    ? `${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`
    : null;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                About Our Lab
              </h2>
              <div className="h-1 w-20 bg-secondary mb-6"></div>
              <div className="text-lg text-gray-700">
                {typeof aboutText === 'string' ? (
                  <p>{aboutText}</p>
                ) : (
                  aboutText.map((block, index) => (
                    <p key={index} className="text-lg mb-4">
                      {block.children.map((child, childIndex) => (
                        <span key={childIndex}>{child.text}</span>
                      ))}
                    </p>
                  ))
                )}
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-square bg-primary/5 rounded-full p-8 relative">
                {fullImageUrl ? (
                  <Image
                    src={fullImageUrl}
                    fill
                    alt="About Us"
                    className="object-cover rounded-full w-full h-full"
                  />
                ) : (
                  <Image
                    src="https://placehold.co/600x600?text=About+Us"
                    fill
                    alt="Placeholder Image"
                    className="object-cover rounded-full w-full h-full"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
