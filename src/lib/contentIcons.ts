import {
  Activity,
  AlertTriangle,
  Bone,
  Droplets,
  Flame,
  Move,
  ShieldAlert,
  Sparkles,
  Thermometer,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Heurística de palabras clave → ícono contextual de lucide-react, propia de
 * este sitio (vocabulario de traumatología/ortopedia/oncología ortopédica),
 * para convertir listas con viñetas en grids de tarjetas con ícono
 * (AGENTS.md §1.2 — nunca el mismo ícono repetido en toda la lista).
 */
export function iconForText(text: string): LucideIcon {
  const t = text.toLowerCase();
  if (t.includes("fiebre") || t.includes("temperatura") || t.includes("calentura")) return Thermometer;
  if (t.includes("inflama") || t.includes("hinchaz")) return Flame;
  if (t.includes("hematoma") || t.includes("moretón") || t.includes("sangr")) return Droplets;
  if (t.includes("hormigueo") || t.includes("entumec") || t.includes("nervio")) return Zap;
  if (t.includes("rigid") || t.includes("limita") || t.includes("movimiento") || t.includes("bloqueo")) return Move;
  if (t.includes("deform") || t.includes("fractura") || t.includes("hueso")) return Bone;
  if (t.includes("urgenc") || t.includes("alarma") || t.includes("grave") || t.includes("esfínter")) return ShieldAlert;
  if (t.includes("riesgo") || t.includes("antecedente")) return AlertTriangle;
  if (t.includes("rehabilita") || t.includes("fisioterapia") || t.includes("recuper")) return Sparkles;
  return Activity;
}
