/**
 * @section HeroSection
 * @description Section hero principale avec titre, CTA et mockup smartphone oblique
 * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=1:4
 */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

interface HeroSectionProps {
  mockupImage?: string;
}

const VIEWPORT = { once: true, margin: "-100px" };

export default function HeroSection({ mockupImage }: HeroSectionProps) {
  return (
    <>
      {/* ── DESKTOP (lg+) ──────────────────────────────────────── */}
      <section
        className="relative hidden lg:block"
        style={{
          height: "100vh",
          minHeight: "800px",
          background: "linear-gradient(160deg, #E00505 60%, #F9F9F9 60.1%)",
        }}
      >
        {/* Texte — aligné sur le container navbar */}
        <div className="container h-full flex items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col justify-center gap-6 w-[52%]"
          >
            {/* Pill Label */}
            <div className="inline-flex w-fit">
              <span
                className="font-karst font-light text-white/85 text-xs uppercase tracking-wider px-4 py-2 rounded-pill"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
              >
                Western Union · RIA · MoneyGram
              </span>
            </div>

            <h1 className="font-karst font-black text-5xl xl:text-6xl text-white leading-tight uppercase tracking-tight">
              <span className="block">ENVOYEZ RECEVEZ</span>
              <span className="block">EN TOUTE SÉCURITÉ.</span>
            </h1>

            <p className="font-karst font-light text-base text-white/85 max-w-sm leading-relaxed">
              Western Union, RIA, MoneyGram — un seul canal sécurisé pour toutes
              vos demandes de transfert international.
            </p>

            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: 0.3 }}
              className="flex gap-4 items-center"
            >
              <button
                type="button"
                className="font-karst font-bold text-brand-red uppercase tracking-wider text-sm bg-white rounded-pill px-7 py-4 border-none cursor-pointer"
                style={{ boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
              >
                Télécharger l&apos;app
              </button>
              <button
                type="button"
                className="font-karst font-bold text-white uppercase tracking-wider text-sm bg-transparent rounded-pill px-7 py-3.5 cursor-pointer"
                style={{ border: "2px solid rgba(255,255,255,0.7)" }}
              >
                Découvrir nos services
              </button>
            </motion.div>

            {/* Texte bas */}
            <p className="font-karst font-light text-white/70 text-xs mt-4">
              Disponible iOS &amp; Android — Gratuit
            </p>
          </motion.div>
        </div>

        {/* Image — absolute sur toute la moitié droite, grande sans contrainte */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          transition={{ delay: 0.2 }}
          className="absolute -top-60 -bottom-24 right-40 w-[52%] flex items-center justify-center pointer-events-none"
        >
          <div
            className="relative shrink-0"
            style={{
              width: "720px",
              height: "820px",
              transform: "rotate(12deg) translateX(60px) translateY(10px)",
            }}
          >
            <Image
              src={mockupImage || "/images/hero-mockup.png"}
              alt="ASMI Transfert App"
              fill
              className="object-contain pointer-events-none mt-15"
              priority
            />
          </div>
        </motion.div>

        {/* Éléments décoratifs */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none bg-white/5"
          style={{
            left: "-151px",
            top: "-119px",
            width: "526px",
            height: "678px",
            transform: "rotate(-15deg)",
          }}
        />
      </section>

      {/* ── MOBILE & TABLETTE (< lg) ──────────────────────────────────────── */}
      <section className="relative lg:hidden bg-brand-red px-6 py-12">
        {/* Conteneur avec padding intérieur */}
        <div className="w-full max-w-2xl mx-auto">
          {/* Texte */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col gap-5 mb-8"
          >
            {/* Pill Label */}
            <div className="inline-flex w-fit">
              <span
                className="font-karst font-light text-white/85 text-xs uppercase tracking-wider px-3 py-1.5 rounded-pill"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
              >
                Western Union · RIA · MoneyGram
              </span>
            </div>

            <h1 className="font-karst font-black text-3xl sm:text-4xl text-white leading-tight uppercase tracking-tight">
              <span className="block">ENVOYEZ RECEVEZ</span>
              <span className="block">EN TOUTE SÉCURITÉ.</span>
            </h1>

            <p className="font-karst font-light text-sm sm:text-base text-white/85 leading-relaxed">
              Western Union, RIA, MoneyGram — un seul canal sécurisé pour toutes
              vos demandes de transfert international.
            </p>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="font-karst font-bold text-brand-red uppercase tracking-wider text-xs bg-white rounded-pill px-5 py-3.5 border-none w-full cursor-pointer"
              >
                Télécharger l&apos;app
              </button>
              <button
                type="button"
                className="font-karst font-bold text-white uppercase tracking-wider text-xs bg-transparent rounded-pill px-5 py-3 w-full cursor-pointer"
                style={{ border: "2px solid rgba(255,255,255,0.7)" }}
              >
                Découvrir nos services
              </button>
            </div>

            {/* Texte bas */}
            <p className="font-karst font-light text-white/70 text-xs mt-2">
              Disponible iOS &amp; Android — Gratuit
            </p>
          </motion.div>

          {/* Image — en bas */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={{ delay: 0.2 }}
            className="relative w-full h-auto flex justify-center"
          >
            <div
              className="relative"
              style={{
                width: "100%",
                maxWidth: "400px",
                aspectRatio: "9/12",
              }}
            >
              <Image
                src={mockupImage || "/images/hero-mockup.png"}
                alt="ASMI Transfert App"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
