import type { MedicalService } from "@/types/schema";

export const services: MedicalService[] = [
  {
    id: "s-protesis-cadera",
    slug: "cirugia-de-protesis-de-cadera",
    name: "Cirugía de Prótesis de Cadera",
    description:
      "Reemplazo quirúrgico de la articulación de la cadera dañada por un implante artificial, indicado cuando la artrosis u otra condición ha destruido el cartílago articular y causa dolor incapacitante.",
    longDescription:
      "La cirugía de prótesis de cadera (artroplastia total de cadera) consiste en remover las superficies articulares dañadas de la cadera —la cabeza del fémur y el acetábulo de la pelvis— y sustituirlas por componentes artificiales de materiales biocompatibles (metal, cerámica o polietileno de alta resistencia). Es uno de los procedimientos ortopédicos con mejores resultados funcionales a largo plazo, indicado principalmente en artrosis avanzada de cadera que ya no responde a tratamiento conservador, fracturas de cadera en adultos mayores, o necrosis avascular de la cabeza femoral.",
    type: "hospitalario",
    anesthesiaType: "General o regional (raquídea), según valoración anestésica",
    duration: "1.5 a 2.5 horas aproximadamente",
    recoveryTime: "3 a 6 semanas para retomar actividades básicas; recuperación funcional completa en 3 a 6 meses",
    isPainful: true,
    benefits: [
      "Elimina el dolor articular crónico de cadera",
      "Recupera el rango de movimiento perdido por el desgaste articular",
      "Permite retomar actividades de la vida diaria sin dolor",
      "Resultados funcionales duraderos a largo plazo",
    ],
    postOpRecommendations: [
      "Uso de andadera o bastón durante las primeras semanas",
      "Evitar cruzar las piernas y flexionar la cadera más allá de 90 grados al inicio",
      "Iniciar fisioterapia guiada apenas lo indique el equipo médico",
      "Acudir a las revisiones postoperatorias programadas",
    ],
    faqs: [
      {
        question: "¿Cuánto dura una prótesis de cadera?",
        answer:
          "Los implantes actuales tienen una vida útil promedio de 15 a 20 años o más, dependiendo del nivel de actividad del paciente, su peso corporal y el cuidado postoperatorio.",
      },
      {
        question: "¿Podré caminar normal después de la cirugía?",
        answer:
          "Sí. La gran mayoría de los pacientes recuperan una marcha normal sin dolor tras completar la rehabilitación, generalmente dentro de los primeros 3 a 6 meses posteriores a la cirugía.",
      },
    ],
    relatedConditions: ["d-artrosis"],
    image: "/images/services/cirugia-de-protesis-de-cadera.jpg",
    seo: {
      title: "Cirugía de Prótesis de Cadera | Dr. Esquinca",
      description:
        "Cirugía de reemplazo de cadera con el Dr. Miguel Ángel Esquinca, Traumatólogo y Ortopedista en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["prótesis de cadera", "reemplazo de cadera", "artroplastia de cadera", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-cirugia-rodilla",
    slug: "cirugia-de-rodilla",
    name: "Cirugía de Rodilla",
    description:
      "Procedimiento quirúrgico para tratar lesiones estructurales de la rodilla —fracturas, daño articular severo o reconstrucción tras una lesión mayor— que no pueden resolverse con artroscopia o tratamiento conservador.",
    longDescription:
      "La cirugía de rodilla abierta se indica en casos donde el daño articular o la fractura es demasiado extenso para resolverse por artroscopia: fracturas que afectan la superficie articular, reconstrucciones complejas de ligamentos múltiples, o reemplazo articular total o parcial cuando el desgaste de la rodilla es avanzado. El abordaje y la técnica se personalizan según el tipo de lesión, con el objetivo de restaurar la estabilidad y la función de la articulación.",
    type: "hospitalario",
    anesthesiaType: "General o regional, según el procedimiento específico",
    duration: "1 a 3 horas, según la complejidad",
    recoveryTime: "4 a 12 semanas según el procedimiento realizado",
    isPainful: true,
    benefits: [
      "Restaura la estabilidad estructural de la articulación",
      "Permite corregir lesiones que la artroscopia por sí sola no resuelve",
      "Reduce el riesgo de artrosis temprana tras una lesión mal consolidada",
      "Recupera la función para actividades cotidianas y, en muchos casos, deportivas",
    ],
    postOpRecommendations: [
      "Uso de inmovilizador o rodillera según indicación",
      "Apoyo progresivo de peso de acuerdo con el procedimiento realizado",
      "Fisioterapia estructurada desde las primeras semanas",
      "Evitar actividades de alto impacto hasta autorización médica",
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre cirugía de rodilla abierta y artroscopia?",
        answer:
          "La artroscopia usa pequeñas incisiones y una cámara para reparar daño articular específico, mientras que la cirugía abierta de rodilla se requiere cuando la lesión es más extensa, como fracturas articulares o reconstrucciones complejas que la artroscopia no puede resolver sola.",
      },
      {
        question: "¿Cuándo podré volver a caminar sin ayuda?",
        answer:
          "Depende del procedimiento específico: algunos pacientes caminan con apoyo parcial en días, mientras que reconstrucciones más complejas pueden requerir varias semanas de apoyo asistido antes de caminar sin ayuda.",
      },
    ],
    relatedConditions: ["d-lesiones-rodilla", "d-fracturas"],
    image: "/images/services/cirugia-de-rodilla.jpg",
    seo: {
      title: "Cirugía de Rodilla | Dr. Esquinca",
      description:
        "Cirugía de rodilla para fracturas y lesiones complejas con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["cirugía de rodilla", "fractura de rodilla", "traumatología", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-artroscopia-rodilla",
    slug: "artroscopia-de-rodilla",
    name: "Artroscopia de Rodilla",
    description:
      "Procedimiento mínimamente invasivo que permite diagnosticar y tratar lesiones de ligamentos, meniscos y cartílago de la rodilla a través de pequeñas incisiones y una cámara de video.",
    longDescription:
      "La artroscopia de rodilla utiliza una pequeña cámara (artroscopio) introducida a través de incisiones de apenas unos milímetros, lo que permite visualizar el interior de la articulación en una pantalla y realizar reparaciones precisas con instrumental especializado. Se utiliza para reparar o reconstruir el ligamento cruzado anterior, tratar lesiones de menisco, remover fragmentos de cartílago dañado y realizar limpieza articular en casos de artrosis seleccionados. Al ser mínimamente invasiva, implica menor dolor postoperatorio y una recuperación más rápida que la cirugía abierta.",
    type: "ambulatorio",
    anesthesiaType: "Regional (raquídea) o general, según el caso",
    duration: "45 minutos a 1.5 horas",
    recoveryTime: "2 a 6 semanas para actividades cotidianas; 4 a 9 meses para deporte de competencia tras reconstrucción ligamentaria",
    isPainful: true,
    benefits: [
      "Incisiones mínimas y cicatrices casi imperceptibles",
      "Menor dolor postoperatorio comparado con cirugía abierta",
      "Diagnóstico directo y tratamiento en el mismo procedimiento",
      "Recuperación más rápida que la cirugía tradicional",
    ],
    postOpRecommendations: [
      "Elevación y aplicación de hielo en las primeras 48-72 horas",
      "Uso de muletas según el procedimiento realizado",
      "Fisioterapia temprana para recuperar movilidad y fuerza",
      "Seguir el programa de retorno gradual a la actividad física",
    ],
    faqs: [
      {
        question: "¿La artroscopia de rodilla es ambulatoria?",
        answer:
          "En la mayoría de los casos sí: el paciente puede regresar a casa el mismo día del procedimiento, con indicaciones claras de cuidado postoperatorio y seguimiento en consulta.",
      },
      {
        question: "¿Qué lesiones se tratan con artroscopia de rodilla?",
        answer:
          "Principalmente lesiones de menisco, reconstrucción del ligamento cruzado anterior, limpieza de fragmentos de cartílago y, en algunos casos, aseo articular en artrosis en etapas tempranas a moderadas.",
      },
    ],
    relatedConditions: ["d-artrosis", "d-lesiones-deportivas", "d-lesiones-rodilla"],
    image: "/images/services/artroscopia-de-rodilla.jpg",
    seo: {
      title: "Artroscopia de Rodilla | Dr. Esquinca",
      description:
        "Artroscopia de rodilla mínimamente invasiva con el Dr. Miguel Ángel Esquinca, Traumatólogo y Ortopedista en Tuxtla Gutiérrez.",
      keywords: ["artroscopia de rodilla", "ligamento cruzado", "menisco", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-artroscopia-hombro",
    slug: "artroscopia-de-hombro",
    name: "Artroscopia de Hombro",
    description:
      "Procedimiento mínimamente invasivo para diagnosticar y reparar lesiones del manguito rotador, inestabilidad del hombro y otras lesiones articulares mediante pequeñas incisiones y cámara de video.",
    longDescription:
      "La artroscopia de hombro permite al cirujano explorar y reparar estructuras internas de la articulación —el manguito rotador, el labrum y los ligamentos de soporte— a través de incisiones mínimas, evitando el abordaje abierto tradicional. Se utiliza principalmente en lesiones deportivas del hombro, desgarros del manguito rotador por uso o edad, y episodios recurrentes de luxación con inestabilidad articular. La visualización directa de alta definición permite reparaciones precisas con menor daño a los tejidos circundantes.",
    type: "ambulatorio",
    anesthesiaType: "Regional (bloqueo de plexo braquial) o general",
    duration: "1 a 2 horas",
    recoveryTime: "4 a 6 semanas con inmovilización inicial; recuperación funcional completa en 4 a 6 meses",
    isPainful: true,
    benefits: [
      "Reparación precisa de lesiones del manguito rotador con mínima invasión",
      "Menor riesgo de complicaciones que la cirugía abierta de hombro",
      "Recuperación más rápida del rango de movimiento",
      "Reduce el riesgo de nuevas luxaciones en casos de inestabilidad",
    ],
    postOpRecommendations: [
      "Uso de cabestrillo según el tiempo indicado por el cirujano",
      "Evitar levantar peso con el brazo operado durante la fase inicial",
      "Fisioterapia progresiva guiada para recuperar movilidad sin forzar la reparación",
      "Seguimiento clínico para evaluar la cicatrización del tejido reparado",
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo debo usar el cabestrillo después de la cirugía?",
        answer:
          "Generalmente entre 3 y 6 semanas, dependiendo del tipo de reparación realizada; el cirujano ajusta este tiempo según la lesión específica y la evolución de cada paciente.",
      },
      {
        question: "¿Podré volver a levantar los brazos por encima de la cabeza?",
        answer:
          "Sí, en la mayoría de los casos se recupera el rango de movimiento completo tras seguir el programa de rehabilitación, aunque el ritmo de recuperación depende del tamaño y tipo de la lesión reparada.",
      },
    ],
    relatedConditions: ["d-lesiones-deportivas"],
    image: "/images/services/artroscopia-de-hombro.jpg",
    seo: {
      title: "Artroscopia de Hombro | Dr. Esquinca",
      description:
        "Artroscopia de hombro para manguito rotador e inestabilidad con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez.",
      keywords: ["artroscopia de hombro", "manguito rotador", "luxación de hombro", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-reemplazos-articulares",
    slug: "reemplazos-articulares",
    name: "Reemplazos Articulares",
    description:
      "Sustitución quirúrgica de una articulación dañada (rodilla, cadera u hombro) por un implante artificial, indicada cuando el desgaste articular severo causa dolor y limitación funcional importantes.",
    longDescription:
      "Los reemplazos articulares (artroplastias) sustituyen las superficies de una articulación severamente dañada por componentes protésicos de materiales biocompatibles. Se indican principalmente en artrosis avanzada y en secuelas de lesiones articulares severas no tratadas a tiempo, cuando el dolor y la limitación funcional afectan significativamente la calidad de vida del paciente y las medidas conservadoras ya no son suficientes. El objetivo es eliminar el dolor articular crónico y restaurar un rango de movimiento funcional.",
    type: "hospitalario",
    anesthesiaType: "General o regional, según el caso y la articulación a tratar",
    duration: "1.5 a 2.5 horas, según la articulación",
    recoveryTime: "6 semanas a 6 meses según la articulación reemplazada",
    isPainful: true,
    benefits: [
      "Elimina el dolor articular crónico que no responde a tratamiento conservador",
      "Restaura el rango de movimiento perdido por el desgaste severo",
      "Mejora significativamente la calidad de vida y la independencia funcional",
      "Resultados duraderos con los implantes actuales",
    ],
    postOpRecommendations: [
      "Fisioterapia estructurada desde los primeros días del postoperatorio",
      "Uso de ayudas para la marcha (andadera, bastón) según la etapa de recuperación",
      "Seguir las restricciones de movimiento indicadas según la articulación operada",
      "Acudir puntualmente a las revisiones postoperatorias programadas",
    ],
    faqs: [
      {
        question: "¿A qué edad se recomienda un reemplazo articular?",
        answer:
          "No hay una edad fija: la indicación depende del grado de dolor, la limitación funcional y la respuesta a tratamientos previos, no solamente de la edad del paciente.",
      },
      {
        question: "¿Los implantes articulares se sienten como la articulación original?",
        answer:
          "La mayoría de los pacientes recuperan un movimiento funcional sin dolor, aunque la sensación y el rango exacto pueden diferir ligeramente de la articulación natural; esto se explica en detalle antes de la cirugía según cada caso.",
      },
    ],
    relatedConditions: ["d-artrosis", "d-lesiones-rodilla"],
    image: "/images/services/reemplazos-articulares.jpg",
    seo: {
      title: "Reemplazos Articulares | Dr. Esquinca",
      description:
        "Cirugía de reemplazo articular con el Dr. Miguel Ángel Esquinca, Traumatólogo y Ortopedista en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["reemplazo articular", "prótesis", "artroplastia", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-cirugia-ortopedica",
    slug: "cirugia-ortopedica",
    name: "Cirugía Ortopédica",
    description:
      "Tratamiento quirúrgico general de lesiones y enfermedades del sistema musculoesquelético: fracturas, luxaciones, esguinces severos y deformidades del pie, entre otras condiciones traumatológicas y ortopédicas.",
    longDescription:
      "La cirugía ortopédica general abarca el tratamiento quirúrgico de una amplia variedad de lesiones y enfermedades del sistema musculoesquelético que no se clasifican dentro de un procedimiento más específico: fracturas que requieren reducción y fijación, luxaciones recurrentes, esguinces severos con inestabilidad, y deformidades como el pie plano sintomático. El objetivo siempre es restaurar la anatomía funcional de la zona afectada con la técnica más adecuada a cada caso.",
    type: "hospitalario",
    anesthesiaType: "General, regional o local, según el procedimiento específico",
    duration: "Variable según el procedimiento, de 30 minutos a 2 horas",
    recoveryTime: "Variable según el procedimiento, de 2 a 12 semanas",
    isPainful: true,
    benefits: [
      "Abordaje quirúrgico adaptado a la lesión específica de cada paciente",
      "Restaura la estabilidad y función de la zona afectada",
      "Previene complicaciones a largo plazo de fracturas o luxaciones mal tratadas",
      "Permite un plan de rehabilitación dirigido desde el postoperatorio inmediato",
    ],
    postOpRecommendations: [
      "Seguir las indicaciones específicas de inmovilización según el procedimiento",
      "Acudir a las revisiones radiográficas de control",
      "Iniciar rehabilitación en el momento indicado por el cirujano",
      "Reportar signos de alarma (fiebre, dolor que empeora, enrojecimiento) de inmediato",
    ],
    faqs: [
      {
        question: "¿Qué tipo de lesiones se tratan con cirugía ortopédica general?",
        answer:
          "Fracturas que requieren fijación quirúrgica, luxaciones recurrentes, esguinces severos con inestabilidad articular y deformidades como el pie plano sintomático, entre otras condiciones del sistema musculoesquelético.",
      },
      {
        question: "¿Cuándo se decide operar en vez de tratar de forma conservadora?",
        answer:
          "Cuando la lesión es inestable, no responde al tratamiento conservador, o existe riesgo de complicaciones a largo plazo (consolidación viciosa, inestabilidad crónica) si no se corrige quirúrgicamente.",
      },
    ],
    relatedConditions: ["d-fracturas", "d-luxaciones", "d-esguinces", "d-pie-plano"],
    image: "/images/services/cirugia-ortopedica.jpg",
    seo: {
      title: "Cirugía Ortopédica | Dr. Esquinca",
      description:
        "Cirugía ortopédica general con el Dr. Miguel Ángel Esquinca, Traumatólogo y Ortopedista en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["cirugía ortopédica", "traumatología", "fracturas", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-oncologia-ortopedica",
    slug: "oncologia-ortopedica",
    name: "Oncología Ortopédica",
    description:
      "Manejo especializado de tumores óseos y de tejidos blandos del sistema musculoesquelético, desde el diagnóstico con biopsia dirigida hasta el tratamiento quirúrgico de resección y reconstrucción.",
    longDescription:
      "La oncología ortopédica es una subespecialidad dentro de la traumatología y ortopedia enfocada en el diagnóstico y tratamiento de tumores óseos (benignos, malignos y metastásicos) y tumores de tejidos blandos (músculo, grasa, tejido conectivo) del sistema musculoesquelético. Requiere formación específica adicional porque combina principios oncológicos (márgenes quirúrgicos de resección, estadificación del tumor) con técnicas de reconstrucción ortopédica avanzada, buscando preservar la extremidad siempre que sea oncológicamente seguro hacerlo.",
    type: "hospitalario",
    anesthesiaType: "General, según el procedimiento",
    duration: "Variable, de 1 a varias horas según la extensión del tumor",
    recoveryTime: "Variable, varias semanas a meses según el procedimiento y el tratamiento oncológico asociado",
    isPainful: true,
    benefits: [
      "Diagnóstico preciso mediante biopsia dirigida antes de decidir el tratamiento",
      "Abordaje que combina seguridad oncológica con preservación funcional de la extremidad",
      "Seguimiento especializado a largo plazo tras el tratamiento",
      "Coordinación con oncología médica cuando el caso lo requiere",
    ],
    postOpRecommendations: [
      "Seguir el plan de vigilancia e imagenología periódica indicado",
      "Rehabilitación física progresiva según el procedimiento realizado",
      "Reportar de inmediato dolor nuevo, fiebre o inflamación en la zona operada",
      "Mantener las citas de seguimiento oncológico-ortopédico a largo plazo",
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre un ortopedista general y un oncólogo ortopédico?",
        answer:
          "El oncólogo ortopédico tiene formación adicional específica en el diagnóstico y tratamiento quirúrgico de tumores óseos y de tejidos blandos, incluyendo técnicas de resección oncológica y reconstrucción que van más allá de la ortopedia general.",
      },
      {
        question: "¿Siempre es necesaria la amputación en un tumor óseo?",
        answer:
          "No. Gracias a las técnicas actuales de reconstrucción (injerto óseo, endoprótesis oncológica), la mayoría de los casos se tratan con cirugía de preservación de la extremidad; la amputación se reserva para casos muy avanzados o de alto riesgo.",
      },
    ],
    relatedConditions: ["d-tumores-oseos", "d-displasia-fibrosa"],
    image: "/images/services/oncologia-ortopedica.jpg",
    seo: {
      title: "Oncología Ortopédica | Dr. Esquinca",
      description:
        "Oncología ortopédica: diagnóstico y tratamiento de tumores óseos con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["oncología ortopédica", "tumor óseo", "cirugía oncológica", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-reseccion-tumores-oseos",
    slug: "reseccion-de-tumores-oseos",
    name: "Resección de Tumores Óseos",
    description:
      "Remoción quirúrgica completa de un tumor óseo con márgenes de seguridad oncológica, paso fundamental en el tratamiento de tumores benignos agresivos y malignos del hueso.",
    longDescription:
      "La resección de tumores óseos consiste en remover quirúrgicamente el tejido tumoral junto con un margen de tejido sano circundante, determinado previamente mediante estudios de imagen y, en muchos casos, biopsia. El objetivo es eliminar por completo el tumor minimizando el riesgo de recurrencia local. Según la extensión del defecto óseo resultante, el procedimiento se complementa con reconstrucción mediante injerto óseo o endoprótesis oncológica en el mismo tiempo quirúrgico o en un segundo tiempo planeado.",
    type: "hospitalario",
    anesthesiaType: "General",
    duration: "2 a 5 horas según la extensión del tumor",
    recoveryTime: "Varias semanas a meses, dependiendo de la reconstrucción asociada",
    isPainful: true,
    benefits: [
      "Elimina el tumor con márgenes de seguridad oncológica",
      "Reduce significativamente el riesgo de recurrencia local",
      "Se planea junto con la reconstrucción para preservar la función de la extremidad",
      "Permite confirmación histopatológica definitiva del tipo de tumor",
    ],
    postOpRecommendations: [
      "Vigilancia estrecha de la cicatrización quirúrgica",
      "Seguimiento imagenológico periódico para descartar recurrencia",
      "Rehabilitación progresiva coordinada con el tipo de reconstrucción realizada",
      "Reportar de inmediato cualquier signo de infección o dolor nuevo",
    ],
    faqs: [
      {
        question: "¿Cómo se decide el margen de resección de un tumor óseo?",
        answer:
          "Se determina con base en estudios de imagen avanzados (resonancia magnética, tomografía) y el tipo de tumor confirmado por biopsia, buscando el equilibrio entre seguridad oncológica y preservación del tejido sano posible.",
      },
      {
        question: "¿Después de la resección siempre se necesita reconstrucción?",
        answer:
          "En la mayoría de los casos sí, especialmente cuando el defecto óseo resultante es grande; la reconstrucción puede ser con injerto óseo o con una endoprótesis oncológica, según la localización y extensión del tumor.",
      },
    ],
    relatedConditions: ["d-tumores-oseos"],
    image: "/images/services/reseccion-de-tumores-oseos.jpg",
    seo: {
      title: "Resección de Tumores Óseos | Dr. Esquinca",
      description:
        "Resección quirúrgica de tumores óseos con el Dr. Miguel Ángel Esquinca, especialista en Oncología Ortopédica en Tuxtla Gutiérrez.",
      keywords: ["resección de tumor óseo", "cirugía oncológica ósea", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-reconstruccion-osea-injerto",
    slug: "reconstruccion-osea-con-injerto",
    name: "Reconstrucción Ósea con Injerto",
    description:
      "Procedimiento para restaurar la estructura de un hueso debilitado o con un defecto, utilizando injerto óseo propio, de donador o sintético, tras la resección de un tumor o en zonas de hueso frágil.",
    longDescription:
      "La reconstrucción ósea con injerto se utiliza para rellenar y estabilizar defectos óseos resultantes de la resección de un tumor, zonas de hueso debilitado por displasia fibrosa, o fracturas con pérdida de hueso significativa. El injerto puede ser autólogo (del propio paciente, generalmente de la cadera), de banco de huesos (donador), o un sustituto óseo sintético, según el tamaño del defecto y las características del paciente. El objetivo es proporcionar un andamiaje que permita al hueso nuevo regenerarse y consolidar, restaurando la resistencia estructural de la zona.",
    type: "hospitalario",
    anesthesiaType: "General",
    duration: "1.5 a 3 horas según la extensión del injerto",
    recoveryTime: "3 a 6 meses para consolidación completa del injerto",
    isPainful: true,
    benefits: [
      "Restaura la resistencia estructural del hueso afectado",
      "Reduce el riesgo de fractura patológica en zonas debilitadas",
      "Permite la regeneración ósea natural sobre el andamiaje del injerto",
      "Se adapta al tamaño y localización específica del defecto óseo",
    ],
    postOpRecommendations: [
      "Restricción de carga de peso en la zona injertada según indicación médica",
      "Seguimiento radiográfico periódico para evaluar la consolidación del injerto",
      "Suplementación nutricional de apoyo a la consolidación ósea si se indica",
      "Evitar actividades de impacto hasta confirmar consolidación completa",
    ],
    faqs: [
      {
        question: "¿De dónde se obtiene el injerto óseo?",
        answer:
          "Puede ser del propio paciente (generalmente de la cresta ilíaca de la cadera), de banco de huesos de donador, o un sustituto óseo sintético, según el tamaño del defecto, la zona a reconstruir y las características de cada paciente.",
      },
      {
        question: "¿Cuánto tiempo tarda en consolidar un injerto óseo?",
        answer:
          "En general entre 3 y 6 meses, aunque puede variar según el tamaño del defecto, la localización y factores individuales del paciente como la edad y el estado nutricional.",
      },
    ],
    relatedConditions: ["d-displasia-fibrosa"],
    image: "/images/services/reconstruccion-osea-con-injerto.jpg",
    seo: {
      title: "Reconstrucción Ósea con Injerto | Dr. Esquinca",
      description:
        "Reconstrucción ósea con injerto con el Dr. Miguel Ángel Esquinca, especialista en Oncología Ortopédica en Tuxtla Gutiérrez.",
      keywords: ["injerto óseo", "reconstrucción ósea", "cirugía ortopédica", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-fijacion-fracturas",
    slug: "fijacion-de-fracturas",
    name: "Fijación de Fracturas (Osteosíntesis)",
    description:
      "Procedimiento quirúrgico que estabiliza un hueso fracturado mediante placas, tornillos o clavos, indicado en fracturas desplazadas o inestables que no pueden tratarse solo con inmovilización.",
    longDescription:
      "La osteosíntesis consiste en la reducción (alineación correcta) de los fragmentos de un hueso fracturado y su fijación mediante implantes metálicos —placas con tornillos, clavos intramedulares o fijadores externos— según el tipo de fractura y el hueso involucrado. Este abordaje permite una consolidación ósea en la posición correcta y, en muchos casos, una movilización más temprana que la inmovilización prolongada con yeso, reduciendo el riesgo de rigidez articular y otras complicaciones asociadas a la inmovilidad.",
    type: "hospitalario",
    anesthesiaType: "General o regional, según la fractura y el hueso afectado",
    duration: "1 a 3 horas según la complejidad de la fractura",
    recoveryTime: "6 a 12 semanas para consolidación; retorno gradual a actividad completa en 3 a 6 meses",
    isPainful: true,
    benefits: [
      "Permite la consolidación del hueso en la posición anatómica correcta",
      "Reduce el riesgo de consolidación viciosa comparado con la inmovilización sola",
      "Posibilita una movilización más temprana en muchos casos",
      "Disminuye el riesgo de rigidez articular prolongada",
    ],
    postOpRecommendations: [
      "Seguir el esquema de apoyo de peso indicado según el tipo de fijación",
      "Acudir a controles radiográficos periódicos de consolidación",
      "Iniciar rehabilitación en el momento indicado por el cirujano",
      "Vigilar signos de infección en la herida quirúrgica",
    ],
    faqs: [
      {
        question: "¿El material de osteosíntesis se retira después?",
        answer:
          "No siempre. En muchos casos las placas, tornillos o clavos pueden permanecer de forma permanente sin causar problemas; se retiran solo si generan molestia, en pacientes jóvenes con huesos en crecimiento, o por indicación específica del cirujano.",
      },
      {
        question: "¿Osteosíntesis es lo mismo que colocar un yeso?",
        answer:
          "No. El yeso inmoviliza el hueso desde afuera sin cirugía; la osteosíntesis es un procedimiento quirúrgico que fija el hueso desde adentro o con implantes, indicado cuando la fractura es inestable o está desplazada y el yeso solo no garantizaría una consolidación correcta.",
      },
    ],
    relatedConditions: ["d-fracturas", "d-osteoporosis"],
    image: "/images/services/fijacion-de-fracturas.jpg",
    seo: {
      title: "Fijación de Fracturas (Osteosíntesis) | Dr. Esquinca",
      description:
        "Osteosíntesis y fijación quirúrgica de fracturas con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["osteosíntesis", "fijación de fracturas", "placas y tornillos", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-endoprotesis-oncologica",
    slug: "endoprotesis-oncologica",
    name: "Endoprótesis Oncológica",
    description:
      "Implante articular especializado utilizado para reconstruir una articulación o segmento óseo completo tras la resección de un tumor óseo, preservando la función de la extremidad.",
    longDescription:
      "La endoprótesis oncológica es un implante diseñado específicamente para reemplazar un segmento óseo extenso, junto con la articulación correspondiente cuando es necesario, tras la resección quirúrgica de un tumor óseo. A diferencia de una prótesis articular convencional, estos implantes se diseñan para cubrir defectos óseos de mayor longitud, resultado de la resección oncológica, permitiendo que el paciente conserve la extremidad y recupere una función útil en lugar de requerir amputación.",
    type: "hospitalario",
    anesthesiaType: "General",
    duration: "3 a 6 horas según la extensión de la reconstrucción",
    recoveryTime: "Varios meses, con rehabilitación progresiva y seguimiento a largo plazo",
    isPainful: true,
    benefits: [
      "Permite preservar la extremidad en lugar de recurrir a la amputación",
      "Restaura la función articular en la zona reconstruida",
      "Diseño personalizado según la extensión del defecto óseo tras la resección",
      "Posibilita el retorno a actividades cotidianas con rehabilitación adecuada",
    ],
    postOpRecommendations: [
      "Rehabilitación física progresiva estrictamente guiada por el equipo médico",
      "Restricciones de carga de peso según el tipo de reconstrucción",
      "Seguimiento oncológico-ortopédico a largo plazo",
      "Vigilancia de signos de aflojamiento o infección del implante",
    ],
    faqs: [
      {
        question: "¿Una endoprótesis oncológica es igual a una prótesis articular normal?",
        answer:
          "No exactamente. Está diseñada para reemplazar segmentos óseos más extensos, resultado de la resección de un tumor, por lo que su diseño y planeación son más complejos que los de una prótesis articular convencional.",
      },
      {
        question: "¿Cuánto dura una endoprótesis oncológica?",
        answer:
          "Depende de factores como la edad del paciente, el nivel de actividad y la localización del implante; el seguimiento periódico a largo plazo permite detectar oportunamente si requiere algún ajuste o reemplazo en el futuro.",
      },
    ],
    relatedConditions: ["d-tumores-oseos"],
    image: "/images/services/endoprotesis-oncologica.jpg",
    seo: {
      title: "Endoprótesis Oncológica | Dr. Esquinca",
      description:
        "Endoprótesis oncológica para preservación de extremidad con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez.",
      keywords: ["endoprótesis oncológica", "reconstrucción ósea", "cirugía oncológica", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-artrodesis-columna",
    slug: "artrodesis-de-columna",
    name: "Artrodesis de Columna",
    description:
      "Procedimiento quirúrgico que fusiona dos o más vértebras para eliminar el movimiento doloroso entre ellas, indicado en inestabilidad de columna o hernias discales con compromiso neurológico persistente.",
    longDescription:
      "La artrodesis de columna (fusión vertebral) consiste en unir permanentemente dos o más vértebras mediante injerto óseo e implantes de fijación (tornillos y barras), eliminando el movimiento entre los segmentos fusionados. Se indica en casos de inestabilidad vertebral, hernias discales con déficit neurológico que no mejora con tratamiento conservador, o degeneración severa de la columna que causa dolor crónico incapacitante. Al eliminar el movimiento doloroso entre las vértebras afectadas, el objetivo es reducir el dolor y estabilizar la columna de forma definitiva.",
    type: "hospitalario",
    anesthesiaType: "General",
    duration: "2 a 4 horas según el número de niveles a fusionar",
    recoveryTime: "3 a 6 meses para consolidación de la fusión; retorno gradual a actividad completa",
    isPainful: true,
    benefits: [
      "Elimina el movimiento doloroso entre las vértebras afectadas",
      "Estabiliza la columna en casos de inestabilidad significativa",
      "Puede aliviar el compromiso neurológico asociado a compresión de raíces nerviosas",
      "Reduce el dolor crónico que no respondió a tratamiento conservador prolongado",
    ],
    postOpRecommendations: [
      "Uso de órtesis o faja lumbar según indicación del cirujano",
      "Evitar levantar objetos pesados durante el periodo de consolidación",
      "Fisioterapia progresiva una vez autorizada por el equipo médico",
      "Seguimiento radiográfico periódico de la fusión ósea",
    ],
    faqs: [
      {
        question: "¿La artrodesis de columna limita el movimiento de la espalda?",
        answer:
          "Fusiona únicamente los segmentos vertebrales operados, por lo que el resto de la columna conserva su movilidad. La mayoría de los pacientes recuperan una buena función para actividades cotidianas tras la rehabilitación.",
      },
      {
        question: "¿Es el último recurso para el dolor de espalda?",
        answer:
          "Generalmente sí: la artrodesis se reserva para casos donde el tratamiento conservador (fisioterapia, manejo del dolor, modificación de actividades) no fue suficiente, o existe inestabilidad o compromiso neurológico que lo justifica.",
      },
    ],
    relatedConditions: ["d-hernia-discal", "d-problemas-espalda"],
    image: "/images/services/artrodesis-de-columna.jpg",
    seo: {
      title: "Artrodesis de Columna | Dr. Esquinca",
      description:
        "Artrodesis y fusión vertebral con el Dr. Miguel Ángel Esquinca, Traumatólogo y Ortopedista en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["artrodesis de columna", "fusión vertebral", "cirugía de columna", "Tuxtla Gutiérrez"],
    },
  },
];
