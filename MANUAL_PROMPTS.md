# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dr. Miguel Ángel Esquinca Díaz — Traumatología y Ortopedia (Alta Especialidad en Oncología Ortopédica)
**Ciudad:** Tuxtla Gutiérrez, Chiapas

**Nota de discreción clínica (revisada 2026-11-24 — ver AGENTS.md §5):** el catálogo incluye fracturas, tumores óseos y cirugías ortopédicas. El objetivo NO es la máxima discreción posible, sino representar el padecimiento real con claridad y sutileza — una imagen tan discreta que no comunica nada sobre la enfermedad es tan incorrecta como una explícita. Reglas aplicadas en todo el archivo:
- **Cada prompt nombra el diagnóstico/síntoma/servicio real exacto** en una línea de "Contexto clínico" — esto no aumenta el riesgo de rechazo del generador de imágenes (lo que lo dispara es pedir un elemento gráfico literal, no nombrar la condición), y evita que el resultado sea una imagen genérica.
- **Ninguna ilustración anatómica queda aislada sin contexto corporal**: toda vista en corte/zoom incluye una silueta corporal de referencia (completa o del segmento relevante) para que se entienda en qué parte del cuerpo está el padecimiento, nunca solo tejido recortado sin ubicación reconocible.
- **Las fotografías de síntomas muestran a la persona sintiendo el malestar real** (gesto de incomodidad, mano en la zona afectada, expresión tensa) — nunca neutral ni feliz.
- Cero sangre, cero hueso fracturado expuesto de forma realista, cero radiografías reales identificables, cero rostros de pacientes reales — representación esquemática tipo libro de texto o fotografía editorial discreta.

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/images/...jpg`).

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud en traumatología, ortopedia y oncología ortopédica.
Tono: Preciso, técnico y de autoridad clínica — editorial y confiable, nunca gráfico ni incómodo, pero SIEMPRE representando el padecimiento real, nunca una escena tan genérica que no comunique la condición.
Estilo: Renders 3D anatómicos esquemáticos (hueso, articulación, columna representados de forma educativa, nunca heridas abiertas ni hueso expuesto) para enfermedades y síntomas — SIEMPRE con una silueta corporal de referencia visible (completa o del segmento relevante) para ubicar la zona afectada, nunca un recorte de tejido aislado sin contexto; fotografía clínica de instrumental quirúrgico/ortopédico ordenado (placas, tornillos, prótesis, artroscopio) o del procedimiento en sí para servicios; fotografía editorial de una persona real mostrando el malestar del síntoma (gesto de incomodidad genuino, nunca neutral o feliz) para síntomas.
Identidad visual OBLIGATORIA (paleta real de marca del doctor): teal principal (#0795A5), verde-teal oscuro (#305F4C) estructural, menta (#52BAAA) como acento mínimo, teal casi negro (#03474E) para fondos oscuros — nunca mezclar con acentos saturados ajenos a la marca.
Restricciones: Cero sangre, cero hueso fracturado expuesto de forma realista, cero radiografías de pacientes reales o identificables, cero nombres de medicamentos, cero logotipos de marcas comerciales, cero rostros de pacientes reales o reconocibles, cero texto superpuesto en la imagen. Prohibidos hologramas, neones, HUDs futuristas.
Formato: JPG horizontal de aspecto 16:10 (--ar 16:10 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Iluminación de estudio clínica, limpia y fría-cálida balanceada — nunca oscura ni dramática.
- Color Palette: Teal (#0795A5), verde-teal oscuro (#305F4C), menta (#52BAAA), blanco cálido neutro de fondo.
- Composition: Centrada, calmada, encuadre editorial con espacio negativo generoso — nunca gráfica ni invasiva.
- Suffixes: realistic medical CGI or high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
- Negative Prompt: hologram, neon, sci-fi, text, watermark, signature, blood, gore, exposed bone, graphic detail, real identifiable patient, real x-ray.

Estas son instrucciones, no hagas imágenes todavía.
```

---

## 🩺 SECCIÓN 1: PROMPTS PARA ENFERMEDADES

### 1. Tumores Óseos (`public/images/diseases/tumores-oseos.jpg`)
```text
Contexto clínico: Tumores Óseos (crecimiento anormal de tejido dentro o sobre un hueso).
Render 3D anatómico de una pierna completa en silueta translúcida mostrando el fémur, con un acercamiento a una zona de densidad irregular dentro del hueso — la silueta de la pierna debe mantenerse visible alrededor del acercamiento para que se entienda que es un hueso largo de la extremidad, no un recorte aislado.
Lighting: Iluminación de estudio suave y cálida.
Color Palette: Teal (#0795A5) contorno óseo y silueta corporal, menta (#52BAAA) acento en la zona afectada, blanco cálido de fondo.
Composition: Silueta de pierna completa a la izquierda, acercamiento al fémur a la derecha conectado visualmente, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, exposed bone, graphic detail.
```

### 2. Fracturas (`public/images/diseases/fracturas.jpg`)
```text
Contexto clínico: Fracturas (pérdida de continuidad de un hueso por traumatismo).
Render 3D anatómico de un antebrazo en silueta translúcida mostrando los huesos radio/cúbito, con una línea de fractura limpia visible en el acercamiento — la silueta del antebrazo y la mano permanecen visibles para dar contexto de ubicación.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5) y verde-teal oscuro (#305F4C) en silueta y hueso, blanco cálido de fondo.
Composition: Silueta de antebrazo completa, línea de fractura centrada en el acercamiento, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, exposed bone, graphic detail.
```

### 3. Osteoporosis (`public/images/diseases/osteoporosis.jpg`)
```text
Contexto clínico: Osteoporosis (pérdida de densidad y calidad ósea).
Render 3D anatómico de una silueta corporal de perfil señalando cadera/columna (zonas típicas de fractura por osteoporosis), con un recuadro de acercamiento comparando tejido óseo trabecular sano vs. poroso extraído de esa zona señalada.
Lighting: Iluminación de estudio fría-cálida balanceada.
Color Palette: Teal (#0795A5) en silueta, menta (#52BAAA) resaltando la zona porosa, blanco de fondo.
Composition: Silueta corporal a la izquierda con la zona señalada, comparación de tejido en recuadro a la derecha, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 4. Artrosis (`public/images/diseases/artrosis.jpg`)
```text
Contexto clínico: Artrosis (desgaste del cartílago articular).
Render 3D anatómico de una pierna completa en silueta translúcida mostrando la articulación de la rodilla, con un acercamiento al cartílago desgastado dentro de la articulación — la silueta de muslo/pantorrilla permanece visible alrededor para dar contexto de ubicación.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), verde-teal oscuro (#305F4C), blanco de fondo.
Composition: Silueta de pierna completa, articulación de rodilla centrada en el acercamiento, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 5. Displasia Fibrosa (`public/images/diseases/displasia-fibrosa.jpg`)
```text
Contexto clínico: Displasia Fibrosa (tejido fibroso reemplazando tejido óseo normal).
Render 3D anatómico de una pierna completa en silueta translúcida mostrando la tibia, con un acercamiento a una zona de tejido fibroso dentro del hueso — silueta de la pierna visible alrededor para contexto de ubicación.
Lighting: Iluminación de estudio suave.
Color Palette: Teal (#0795A5) contorno y silueta, menta (#52BAAA) acento en la zona afectada, blanco de fondo.
Composition: Silueta de pierna completa, hueso centrado en el acercamiento, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 6. Lesiones Deportivas (`public/images/diseases/lesiones-deportivas.jpg`)
```text
Contexto clínico: Lesiones Deportivas (lesiones musculoesqueléticas por actividad física).
Fotografía editorial cálida de un fisioterapeuta evaluando la rodilla de un paciente adulto en consultorio, el paciente con gesto leve de molestia al ser palpado (ceja fruncida, mano apoyada tensa en el borde de la camilla) — sin mostrar lesión real, pero sin expresión neutra o feliz.
Lighting: Luz natural cálida de consultorio.
Color Palette: Teal (#0795A5) en elementos de fondo, tonos de piel naturales, blanco cálido.
Composition: Centrada, espacio negativo generoso, rostro no identificable.
Suffixes: warm editorial photography, 8k, soft natural light --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, real identifiable patient, blood.
```

### 7. Luxaciones (`public/images/diseases/luxaciones.jpg`)
```text
Contexto clínico: Luxaciones (desplazamiento de las superficies de una articulación).
Render 3D anatómico de un torso/brazo en silueta translúcida mostrando la articulación del hombro, con un acercamiento al desplazamiento de las superficies articulares — silueta del torso y brazo visible alrededor para contexto de ubicación.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), verde-teal oscuro (#305F4C), blanco de fondo.
Composition: Silueta de torso/brazo completa, articulación centrada en el acercamiento, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 8. Lesiones de Rodilla (`public/images/diseases/lesiones-de-rodilla.jpg`)
```text
Contexto clínico: Lesiones de Rodilla (ligamentos y meniscos).
Render 3D anatómico de una pierna completa en silueta translúcida mostrando ligamentos y meniscos de la rodilla en corte — silueta de muslo/pantorrilla visible alrededor del acercamiento, sin daño visible explícito.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), menta (#52BAAA) acento en estructuras internas, blanco de fondo.
Composition: Silueta de pierna completa, rodilla centrada en el acercamiento, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 9. Hernia Discal (`public/images/diseases/hernia-discal.jpg`)
```text
Contexto clínico: Hernia Discal (disco intervertebral desplazado).
Render 3D anatómico de una silueta de torso/espalda completa de perfil mostrando la columna vertebral, con un acercamiento a un disco intervertebral desplazado en la zona lumbar — silueta del torso visible alrededor para contexto de ubicación.
Lighting: Iluminación de estudio fría-cálida balanceada.
Color Palette: Teal (#0795A5), verde-teal oscuro (#305F4C) en vértebras, blanco de fondo.
Composition: Silueta de torso de perfil, segmento de columna centrado en el acercamiento, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 10. Esguinces (`public/images/diseases/esguinces.jpg`)
```text
Contexto clínico: Esguinces (ligamentos del tobillo).
Render 3D anatómico de un pie y tobillo en silueta translúcida mostrando los ligamentos laterales en corte — silueta del pie/pierna baja visible alrededor para contexto de ubicación, sin inflamación explícita.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), menta (#52BAAA), blanco de fondo.
Composition: Silueta de pie/tobillo completa, ligamentos centrados en el acercamiento, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 11. Pie Plano (`public/images/diseases/pie-plano.jpg`)
```text
Contexto clínico: Pie Plano (disminución del arco longitudinal del pie).
Render 3D anatómico de un pie completo en corte lateral, comparando arco normal vs. aplanado — el pie completo ya da contexto corporal suficiente, estilo educativo.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), verde-teal oscuro (#305F4C), blanco de fondo.
Composition: Pie en corte lateral centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 12. Problemas de Espalda (`public/images/diseases/problemas-de-espalda.jpg`)
```text
Contexto clínico: Problemas de Espalda (dolor y molestia en la zona lumbar).
Fotografía editorial cálida de un paciente adulto de espaldas sosteniendo su zona lumbar con gesto claro de molestia (hombros tensos, mano presionando firme, postura ligeramente inclinada) — malestar real, no neutro.
Lighting: Luz natural cálida.
Color Palette: Teal (#0795A5) en vestuario/fondo, tonos de piel naturales, blanco cálido.
Composition: Centrada, espacio negativo generoso, rostro no identificable.
Suffixes: warm editorial photography, 8k, soft natural light --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, real identifiable patient.
```

---

## 🛠️ SECCIÓN 2: PROMPTS PARA SERVICIOS

### 1. Cirugía de Prótesis de Cadera (`public/images/services/cirugia-de-protesis-de-cadera.jpg`)
```text
Contexto clínico: Cirugía de Prótesis de Cadera (reemplazo articular).
Fotografía clínica editorial de un implante de prótesis de cadera (componente metálico y de polietileno) sobre una superficie quirúrgica limpia, estilo catálogo médico premium.
Lighting: Iluminación de estudio clínica brillante.
Color Palette: Teal (#0795A5) en reflejos/fondo, metal quirúrgico realista, blanco de fondo.
Composition: Implante centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, real identifiable patient.
```

### 2. Cirugía de Rodilla (`public/images/services/cirugia-de-rodilla.jpg`)
```text
Contexto clínico: Cirugía de Rodilla (procedimiento quirúrgico ortopédico).
Fotografía clínica editorial de manos enguantadas de un cirujano posicionando instrumental sobre una rodilla cubierta con campo quirúrgico azul, encuadre discreto que muestra el momento del procedimiento sin detalle gráfico de incisión.
Lighting: Iluminación de quirófano limpia y brillante.
Color Palette: Teal (#0795A5), azul de campo quirúrgico, metal realista.
Composition: Manos e instrumental centrados, espacio negativo generoso, sin rostro visible.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail, real identifiable patient.
```

### 3. Artroscopia de Rodilla (`public/images/services/artroscopia-de-rodilla.jpg`)
```text
Contexto clínico: Artroscopia de Rodilla (cirugía mínimamente invasiva guiada por cámara).
Fotografía clínica editorial de un artroscopio (cámara endoscópica) en uso, insertado en una rodilla cubierta con campo quirúrgico, con el monitor de video desenfocado al fondo mostrando la vista interna esquemática — momento del procedimiento, no solo instrumental en charola.
Lighting: Iluminación de estudio clínica brillante.
Color Palette: Teal (#0795A5), menta (#52BAAA) acento, metal realista, blanco de fondo.
Composition: Artroscopio y rodilla centrados, monitor desenfocado al fondo, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, real identifiable patient.
```

### 4. Artroscopia de Hombro (`public/images/services/artroscopia-de-hombro.jpg`)
```text
Contexto clínico: Artroscopia de Hombro (cirugía mínimamente invasiva guiada por cámara).
Fotografía clínica editorial de instrumental artroscópico de hombro ordenado sobre charola quirúrgica, estilo catálogo médico.
Lighting: Iluminación de estudio clínica brillante.
Color Palette: Teal (#0795A5), metal quirúrgico realista, blanco de fondo.
Composition: Instrumental centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 5. Reemplazos Articulares (`public/images/services/reemplazos-articulares.jpg`)
```text
Contexto clínico: Reemplazos Articulares (prótesis de rodilla y cadera).
Fotografía clínica editorial de un set de implantes articulares (rodilla y cadera) exhibidos sobre superficie clínica limpia, estilo catálogo premium.
Lighting: Iluminación de estudio clínica brillante.
Color Palette: Teal (#0795A5), metal quirúrgico realista, blanco de fondo.
Composition: Implantes ordenados, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 6. Cirugía Ortopédica (`public/images/services/cirugia-ortopedica.jpg`)
```text
Contexto clínico: Cirugía Ortopédica (procedimientos quirúrgicos generales de hueso y articulación).
Fotografía clínica editorial de un quirófano ortopédico ordenado con instrumental general dispuesto, sin personal visible, estilo catálogo médico.
Lighting: Iluminación de quirófano limpia y brillante.
Color Palette: Teal (#0795A5), verde-teal oscuro (#305F4C), blanco de fondo.
Composition: Quirófano centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, real identifiable patient.
```

### 7. Oncología Ortopédica (`public/images/services/oncologia-ortopedica.jpg`)
```text
Contexto clínico: Oncología Ortopédica (tratamiento quirúrgico de tumores óseos).
Render 3D anatómico de una pierna en silueta translúcida mostrando el fémur junto a un modelo de endoprótesis oncológica preparado para implantarse — silueta de la pierna visible para contexto de ubicación, estilo educativo de alta gama, no explícito.
Lighting: Iluminación de estudio clínica.
Color Palette: Teal (#0795A5), menta (#52BAAA) acento, metal realista, blanco de fondo.
Composition: Silueta de pierna con hueso e implante lado a lado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 8. Resección de Tumores Óseos (`public/images/services/reseccion-de-tumores-oseos.jpg`)
```text
Contexto clínico: Resección de Tumores Óseos (extirpación quirúrgica oncológica).
Fotografía clínica editorial de instrumental quirúrgico oncológico-ortopédico especializado ordenado sobre charola, estilo catálogo médico de alta gama.
Lighting: Iluminación de estudio clínica brillante.
Color Palette: Teal (#0795A5), metal quirúrgico realista, blanco de fondo.
Composition: Instrumental centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 9. Reconstrucción Ósea con Injerto (`public/images/services/reconstruccion-osea-con-injerto.jpg`)
```text
Contexto clínico: Reconstrucción Ósea con Injerto.
Render 3D anatómico de un segmento óseo largo en silueta de extremidad, con un injerto integrándose al hueso huésped en el acercamiento — silueta de la extremidad visible para contexto de ubicación.
Lighting: Iluminación de estudio suave.
Color Palette: Teal (#0795A5), menta (#52BAAA) resaltando el injerto, blanco de fondo.
Composition: Silueta de extremidad, hueso centrado en el acercamiento, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 10. Fijación de Fracturas (Osteosíntesis) (`public/images/services/fijacion-de-fracturas.jpg`)
```text
Contexto clínico: Fijación de Fracturas / Osteosíntesis (placas y tornillos).
Fotografía clínica editorial de manos enguantadas de un cirujano colocando una placa de osteosíntesis sobre un modelo óseo anatómico de entrenamiento, mostrando el momento de la técnica en vez de solo el instrumental en reposo.
Lighting: Iluminación de estudio clínica brillante.
Color Palette: Teal (#0795A5), metal quirúrgico realista, blanco de fondo.
Composition: Manos y modelo óseo centrados, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, real identifiable patient.
```

### 11. Endoprótesis Oncológica (`public/images/services/endoprotesis-oncologica.jpg`)
```text
Contexto clínico: Endoprótesis Oncológica (reemplazo articular oncológico de segmento largo).
Fotografía clínica editorial de un implante de endoprótesis oncológica de segmento largo exhibido sobre superficie clínica limpia.
Lighting: Iluminación de estudio clínica brillante.
Color Palette: Teal (#0795A5), menta (#52BAAA) acento, metal realista, blanco de fondo.
Composition: Implante centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 12. Artrodesis de Columna (`public/images/services/artrodesis-de-columna.jpg`)
```text
Contexto clínico: Artrodesis de Columna (fijación vertebral con tornillos y barra).
Render 3D anatómico de una silueta de torso/espalda completa de perfil, con un segmento de columna vertebral con tornillos y barra de fijación en el acercamiento — silueta visible para contexto de ubicación.
Lighting: Iluminación de estudio clínica.
Color Palette: Teal (#0795A5), verde-teal oscuro (#305F4C), metal realista, blanco de fondo.
Composition: Silueta de torso de perfil, segmento de columna centrado en el acercamiento, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

---

## 🩻 SECCIÓN 3: PROMPTS PARA SÍNTOMAS

### 1. Dolor de Espalda (`public/images/symptoms/dolor-de-espalda.jpg`)
```text
Contexto clínico: Dolor de Espalda.
Fotografía editorial cálida de un paciente adulto sentado sosteniendo su espalda baja con gesto claro de molestia (ceja fruncida, postura tensa), nunca neutro ni feliz.
Lighting: Luz natural cálida.
Color Palette: Teal (#0795A5) en fondo/vestuario, tonos de piel naturales.
Composition: Centrada, espacio negativo generoso, rostro no identificable.
Suffixes: warm editorial photography, 8k, soft natural light --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, real identifiable patient.
```

### 2. Huesos Frágiles (`public/images/symptoms/huesos-fragiles.jpg`)
```text
Contexto clínico: Huesos Frágiles (fragilidad ósea).
Render 3D anatómico de una silueta corporal completa con puntos de énfasis en zonas típicas de fractura por fragilidad (cadera, muñeca, columna), con un acercamiento a tejido óseo trabecular poroso en una de esas zonas.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), menta (#52BAAA), blanco de fondo.
Composition: Silueta corporal con zonas señaladas, textura ósea en el acercamiento, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 3. Dolor Articular (`public/images/symptoms/dolor-articular.jpg`)
```text
Contexto clínico: Dolor Articular.
Fotografía editorial cálida de un paciente adulto sosteniendo su rodilla con gesto claro de molestia (manos presionando, rostro tenso), sentado en silla de consultorio — malestar real, no neutro.
Lighting: Luz natural cálida de consultorio.
Color Palette: Teal (#0795A5), tonos de piel naturales, blanco cálido.
Composition: Centrada, espacio negativo generoso, rostro no identificable.
Suffixes: warm editorial photography, 8k, soft natural light --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, real identifiable patient.
```

### 4. Limitación de Movimientos (`public/images/symptoms/limitacion-de-movimientos.jpg`)
```text
Contexto clínico: Limitación de Movimientos.
Fotografía editorial cálida de un fisioterapeuta ayudando a un paciente adulto a levantar el brazo, el paciente con gesto visible de esfuerzo/incomodidad al llegar al límite del movimiento (no neutro, no sonriente), encuadre discreto.
Lighting: Luz natural cálida de consultorio.
Color Palette: Teal (#0795A5), tonos de piel naturales, blanco cálido.
Composition: Centrada, espacio negativo generoso, rostros no identificables.
Suffixes: warm editorial photography, 8k, soft natural light --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, real identifiable patient.
```

### 5. Rigidez y Deformidad Articular (`public/images/symptoms/rigidez-y-deformidad-articular.jpg`)
```text
Contexto clínico: Rigidez y Deformidad Articular.
Render 3D anatómico de una mano/articulación en silueta corporal de contexto (muñeca o mano completa), con cambios degenerativos leves en el contorno articular visibles en el acercamiento.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), verde-teal oscuro (#305F4C), blanco de fondo.
Composition: Silueta de mano/muñeca, articulación centrada en el acercamiento, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 6. Deformación de la Zona (`public/images/symptoms/deformacion-de-la-zona.jpg`)
```text
Contexto clínico: Deformación de la Zona (alteración visible del contorno tras una lesión).
Render 3D anatómico de una extremidad en silueta completa con un segmento óseo mostrando alteración leve de su contorno habitual en el acercamiento — silueta visible para contexto de ubicación, no explícito.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), menta (#52BAAA), blanco de fondo.
Composition: Silueta de extremidad, segmento óseo centrado en el acercamiento, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 7. Inflamación (`public/images/symptoms/inflamacion.jpg`)
```text
Contexto clínico: Inflamación articular.
Render 3D anatómico de una rodilla en silueta de pierna completa, con tejido articular mostrando enrojecimiento/inflamación leve en el acercamiento, representado de forma educativa, no explícita.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), menta (#52BAAA) acento de alerta suave, blanco de fondo.
Composition: Silueta de pierna, articulación centrada en el acercamiento, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 8. Hematoma (`public/images/symptoms/hematoma.jpg`)
```text
Contexto clínico: Hematoma (moretón).
Fotografía editorial discreta de una persona tocándose con cuidado un brazo con un moretón leve y difuso, postura y mano indicando sensibilidad al tacto — malestar real sugerido por la postura, sin primer plano gráfico ni sangre.
Lighting: Luz natural suave.
Color Palette: Tonos de piel naturales, teal (#0795A5) en fondo, blanco cálido.
Composition: Encuadre amplio y discreto, espacio negativo generoso, rostro no visible.
Suffixes: warm editorial photography, 8k, soft natural light --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, graphic detail, real identifiable patient, blood.
```

### 9. Entumecimiento/Hormigueo (`public/images/symptoms/entumecimiento-hormigueo.jpg`)
```text
Contexto clínico: Entumecimiento/Hormigueo (sensación nerviosa periférica).
Render 3D anatómico de un brazo completo en silueta translúcida mostrando el trayecto del nervio periférico con puntos de luz suave representando la sensación de hormigueo — silueta del brazo visible para contexto de ubicación.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), menta (#52BAAA) acento en el nervio, blanco de fondo.
Composition: Silueta de brazo completa, trayecto nervioso señalado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 10. Fiebre (`public/images/symptoms/fiebre.jpg`)
```text
Contexto clínico: Fiebre.
Fotografía editorial cálida de una mano sosteniendo un termómetro clínico moderno mostrando una lectura elevada, encuadre discreto que sugiere que alguien se la está tomando en este momento, sin mostrar el rostro del paciente.
Lighting: Luz natural cálida.
Color Palette: Teal (#0795A5) en fondo, blanco cálido.
Composition: Mano y termómetro centrados, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, soft natural light --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, real identifiable patient.
```
