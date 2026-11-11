## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)


# Instrucciones de desarrollo frontend

## Contexto
Soy desarrollador frontend de AlunzaOS.
Trabajamos con Definition of Ready, Definition of Done,
Team Agreements y un flujo formal de Git.

## Fuentes de verdad
Antes de actuar sobre procesos del equipo, consultar:
- docs/team/04.01 Definition of Ready (DoD & DoR).md
- docs/team/04.02 Team Agreements.md
- docs/team/04.03 Flujo de trabajo con Git.md

Si falta un documento, avisarme. No inventar políticas.

## Antes de desarrollar
- Comprobar que exista un issue publicado en GitHub.
- Verificar criterios de aceptación.
- Solicitar diseño aprobado si hay cambios de interfaz.
- Verificar contrato de API si hay integración backend.
- Detectar dependencias pendientes.
- Avisarme si una historia no cumple Definition of Ready.
- No iniciar implementación de historias incompletas sin
  aclarar su alcance.

## Git
- No hacer push directo a main ni develop.
- Crear feature/descripcion desde develop actualizado.
- Mantener ramas de vida corta.
- Usar Conventional Commits en español e imperativo.
- Referenciar el issue en commits y PR.
- No hacer squash ni rebase para integrar PR.
- Resolver conflictos antes de pedir revisión.
- No fusionar PR sin aprobación de otra persona.
- No hacer force push sobre ramas compartidas.

## Calidad
Antes de proponer entregar un cambio:
- Ejecutar npm run lint.
- Ejecutar npm test.
- Ejecutar npm run build si cambia rutas, tipos o dependencias.
- Incorporar pruebas según el cambio.
- Comprobar criterios de aceptación.
- Comprobar que el PR tenga menos de 500 líneas efectivas.
- Recordarme agregar capturas cuando cambie la interfaz.
- Actualizar documentación afectada.
- Registrar deuda pendiente mediante issue.

## Responsabilidades
- Frontend: mi responsabilidad principal.
- Backend: Dante.
- Contratos API, datos y permisos: Kevin.
- No modificar contratos ni reglas de negocio unilateralmente.
- Comunicar bloqueos con contexto y evidencia.
- No atribuirme responsabilidades de backend sin acuerdo.

## Comportamiento esperado de Codex
- Antes de implementar, mostrar bloqueos y requisitos faltantes.
- Durante el trabajo, detectar desviaciones de los acuerdos.
- Antes del PR, ejecutar una revisión Definition of Done.
- Diferenciar bloqueantes, sugerencias, preguntas y detalles.
- No crear, cerrar issues, fusionar PR ni desplegar
  sin mi autorización explícita.
- No declarar una prueba aprobada si no fue ejecutada.
- No asumir que un requisito está aprobado.
- Mantener las soluciones simples y mantenibles.
- Al terminar, mostrar tareas completadas y pendientes.


## Recordatorios automáticos
Antes de implementar cambios y antes de preparar una entrega,
comprobar si corresponde aplicar frontend-workflow.

Si detectas un incumplimiento de los acuerdos del equipo,
avisarme proactivamente, indicando:
- Qué regla se incumple.
- Qué documento la establece.
- Cómo corregirlo.

No repetir recordatorios que ya fueron atendidos.
