import { Metadata } from "next";
import LadiesBottomShowcase from "@/components/ladies-bottom/LadiesBottomShowcase";

export const metadata: Metadata = {
  title: "Ladies Bottoms Collection",
  description:
    "Explore the Cluster Ladies Bottoms collection featuring Cluster Straight Pencil Pant, Laffer Pant, Short Top Pant, Comfort Parallel Loose Bottom, and Loose Bottom in up to 60 colours.",
  openGraph: {
    title: "Cluster Ladies Bottoms Collection",
    description:
      "Engineered comfort, 60 rich colours, colour lock technology, and inclusive sizes from S to 6XL.",
    images: [
      {
        url: "/ladies-bottom/Cluster straight pencil pant0.jpeg",
        width: 1200,
        height: 1200,
        alt: "Cluster Straight Pencil Pant",
      },
    ],
  },
};

export default function LadiesBottomPage() {
  return <LadiesBottomShowcase />;
}
