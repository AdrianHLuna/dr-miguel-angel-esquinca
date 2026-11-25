"use client";

import Image from "next/image";
import { useState } from "react";
import { Bone } from "lucide-react";
import { doctor } from "@/data";

interface DoctorPhotoProps {
  src?: string;
  alt: string;
}

/**
 * Foto del doctor para "Sobre el doctor" — ficha tipo "expediente clínico":
 * esquina superior derecha cortada en diagonal con una cinta de la
 * subespecialidad real cruzándola, SIN insignias flotantes alrededor
 * (reemplaza el mecanismo de bob compartido con otros sitios del registro
 * — AGENTS.md §1, hallazgo 2026-11-24). Forma distinta del hexágono del
 * Hero: rectángulo con un solo corte diagonal, no hexágono completo.
 */
export default function DoctorPhoto({ src, alt }: DoctorPhotoProps) {
  const [failed, setFailed] = useState(!src);

  return (
    <div className="relative">
      <div
        className="xray-card relative aspect-[4/5] overflow-hidden border border-border bg-muted"
        style={{ clipPath: "polygon(0 0, 78% 0, 100% 22%, 100% 100%, 0 100%)" }}
      >
        {failed ? (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15"
            role="img"
            aria-label={alt}
          >
            <Bone className="h-12 w-12 text-primary/50" aria-hidden="true" />
          </div>
        ) : (
          <Image
            src={src as string}
            alt={alt}
            fill
            className="object-cover object-[center_75%]"
            sizes="(max-width: 1024px) 100vw, 33vw"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {doctor.subspecialty && (
        <div
          aria-hidden="true"
          className="absolute right-0 top-[8%] flex -translate-y-1/2 translate-x-[22%] rotate-45 items-center justify-center bg-secondary px-10 py-1.5 text-center text-[10px] font-black uppercase tracking-wide text-secondary-foreground shadow-md"
        >
          {doctor.subspecialty}
        </div>
      )}
    </div>
  );
}
