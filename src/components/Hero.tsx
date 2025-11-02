interface HeroProps {
  title: string;
  image?: string;
}

export default function Hero({ title, image = '/hero-default.jpg' }: HeroProps) {
  return (
    <div className="relative h-64 md:h-80 bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
          {title}
        </h1>
      </div>
    </div>
  );
}
