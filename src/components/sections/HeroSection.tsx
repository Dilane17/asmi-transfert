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
        <div className="container h-full flex items-center pt-20">
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

            <h1
              className="font-karst font-bold text-white uppercase leading-tight"
              style={{
                fontSize: "clamp(56px, 5.5vw, 70px)",
                letterSpacing: "-3px",
              }}
            >
              ENVOYEZ.
              <br />
              RECEVEZ.
              <br />
              EN TOUTE SÉCURITÉ.
            </h1>

            <p className="font-karst font-light text-white/90 text-base leading-relaxed max-w-110">
              Fini les demandes par WhatsApp ou SMS. ASMI Transfert centralise
              vos transferts d&apos;argent internationaux en un seul endroit —
              rapide, traçable et 100% sécurisé.
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

      {/* ── MOBILE (< lg) ──────────────────────────────────────── */}
      <section className="relative overflow-hidden lg:hidden bg-brand-red pb-16">
        {/* Texte — côté gauche, largeur limitée pour laisser place à l'image */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative z-10 pt-16 px-6 flex flex-col gap-5 w-[60%]"
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

          <h1
            className="font-karst font-bold text-white uppercase leading-tight"
            style={{
              fontSize: "clamp(32px, 10vw, 52px)",
              letterSpacing: "-1.5px",
            }}
          >
            ENVOYEZ.
            <br />
            RECEVEZ.
            <br />
            EN TOUTE SÉCURITÉ.
          </h1>

          <p className="font-karst font-light text-white/90 text-xs leading-relaxed">
            Fini les demandes par WhatsApp ou SMS. ASMI Transfert centralise vos
            transferts d&apos;argent internationaux en un seul endroit — rapide,
            traçable et 100% sécurisé.
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
              Nos services
            </button>
          </div>

          {/* Texte bas */}
          <p className="font-karst font-light text-white/70 text-xs mt-2">
            Disponible iOS &amp; Android — Gratuit
          </p>
        </motion.div>

        {/* Image — ancrée au niveau du h1 (top-24 = pt-24) */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          transition={{ delay: 0.2 }}
          className="absolute top-24 -right-4 w-[52%] pointer-events-none"
          style={{ height: "58vw" }}
        >
          <div
            className="relative w-full h-full"
            style={{ transform: "rotate(12deg) translateX(8px)" }}
          >
            <Image
              src={mockupImage || "/images/hero-mockup.png"}
              alt="ASMI Transfert App"
              fill
              className="object-contain object-top pointer-events-none"
              priority
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
