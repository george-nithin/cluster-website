"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronUp, 
  ChevronDown, 
  ArrowLeft, 
  Sparkles,
  ShieldCheck,
  Palette
} from "lucide-react";
import { LADIES_BOTTOMS, LadiesBottomProduct } from "@/data/ladiesBottomsData";

export default function LadiesBottomShowcase() {
  const [productIndex, setProductIndex] = useState(0);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [thumbnailOffset, setThumbnailOffset] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const currentProduct: LadiesBottomProduct = LADIES_BOTTOMS[productIndex];

  // Reset selected photo when changing product
  useEffect(() => {
    setSelectedPhotoIndex(0);
    setThumbnailOffset(0);
    setImageLoaded(false);
  }, [productIndex]);

  const handlePrevProduct = () => {
    setProductIndex((prev) => (prev === 0 ? LADIES_BOTTOMS.length - 1 : prev - 1));
  };

  const handleNextProduct = () => {
    setProductIndex((prev) => (prev === LADIES_BOTTOMS.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        handlePrevProduct();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        handleNextProduct();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSelectedPhotoIndex((prev) => (prev > 0 ? prev - 1 : currentProduct.images.length - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setSelectedPhotoIndex((prev) => (prev < currentProduct.images.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentProduct.images.length]);

  // Thumbnail scrolling logic (showing 4 thumbnails window)
  const visibleThumbnailsCount = 4;
  const maxOffset = Math.max(0, currentProduct.images.length - visibleThumbnailsCount);

  const handleNextThumbnailPage = () => {
    setThumbnailOffset((prev) => Math.min(prev + 1, maxOffset));
  };

  const handlePrevThumbnailPage = () => {
    setThumbnailOffset((prev) => Math.max(prev - 1, 0));
  };

  const displayedThumbnails = currentProduct.images.slice(
    thumbnailOffset,
    thumbnailOffset + visibleThumbnailsCount
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans relative selection:bg-cluster-coral/20 selection:text-gray-900">
      
      {/* Top Breadcrumbs Strip */}
      <div className="w-full border-b border-gray-100 bg-white sticky top-[68px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link 
            href="/brands" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 hover:text-cluster-blue transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>House of Brands / Cluster</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
            <span className="hidden sm:inline">Collection</span>
            <span className="font-bold text-gray-900 uppercase">Ladies Bottoms</span>
          </div>
        </div>
      </div>

      {/* Dedicated Section Below Breadcrumbs: Product Switcher */}
      <section className="w-full border-b border-gray-200 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
            {LADIES_BOTTOMS.map((item, idx) => {
              const active = idx === productIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setProductIndex(idx)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 flex items-center gap-2 rounded-none border ${
                    active
                      ? "bg-cluster-blue text-white border-cluster-blue shadow-none"
                      : "bg-white text-gray-700 border-gray-200 hover:border-cluster-blue hover:text-cluster-blue"
                  }`}
                >
                  <span className={active ? "text-white/75 font-semibold" : "text-gray-400 font-semibold"}>
                    {item.number}
                  </span>
                  <span>{item.name.replace("Cluster ", "")}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Product Showcase Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center min-h-[600px]">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Product Information, Mentioned Sizes, Thumbnails */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 lg:pr-6">
            
            {/* Header / Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-black uppercase tracking-tight text-gray-950 leading-[1.05]">
                {currentProduct.name}
              </h1>

              {/* Price Display */}
              <div className="mt-3 flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {currentProduct.priceDisplay}
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                  {currentProduct.priceDetails}
                </span>
              </div>
            </div>

            {/* Product Short Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
              {currentProduct.description}
            </p>

            {/* Key Spec Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 bg-cluster-blue/10 text-cluster-blue px-3 py-1.5 rounded-full font-semibold">
                <Palette className="w-3.5 h-3.5" />
                {currentProduct.colorsCount} Colours Available
              </span>
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-full font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                Colour Lock Technology
              </span>
              <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                {currentProduct.fabric}
              </span>
            </div>

            {/* Bulleted Feature Highlights */}
            <div className="border-t border-b border-gray-100 py-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-600">
                {currentProduct.features.slice(0, 4).map((feat, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cluster-coral mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AVAILABLE SIZES (Mentioned clearly, no selection needed) */}
            <div className="space-y-2.5">
              <span className="text-xs font-black uppercase tracking-wider text-gray-900 block">
                Available Sizes
              </span>

              <div className="flex items-center gap-2 flex-wrap">
                {currentProduct.sizes.map((size) => (
                  <span
                    key={size}
                    className="min-w-[42px] h-[38px] px-3.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-900 border border-gray-200 flex items-center justify-center"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* THUMBNAIL CAROUSEL ROW */}
            <div className="pt-2">
              <div className="flex items-center gap-3">
                
                {/* Previous Thumbnails Arrow */}
                <button
                  onClick={handlePrevThumbnailPage}
                  disabled={thumbnailOffset === 0}
                  aria-label="Previous thumbnails"
                  className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-colors ${
                    thumbnailOffset === 0
                      ? "opacity-30 cursor-not-allowed text-gray-300"
                      : "text-gray-700 hover:border-gray-900 hover:text-gray-900"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* 4 Visible Thumbnails */}
                <div className="grid grid-cols-4 gap-2.5 flex-1">
                  {displayedThumbnails.map((imgSrc, relativeIdx) => {
                    const actualIdx = thumbnailOffset + relativeIdx;
                    const isActive = selectedPhotoIndex === actualIdx;
                    return (
                      <button
                        key={imgSrc}
                        onClick={() => setSelectedPhotoIndex(actualIdx)}
                        className={`relative aspect-[3/4] rounded-lg overflow-hidden border-2 transition-all duration-150 group bg-gray-50 ${
                          isActive
                            ? "border-gray-950"
                            : "border-transparent hover:border-gray-300 opacity-75 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={imgSrc}
                          alt={`${currentProduct.name} thumbnail ${actualIdx + 1}`}
                          fill
                          sizes="(max-width: 768px) 20vw, 10vw"
                          className="object-cover object-top"
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Next Thumbnails Arrow */}
                <button
                  onClick={handleNextThumbnailPage}
                  disabled={thumbnailOffset >= maxOffset}
                  aria-label="Next thumbnails"
                  className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-colors ${
                    thumbnailOffset >= maxOffset
                      ? "opacity-30 cursor-not-allowed text-gray-300"
                      : "text-gray-700 hover:border-gray-900 hover:text-gray-900"
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-gray-400 mt-2 px-1">
                <span>Angle {selectedPhotoIndex + 1} of {currentProduct.images.length}</span>
                <span>Click thumbnail to view angle</span>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Clean Hero Model Showcase */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-6 sm:py-10">
            
            {/* Clean Model Showcase Image */}
            <div className="relative z-10 w-full max-w-[420px] aspect-[3/4.2] sm:aspect-[3/4.4] rounded-2xl flex items-center justify-center">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src={currentProduct.images[selectedPhotoIndex] || currentProduct.images[0]}
                  alt={`${currentProduct.name} - Angle ${selectedPhotoIndex + 1}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 450px"
                  className={`object-contain object-center transition-opacity duration-300 ${
                    imageLoaded ? "opacity-100" : "opacity-90"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              {/* Photo Angle Badge */}
              <div className="absolute bottom-3 left-3 bg-gray-900/80 text-white text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full uppercase">
                Angle {selectedPhotoIndex + 1} / {currentProduct.images.length}
              </div>
            </div>

            {/* Slide Pagination & Stepper */}
            <div className="absolute right-0 sm:right-2 lg:-right-4 flex flex-col items-center gap-3 z-20">
              
              {/* Previous Product Button */}
              <button
                onClick={handlePrevProduct}
                aria-label="Previous product"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-gray-950 hover:text-white hover:border-gray-950 transition-colors duration-150 flex items-center justify-center text-gray-700"
              >
                <ChevronUp className="w-5 h-5" />
              </button>

              {/* Current slide number */}
              <span className="font-numbers text-xl sm:text-2xl font-black text-gray-950 tracking-tighter">
                {currentProduct.number}
              </span>

              {/* Vertical divider line */}
              <div className="w-[1.5px] h-8 bg-gray-300 rounded-full" />

              {/* Total slides number */}
              <span className="font-numbers text-xs font-bold text-gray-400">
                05
              </span>

              {/* Next Product Button */}
              <button
                onClick={handleNextProduct}
                aria-label="Next product"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-gray-950 hover:text-white hover:border-gray-950 transition-colors duration-150 flex items-center justify-center text-gray-700"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Catalog Strip: Quick View of All 5 Products */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-cluster-blue uppercase">Full Series</span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-gray-950 tracking-tight">
                Cluster Ladies Bottoms Collection
              </h2>
            </div>
            <div className="text-xs text-gray-500 font-medium hidden sm:block">
              5 Styles Engineered for Everyday Luxury
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {LADIES_BOTTOMS.map((item, idx) => {
              const isCurrent = idx === productIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setProductIndex(idx);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`text-left p-3 rounded-xl border transition-colors duration-200 flex flex-col group ${
                    isCurrent
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-900 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-gray-50 mb-3">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-cover object-top"
                    />
                    <span className={`absolute top-2 left-2 text-[10px] font-black px-2 py-0.5 rounded-full ${
                      isCurrent ? "bg-white text-gray-900" : "bg-black/70 text-white"
                    }`}>
                      {item.number}
                    </span>
                  </div>

                  <p className="text-xs font-black uppercase tracking-tight line-clamp-1">
                    {item.name.replace("Cluster ", "")}
                  </p>
                  <p className={`text-[11px] mt-1 font-bold ${isCurrent ? "text-cluster-coral" : "text-gray-900"}`}>
                    {item.priceDisplay}
                  </p>
                  <p className={`text-[10px] mt-0.5 line-clamp-1 ${isCurrent ? "text-gray-300" : "text-gray-500"}`}>
                    {item.fabric}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

      </main>

    </div>
  );
}
