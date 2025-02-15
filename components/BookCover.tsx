import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import BookCoverSvg from "./BookCoverSvg";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

interface Props {
  className?: string;
  variant?: BookCoverVariant;
  color: string;
  cover: string;
}

const BookCover = ({
  className,
  variant = "regular",
  color = "#012B48",
  cover = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transtion-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      <BookCoverSvg coverColor={color} />
      <div
        className="z-10 absolute"
        style={{ width: "87.5%", height: "88%", left: "12%" }}
      >
        <Image
          src={cover}
          alt="cover"
          fill
          className="rounded-sm object-fill"
        />
      </div>
    </div>
  );
};

export default BookCover;
