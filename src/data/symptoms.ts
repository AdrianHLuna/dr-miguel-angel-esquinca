import type { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    id: "sy-dolor-espalda",
    slug: "dolor-de-espalda",
    name: "Dolor de Espalda",
    colloquialNames: ["dolor de la columna", "dolor lumbar"],
    description:
      "El dolor de espalda es una de las molestias musculoesqueléticas más frecuentes en consulta. Puede originarse en los músculos y ligamentos de soporte, en las articulaciones de la columna, o deberse a compresión de una raíz nerviosa como en la hernia discal. Su evaluación busca distinguir entre dolor mecánico simple, que mejora con medidas conservadoras, y dolor con señales de alarma que requiere estudio más detallado.",
    causes: [
      "Sobrecarga muscular por mal levantamiento de objetos",
      "Desgaste degenerativo de las articulaciones de la columna",
      "Hernia discal con compresión de raíz nerviosa",
      "Osteoporosis con microfracturas vertebrales",
      "Mala postura prolongada",
    ],
    alarmSigns: [
      "Pérdida de control de esfínteres (orina o heces)",
      "Debilidad progresiva en una o ambas piernas",
      "Dolor que no mejora en reposo ni de noche, acompañado de fiebre o pérdida de peso",
      "Dolor tras un traumatismo significativo",
    ],
    whyConsult:
      "Si el dolor de espalda persiste más de dos semanas pese a reposo relativo, se acompaña de dolor irradiado a la pierna, hormigueo, o interfiere con tus actividades cotidianas, una valoración traumatológica permite identificar la causa exacta y evitar que se vuelva crónico.",
    faqs: [
      {
        question: "¿El dolor de espalda siempre significa hernia discal?",
        answer:
          "No. La mayoría de los episodios de dolor de espalda son de origen muscular o articular mecánico, sin que exista una hernia discal. Solo una valoración clínica, y en algunos casos estudios de imagen, permite confirmar la causa exacta.",
      },
      {
        question: "¿Debo guardar reposo absoluto si me duele la espalda?",
        answer:
          "No se recomienda reposo absoluto prolongado. El reposo relativo con movimiento controlado suele favorecer una recuperación más rápida que la inmovilidad total, salvo indicación médica específica.",
      },
    ],
    relatedConditions: ["d-osteoporosis", "d-hernia-discal", "d-problemas-espalda"],
    image: "/images/symptoms/dolor-de-espalda.jpg",
    seo: {
      title: "Dolor de Espalda | Dr. Esquinca",
      description:
        "Causas del dolor de espalda y cuándo consultar con el Dr. Miguel Ángel Esquinca, Traumatólogo y Ortopedista en Tuxtla Gutiérrez.",
      keywords: ["dolor de espalda", "dolor lumbar", "columna vertebral", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-huesos-fragiles",
    slug: "huesos-fragiles",
    name: "Huesos Frágiles",
    colloquialNames: ["huesos débiles", "fragilidad ósea"],
    description:
      "La fragilidad ósea se refiere a huesos que se fracturan con traumatismos leves que normalmente no causarían daño —una caída desde la propia altura, por ejemplo—. Es la manifestación clínica más característica de la osteoporosis y, en menores de edad o casos con antecedente familiar, puede también relacionarse con enfermedades óseas como la displasia fibrosa. Identificar la causa de fondo es clave para prevenir nuevas fracturas.",
    causes: [
      "Osteoporosis por pérdida de densidad ósea relacionada con la edad o la menopausia",
      "Déficit prolongado de calcio y vitamina D",
      "Displasia fibrosa u otras enfermedades óseas estructurales",
      "Uso prolongado de ciertos medicamentos que afectan la densidad ósea",
    ],
    alarmSigns: [
      "Fractura con un golpe o caída mínima",
      "Dolor óseo persistente sin traumatismo claro que lo explique",
      "Deformidad progresiva de un hueso",
      "Pérdida de estatura notoria en poco tiempo",
    ],
    whyConsult:
      "Si has tenido una fractura con un golpe que normalmente no debería causarla, es importante una valoración para identificar si existe fragilidad ósea de fondo (osteoporosis u otra causa) y así prevenir fracturas futuras, que suelen ser más graves cada vez.",
    faqs: [
      {
        question: "¿Cómo sé si tengo huesos frágiles?",
        answer:
          "El dato más claro es haber sufrido una fractura con un traumatismo leve. La densitometría ósea es el estudio que confirma el grado de densidad ósea y ayuda a definir el tratamiento adecuado.",
      },
      {
        question: "¿Los huesos frágiles se fortalecen de nuevo?",
        answer:
          "Con tratamiento adecuado (calcio, vitamina D, ejercicio de carga y, en algunos casos, medicamentos específicos) se puede mejorar la densidad ósea y reducir significativamente el riesgo de nuevas fracturas, aunque el proceso es gradual.",
      },
    ],
    relatedConditions: ["d-osteoporosis", "d-displasia-fibrosa"],
    image: "/images/symptoms/huesos-fragiles.jpg",
    seo: {
      title: "Huesos Frágiles | Dr. Esquinca",
      description:
        "Causas de la fragilidad ósea y cuándo consultar con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["huesos frágiles", "osteoporosis", "fractura por fragilidad", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-dolor-articular",
    slug: "dolor-articular",
    name: "Dolor Articular",
    colloquialNames: ["dolor de coyunturas", "dolor de articulaciones"],
    description:
      "El dolor articular es uno de los motivos de consulta traumatológica más comunes y puede originarse en una amplia variedad de condiciones: desde el desgaste progresivo del cartílago (artrosis) hasta lesiones agudas de ligamentos, meniscos o, con menor frecuencia, tumores óseos. La localización, el tipo de dolor (mecánico vs. inflamatorio) y los síntomas acompañantes orientan el diagnóstico.",
    causes: [
      "Desgaste del cartílago articular (artrosis)",
      "Lesión aguda de ligamentos o meniscos",
      "Fractura cercana a la articulación",
      "Tumor óseo que afecta la zona articular (menos frecuente)",
      "Displasia fibrosa con compromiso articular",
    ],
    alarmSigns: [
      "Dolor articular con fiebre o enrojecimiento intenso",
      "Imposibilidad súbita de mover o apoyar la articulación",
      "Dolor articular nocturno persistente que no mejora con reposo",
      "Inflamación con deformidad evidente tras un golpe",
    ],
    whyConsult:
      "Si el dolor articular persiste más de una semana, limita tus actividades diarias, o se acompaña de inflamación marcada, una valoración traumatológica permite identificar la causa exacta —desde un esguince simple hasta una lesión que requiere tratamiento específico— antes de que se vuelva crónico.",
    faqs: [
      {
        question: "¿Todo dolor articular es artrosis?",
        answer:
          "No. El dolor articular puede tener muchas causas, desde lesiones agudas hasta enfermedades inflamatorias o, en casos poco frecuentes, tumores óseos. La valoración clínica y, cuando es necesario, estudios de imagen, permiten identificar la causa específica.",
      },
      {
        question: "¿Cuándo el dolor articular es urgente?",
        answer:
          "Cuando se acompaña de fiebre, enrojecimiento intenso, deformidad tras un traumatismo, o imposibilidad total de mover la articulación, se recomienda valoración médica inmediata en lugar de esperar a que mejore por sí solo.",
      },
    ],
    relatedConditions: [
      "d-tumores-oseos",
      "d-fracturas",
      "d-artrosis",
      "d-displasia-fibrosa",
      "d-lesiones-deportivas",
      "d-lesiones-rodilla",
      "d-esguinces",
      "d-pie-plano",
    ],
    image: "/images/symptoms/dolor-articular.jpg",
    seo: {
      title: "Dolor Articular | Dr. Esquinca",
      description:
        "Causas del dolor articular y cuándo consultar con el Dr. Miguel Ángel Esquinca, Traumatólogo y Ortopedista en Tuxtla Gutiérrez.",
      keywords: ["dolor articular", "dolor de coyunturas", "traumatología", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-limitacion-movimientos",
    slug: "limitacion-de-movimientos",
    name: "Limitación de Movimientos",
    colloquialNames: ["movimiento limitado", "articulación incapacitada", "no puedo mover la articulación"],
    description:
      "La limitación de movimientos se refiere a la dificultad o imposibilidad de mover una articulación en su rango normal, ya sea por dolor, rigidez estructural, bloqueo mecánico (como en algunas lesiones de menisco) o inflamación aguda. Puede ser parcial —el movimiento es posible pero doloroso o incompleto— o total, cuando la articulación queda completamente bloqueada.",
    causes: [
      "Desgaste articular avanzado (artrosis)",
      "Lesión de menisco con bloqueo mecánico de la rodilla",
      "Luxación articular reciente",
      "Pie plano con disfunción tendinosa que altera la mecánica del movimiento",
    ],
    alarmSigns: [
      "Bloqueo articular súbito e imposibilidad total de movimiento",
      "Limitación acompañada de deformidad visible",
      "Pérdida de movimiento progresiva en pocos días",
      "Limitación tras un traumatismo con dolor intenso",
    ],
    whyConsult:
      "Si notas que una articulación ya no se mueve con la misma libertad de antes, que se bloquea de forma repentina, o que la limitación va en aumento, es importante una valoración para identificar la causa y evitar que la restricción se vuelva permanente.",
    faqs: [
      {
        question: "¿La limitación de movimiento siempre es permanente?",
        answer:
          "No necesariamente. Muchas causas de limitación articular, como la inflamación aguda o el bloqueo por una lesión de menisco, son tratables y el rango de movimiento puede recuperarse por completo con el tratamiento adecuado y rehabilitación.",
      },
      {
        question: "¿Qué es un bloqueo articular?",
        answer:
          "Es cuando un fragmento de tejido dentro de la articulación, como un pedazo de menisco desgarrado, impide físicamente que la articulación complete su movimiento normal, generando una sensación de que la rodilla 'se traba'.",
      },
    ],
    relatedConditions: ["d-artrosis", "d-luxaciones", "d-lesiones-rodilla", "d-pie-plano"],
    image: "/images/symptoms/limitacion-de-movimientos.jpg",
    seo: {
      title: "Limitación de Movimientos | Dr. Esquinca",
      description:
        "Causas de la limitación de movimientos articulares y cuándo consultar con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez.",
      keywords: ["limitación de movimientos", "bloqueo articular", "traumatología", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-rigidez-deformidad-articular",
    slug: "rigidez-y-deformidad-articular",
    name: "Rigidez y Deformidad Articular",
    colloquialNames: ["articulación tiesa", "articulación deformada"],
    description:
      "La rigidez articular es la sensación de tensión o resistencia al mover una articulación, frecuente al despertar en enfermedades degenerativas como la artrosis, y suele mejorar con el movimiento a lo largo del día. Cuando se acompaña de deformidad —un cambio visible en la forma o alineación de la articulación o la columna— generalmente indica un proceso más avanzado o prolongado que requiere valoración especializada.",
    causes: [
      "Artrosis avanzada con desgaste significativo del cartílago",
      "Degeneración crónica de las articulaciones de la columna",
      "Inmovilización prolongada tras una lesión o cirugía",
      "Procesos inflamatorios articulares crónicos",
    ],
    alarmSigns: [
      "Deformidad articular de aparición reciente y progresiva",
      "Rigidez que dura más de una hora al despertar",
      "Rigidez acompañada de dolor intenso constante",
      "Pérdida funcional significativa para actividades básicas",
    ],
    whyConsult:
      "Si la rigidez matutina dura más de 30 minutos, o notas que una articulación o la columna están cambiando de forma con el tiempo, una valoración traumatológica permite identificar la causa y frenar la progresión antes de que la deformidad se vuelva fija.",
    faqs: [
      {
        question: "¿La rigidez matutina es normal?",
        answer:
          "Una rigidez breve, de pocos minutos al despertar, puede ser normal con la edad. Cuando dura más de 30 minutos o se acompaña de dolor significativo, suele indicar un proceso articular que conviene evaluar.",
      },
      {
        question: "¿Una deformidad articular se puede corregir?",
        answer:
          "Depende de la causa y del grado de avance. Detectada a tiempo, muchas veces se puede frenar la progresión con tratamiento conservador; en etapas avanzadas, la corrección suele requerir manejo quirúrgico.",
      },
    ],
    relatedConditions: ["d-artrosis", "d-problemas-espalda"],
    image: "/images/symptoms/rigidez-y-deformidad-articular.jpg",
    seo: {
      title: "Rigidez y Deformidad Articular: Causas | Dr. Esquinca",
      description:
        "Causas de la rigidez y deformidad articular y cuándo consultar con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez.",
      keywords: ["rigidez articular", "deformidad articular", "artrosis", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-deformacion-zona",
    slug: "deformacion-de-la-zona",
    name: "Deformación de la Zona",
    colloquialNames: ["hueso chueco", "bulto visible", "zona deformada"],
    description:
      "La deformación visible de una zona del cuerpo —un hueso, una articulación o una extremidad completa— puede aparecer de forma súbita tras un traumatismo (como en una fractura desplazada o una luxación) o de forma gradual, como en un tumor óseo que crece o en la displasia fibrosa. Diferenciar entre ambos escenarios es clave para definir la urgencia de la valoración.",
    causes: [
      "Fractura desplazada tras un traumatismo",
      "Luxación articular reciente",
      "Crecimiento de un tumor óseo",
      "Displasia fibrosa con deformidad progresiva del hueso",
    ],
    alarmSigns: [
      "Deformidad evidente inmediatamente después de un traumatismo",
      "Deformidad acompañada de pérdida de sensibilidad o color pálido en la extremidad",
      "Deformidad que crece de forma progresiva sin traumatismo claro",
      "Dolor intenso asociado a la deformidad",
    ],
    whyConsult:
      "Una deformidad tras un traumatismo requiere valoración urgente para descartar fractura o luxación. Una deformidad de aparición gradual, sin golpe que la explique, también amerita valoración oportuna para descartar un proceso óseo de fondo como un tumor o displasia fibrosa.",
    faqs: [
      {
        question: "¿Toda deformidad después de un golpe es una fractura?",
        answer:
          "No siempre, pero es la posibilidad que primero se debe descartar. La inflamación por sí sola puede simular una deformidad; una radiografía permite confirmar si existe fractura o luxación.",
      },
      {
        question: "¿Una deformidad que aparece poco a poco es grave?",
        answer:
          "No siempre es grave, pero sí requiere valoración, ya que algunas causas de deformidad progresiva, como un tumor óseo o la displasia fibrosa, se benefician de un diagnóstico y manejo oportuno.",
      },
    ],
    relatedConditions: ["d-tumores-oseos", "d-fracturas", "d-displasia-fibrosa", "d-luxaciones"],
    image: "/images/symptoms/deformacion-de-la-zona.jpg",
    seo: {
      title: "Deformación de la Zona | Dr. Esquinca",
      description:
        "Causas de la deformidad ósea o articular y cuándo consultar con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["deformidad ósea", "deformidad articular", "traumatología", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-inflamacion",
    slug: "inflamacion",
    name: "Inflamación",
    colloquialNames: ["hinchazón", "zona hinchada"],
    description:
      "La inflamación es la respuesta natural del cuerpo ante una lesión o daño tisular, manifestada como aumento de volumen, calor y, frecuentemente, dolor en la zona afectada. En traumatología es un signo muy común tras fracturas, esguinces y lesiones deportivas, pero también puede indicar un tumor óseo o un proceso infeccioso cuando se presenta sin traumatismo claro o no mejora con medidas habituales.",
    causes: [
      "Traumatismo reciente (fractura, esguince, luxación)",
      "Lesión deportiva aguda",
      "Tumor óseo en crecimiento",
      "Proceso infeccioso local",
    ],
    alarmSigns: [
      "Inflamación con fiebre",
      "Inflamación que aumenta rápidamente en pocas horas",
      "Piel caliente, roja y muy dolorosa al tacto sobre la zona inflamada",
      "Inflamación persistente por más de una semana sin mejoría",
    ],
    whyConsult:
      "Si la inflamación aparece sin un traumatismo que la explique, no mejora con reposo y elevación en pocos días, o se acompaña de fiebre, es importante una valoración traumatológica para descartar causas que requieren tratamiento específico.",
    faqs: [
      {
        question: "¿Cómo reduzco la inflamación en casa mientras me valoran?",
        answer:
          "Reposo relativo, elevación de la extremidad y aplicación de hielo local durante los primeros días suelen ayudar a controlar la inflamación aguda mientras se obtiene una valoración médica.",
      },
      {
        question: "¿La inflamación sin golpe previo es preocupante?",
        answer:
          "Puede serlo. La inflamación que aparece sin traumatismo claro merece valoración, ya que puede estar relacionada con procesos que van desde una infección hasta, en casos poco frecuentes, un tumor óseo.",
      },
    ],
    relatedConditions: [
      "d-tumores-oseos",
      "d-fracturas",
      "d-lesiones-deportivas",
      "d-luxaciones",
      "d-lesiones-rodilla",
      "d-esguinces",
    ],
    image: "/images/symptoms/inflamacion.jpg",
    seo: {
      title: "Inflamación | Dr. Esquinca",
      description:
        "Causas de la inflamación articular u ósea y cuándo consultar con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["inflamación", "hinchazón", "traumatología", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-hematoma",
    slug: "hematoma",
    name: "Hematoma",
    colloquialNames: ["moretón", "cardenal"],
    description:
      "Un hematoma es la acumulación de sangre bajo la piel tras la ruptura de pequeños vasos sanguíneos, generalmente por un traumatismo. En el contexto traumatológico, suele acompañar a fracturas, esguinces y lesiones deportivas, y su extensión y profundidad pueden ayudar a orientar la severidad de la lesión subyacente.",
    causes: [
      "Traumatismo directo sobre la zona (golpe, caída)",
      "Fractura con sangrado interno hacia el tejido circundante",
      "Esguince o lesión deportiva con ruptura de pequeños vasos",
      "Cirugía o procedimiento ortopédico reciente",
    ],
    alarmSigns: [
      "Hematoma que crece rápidamente en tamaño",
      "Hematoma con dolor desproporcionado al tamaño de la lesión",
      "Pérdida de sensibilidad o color pálido en la extremidad más allá del hematoma",
      "Hematoma acompañado de imposibilidad para mover la articulación cercana",
    ],
    whyConsult:
      "Un hematoma pequeño tras un golpe menor suele resolverse solo, pero si es extenso, doloroso, crece con rapidez, o se asocia a dificultad para mover la extremidad, es importante descartar una lesión ósea o articular subyacente.",
    faqs: [
      {
        question: "¿Cuánto tarda en desaparecer un hematoma?",
        answer:
          "Generalmente entre 1 y 3 semanas, pasando por distintos cambios de color conforme el cuerpo reabsorbe la sangre acumulada. Un hematoma que no evoluciona de esta forma esperada amerita revisión.",
      },
      {
        question: "¿Un hematoma grande siempre significa fractura?",
        answer:
          "No siempre, pero un hematoma extenso, especialmente tras un traumatismo significativo, es un dato que orienta a solicitar estudios de imagen para descartar fractura asociada.",
      },
    ],
    relatedConditions: ["d-fracturas", "d-lesiones-deportivas", "d-esguinces"],
    image: "/images/symptoms/hematoma.jpg",
    seo: {
      title: "Hematoma | Dr. Esquinca",
      description:
        "Causas del hematoma postraumático y cuándo consultar con el Dr. Miguel Ángel Esquinca, Traumatólogo en Tuxtla Gutiérrez.",
      keywords: ["hematoma", "moretón", "traumatología", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-entumecimiento-hormigueo",
    slug: "entumecimiento-hormigueo",
    name: "Entumecimiento/Hormigueo",
    colloquialNames: ["se me duerme", "hormigueo en pierna o brazo"],
    description:
      "El entumecimiento y el hormigueo son sensaciones anormales (parestesias) que suelen indicar que un nervio está siendo comprimido o irritado en algún punto de su trayecto. En el contexto de columna, son característicos de la compresión de una raíz nerviosa, como ocurre en la hernia discal o en la degeneración avanzada de las articulaciones vertebrales, y su distribución (qué parte del brazo o la pierna afectan) ayuda a identificar el nivel exacto del problema.",
    causes: [
      "Compresión de una raíz nerviosa por hernia discal",
      "Estrechamiento del canal vertebral (estenosis) por desgaste degenerativo",
      "Compresión nerviosa periférica fuera de la columna",
      "Inflamación local que afecta un nervio cercano",
    ],
    alarmSigns: [
      "Debilidad progresiva asociada al entumecimiento",
      "Pérdida de control de esfínteres",
      "Entumecimiento que afecta ambas piernas o la zona genital",
      "Síntomas que empeoran rápidamente en pocos días",
    ],
    whyConsult:
      "Si el entumecimiento u hormigueo es persistente, se acompaña de debilidad muscular, o sigue un trayecto claro desde la espalda hacia una pierna o un brazo, una valoración especializada ayuda a identificar el nivel de compresión nerviosa y definir el tratamiento adecuado antes de que el daño nervioso avance.",
    faqs: [
      {
        question: "¿El hormigueo siempre significa daño nervioso permanente?",
        answer:
          "No. En la mayoría de los casos, cuando se identifica y trata la causa de la compresión nerviosa a tiempo, la sensación se recupera por completo. El daño permanente es más probable cuando la compresión es severa y prolongada sin tratamiento.",
      },
      {
        question: "¿Por qué el hormigueo baja hasta el pie en algunos casos de dolor de espalda?",
        answer:
          "Porque el nervio comprimido en la columna lumbar recorre toda la pierna hasta el pie; el patrón de distribución del hormigueo ayuda al médico a identificar exactamente qué raíz nerviosa está afectada.",
      },
    ],
    relatedConditions: ["d-hernia-discal", "d-problemas-espalda"],
    image: "/images/symptoms/entumecimiento-hormigueo.jpg",
    seo: {
      title: "Entumecimiento y Hormigueo: Causas | Dr. Esquinca",
      description:
        "Causas del entumecimiento y hormigueo en brazo o pierna, y cuándo consultar con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez.",
      keywords: ["entumecimiento", "hormigueo", "hernia discal", "Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-fiebre",
    slug: "fiebre",
    name: "Fiebre",
    colloquialNames: ["calentura"],
    description:
      "En el contexto traumatológico y ortopédico, la fiebre asociada a dolor óseo o articular es un signo que no debe pasarse por alto: puede indicar un proceso infeccioso (infección de hueso o de una herida quirúrgica reciente) o, en casos de tumor óseo, formar parte del cuadro clínico general. Siempre amerita valoración oportuna para descartar causas que requieren tratamiento urgente.",
    causes: [
      "Infección ósea o articular",
      "Infección de una herida quirúrgica reciente",
      "Proceso inflamatorio asociado a un tumor óseo",
      "Infección sistémica no relacionada directamente con el sistema musculoesquelético",
    ],
    alarmSigns: [
      "Fiebre con dolor óseo o articular intenso y localizado",
      "Fiebre tras una cirugía ortopédica reciente",
      "Fiebre con enrojecimiento y calor local sobre una articulación",
      "Fiebre persistente por más de 48 horas sin causa clara",
    ],
    whyConsult:
      "Si presentas fiebre junto con dolor óseo o articular, especialmente después de una cirugía reciente o sin una causa evidente como una gripe, es importante una valoración médica oportuna para descartar una infección que requiere tratamiento inmediato.",
    faqs: [
      {
        question: "¿La fiebre después de una cirugía ortopédica es normal?",
        answer:
          "Una fiebre leve en las primeras 24-48 horas tras la cirugía puede ocurrir como respuesta inflamatoria normal, pero la fiebre persistente, alta, o acompañada de enrojecimiento y dolor creciente en la herida requiere valoración inmediata para descartar infección.",
      },
      {
        question: "¿Todo tumor óseo da fiebre?",
        answer:
          "No todos. La fiebre puede presentarse en algunos casos de tumor óseo, especialmente en etapas más avanzadas, pero no es un síntoma universal; muchos tumores óseos se detectan primero por dolor o deformidad sin fiebre asociada.",
      },
    ],
    relatedConditions: ["d-tumores-oseos"],
    image: "/images/symptoms/fiebre.jpg",
    seo: {
      title: "Fiebre con Dolor Óseo | Dr. Esquinca",
      description:
        "Cuándo la fiebre con dolor óseo o articular requiere valoración con el Dr. Miguel Ángel Esquinca en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["fiebre", "infección ósea", "tumor óseo", "Tuxtla Gutiérrez"],
    },
  },
];
