"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"order" | "partner">("order");
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const openModal = (type: "order" | "partner", product?: string) => {
    setModalType(type);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-lime selection:text-brand-dark">
      <Navbar onOpenModal={() => openModal("order")} />
      <Hero
        onOpenMenu={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
        onOpenPartner={() => openModal("partner")}
      />
      <MenuSection onOrder={(productName) => openModal("order", productName)} />
      <PartnerSection onPartner={() => openModal("partner")} />
      <Footer />

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
        prefilledProduct={selectedProduct}
      />
    </main>
  );
}
