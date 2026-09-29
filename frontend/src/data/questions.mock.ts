import type { Question } from "@/types/question";

export const questionsMock: Question[] = [
  {
    id: "queston 1",
    title:
      "Si cometieras un error importante en una presentación, ¿qué pensarías primero?",
    options: [
      {
        id: "q1-option-1",
        label: "Todos pensarán que soy incompetente.",
      },
      {
        id: "q1-option-2",
        label: "Fue un error puntual y puedo aprender de él.",
      },
      {
        id: "q1-option-3",
        label: "Seguramente arruiné toda la presentación.",
      },
      {
        id: "q1-option-4",
        label: "Intentaría identificar qué salió mal.",
      },
    ],
    scenary: {
      title: "Presentación frente al grupo",
      description:
        "Estás exponiendo un proyecto frente a tu clase. Durante la presentación olvidas explicar una parte importante y debes continuar.",
      imgUrl: "src\\assets\\scenary-images\\presentacion-frente-a-un-grupo.jpg",
    },
  },

  {
    id: "question-2",

    title: "¿Cómo interpretarías inicialmente esta situación?",

    options: [
      {
        id: "q2-option-1",
        label: "Probablemente hice algo mal.",
      },
      {
        id: "q2-option-2",
        label: "Puede haber muchas razones por las que todavía no responde.",
      },
      {
        id: "q2-option-3",
        label: "Seguramente está molesto conmigo.",
      },
      {
        id: "q2-option-4",
        label: "Esperaría antes de sacar una conclusión.",
      },
    ],

    scenary: {
      title: "Mensaje sin respuesta",
      description:
        "Enviaste un mensaje importante a un amigo hace varias horas, pero todavía no has recibido respuesta.",
      imgUrl: "src\\assets\\scenary-images\\mensaje-sin-respuesta.jpg",
    },
  },

  {
    id: "question-3",

    title: "¿Cuál sería tu reacción más cercana ante este resultado?",

    options: [
      {
        id: "q3-option-1",
        label: "No soy bueno para esta materia.",
      },
      {
        id: "q3-option-2",
        label: "Necesito identificar qué temas debo reforzar.",
      },
      {
        id: "q3-option-3",
        label: "Siempre me irá mal.",
      },
      {
        id: "q3-option-4",
        label: "Buscaría otra estrategia para estudiar.",
      },
    ],

    scenary: {
      title: "Resultado inesperado",
      description:
        "Estudiaste durante varios días para un examen, pero obtuviste una calificación menor de la que esperabas.",
      imgUrl: "src\\assets\\scenary-images\\resultado-inesperado.jpg",
    },
  },

  {
    id: "question-4",

    title: "¿Qué pensamiento aparecería con mayor facilidad?",

    options: [
      {
        id: "q4-option-1",
        label: "Mi idea seguramente no era suficientemente buena.",
      },
      {
        id: "q4-option-2",
        label: "Tal vez estaban concentrados en otros aspectos.",
      },
      {
        id: "q4-option-3",
        label: "Nunca toman en cuenta lo que digo.",
      },
      {
        id: "q4-option-4",
        label: "Podría preguntar qué opinan de mi propuesta.",
      },
    ],

    scenary: {
      title: "Trabajo en equipo",
      description:
        "Durante una reunión propones una idea, pero tus compañeros continúan hablando sin comentarla inmediatamente.",
      imgUrl: "src\\assets\\scenary-images\\trabajo-en-equipo.jpg",
    },
  },

  {
    id: "question-5",

    title: "¿Cómo responderías ante esta nueva dificultad?",

    options: [
      {
        id: "q5-option-1",
        label: "Esto demuestra que el proyecto no va a funcionar.",
      },
      {
        id: "q5-option-2",
        label: "Es un problema que podemos analizar y resolver.",
      },
      {
        id: "q5-option-3",
        label: "Todo el trabajo anterior fue inútil.",
      },
      {
        id: "q5-option-4",
        label: "Revisaría las posibles causas antes de decidir qué hacer.",
      },
    ],

    scenary: {
      title: "Problema durante un proyecto",
      description:
        "Después de varias semanas trabajando en un proyecto aparece un problema que obliga al equipo a modificar una parte de la solución.",
      imgUrl: "src\\assets\\scenary-images\\problema-durante-un-proyecto.jpg",
    },
  },
];
