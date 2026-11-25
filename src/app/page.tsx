import Link from "next/link";
import { doctor, diseases, services, symptoms } from "@/data";
import { generateHomeSchemas } from "@/lib/schemas";
import { formatCredentials } from "@/lib/credentials";
import StructuredData from "@/components/StructuredData";
import CardImageHeader from "@/components/CardImageHeader";
import HeroBlobPhoto from "@/components/HeroBlobPhoto";
import HeroFloatBadges from "@/components/HeroFloatBadges";
import DoctorPhoto from "@/components/DoctorPhoto";
import AnimatedStat from "@/components/AnimatedStat";
import CertificationHex from "@/components/CertificationHex";
import { Banknote, CreditCard, Landmark, MessageCircle, Phone } from "lucide-react";

const paymentIcons: Record<string, typeof Banknote> = {
  Efectivo: Banknote,
  Transferencia: Landmark,
  "Tarjeta de débito": CreditCard,
};

export default function Home() {
  const whatsappLink = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}. Me gustaría agendar una cita.`
  )}`;

  return (
    <>
      <StructuredData data={generateHomeSchemas()} />

      {/* Hero: split asimétrico con el retrato recortado en HEXÁGONO y un
          anillo del mismo hexágono rotando lentísimo (40s) alrededor — no
          blob orgánico, no insignias flotantes tipo bob (reemplazado por
          completo, AGENTS.md §1, hallazgo 2026-11-24). Etiqueta de
          certificación real superpuesta en el borde inferior del marco. */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-surface to-background px-4 py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              {doctor.specialistTitle} en {doctor.city}
            </span>
            <h1 className="font-heading mt-5 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Diagnóstico preciso para que recuperes tu movimiento
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">{doctor.philosophy}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Agendar por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="flex items-center gap-2 rounded-full border border-primary/30 px-7 py-4 font-semibold text-primary"
              >
                Ver ubicación y horario
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">{formatCredentials(doctor)}</p>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <HeroFloatBadges />
            <HeroBlobPhoto src="/images/hero.JPG" alt={`${doctor.title} ${doctor.name}`} />
          </div>
        </div>
      </section>

      {doctor.stats && doctor.stats.length > 0 && (
        <section aria-labelledby="stats-heading" className="border-y border-border bg-surface px-4 py-12">
          <h2 id="stats-heading" className="sr-only">
            Cifras del consultorio
          </h2>
          <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6 text-center">
            {doctor.stats.map((stat, i) => (
              <AnimatedStat key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="about-heading" className="px-4 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.6fr] md:items-start">
          <DoctorPhoto src="/images/aboutme.JPG" alt={`${doctor.title} ${doctor.name}`} />
          <div>
            <h2 id="about-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Sobre {doctor.title} {doctor.name}
            </h2>
            <p className="mt-4 text-muted-foreground">{doctor.bio}</p>
            <blockquote className="mt-6 border-l-2 border-primary/40 pl-4 text-sm italic text-muted-foreground">
              {doctor.philosophy}
            </blockquote>
            <p className="mt-4 text-xs text-muted-foreground">{formatCredentials(doctor)}</p>
          </div>
        </div>
      </section>

      {/* Certificaciones: panal hexagonal con desfase vertical alterno — no
          la tarjeta redonda+texto en lista/grid compartida por el resto del
          proyecto (AGENTS.md §1, hallazgo 2026-11-24). */}
      <section aria-labelledby="certifications-heading" className="bg-surface px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="certifications-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Certificaciones y Formación
          </h2>
          <div className="mt-12 flex flex-wrap items-start justify-center gap-x-6 gap-y-8">
            {doctor.certifications.map((cert, i) => (
              <CertificationHex
                key={`c-${i}`}
                name={cert.name}
                institution={cert.institution}
                year={cert.year}
                logoSrc={cert.logo}
                offset={i % 2 === 1}
              />
            ))}
            {doctor.education.map((ed, i) => (
              <CertificationHex
                key={`e-${i}`}
                name={ed.degree}
                institution={ed.institution}
                year={ed.year}
                logoSrc={ed.logo}
                offset={(doctor.certifications.length + i) % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="diseases-heading" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <h2 id="diseases-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Enfermedades que Atendemos
            </h2>
            <Link href="/enfermedades" className="shrink-0 text-sm font-semibold text-primary hover:underline">
              Ver todas
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diseases.slice(0, 6).map((disease, i) => (
              <article key={disease.id} className="group overflow-hidden rounded-[1.75rem] border border-border bg-background">
                <CardImageHeader src={disease.image} alt={disease.name} badge={i + 1} />
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground">{disease.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{disease.description.slice(0, 110)}…</p>
                  <Link
                    href={`/enfermedades/${disease.slug}`}
                    className="mt-4 flex items-center justify-between rounded-2xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
                  >
                    Ver guía médica
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="services-heading" className="bg-surface px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <h2 id="services-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Servicios
            </h2>
            <Link href="/servicios" className="shrink-0 text-sm font-semibold text-primary hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="mt-8 flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {services.map((service, i) => (
              <article
                key={service.id}
                className="group w-72 shrink-0 overflow-hidden rounded-[1.75rem] border border-border bg-background"
              >
                <CardImageHeader src={service.image} alt={service.name} badge={i + 1} />
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground">{service.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description.slice(0, 90)}…</p>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="mt-4 flex items-center justify-between rounded-2xl bg-secondary px-6 py-3.5 text-sm font-medium text-secondary-foreground"
                  >
                    Ver ficha
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="symptoms-heading" className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between gap-4">
            <h2 id="symptoms-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Síntomas
            </h2>
            <Link href="/sintomas" className="shrink-0 text-sm font-semibold text-primary hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {symptoms.map((symptom) => (
              <Link
                key={symptom.id}
                href={`/sintomas/${symptom.slug}`}
                className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/15"
              >
                {symptom.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Precio/Pago: sin dato real de precio para este doctor — en vez de
          omitir la sección (bug real corregido: la condición original
          ocultaba TODA la sección cuando no había precio/métodos, justo lo
          opuesto de la regla) o repetir la tarjeta centrada de otros
          sitios, banner diagonal con CTA directo a preguntar el costo por
          WhatsApp o llamada (AGENTS.md §1, hallazgo 2026-11-24: toda
          sección debe existir aunque falte el dato, con una forma propia). */}
      <section aria-labelledby="price-heading" className="bg-secondary px-4 py-16 text-secondary-foreground">
          <div
            className="mx-auto flex max-w-5xl flex-col items-center gap-6 border-2 border-dashed border-secondary-foreground/30 px-6 py-10 text-center md:flex-row md:justify-between md:text-left"
            style={{ clipPath: "polygon(0 0, 100% 3%, 100% 100%, 0 97%)" }}
          >
            <div>
              <h2 id="price-heading" className="font-heading text-2xl font-bold md:text-3xl">
                Precio de Consulta
              </h2>
              {doctor.consultationPrice > 1 ? (
                <p className="font-heading mt-3 text-4xl font-bold">${doctor.consultationPrice} MXN</p>
              ) : (
                <p className="mt-3 max-w-md text-secondary-foreground/80">
                  El costo varía según el diagnóstico y procedimiento. Escríbenos o llama para conocerlo antes de agendar.
                </p>
              )}
              {doctor.paymentMethods.length > 0 && (
                <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
                  {doctor.paymentMethods.map((method) => {
                    const Icon = paymentIcons[method] ?? Banknote;
                    return (
                      <span
                        key={method}
                        className="flex items-center gap-2 rounded-full border border-secondary-foreground/30 px-4 py-2 text-sm font-medium"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        {method}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-secondary shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Preguntar costo por WhatsApp
              </a>
              <a
                href={`tel:${doctor.phone}`}
                className="flex items-center justify-center gap-2 rounded-full border border-secondary-foreground/40 px-6 py-3.5 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Llamar al consultorio
              </a>
            </div>
          </div>
        </section>

      {/* CTA final: banner oscuro reutilizando la identidad real de este
          sitio (lightbox-grid + scan-sweep del Hero) en vez de los 2 blobs
          de luz difuminados en esquinas opuestas compartidos con otros
          sitios del proyecto. */}
      <section aria-labelledby="cta-heading" className="lightbox-grid relative overflow-hidden bg-hero-bg px-4 py-24 text-center text-hero-foreground">
        <div aria-hidden="true" className="animate-scan-sweep absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-hero-glow/25 to-transparent" />
        <div className="relative mx-auto max-w-2xl">
          <h2 id="cta-heading" className="font-heading text-2xl font-bold md:text-3xl">
            Agenda tu valoración traumatológica
          </h2>
          <p className="mt-3 text-hero-foreground/75">
            {doctor.title} {doctor.name} te atiende desde fracturas y lesiones deportivas hasta el manejo
            especializado de tumores óseos.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-hero-glow px-8 py-4 font-semibold text-hero-bg-deep shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Agendar Cita Ahora
          </a>
        </div>
      </section>
    </>
  );
}
