interface MapFacadeProps {
  address: string;
  className?: string;
}

/**
 * Mapa real e interactivo desde la primera carga, sin `loading="lazy"`
 * (AGENTS.md §7 — reglas funcionales intactas). Tamaño/posición variados a
 * propósito (AGENTS.md §1, "Chrome persistente"): los últimos 3 sitios del
 * registro (Jaime, Ana Laura, Erwin) convergieron en "mapa contenido en
 * tarjeta junto a un riel de info" — este sitio rompe ese patrón a
 * propósito, regresando a mapa a sangre completa (ancho total), pero con
 * una proporción y un tratamiento de esquina distintos de los 5 sitios
 * genéricos que ya usaban `h-[60vh] ... md:h-[70vh]` totalmente redondeado:
 * aquí es más bajo (`h-[48vh] md:h-[58vh]`) y SOLO las esquinas superiores
 * están redondeadas (`rounded-t-[3rem]`), formando un "marco de placa
 * radiográfica" en vez de una tarjeta flotante completa.
 */
export default function MapFacade({ address, className = "" }: MapFacadeProps) {
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div className={`h-[48vh] w-full overflow-hidden rounded-t-[3rem] bg-muted md:h-[58vh] ${className}`}>
      <iframe
        src={mapsEmbedUrl}
        className="h-full w-full border-0"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación del consultorio"
      />
    </div>
  );
}
