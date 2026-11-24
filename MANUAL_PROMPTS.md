# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dr. Miguel Ángel Esquinca Díaz — Traumatología y Ortopedia (Alta Especialidad en Oncología Ortopédica)
**Ciudad:** Tuxtla Gutiérrez, Chiapas

**Nota de discreción clínica:** el catálogo incluye fracturas, tumores óseos y cirugías ortopédicas. Todos los prompts están redactados para verse **clínicos y editoriales, nunca gráficos**: diagramas anatómicos esquemáticos de hueso/articulación (nunca heridas abiertas, hueso expuesto, sangre o rayos X de pacientes reales), instrumental quirúrgico ordenado para procedimientos, y fotografía discreta de consulta/rehabilitación para síntomas. Cero sangre, cero hueso fracturado expuesto de forma realista, cero radiografías reales identificables — usar siempre representación esquemática tipo libro de texto o fotografía editorial cálida.

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/images/...jpg`).

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud en traumatología, ortopedia y oncología ortopédica.
Tono: Preciso, técnico y de autoridad clínica — editorial y confiable, nunca gráfico ni incómodo.
Estilo: Renders 3D anatómicos esquemáticos (hueso, articulación, columna representados de forma educativa, nunca heridas abiertas ni hueso expuesto) para enfermedades y síntomas; fotografía clínica de instrumental quirúrgico/ortopédico ordenado (placas, tornillos, prótesis, artroscopio) para procedimientos.
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
Render 3D anatómico esquemático de un hueso largo (fémur) en corte, mostrando una zona de densidad irregular en el interior, estilo educativo de libro de texto, no explícito.
Lighting: Iluminación de estudio suave y cálida.
Color Palette: Teal (#0795A5) contorno óseo, menta (#52BAAA) acento en la zona afectada, blanco cálido de fondo.
Composition: Hueso centrado en corte longitudinal, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, exposed bone, graphic detail.
```

### 2. Fracturas (`public/images/diseases/fracturas.jpg`)
```text
Render 3D anatómico esquemático de un hueso largo con una línea de fractura limpia, sin desplazamiento visible, estilo educativo discreto.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5) y verde-teal oscuro (#305F4C), blanco cálido de fondo.
Composition: Hueso centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, exposed bone, graphic detail.
```

### 3. Osteoporosis (`public/images/diseases/osteoporosis.jpg`)
```text
Render 3D anatómico esquemático comparando la densidad de tejido óseo trabecular sano vs. poroso, corte transversal educativo.
Lighting: Iluminación de estudio fría-cálida balanceada.
Color Palette: Teal (#0795A5), menta (#52BAAA) resaltando la zona porosa, blanco de fondo.
Composition: Comparación lado a lado centrada, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 4. Artrosis (`public/images/diseases/artrosis.jpg`)
```text
Render 3D anatómico esquemático de una articulación (rodilla) mostrando desgaste del cartílago articular, corte sagital educativo.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), verde-teal oscuro (#305F4C), blanco de fondo.
Composition: Articulación centrada en corte, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 5. Displasia Fibrosa (`public/images/diseases/displasia-fibrosa.jpg`)
```text
Render 3D anatómico esquemático de un hueso con una zona de tejido fibroso reemplazando tejido óseo normal, estilo educativo discreto.
Lighting: Iluminación de estudio suave.
Color Palette: Teal (#0795A5) contorno, menta (#52BAAA) acento en la zona afectada, blanco de fondo.
Composition: Hueso centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 6. Lesiones Deportivas (`public/images/diseases/lesiones-deportivas.jpg`)
```text
Fotografía editorial cálida de un fisioterapeuta evaluando la rodilla de un paciente adulto en consultorio, encuadre discreto, sin mostrar lesión real.
Lighting: Luz natural cálida de consultorio.
Color Palette: Teal (#0795A5) en elementos de fondo, tonos de piel naturales, blanco cálido.
Composition: Centrada, espacio negativo generoso, rostro no identificable.
Suffixes: warm editorial photography, 8k, soft natural light --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, real identifiable patient, blood.
```

### 7. Luxaciones (`public/images/diseases/luxaciones.jpg`)
```text
Render 3D anatómico esquemático de una articulación (hombro) mostrando el desplazamiento de las superficies articulares, estilo educativo discreto.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), verde-teal oscuro (#305F4C), blanco de fondo.
Composition: Articulación centrada, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 8. Lesiones de Rodilla (`public/images/diseases/lesiones-de-rodilla.jpg`)
```text
Render 3D anatómico esquemático de la articulación de la rodilla mostrando ligamentos y meniscos, corte educativo sin daño visible explícito.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), menta (#52BAAA) acento en estructuras internas, blanco de fondo.
Composition: Rodilla centrada en corte, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 9. Hernia Discal (`public/images/diseases/hernia-discal.jpg`)
```text
Render 3D anatómico esquemático de la columna vertebral en corte sagital mostrando un disco intervertebral desplazado, estilo educativo de libro de texto.
Lighting: Iluminación de estudio fría-cálida balanceada.
Color Palette: Teal (#0795A5), verde-teal oscuro (#305F4C) en vértebras, blanco de fondo.
Composition: Segmento de columna centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 10. Esguinces (`public/images/diseases/esguinces.jpg`)
```text
Render 3D anatómico esquemático de un tobillo mostrando los ligamentos laterales, corte educativo discreto, sin inflamación explícita.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), menta (#52BAAA), blanco de fondo.
Composition: Tobillo centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 11. Pie Plano (`public/images/diseases/pie-plano.jpg`)
```text
Render 3D anatómico esquemático de la bóveda plantar del pie en corte lateral, comparando arco normal vs. aplanado, estilo educativo.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), verde-teal oscuro (#305F4C), blanco de fondo.
Composition: Pie en corte lateral centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 12. Problemas de Espalda (`public/images/diseases/problemas-de-espalda.jpg`)
```text
Fotografía editorial cálida de un paciente adulto de espaldas sosteniendo su zona lumbar con gesto de molestia leve, encuadre discreto.
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
Fotografía clínica editorial de un implante de prótesis de cadera (componente metálico y de polietileno) sobre una superficie quirúrgica limpia, estilo catálogo médico premium.
Lighting: Iluminación de estudio clínica brillante.
Color Palette: Teal (#0795A5) en reflejos/fondo, metal quirúrgico realista, blanco de fondo.
Composition: Implante centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, real identifiable patient.
```

### 2. Cirugía de Rodilla (`public/images/services/cirugia-de-rodilla.jpg`)
```text
Fotografía clínica editorial de instrumental quirúrgico ortopédico de rodilla ordenado sobre charola quirúrgica, estilo catálogo médico.
Lighting: Iluminación de estudio clínica brillante.
Color Palette: Teal (#0795A5), metal quirúrgico realista, blanco de fondo.
Composition: Instrumental ordenado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 3. Artroscopia de Rodilla (`public/images/services/artroscopia-de-rodilla.jpg`)
```text
Fotografía clínica editorial de un artroscopio (cámara endoscópica) y sus accesorios ordenados sobre charola quirúrgica.
Lighting: Iluminación de estudio clínica brillante.
Color Palette: Teal (#0795A5), menta (#52BAAA) acento, metal realista, blanco de fondo.
Composition: Instrumental centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 4. Artroscopia de Hombro (`public/images/services/artroscopia-de-hombro.jpg`)
```text
Fotografía clínica editorial de instrumental artroscópico de hombro ordenado sobre charola quirúrgica, estilo catálogo médico.
Lighting: Iluminación de estudio clínica brillante.
Color Palette: Teal (#0795A5), metal quirúrgico realista, blanco de fondo.
Composition: Instrumental centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 5. Reemplazos Articulares (`public/images/services/reemplazos-articulares.jpg`)
```text
Fotografía clínica editorial de un set de implantes articulares (rodilla y cadera) exhibidos sobre superficie clínica limpia, estilo catálogo premium.
Lighting: Iluminación de estudio clínica brillante.
Color Palette: Teal (#0795A5), metal quirúrgico realista, blanco de fondo.
Composition: Implantes ordenados, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 6. Cirugía Ortopédica (`public/images/services/cirugia-ortopedica.jpg`)
```text
Fotografía clínica editorial de un quirófano ortopédico ordenado con instrumental general dispuesto, sin personal visible, estilo catálogo médico.
Lighting: Iluminación de quirófano limpia y brillante.
Color Palette: Teal (#0795A5), verde-teal oscuro (#305F4C), blanco de fondo.
Composition: Quirófano centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, real identifiable patient.
```

### 7. Oncología Ortopédica (`public/images/services/oncologia-ortopedica.jpg`)
```text
Render 3D anatómico esquemático de un hueso largo junto a un modelo de endoprótesis oncológica, estilo educativo de alta gama, no explícito.
Lighting: Iluminación de estudio clínica.
Color Palette: Teal (#0795A5), menta (#52BAAA) acento, metal realista, blanco de fondo.
Composition: Hueso e implante lado a lado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 8. Resección de Tumores Óseos (`public/images/services/reseccion-de-tumores-oseos.jpg`)
```text
Fotografía clínica editorial de instrumental quirúrgico oncológico-ortopédico especializado ordenado sobre charola, estilo catálogo médico de alta gama.
Lighting: Iluminación de estudio clínica brillante.
Color Palette: Teal (#0795A5), metal quirúrgico realista, blanco de fondo.
Composition: Instrumental centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 9. Reconstrucción Ósea con Injerto (`public/images/services/reconstruccion-osea-con-injerto.jpg`)
```text
Render 3D anatómico esquemático de un segmento óseo con un injerto integrándose al hueso huésped, estilo educativo limpio.
Lighting: Iluminación de estudio suave.
Color Palette: Teal (#0795A5), menta (#52BAAA) resaltando el injerto, blanco de fondo.
Composition: Hueso centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 10. Fijación de Fracturas (Osteosíntesis) (`public/images/services/fijacion-de-fracturas.jpg`)
```text
Fotografía clínica editorial de placas y tornillos de osteosíntesis ordenados sobre charola quirúrgica, estilo catálogo médico.
Lighting: Iluminación de estudio clínica brillante.
Color Palette: Teal (#0795A5), metal quirúrgico realista, blanco de fondo.
Composition: Implantes ordenados, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 11. Endoprótesis Oncológica (`public/images/services/endoprotesis-oncologica.jpg`)
```text
Fotografía clínica editorial de un implante de endoprótesis oncológica de segmento largo exhibido sobre superficie clínica limpia.
Lighting: Iluminación de estudio clínica brillante.
Color Palette: Teal (#0795A5), menta (#52BAAA) acento, metal realista, blanco de fondo.
Composition: Implante centrado, espacio negativo generoso.
Suffixes: high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 12. Artrodesis de Columna (`public/images/services/artrodesis-de-columna.jpg`)
```text
Render 3D anatómico esquemático de un segmento de columna vertebral con tornillos y barra de fijación, estilo educativo limpio.
Lighting: Iluminación de estudio clínica.
Color Palette: Teal (#0795A5), verde-teal oscuro (#305F4C), metal realista, blanco de fondo.
Composition: Segmento de columna centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

---

## 🩻 SECCIÓN 3: PROMPTS PARA SÍNTOMAS

### 1. Dolor de Espalda (`public/images/symptoms/dolor-de-espalda.jpg`)
```text
Fotografía editorial cálida de un paciente adulto sentado sosteniendo su espalda baja con gesto de molestia leve, encuadre discreto.
Lighting: Luz natural cálida.
Color Palette: Teal (#0795A5) en fondo/vestuario, tonos de piel naturales.
Composition: Centrada, espacio negativo generoso, rostro no identificable.
Suffixes: warm editorial photography, 8k, soft natural light --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, real identifiable patient.
```

### 2. Huesos Frágiles (`public/images/symptoms/huesos-fragiles.jpg`)
```text
Render 3D anatómico esquemático de tejido óseo trabecular poroso, primer plano educativo sin contexto de fractura.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), menta (#52BAAA), blanco de fondo.
Composition: Textura ósea centrada, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 3. Dolor Articular (`public/images/symptoms/dolor-articular.jpg`)
```text
Fotografía editorial cálida de un paciente adulto sosteniendo su rodilla con gesto de molestia leve, sentado en silla de consultorio.
Lighting: Luz natural cálida de consultorio.
Color Palette: Teal (#0795A5), tonos de piel naturales, blanco cálido.
Composition: Centrada, espacio negativo generoso, rostro no identificable.
Suffixes: warm editorial photography, 8k, soft natural light --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, real identifiable patient.
```

### 4. Limitación de Movimientos (`public/images/symptoms/limitacion-de-movimientos.jpg`)
```text
Fotografía editorial cálida de un fisioterapeuta ayudando a un paciente adulto a mover el hombro en rango limitado, encuadre discreto.
Lighting: Luz natural cálida de consultorio.
Color Palette: Teal (#0795A5), tonos de piel naturales, blanco cálido.
Composition: Centrada, espacio negativo generoso, rostros no identificables.
Suffixes: warm editorial photography, 8k, soft natural light --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, real identifiable patient.
```

### 5. Rigidez y Deformidad Articular (`public/images/symptoms/rigidez-y-deformidad-articular.jpg`)
```text
Render 3D anatómico esquemático de una articulación con cambios degenerativos leves en su contorno, estilo educativo discreto.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), verde-teal oscuro (#305F4C), blanco de fondo.
Composition: Articulación centrada, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 6. Deformación de la Zona (`public/images/symptoms/deformacion-de-la-zona.jpg`)
```text
Render 3D anatómico esquemático de un segmento óseo con alteración leve de su contorno habitual, estilo educativo discreto, no explícito.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), menta (#52BAAA), blanco de fondo.
Composition: Segmento óseo centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 7. Inflamación (`public/images/symptoms/inflamacion.jpg`)
```text
Render 3D anatómico esquemático de tejido articular con enrojecimiento/inflamación leve representado de forma educativa, no explícita.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), menta (#52BAAA) acento de alerta suave, blanco de fondo.
Composition: Articulación centrada, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood, graphic detail.
```

### 8. Hematoma (`public/images/symptoms/hematoma.jpg`)
```text
Fotografía editorial discreta de un brazo con un moretón leve y difuso, tono natural, sin primer plano gráfico.
Lighting: Luz natural suave.
Color Palette: Tonos de piel naturales, teal (#0795A5) en fondo, blanco cálido.
Composition: Encuadre amplio y discreto, espacio negativo generoso, rostro no visible.
Suffixes: warm editorial photography, 8k, soft natural light --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, graphic detail, real identifiable patient.
```

### 9. Entumecimiento/Hormigueo (`public/images/symptoms/entumecimiento-hormigueo.jpg`)
```text
Render 3D anatómico esquemático de un trayecto nervioso periférico con puntos de luz representando la sensación de hormigueo, estilo educativo.
Lighting: Iluminación de estudio limpia.
Color Palette: Teal (#0795A5), menta (#52BAAA) acento en el nervio, blanco de fondo.
Composition: Trayecto nervioso centrado, espacio negativo generoso.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, blood.
```

### 10. Fiebre (`public/images/symptoms/fiebre.jpg`)
```text
Fotografía editorial cálida de un termómetro clínico moderno sobre superficie neutra, estilo discreto, sin paciente visible.
Lighting: Luz natural cálida.
Color Palette: Teal (#0795A5) en fondo, blanco cálido.
Composition: Termómetro centrado, espacio negativo generoso.
Suffixes: warm editorial photography, 8k, soft natural light --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, real identifiable patient.
```
