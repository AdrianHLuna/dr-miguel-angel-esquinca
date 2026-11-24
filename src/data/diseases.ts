import type { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "d-tumores-oseos",
    slug: "tumores-oseos",
    name: "Tumores Óseos",
    technicalName: "Neoplasias Óseas Primarias y Metastásicas",
    colloquialNames: ["cáncer de hueso", "bulto en el hueso"],
    description:
      "Los tumores óseos son crecimientos anormales de tejido dentro o sobre un hueso. Pueden ser benignos (no se diseminan a otras partes del cuerpo) o malignos (cáncer óseo, que puede invadir tejido sano o diseminarse). También existen los tumores óseos metastásicos, que son cáncer originado en otro órgano (mama, próstata, pulmón, riñón) y que se extiende hasta el hueso. El diagnóstico oportuno mediante estudios de imagen y biopsia dirigida es determinante para definir si el tratamiento es solo quirúrgico, combinado con oncología médica, o ambos.",
    symptoms: [
      "Dolor óseo persistente, que puede empeorar por la noche",
      "Inflamación o bulto palpable sobre el hueso afectado",
      "Fractura con un traumatismo menor al esperado (fractura patológica)",
      "Fatiga y pérdida de peso no explicada en casos avanzados",
      "Fiebre de origen no claro",
    ],
    causes: [
      "Alteraciones genéticas en el crecimiento celular del tejido óseo",
      "Metástasis de un cáncer originado en otro órgano",
      "Antecedente de radioterapia previa en la zona",
      "Enfermedades óseas benignas preexistentes que degeneran en malignidad (poco frecuente)",
    ],
    riskFactors: [
      "Antecedente familiar de cáncer óseo",
      "Exposición previa a radioterapia",
      "Enfermedad de Paget ósea en adultos mayores",
      "Síndromes genéticos hereditarios asociados a cáncer",
    ],
    mexicoStats:
      "Los tumores óseos primarios son poco frecuentes en comparación con otros tipos de cáncer, pero representan una proporción importante del cáncer diagnosticado en niños, adolescentes y adultos jóvenes en México, lo que hace crítico el diagnóstico oportuno en este grupo de edad.",
    complications: [
      "Fractura patológica del hueso afectado",
      "Diseminación a otros órganos, principalmente pulmón",
      "Pérdida de función de la extremidad afectada si el diagnóstico se retrasa",
      "Necesidad de amputación en casos muy avanzados o de respuesta tardía",
    ],
    treatments: [
      "Resección quirúrgica del tumor con márgenes oncológicos seguros",
      "Reconstrucción ósea con injerto o endoprótesis oncológica tras la resección",
      "Manejo combinado con oncología médica cuando el tumor lo requiere",
      "Seguimiento clínico e imagenológico periódico tras el tratamiento",
    ],
    faqs: [
      {
        question: "¿Todo tumor óseo es cáncer?",
        answer:
          "No. La mayoría de los tumores óseos diagnosticados son benignos. El diagnóstico diferencial entre un tumor benigno y uno maligno requiere estudios de imagen específicos y, en muchos casos, una biopsia guiada antes de decidir el tratamiento.",
      },
      {
        question: "¿Cómo se diferencia un tumor óseo primario de uno metastásico?",
        answer:
          "Un tumor óseo primario se origina directamente en el hueso; uno metastásico es cáncer de otro órgano que se disemina hasta el hueso. El abordaje diagnóstico y el tratamiento son distintos, por lo que siempre se investiga si existe un cáncer previo en otro órgano.",
      },
      {
        question: "¿Siempre se necesita cirugía para tratar un tumor óseo?",
        answer:
          "No siempre. Algunos tumores benignos solo requieren vigilancia periódica. Cuando sí se requiere cirugía, el objetivo es remover el tumor por completo y, en los casos oncológicos, reconstruir el hueso para preservar la función de la extremidad siempre que sea clínicamente posible.",
      },
    ],
    relatedServices: ["s-reseccion-tumores-oseos", "s-oncologia-ortopedica", "s-endoprotesis-oncologica"],
    relatedSymptoms: ["sy-dolor-articular", "sy-inflamacion", "sy-deformacion-zona", "sy-fiebre"],
    image: "/images/diseases/tumores-oseos.jpg",
    seo: {
      title: "Tumores Óseos | Dr. Esquinca",
      description:
        "Diagnóstico y tratamiento de tumores óseos benignos, malignos y metastásicos con el Dr. Esquinca, especialista en Oncología Ortopédica en Tuxtla Gutiérrez.",
      keywords: ["tumor óseo", "oncología ortopédica", "cáncer de hueso", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-fracturas",
    slug: "fracturas",
    name: "Fracturas",
    technicalName: "Fracturas Óseas",
    colloquialNames: ["hueso roto", "hueso quebrado"],
    description:
      "Una fractura es la pérdida de continuidad de un hueso, ya sea por un traumatismo directo (caída, accidente, golpe deportivo) o por debilidad previa del hueso (fractura patológica, común en osteoporosis o tumores óseos). El manejo depende del tipo, la localización y el grado de desplazamiento: algunas se tratan con inmovilización, mientras que otras requieren reducción quirúrgica y fijación interna con placas, tornillos o clavos para asegurar una consolidación correcta.",
    symptoms: [
      "Dolor intenso e inmediato tras el traumatismo",
      "Inflamación y deformidad visible en la zona",
      "Imposibilidad o dificultad marcada para mover la extremidad",
      "Hematoma en el área afectada",
      "En casos abiertos, exposición del hueso a través de la piel",
    ],
    causes: [
      "Caídas y accidentes automovilísticos",
      "Traumatismos deportivos de alto impacto",
      "Fragilidad ósea previa (osteoporosis, tumores óseos)",
      "Accidentes laborales",
    ],
    riskFactors: [
      "Osteoporosis o baja densidad ósea",
      "Práctica de deportes de contacto o alto impacto",
      "Edad avanzada con riesgo de caídas",
      "Actividades laborales de riesgo (altura, maquinaria)",
    ],
    complications: [
      "Consolidación viciosa (el hueso suelda en mala posición)",
      "Retardo o ausencia de consolidación (pseudoartrosis)",
      "Infección en fracturas abiertas",
      "Rigidez articular prolongada si no hay rehabilitación oportuna",
    ],
    treatments: [
      "Inmovilización con yeso o férula en fracturas estables",
      "Fijación de fracturas con placas y tornillos (osteosíntesis) en fracturas desplazadas",
      "Colocación de clavos intramedulares en fracturas de huesos largos",
      "Rehabilitación física una vez retirada la inmovilización",
    ],
    faqs: [
      {
        question: "¿Todas las fracturas necesitan cirugía?",
        answer:
          "No. Muchas fracturas estables y sin desplazamiento se tratan con inmovilización (yeso o férula) y seguimiento radiográfico. La cirugía se indica cuando el hueso está desplazado, es inestable o hay riesgo de que no consolide correctamente sin fijación interna.",
      },
      {
        question: "¿Cuánto tarda en sanar una fractura?",
        answer:
          "El tiempo varía según el hueso afectado, la edad del paciente y el tipo de fractura: en general va de 4 a 8 semanas para huesos pequeños y hasta 3 a 6 meses para huesos largos o fracturas complejas, seguido de un periodo de rehabilitación.",
      },
      {
        question: "¿Qué diferencia hay entre una fractura cerrada y una abierta?",
        answer:
          "En una fractura cerrada la piel permanece intacta; en una fractura abierta el hueso rompe la piel y queda expuesto, lo que aumenta el riesgo de infección y generalmente requiere cirugía urgente.",
      },
    ],
    relatedServices: ["s-fijacion-fracturas", "s-cirugia-ortopedica", "s-cirugia-rodilla"],
    relatedSymptoms: ["sy-deformacion-zona", "sy-inflamacion", "sy-dolor-articular", "sy-hematoma"],
    image: "/images/diseases/fracturas.jpg",
    seo: {
      title: "Fracturas | Dr. Esquinca",
      description:
        "Tratamiento de fracturas óseas con el Dr. Miguel Ángel Esquinca, Traumatólogo y Ortopedista en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["fracturas", "hueso roto", "traumatología", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-osteoporosis",
    slug: "osteoporosis",
    name: "Osteoporosis",
    technicalName: "Osteoporosis",
    colloquialNames: ["huesos débiles", "descalcificación de huesos"],
    description:
      "La osteoporosis es una enfermedad en la que los huesos pierden densidad y resistencia de forma progresiva, volviéndose porosos y frágiles. Es especialmente frecuente en mujeres después de la menopausia y en adultos mayores, y su principal riesgo es la fractura patológica: un hueso osteoporótico puede fracturarse con un golpe o caída que normalmente no causaría daño. La enfermedad no suele dar síntomas hasta que ocurre una fractura, por lo que el tamizaje con densitometría ósea es clave en pacientes de riesgo.",
    symptoms: [
      "Generalmente asintomática hasta la primera fractura",
      "Dolor de espalda por microfracturas vertebrales",
      "Pérdida de estatura con el tiempo",
      "Postura encorvada progresiva",
    ],
    causes: [
      "Disminución de hormonas (estrógeno en la menopausia, testosterona)",
      "Déficit prolongado de calcio y vitamina D",
      "Envejecimiento natural del tejido óseo",
      "Uso prolongado de ciertos medicamentos (corticoesteroides)",
    ],
    riskFactors: [
      "Sexo femenino y menopausia",
      "Edad mayor de 50 años",
      "Antecedente familiar de osteoporosis o fracturas",
      "Sedentarismo y bajo consumo de calcio",
      "Tabaquismo y consumo elevado de alcohol",
    ],
    mexicoStats:
      "La osteoporosis afecta a una proporción significativa de la población mexicana mayor de 50 años, particularmente mujeres posmenopáusicas, y es responsable de una parte importante de las fracturas de cadera atendidas en servicios de traumatología en adultos mayores.",
    complications: [
      "Fractura de cadera, una de las más graves por su impacto en la movilidad",
      "Fracturas vertebrales por compresión",
      "Fractura de muñeca por caídas",
      "Pérdida de independencia funcional tras una fractura mayor",
    ],
    treatments: [
      "Suplementación de calcio y vitamina D según indicación médica",
      "Ejercicio de carga y fortalecimiento muscular supervisado",
      "Fijación quirúrgica si ya ocurrió una fractura",
      "Medidas de prevención de caídas en el hogar",
    ],
    faqs: [
      {
        question: "¿La osteoporosis causa dolor?",
        answer:
          "Por sí sola, generalmente no. El dolor suele aparecer cuando ya ocurrió una fractura, muchas veces vertebral, que puede pasar inadvertida hasta que se presenta dolor de espalda o pérdida de estatura.",
      },
      {
        question: "¿A qué edad debo hacerme una densitometría ósea?",
        answer:
          "En general se recomienda a partir de los 50-65 años, antes si hay factores de riesgo como menopausia temprana, antecedente familiar de fracturas o uso prolongado de corticoesteroides. Tu médico puede orientarte sobre el momento adecuado según tu historia.",
      },
      {
        question: "¿La osteoporosis tiene cura?",
        answer:
          "No se revierte por completo, pero sí se puede frenar su progresión y reducir significativamente el riesgo de fractura con tratamiento médico, ejercicio adecuado y medidas de prevención de caídas.",
      },
    ],
    relatedServices: ["s-fijacion-fracturas"],
    relatedSymptoms: ["sy-huesos-fragiles", "sy-dolor-espalda"],
    image: "/images/diseases/osteoporosis.jpg",
    seo: {
      title: "Osteoporosis | Dr. Esquinca",
      description:
        "Diagnóstico y manejo de osteoporosis con el Dr. Miguel Ángel Esquinca, Traumatólogo y Ortopedista en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["osteoporosis", "huesos frágiles", "fractura de cadera", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-artrosis",
    slug: "artrosis",
    name: "Artrosis",
    technicalName: "Osteoartritis / Osteoartrosis",
    colloquialNames: ["desgaste de articulaciones", "reumas"],
    description:
      "La artrosis es una enfermedad degenerativa en la que el cartílago que recubre y protege las articulaciones se desgasta progresivamente, provocando que los huesos friccionen entre sí. Afecta con mayor frecuencia rodillas, caderas y columna, y su principal causa es el uso acumulado a lo largo de los años combinado con factores como el peso corporal y lesiones articulares previas. Es una de las causas más comunes de dolor articular crónico en adultos mayores de 50 años.",
    symptoms: [
      "Dolor articular que empeora con la actividad y mejora con el reposo",
      "Rigidez matutina de menos de 30 minutos",
      "Crepitación o chasquidos al mover la articulación",
      "Disminución progresiva del rango de movimiento",
    ],
    causes: [
      "Desgaste acumulado del cartílago articular con la edad",
      "Sobrecarga articular por exceso de peso corporal",
      "Lesiones articulares previas (fracturas, lesiones de ligamentos)",
      "Predisposición genética",
    ],
    riskFactors: [
      "Edad mayor de 50 años",
      "Sobrepeso u obesidad",
      "Antecedente de lesión o cirugía articular previa",
      "Actividades laborales con carga repetitiva sobre la articulación",
    ],
    complications: [
      "Pérdida progresiva de movilidad articular",
      "Deformidad articular visible en etapas avanzadas",
      "Dolor crónico que limita actividades cotidianas",
      "Necesidad de reemplazo articular en casos severos",
    ],
    treatments: [
      "Manejo del peso corporal y fortalecimiento muscular alrededor de la articulación",
      "Fisioterapia para preservar el rango de movimiento",
      "Artroscopia en casos seleccionados para aseo articular",
      "Reemplazo articular (prótesis) cuando el desgaste es severo y limita la función",
    ],
    faqs: [
      {
        question: "¿Artrosis y artritis son lo mismo?",
        answer:
          "No. La artrosis es desgaste mecánico del cartílago asociado principalmente a la edad y el uso; la artritis es inflamación articular de origen autoinmune o infeccioso. El tratamiento de cada una es distinto, por eso el diagnóstico diferencial es importante.",
      },
      {
        question: "¿La artrosis siempre termina en cirugía de reemplazo articular?",
        answer:
          "No. La mayoría de los casos se manejan con control de peso, fortalecimiento muscular y fisioterapia. La cirugía de reemplazo se reserva para cuando el dolor y la limitación funcional son severos y no responden a tratamiento conservador.",
      },
      {
        question: "¿Hacer ejercicio empeora la artrosis?",
        answer:
          "Al contrario: el ejercicio de bajo impacto y el fortalecimiento muscular alrededor de la articulación ayudan a reducir el dolor y preservar la función. Lo que sí debe evitarse es el ejercicio de alto impacto sin supervisión en articulaciones ya dañadas.",
      },
    ],
    relatedServices: ["s-reemplazos-articulares", "s-artroscopia-rodilla", "s-protesis-cadera"],
    relatedSymptoms: ["sy-dolor-articular", "sy-rigidez-deformidad-articular", "sy-limitacion-movimientos"],
    image: "/images/diseases/artrosis.jpg",
    seo: {
      title: "Artrosis | Dr. Esquinca",
      description:
        "Diagnóstico y tratamiento de artrosis de rodilla y cadera con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["artrosis", "desgaste de articulaciones", "osteoartritis", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-displasia-fibrosa",
    slug: "displasia-fibrosa",
    name: "Displasia Fibrosa",
    technicalName: "Displasia Fibrosa Ósea",
    colloquialNames: [],
    description:
      "La displasia fibrosa es una enfermedad ósea benigna poco frecuente en la que el tejido óseo normal es reemplazado gradualmente por tejido fibroso, lo que debilita el hueso afectado y puede provocar deformidad, dolor o fracturas. Puede afectar un solo hueso (forma monostótica, la más común) o varios huesos a la vez (forma poliostótica). Aunque es benigna, requiere seguimiento especializado porque en una proporción pequeña de casos puede causar deformidad progresiva o, en muy raras ocasiones, degenerar.",
    symptoms: [
      "Dolor óseo localizado, de intensidad variable",
      "Deformidad progresiva del hueso afectado",
      "Fractura con traumatismo menor (fractura patológica)",
      "Asimetría visible cuando afecta huesos de la cara o extremidades",
    ],
    causes: [
      "Mutación genética no hereditaria que afecta el desarrollo del tejido óseo (causa principal conocida)",
      "No se asocia a factores de estilo de vida ni se transmite de padres a hijos en la mayoría de los casos",
    ],
    riskFactors: [
      "Suele manifestarse en la infancia o adolescencia",
      "En su forma poliostótica puede asociarse a otras alteraciones endocrinas (síndrome de McCune-Albright)",
    ],
    complications: [
      "Deformidad progresiva del hueso afectado",
      "Fracturas patológicas recurrentes",
      "Compresión de estructuras vecinas si afecta huesos del cráneo o la cara",
      "Degeneración maligna, poco frecuente pero posible en casos de larga evolución",
    ],
    treatments: [
      "Vigilancia clínica e imagenológica periódica en casos estables",
      "Reconstrucción ósea con injerto en zonas debilitadas o deformadas",
      "Fijación quirúrgica si ya hay fractura o riesgo alto de fractura",
      "Manejo del dolor con medidas no farmacológicas y bajo indicación médica",
    ],
    faqs: [
      {
        question: "¿La displasia fibrosa es cáncer?",
        answer:
          "No. Es una enfermedad ósea benigna. La transformación maligna existe como posibilidad, pero es poco frecuente y generalmente ocurre tras muchos años de evolución, lo que justifica el seguimiento especializado a largo plazo.",
      },
      {
        question: "¿Se puede curar la displasia fibrosa?",
        answer:
          "No existe una cura que elimine el tejido fibroso ya formado, pero sí se puede controlar su impacto: prevenir fracturas, corregir deformidades y preservar la función del hueso afectado mediante cirugía reconstructiva cuando es necesario.",
      },
      {
        question: "¿Afecta solo a niños?",
        answer:
          "Suele diagnosticarse en la infancia o adolescencia, pero el seguimiento y manejo continúan en la vida adulta, ya que el hueso afectado puede seguir siendo frágil o deformarse con el tiempo.",
      },
    ],
    relatedServices: ["s-reconstruccion-osea-injerto", "s-oncologia-ortopedica"],
    relatedSymptoms: ["sy-dolor-articular", "sy-deformacion-zona", "sy-huesos-fragiles"],
    image: "/images/diseases/displasia-fibrosa.jpg",
    seo: {
      title: "Displasia Fibrosa | Dr. Esquinca",
      description:
        "Diagnóstico y tratamiento de displasia fibrosa ósea con el Dr. Miguel Ángel Esquinca, especialista en Oncología Ortopédica en Tuxtla Gutiérrez.",
      keywords: ["displasia fibrosa", "enfermedad ósea benigna", "oncología ortopédica"],
    },
  },
  {
    id: "d-lesiones-deportivas",
    slug: "lesiones-deportivas",
    name: "Lesiones Deportivas",
    technicalName: "Lesiones Musculoesqueléticas de Origen Deportivo",
    colloquialNames: ["lesión de cancha", "lesión al entrenar"],
    description:
      "Las lesiones deportivas abarcan un amplio grupo de daños al sistema musculoesquelético ocasionados durante la práctica de ejercicio o deporte: desde esguinces y desgarros musculares hasta lesiones de ligamentos y meniscos en la rodilla o el hombro. Pueden ser agudas (un solo evento traumático, como una torcedura) o por sobreuso (microtraumatismos repetidos sin suficiente recuperación). El manejo oportuno reduce el riesgo de lesiones crónicas o recurrentes y acelera el regreso seguro a la actividad física.",
    symptoms: [
      "Dolor articular de inicio súbito durante o después del ejercicio",
      "Inflamación inmediata en la zona lesionada",
      "Hematoma visible en lesiones de mayor severidad",
      "Sensación de inestabilidad articular (rodilla u hombro que 'falla')",
    ],
    causes: [
      "Traumatismo directo durante la práctica deportiva",
      "Movimientos de torsión o cambio brusco de dirección",
      "Sobreuso sin periodos adecuados de recuperación",
      "Técnica deportiva inadecuada o falta de calentamiento",
    ],
    riskFactors: [
      "Deportes de contacto o alto impacto (fútbol, básquetbol, artes marciales)",
      "Falta de calentamiento previo al ejercicio",
      "Lesión articular previa en la misma zona",
      "Entrenamiento con carga o intensidad superior a la condición física actual",
    ],
    complications: [
      "Lesión crónica o recurrente si no se trata adecuadamente",
      "Inestabilidad articular persistente",
      "Desarrollo de artrosis temprana en la articulación lesionada",
      "Limitación prolongada para volver a la práctica deportiva",
    ],
    treatments: [
      "Reposo relativo y control de la inflamación en la fase aguda",
      "Artroscopia de rodilla o de hombro en lesiones de ligamentos o meniscos",
      "Rehabilitación física dirigida a recuperar fuerza y estabilidad",
      "Programa gradual de retorno a la actividad deportiva",
    ],
    faqs: [
      {
        question: "¿Toda lesión deportiva necesita cirugía?",
        answer:
          "No. La mayoría de los esguinces y lesiones musculares leves se resuelven con reposo, control de la inflamación y rehabilitación. La cirugía se reserva para lesiones de ligamentos o meniscos con inestabilidad significativa o que no mejoran con tratamiento conservador.",
      },
      {
        question: "¿Cuándo debo acudir al traumatólogo después de una lesión deportiva?",
        answer:
          "Si hay dolor intenso, imposibilidad de apoyar la extremidad, sensación de inestabilidad articular, o inflamación que no mejora en 48-72 horas, es momento de una valoración especializada para descartar una lesión mayor.",
      },
      {
        question: "¿Puedo volver a entrenar aunque todavía me duela un poco?",
        answer:
          "No se recomienda. Regresar a la actividad antes de completar la recuperación aumenta significativamente el riesgo de una nueva lesión, a veces más severa que la original.",
      },
    ],
    relatedServices: ["s-artroscopia-rodilla", "s-artroscopia-hombro"],
    relatedSymptoms: ["sy-dolor-articular", "sy-inflamacion", "sy-hematoma"],
    image: "/images/diseases/lesiones-deportivas.jpg",
    seo: {
      title: "Lesiones Deportivas | Dr. Esquinca",
      description:
        "Diagnóstico y tratamiento de lesiones deportivas de rodilla y hombro con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["lesiones deportivas", "lesión de rodilla", "lesión de hombro", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-luxaciones",
    slug: "luxaciones",
    name: "Luxaciones",
    technicalName: "Luxación Articular",
    colloquialNames: ["hueso zafado", "articulación salida de lugar"],
    description:
      "Una luxación ocurre cuando los huesos que forman una articulación se desplazan de su posición normal, perdiendo el contacto articular habitual. Es distinta de una fractura, aunque ambas pueden coexistir. Las articulaciones más afectadas son el hombro, los dedos y la rótula. Requiere reducción (regresar el hueso a su posición) lo antes posible, idealmente por personal médico, ya que la demora puede dañar nervios, vasos sanguíneos o la propia articulación.",
    symptoms: [
      "Deformidad visible e inmediata de la articulación",
      "Dolor intenso al intentar mover la articulación",
      "Inflamación rápida en la zona afectada",
      "Imposibilidad funcional de usar la extremidad",
    ],
    causes: [
      "Traumatismo directo o caída sobre la articulación",
      "Movimiento forzado más allá del rango normal de la articulación",
      "Accidentes deportivos o de tránsito",
      "Luxación recurrente por laxitud articular previa",
    ],
    riskFactors: [
      "Práctica de deportes de contacto",
      "Antecedente de luxación previa en la misma articulación",
      "Laxitud articular generalizada",
      "Accidentes de alto impacto",
    ],
    complications: [
      "Lesión de nervios o vasos sanguíneos cercanos a la articulación",
      "Luxación recurrente si la articulación no se estabiliza correctamente",
      "Rigidez articular tras la inmovilización prolongada",
      "Desarrollo de artrosis temprana en la articulación afectada",
    ],
    treatments: [
      "Reducción de la articulación (regresarla a su posición) de forma urgente",
      "Inmovilización temporal tras la reducción",
      "Cirugía ortopédica en luxaciones recurrentes o con lesión asociada de ligamentos",
      "Rehabilitación para recuperar fuerza y estabilidad articular",
    ],
    faqs: [
      {
        question: "¿Puedo acomodarme yo mismo una luxación?",
        answer:
          "No se recomienda. Intentar reducir una luxación sin entrenamiento médico puede causar lesión adicional a nervios, vasos sanguíneos o al cartílago articular. Lo correcto es inmovilizar la zona y acudir de inmediato a valoración médica.",
      },
      {
        question: "¿Una luxación siempre necesita cirugía?",
        answer:
          "No. La mayoría de las luxaciones se resuelven con reducción y un periodo de inmovilización. La cirugía se considera cuando hay luxaciones recurrentes, lesión asociada de ligamentos, o inestabilidad persistente de la articulación.",
      },
      {
        question: "¿Por qué algunas personas se luxan el hombro varias veces?",
        answer:
          "Después de una primera luxación de hombro, especialmente en personas jóvenes y deportistas, el riesgo de que vuelva a ocurrir aumenta porque los tejidos de soporte quedan más laxos; en estos casos se evalúa si conviene una cirugía de estabilización.",
      },
    ],
    relatedServices: ["s-cirugia-ortopedica"],
    relatedSymptoms: ["sy-deformacion-zona", "sy-inflamacion", "sy-limitacion-movimientos"],
    image: "/images/diseases/luxaciones.jpg",
    seo: {
      title: "Luxaciones | Dr. Esquinca",
      description:
        "Diagnóstico y tratamiento de luxaciones articulares con el Dr. Miguel Ángel Esquinca, Traumatólogo y Ortopedista en Tuxtla Gutiérrez.",
      keywords: ["luxación", "articulación dislocada", "traumatología", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-lesiones-rodilla",
    slug: "lesiones-de-rodilla",
    name: "Lesiones de Rodilla",
    technicalName: "Lesiones de Ligamentos y Meniscos de la Rodilla",
    colloquialNames: ["rodilla lastimada", "ligamento roto"],
    description:
      "La rodilla es una de las articulaciones más lesionadas del cuerpo debido a su papel central en el soporte de peso y el movimiento. Las lesiones más frecuentes afectan los ligamentos (cruzado anterior, cruzado posterior, colaterales) y los meniscos, estructuras de cartílago que amortiguan la articulación. Pueden ocurrir por traumatismos deportivos, caídas o movimientos de torsión brusca, y su gravedad va desde un esguince leve hasta una ruptura completa que requiere reconstrucción quirúrgica.",
    symptoms: [
      "Dolor articular en la rodilla, agudo o progresivo según el mecanismo de lesión",
      "Inflamación que puede aparecer de inmediato o en las horas siguientes",
      "Sensación de inestabilidad o que la rodilla 'se dobla'",
      "Bloqueo articular (dificultad para extender la rodilla por completo) en lesiones de menisco",
    ],
    causes: [
      "Movimientos de torsión o cambio brusco de dirección al correr o saltar",
      "Golpe directo sobre la rodilla",
      "Caídas con la rodilla en flexión o rotación forzada",
      "Desgaste progresivo del menisco en adultos mayores",
    ],
    riskFactors: [
      "Práctica de deportes con cambios de dirección frecuentes (fútbol, básquetbol)",
      "Debilidad muscular del cuádriceps e isquiotibiales",
      "Sobrepeso, que aumenta la carga sobre la articulación",
      "Lesión de rodilla previa en la misma pierna",
    ],
    complications: [
      "Inestabilidad crónica de la rodilla",
      "Lesión meniscal secundaria por inestabilidad no tratada",
      "Desarrollo de artrosis temprana de rodilla",
      "Atrofia muscular del muslo por falta de uso tras la lesión",
    ],
    treatments: [
      "Rehabilitación física para fortalecer la musculatura de soporte",
      "Artroscopia de rodilla para reparar o reconstruir ligamentos y meniscos lesionados",
      "Reemplazo articular en casos de daño articular extenso asociado",
      "Uso temporal de rodillera u ortesis durante la recuperación",
    ],
    faqs: [
      {
        question: "¿Me rompí el ligamento cruzado, necesito cirugía sí o sí?",
        answer:
          "No necesariamente. Depende del grado de la lesión, el nivel de actividad del paciente y el grado de inestabilidad. Algunos pacientes con baja demanda física pueden manejarse con rehabilitación, mientras que deportistas o personas con inestabilidad marcada suelen beneficiarse de la reconstrucción quirúrgica.",
      },
      {
        question: "¿Qué diferencia hay entre una lesión de ligamento y una de menisco?",
        answer:
          "Los ligamentos dan estabilidad a la rodilla; los meniscos amortiguan y distribuyen la carga. Una lesión de ligamento suele dar sensación de inestabilidad, mientras que una lesión de menisco suele causar bloqueo articular o dolor al girar la rodilla. Muchas veces coexisten.",
      },
      {
        question: "¿Cuánto tiempo toma recuperarse de una cirugía de rodilla?",
        answer:
          "Varía según el tipo de lesión y cirugía: una artroscopia de menisco puede permitir regreso a actividades en pocas semanas, mientras que una reconstrucción de ligamento cruzado generalmente requiere de 6 a 9 meses de rehabilitación antes de volver al deporte de competencia.",
      },
    ],
    relatedServices: ["s-artroscopia-rodilla", "s-reemplazos-articulares", "s-cirugia-rodilla"],
    relatedSymptoms: ["sy-dolor-articular", "sy-inflamacion", "sy-limitacion-movimientos"],
    image: "/images/diseases/lesiones-de-rodilla.jpg",
    seo: {
      title: "Lesiones de Rodilla | Dr. Esquinca",
      description:
        "Diagnóstico y tratamiento de lesiones de ligamentos y meniscos de rodilla con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez.",
      keywords: ["lesión de rodilla", "ligamento cruzado", "menisco", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-hernia-discal",
    slug: "hernia-discal",
    name: "Hernia Discal",
    technicalName: "Hernia de Disco Intervertebral",
    colloquialNames: ["disco herniado", "nervio pinzado"],
    description:
      "La hernia discal ocurre cuando el núcleo gelatinoso de un disco intervertebral de la columna se desplaza hacia afuera a través de una fisura en su capa externa, lo que puede comprimir una raíz nerviosa cercana. Es una causa frecuente de dolor de espalda que se irradia hacia una pierna o un brazo (dependiendo del nivel afectado), junto con hormigueo o debilidad en el trayecto del nervio comprimido. La mayoría de los casos mejora con tratamiento conservador; la cirugía se reserva para casos con déficit neurológico o dolor incapacitante persistente.",
    symptoms: [
      "Dolor de espalda que se irradia hacia una pierna (ciática) o un brazo",
      "Entumecimiento u hormigueo en el trayecto del nervio afectado",
      "Debilidad muscular en la extremidad correspondiente",
      "Dolor que empeora al sentarse, toser o estornudar",
    ],
    causes: [
      "Desgaste progresivo del disco intervertebral con la edad",
      "Levantamiento de objetos pesados con mala técnica",
      "Movimientos repetitivos de flexión y rotación de la columna",
      "Traumatismo directo sobre la columna",
    ],
    riskFactors: [
      "Edad entre 30 y 50 años (periodo de mayor incidencia)",
      "Trabajo que requiere levantar cargas pesadas con frecuencia",
      "Sedentarismo con debilidad de la musculatura del core",
      "Sobrepeso",
    ],
    complications: [
      "Dolor crónico si no se maneja oportunamente",
      "Debilidad muscular progresiva en la extremidad afectada",
      "Pérdida de control de esfínteres en casos severos (síndrome de cauda equina, urgencia quirúrgica)",
      "Limitación funcional para actividades laborales y cotidianas",
    ],
    treatments: [
      "Manejo del dolor y reposo relativo en la fase aguda",
      "Fisioterapia y fortalecimiento de la musculatura de soporte de la columna",
      "Artrodesis de columna en casos con inestabilidad o déficit neurológico que no mejora",
      "Modificación de actividades y técnica de levantamiento de cargas",
    ],
    faqs: [
      {
        question: "¿Una hernia discal siempre requiere cirugía?",
        answer:
          "No. La gran mayoría de las hernias discales mejoran con tratamiento conservador (reposo relativo, fisioterapia y manejo del dolor) en un periodo de semanas a pocos meses. La cirugía se reserva para casos con debilidad progresiva, dolor incapacitante persistente, o pérdida de control de esfínteres.",
      },
      {
        question: "¿Qué es la ciática y tiene relación con la hernia discal?",
        answer:
          "La ciática es el dolor que se irradia desde la espalda baja hacia la pierna siguiendo el trayecto del nervio ciático. Una de sus causas más comunes es precisamente la compresión de una raíz nerviosa por una hernia discal lumbar.",
      },
      {
        question: "¿Puedo volver a hacer ejercicio después de una hernia discal?",
        answer:
          "Sí, en la mayoría de los casos, siempre que se reintroduzca de forma gradual y con fortalecimiento previo de la musculatura de soporte de la columna. El ejercicio adecuado, de hecho, ayuda a prevenir recurrencias.",
      },
    ],
    relatedServices: ["s-artrodesis-columna"],
    relatedSymptoms: ["sy-dolor-espalda", "sy-entumecimiento-hormigueo"],
    image: "/images/diseases/hernia-discal.jpg",
    seo: {
      title: "Hernia Discal | Dr. Esquinca",
      description:
        "Diagnóstico y tratamiento de hernia discal y ciática con el Dr. Miguel Ángel Esquinca, Traumatólogo y Ortopedista en Tuxtla Gutiérrez.",
      keywords: ["hernia discal", "ciática", "dolor de espalda", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-esguinces",
    slug: "esguinces",
    name: "Esguinces",
    technicalName: "Esguince Ligamentario",
    colloquialNames: ["torcedura", "torcida de tobillo"],
    description:
      "Un esguince es el estiramiento o desgarro de uno o varios ligamentos que estabilizan una articulación, con mayor frecuencia en el tobillo, aunque también ocurre en muñeca y rodilla. Se clasifica en tres grados según la severidad: grado I (estiramiento leve), grado II (desgarro parcial) y grado III (ruptura completa del ligamento). La mayoría se trata de forma conservadora, pero un esguince mal tratado o repetido puede dejar inestabilidad articular crónica.",
    symptoms: [
      "Dolor inmediato en la articulación tras el movimiento de torsión",
      "Inflamación que aparece en minutos a horas",
      "Hematoma visible en esguinces moderados a severos",
      "Dificultad para apoyar peso en la extremidad (en esguince de tobillo)",
    ],
    causes: [
      "Torcedura o movimiento brusco de la articulación más allá de su rango normal",
      "Pisar en superficie irregular",
      "Cambios de dirección súbitos durante actividad deportiva",
      "Caídas con apoyo incorrecto del pie o la mano",
    ],
    riskFactors: [
      "Antecedente de esguince previo en la misma articulación",
      "Práctica de deportes con cambios de dirección frecuentes",
      "Calzado inadecuado o superficie de juego irregular",
      "Debilidad muscular alrededor de la articulación",
    ],
    complications: [
      "Inestabilidad articular crónica si no se rehabilita adecuadamente",
      "Esguinces recurrentes en la misma articulación",
      "Dolor persistente más allá del tiempo esperado de recuperación",
      "Desarrollo de artrosis temprana en casos de esguinces repetidos no tratados",
    ],
    treatments: [
      "Protocolo de reposo, hielo, compresión y elevación en la fase aguda",
      "Inmovilización temporal en esguinces grado II y III",
      "Rehabilitación física para recuperar fuerza y propiocepción",
      "Cirugía ortopédica en casos de ruptura completa con inestabilidad persistente",
    ],
    faqs: [
      {
        question: "¿Cómo sé si mi esguince es leve o grave?",
        answer:
          "El dolor intenso que no permite apoyar la extremidad, la inflamación marcada y el hematoma extenso sugieren un esguince moderado a severo. Si tienes dudas, una valoración traumatológica con estudios de imagen puede confirmar el grado exacto del esguince.",
      },
      {
        question: "¿Puedo caminar con un esguince de tobillo?",
        answer:
          "Depende del grado. En esguinces leves es posible caminar con cierta molestia; en esguinces moderados a severos se recomienda evitar el apoyo de peso y usar inmovilización hasta la valoración médica, para no agravar la lesión.",
      },
      {
        question: "¿Por qué me vuelvo a torcer el mismo tobillo varias veces?",
        answer:
          "Es un patrón frecuente cuando un esguince previo no se rehabilitó por completo, dejando debilidad muscular y falta de propiocepción (el sentido de posición articular) que predispone a nuevas torceduras.",
      },
    ],
    relatedServices: ["s-cirugia-ortopedica"],
    relatedSymptoms: ["sy-inflamacion", "sy-hematoma", "sy-dolor-articular"],
    image: "/images/diseases/esguinces.jpg",
    seo: {
      title: "Esguinces | Dr. Esquinca",
      description:
        "Diagnóstico y tratamiento de esguinces de tobillo y otras articulaciones con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez.",
      keywords: ["esguince", "torcedura de tobillo", "ligamento", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-pie-plano",
    slug: "pie-plano",
    name: "Pie Plano",
    technicalName: "Pie Plano (Pes Planus)",
    colloquialNames: ["pie aplanado", "pie sin arco"],
    description:
      "El pie plano se caracteriza por la disminución o ausencia del arco longitudinal del pie, de forma que la planta hace contacto casi completo con el suelo al estar de pie. Es muy común y normal en la infancia temprana, pero cuando persiste en la vida adulta o aparece de forma adquirida (por ejemplo, por disfunción del tendón tibial posterior), puede causar dolor, fatiga al caminar y alteraciones en la mecánica de toda la extremidad inferior.",
    symptoms: [
      "Dolor en el arco del pie o en el talón, especialmente al final del día",
      "Fatiga o cansancio al caminar distancias que antes no causaban molestia",
      "Hinchazón a lo largo del borde interno del pie o el tobillo",
      "Dificultad para pararse en puntillas en casos de disfunción tendinosa",
    ],
    causes: [
      "Laxitud ligamentaria congénita (pie plano flexible, el más común)",
      "Debilidad o disfunción progresiva del tendón tibial posterior en adultos",
      "Artritis que afecta las articulaciones del pie",
      "Lesión previa del pie o el tobillo",
    ],
    riskFactors: [
      "Sobrepeso u obesidad",
      "Edad avanzada (pie plano adquirido del adulto)",
      "Diabetes, que puede afectar la salud de los tendones",
      "Actividades con carga prolongada de pie",
    ],
    complications: [
      "Dolor crónico del pie y el tobillo",
      "Alteración de la mecánica de rodilla y cadera por compensación",
      "Progresión a deformidad fija si no se trata la causa de fondo",
      "Limitación para actividades físicas prolongadas",
    ],
    treatments: [
      "Uso de plantillas ortopédicas y calzado adecuado",
      "Fortalecimiento de la musculatura del pie y la pantorrilla",
      "Fisioterapia para disfunción del tendón tibial posterior",
      "Cirugía ortopédica en casos de deformidad fija o dolor que no responde a tratamiento conservador",
    ],
    faqs: [
      {
        question: "¿El pie plano siempre necesita tratamiento?",
        answer:
          "No. Muchos pies planos, especialmente los flexibles sin dolor, no requieren tratamiento. Se evalúa intervenir cuando hay dolor, fatiga excesiva al caminar o cuando la deformidad progresa con el tiempo.",
      },
      {
        question: "¿Las plantillas corrigen el pie plano?",
        answer:
          "Las plantillas no cambian la estructura ósea del pie, pero sí ayudan a redistribuir la carga, reducir el dolor y mejorar la comodidad al caminar, por lo que son una parte importante del manejo conservador.",
      },
      {
        question: "¿El pie plano del adulto es igual al de los niños?",
        answer:
          "No necesariamente. El pie plano flexible es muy frecuente y normal en la infancia y suele mejorar con el crecimiento. El pie plano adquirido del adulto, en cambio, suele deberse a disfunción progresiva de un tendón y requiere una valoración distinta.",
      },
    ],
    relatedServices: ["s-cirugia-ortopedica"],
    relatedSymptoms: ["sy-dolor-articular", "sy-limitacion-movimientos"],
    image: "/images/diseases/pie-plano.jpg",
    seo: {
      title: "Pie Plano | Dr. Esquinca",
      description:
        "Diagnóstico y tratamiento de pie plano en adultos con el Dr. Miguel Ángel Esquinca, Traumatólogo y Ortopedista en Tuxtla Gutiérrez.",
      keywords: ["pie plano", "dolor de pie", "tendón tibial posterior", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-problemas-espalda",
    slug: "problemas-de-espalda",
    name: "Problemas de Espalda",
    technicalName: "Dolor Lumbar Mecánico y Degeneración de Columna",
    colloquialNames: ["dolor de espalda baja", "lumbalgia"],
    description:
      "Los problemas de espalda engloban un conjunto amplio de condiciones mecánicas y degenerativas de la columna vertebral —distintas de la hernia discal propiamente dicha— como la lumbalgia crónica, la espondilosis (desgaste articular de la columna) y la estenosis del canal vertebral. Son una de las causas más frecuentes de consulta en adultos en edad productiva y suelen originarse por una combinación de desgaste progresivo, sobrecarga mecánica y debilidad de la musculatura que sostiene la columna.",
    symptoms: [
      "Dolor de espalda baja persistente o intermitente",
      "Rigidez y deformidad articular de la columna, especialmente por la mañana",
      "Dolor que se irradia hacia uno o ambos glúteos o piernas",
      "Entumecimiento u hormigueo en casos con compromiso nervioso",
    ],
    causes: [
      "Desgaste degenerativo progresivo de las articulaciones de la columna",
      "Sobrecarga mecánica repetida (posturas inadecuadas, trabajo físico)",
      "Debilidad de la musculatura abdominal y lumbar de soporte",
      "Estrechamiento del canal vertebral (estenosis) asociado a la edad",
    ],
    riskFactors: [
      "Trabajo sedentario con mala postura prolongada",
      "Trabajo físico con levantamiento repetido de cargas",
      "Sobrepeso",
      "Edad mayor de 50 años",
    ],
    complications: [
      "Dolor crónico que limita actividades laborales y cotidianas",
      "Debilidad progresiva en piernas si hay compromiso nervioso avanzado",
      "Dependencia de analgésicos sin resolver la causa de fondo",
      "Deterioro de la calidad de vida por limitación funcional sostenida",
    ],
    treatments: [
      "Fisioterapia y fortalecimiento de la musculatura del core y la espalda",
      "Modificación de hábitos posturales y ergonomía laboral",
      "Manejo del dolor bajo indicación médica",
      "Artrodesis de columna en casos de inestabilidad o degeneración severa que no responde a manejo conservador",
    ],
    faqs: [
      {
        question: "¿Todo dolor de espalda es una hernia discal?",
        answer:
          "No. La mayoría de los episodios de dolor de espalda son de origen mecánico o degenerativo, sin que exista una hernia discal. Por eso el diagnóstico preciso mediante exploración clínica y, si es necesario, estudios de imagen es importante antes de definir el tratamiento.",
      },
      {
        question: "¿El dolor de espalda crónico siempre requiere cirugía?",
        answer:
          "No. La gran mayoría de los problemas de espalda mejoran con fisioterapia, fortalecimiento muscular y ajustes posturales. La cirugía se reserva para casos de inestabilidad significativa de la columna o compromiso neurológico que no responde a tratamiento conservador.",
      },
      {
        question: "¿Qué puedo hacer en el trabajo para prevenir el dolor de espalda?",
        answer:
          "Mantener una postura adecuada al sentarse, levantarse periódicamente si el trabajo es sedentario, usar técnica correcta al levantar objetos pesados (doblando las rodillas, no la espalda), y fortalecer la musculatura del core de forma regular.",
      },
    ],
    relatedServices: ["s-artrodesis-columna"],
    relatedSymptoms: ["sy-dolor-espalda", "sy-rigidez-deformidad-articular", "sy-entumecimiento-hormigueo"],
    image: "/images/diseases/problemas-de-espalda.jpg",
    seo: {
      title: "Problemas de Espalda | Dr. Esquinca",
      description:
        "Diagnóstico y tratamiento de lumbalgia y problemas de columna con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["dolor de espalda", "lumbalgia", "columna vertebral", "Tuxtla Gutiérrez"],
    },
  },
];
