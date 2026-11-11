---
name: frontend-workflow
description: >
  Validar tareas frontend, Git, pruebas y Pull Requests
  según los acuerdos oficiales del equipo AlunzaOS.
  Usar al iniciar una implementación, preparar commits,
  revisar PRs o verificar Definition of Done.
---

# Frontend Workflow

## Al iniciar una tarea
1. Consultar AGENTS.md y acuerdos oficiales.
2. Identificar el issue en GitHub.
3. Evaluar los ocho requisitos del Definition of Ready.
4. Mostrar requisitos cumplidos y faltantes.
5. Confirmar rama base develop.
6. Proponer plan de implementación.

## Durante el desarrollo
1. Mantener el cambio limitado al issue.
2. Evitar mezclar refactorizaciones no relacionadas.
3. Aplicar pruebas según el comportamiento modificado.
4. Detectar cambios visuales que requieren capturas.
5. Detectar cambios de API que requieren a Kevin.
6. Recordar actualizar la documentación afectada.

## Antes de un commit
1. Revisar git status y git diff.
2. Detectar archivos ajenos al cambio.
3. Recomendar staging selectivo.
4. Proponer Conventional Commit en español.
5. Referenciar el issue.
6. No crear commits sin autorización.

## Antes de un Pull Request
1. Ejecutar npm run lint y npm test.
2. Ejecutar npm run build si aplica; este script también valida TypeScript.
3. Comprobar pruebas y criterios de aceptación.
4. Revisar tamaño del diff: menos de 500 líneas.
5. Comprobar documentación y capturas.
6. Confirmar destino develop.
7. Preparar descripción del PR.
8. Recordar que se requiere aprobación ajena.

## Resultado
Mostrar:
- Estado: LISTO / BLOQUEADO / PENDIENTE.
- Checks ejecutados y resultados.
- Requisitos incumplidos.
- Dependencias con Dante o Kevin.
- Próximo paso recomendado.

Nunca inventar resultados ni aprobar mi propio PR.
