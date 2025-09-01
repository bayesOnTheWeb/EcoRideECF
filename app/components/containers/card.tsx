import Image from "next/image";

interface CardProps {
  title: string;
  content: string;
  src: string;
  alt: string;
  price: string;
}

export default function Card({ title, content, src, alt, price }: CardProps) {
  return (
    <section className="bg-lightBrunEcoRide border border-greenEcoRide rounded-2xl shadow-md p-6 flex flex-col items-center gap-4 max-w-sm">
      <Image
        src={src || "@/public/CardImage.svg"}
        alt={alt || "defaultAlt"}
        height={250}
        width={250}
        className="rounded-xl object-cover"
      />
      <h3 className="text-blackEcoRide text-xl font-semibold text-center">
        {title}
      </h3>
      <p className="text-blackEcoRide text-sm text-center">{content}</p>
      <p className="text-blackEcoRide font-bold text-lg">{price}</p>
    </section>
  );
}
