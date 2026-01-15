import Image from "next/image";
import { cn } from "@/lib/utils";

interface VarioIconProps {
  name: string;
  className?: string;
  size?: number;
  alt?: string;
  format?: "png" | "jpg";
}

/**
 * Reusable component for loading icons from /images/vario-icon-set/
 * Supports both PNG and JPG formats
 */
export default function VarioIcon({
  name,
  className,
  size = 24,
  alt,
  format = "png",
}: VarioIconProps) {
  const iconPath = `/images/vario-icon-set/${name}.${format}`;
  const iconAlt = alt || `${name} icon`;

  return (
    <Image
      src={iconPath}
      alt={iconAlt}
      width={size}
      height={size}
      className={cn("object-contain", className)}
      unoptimized
    />
  );
}
