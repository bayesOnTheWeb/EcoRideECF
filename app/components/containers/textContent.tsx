interface TextContentProps {
  subTitle: string;
  content: string;
}

export default function TextContent({ subTitle, content }: TextContentProps) {
  return (
    <>
      <section className="bg-lightBrunEcoRide flex flex-col py-10 px-50 max-w-full gap-5">
        <h2 className="text-blackEcoRide text-2xl">{subTitle}</h2>
        <p className="text-blackEcoRide "> {content} </p>
      </section>
    </>
  );
}
