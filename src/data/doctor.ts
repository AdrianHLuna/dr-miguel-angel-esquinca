import type { DoctorProfile } from "@/types/schema";

export const doctor: DoctorProfile = {
  name: "Miguel Ángel Esquinca Díaz",
  title: "Dr.",
  specialty: "Traumatología y Ortopedia",
  specialistTitle: "Traumatólogo y Ortopedista",
  subspecialty: "Oncología Ortopédica",
  cedula: "7082673",
  cedulaInstitucion: "UNACH",
  cedulaEspecialidad: "11496402",
  cedulaEspecialidadInstitucion: "UAEM",
  // Sin folio COFEPRIS confirmado todavía — formatCredentials() muestra
  // "cofepris:En trámite" en vez de omitirlo (AGENTS.md §3, regla absoluta).
  cofepris: undefined,
  phone: "+529611004834",
  whatsapp: "+529611004834",
  emergencyPhone: "+529611004834",
  // Email no confirmado por el doctor — placeholder solo para satisfacer el
  // schema (requerido por JSON-LD); nunca se muestra en la UI (AGENTS.md §9).
  email: "contacto@dr-miguel-angel-esquinca.com",
  address: "Médica Diamante, 2.° piso, 16a Poniente Norte 232, Col. Arboledas, Tuxtla Gutiérrez, Chiapas",
  city: "Tuxtla Gutiérrez",
  state: "Chiapas",
  country: "México",
  googleMapsUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "Médica Diamante, 16a Poniente Norte 232, Col. Arboledas, Tuxtla Gutiérrez, Chiapas"
    ),
  // Precio de consulta no proporcionado por el doctor — valor técnico
  // centinela (1), NUNCA inventado. Convención ya establecida en el proyecto
  // (ver dr-gregorio-arcos/dra-tania-diestel): todo consumidor real del
  // precio (Home, JSON-LD, llms.txt) hace guard con `consultationPrice > 1`
  // antes de mostrarlo, así que la sección de Precio y Forma de Pago no
  // aparece en este sitio hasta que el doctor confirme el dato real.
  consultationPrice: 1,
  paymentMethods: [],
  schedule: "Lunes a viernes 10:00am a 1:00pm y 4:30pm a 8:00pm. Sábados 10:00am a 2:00pm.",
  openingHours: ["Mo-Fr 10:00-13:00", "Mo-Fr 16:30-20:00", "Sa 10:00-14:00"],
  acceptingNewPatients: true,
  photo: "/images/hero.JPG",
  bio:
    "El Dr. Miguel Ángel Esquinca Díaz es Traumatólogo y Ortopedista con alta especialidad en Oncología Ortopédica, con consulta en Tuxtla Gutiérrez, Chiapas. A lo largo de más de 10 años de práctica clínica ha atendido a más de 6,000 pacientes y realizado más de 2,000 procedimientos y cirugías, con un enfoque particular en el diagnóstico y tratamiento quirúrgico de tumores óseos, fracturas complejas, lesiones articulares y enfermedades degenerativas del sistema musculoesquelético. Combina la cirugía ortopédica general (prótesis de cadera y rodilla, artroscopia, reemplazos articulares) con el manejo especializado de tumores óseos y displasia fibrosa, un área que requiere formación específica más allá de la ortopedia convencional. Está certificado por el Consejo Mexicano de Ortopedia y Traumatología, egresado de la Universidad Autónoma de Chiapas con formación en especialidad en el Hospital Regional ISSEMYM de la UAEM.",
  philosophy:
    "Cada lesión o enfermedad del sistema musculoesquelético tiene una causa identificable y un plan de tratamiento claro; mi papel es explicarlo con precisión antes de proponer cualquier intervención, para que el paciente decida con información real, no con incertidumbre.",
  experience: [],
  stats: [
    { label: "Pacientes atendidos", value: "+6,000" },
    { label: "Procedimientos realizados", value: "+2,000" },
    { label: "Años de experiencia", value: "+10" },
  ],
  certifications: [
    {
      name: "Certificado por el Consejo Mexicano de Ortopedia y Traumatología",
      institution: "Consejo Mexicano de Ortopedia y Traumatología",
      // Logo oficial real descargado de cmot.org.mx (AGENTS.md §6 — nunca un logo adivinado).
      logo: "/institution-logos/cmot.png",
    },
  ],
  education: [
    {
      degree: "Médico Cirujano",
      institution: "Universidad Autónoma de Chiapas",
      logo: "/institution-logos/unach.png",
    },
    {
      degree: "Especialidad en Traumatología y Ortopedia",
      institution: "Hospital Regional ISSEMYM — Universidad Autónoma del Estado de México",
    },
  ],
  testimonials: [],
  sameAs: [],
  ga4Id: undefined,
};
