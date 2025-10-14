"use client";
import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-full border-4 border-primary ${className}`}
      >
        <div className="text-center text-gray-500">
          <div className="text-2xl mb-2">👤</div>
          <p className="text-sm">Photo</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={ `object-cover ${className}` }
        onError={() => setHasError(true)}
      />
    </div>
  );
}
