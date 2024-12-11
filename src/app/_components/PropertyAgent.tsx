import Image from "next/image";

interface PropertyAgentProps {
  name: string;
  image: string;
}

export function PropertyAgent({ name, image }: PropertyAgentProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <span className="text-sm font-medium">{name}</span>
      </div>
      <button className="text-blue-600 text-sm hover:text-blue-700">
        View Number
      </button>
    </div>
  );
}