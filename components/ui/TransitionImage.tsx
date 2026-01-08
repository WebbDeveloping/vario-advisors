interface TransitionImageProps {
  position: "top" | "bottom";
  imageSrc: string;
  className?: string;
}

export default function TransitionImage({
  position,
  imageSrc,
  className = "",
}: TransitionImageProps) {
  const positionClasses =
    position === "top" ? "absolute top-0" : "absolute bottom-0";
  const objectPosition = position === "top" ? "object-top" : "object-bottom";

  return (
    <div
      className={`${positionClasses} left-0 right-0 w-full h-32 sm:h-40 lg:h-48 pointer-events-none ${className}`}
    >
      <img
        src={imageSrc}
        alt=""
        aria-hidden="true"
        className={`w-full h-full object-cover ${objectPosition}`}
      />
    </div>
  );
}
