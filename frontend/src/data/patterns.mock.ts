import type { PatternCognitive } from "@/types/patternCognitive";

export const patternsMock: PatternCognitive[] = [
  {
    id: 1,
    name: "Lectura de mente",
    definition:
      "Asumir que se sabe con certeza lo que otras personas están pensando, sintiendo o las intenciones que tienen, generalmente asumiendo juicios negativos hacia uno mismo, sin tener evidencia objetiva que lo confirme.",
    example:
      "Creer que un conocido no te devolvió el saludo en la calle porque le caes mal o te está ignorando a propósito, cuando simplemente podría ir distraído.",
    MethodOfRecognition:
      "Uso frecuente de suposiciones sobre las intenciones ajenas con frases como: 'Seguro piensa que...', 'Lo hizo porque cree que yo...', 'Se nota que me juzga'.",
    ReflectionQuestions:
      "¿Tengo pruebas reales e irrefutables de que esa persona está pensando eso? ¿Existe alguna otra explicación lógica y neutral para su comportamiento?",
    urlImg: "src\\assets\\library-images\\lectura-de-mente.jpg",
  },
  {
    id: 2,
    name: "Personalización",
    definition:
      "Atribuirse la culpa o la responsabilidad de eventos externos negativos sobre los cuales no se tiene control directo, o creer que el comportamiento de los demás es siempre una reacción directa hacia uno mismo.",
    example:
      "Pensar que un amigo canceló una salida porque le aburre estar contigo, ignorando factores ajenos como su cansancio físico o estrés personal.",
    MethodOfRecognition:
      "Tendencia a tomarse las cosas de manera muy personal, usando frases como: 'Es por mi culpa', 'Seguro lo dijo por mí', 'Me lo hace a propósito'.",
    ReflectionQuestions:
      "¿Soy realmente el centro o la causa principal de esta situación? ¿Qué otros factores externos o personales del otro pudieron provocar esto?",
    urlImg: "src\\assets\\library-images\\personalizacion.jpg",
  },
  {
    id: 3,
    name: "Catastrofización",
    definition:
      "Imaginar, anticipar o exagerar el peor resultado posible de una situación, transformando un problema menor o una posibilidad remota en un desastre inminente e insuperable.",
    example:
      "Pensar que por dejar caer tus cosas en público tu día entero se arruinó, o creer que una mala elección entre dos cursos arruinará por completo tu futuro profesional.",
    MethodOfRecognition:
      "Uso de lenguaje extremo y fatalista: 'Es el fin del mundo', 'Será un desastre total', 'Mi vida está arruinada', 'Es terrible e insoportable'.",
    ReflectionQuestions:
      "Si ocurriera lo peor, ¿sería realmente el fin del mundo o podría encontrar una forma de superarlo? ¿Cuál es el escenario más realista que probablemente suceda?",
    urlImg: "src\\assets\\library-images\\catastrofizacion.jpg",
  },
  {
    id: 4,
    name: "Generalización excesiva",
    definition:
      "Extraer una regla general rígida o una conclusión universal y derrotista a partir de un solo incidente aislado o un evento negativo puntual.",
    example:
      "No recibir invitación a una pequeña reunión y concluir inmediatamente que te vas a quedar sin amigos y estarás solo para siempre.",
    MethodOfRecognition:
      "Uso constante de palabras absolutas en contextos negativos: 'Siempre', 'Nunca', 'Todos', 'Nadie', 'Todo el tiempo'.",
    ReflectionQuestions:
      "¿Es verdaderamente cierto que *siempre* pasa esto? ¿Puedo recordar alguna situación en el pasado donde ocurrió exactamente lo contrario?",
    urlImg: "src\\assets\\library-images\\generalizacion-excesiva.jpg",
  },
  {
    id: 5,
    name: "Pensamiento dicotómico",
    definition:
      "Evaluar las experiencias, a las personas o a uno mismo en categorías extremas y opuestas, sin reconocer matices o puntos intermedios (blanco o negro).",
    example:
      "Recibir una mala calificación en un trabajo y concluir que eres 'un fracaso como estudiante' y no sirves para la carrera, ignorando tus éxitos anteriores.",
    MethodOfRecognition:
      "Ver las situaciones como éxito total o fracaso absoluto, bueno o malo, perfecto o inútil. Ausencia de 'zonas grises'.",
    ReflectionQuestions:
      "¿Existen puntos intermedios en esta situación? ¿Un resultado imperfecto borra automáticamente todo mi esfuerzo o mis habilidades reales?",
    urlImg: "src\\assets\\library-images\\pensamiento-docotomico.jpg",
  },
  {
    id: 6,
    name: "Filtraje",
    definition:
      "Enfocarse exclusivamente en los detalles negativos de una situación, ignorando por completo cualquier aspecto positivo o neutral, de manera que la visión de toda la experiencia se vuelve oscura.",
    example:
      "Un supervisor señala secciones críticas a corregir en un proyecto, y tú te enfocas solo en la crítica, interpretando que *todo* tu trabajo es un desastre sin valor.",
    MethodOfRecognition:
      "Visión de túnel hacia el error o la crítica. Incapacidad de recordar o valorar lo que salió bien después de un pequeño contratiempo.",
    ReflectionQuestions:
      "¿Me estoy concentrando únicamente en la parte negativa? Si hago una lista, ¿qué cosas positivas o neutrales también están presentes en esta situación?",
    urlImg: "src\\assets\\library-images\\filtraje.jpg",
  },
  {
    id: 7,
    name: "Razonamiento emocional",
    definition:
      "Asumir que las emociones que uno siente son un reflejo exacto y objetivo de la realidad, creyendo que si se siente algo, debe ser verdad.",
    example:
      "Sentir mucha angustia física al tener que tomar una decisión importante y concluir que esa emoción es una 'señal' de que todo va a salir mal.",
    MethodOfRecognition:
      "Basar conclusiones lógicas en estados emocionales momentáneos: 'Siento que soy un inútil, por lo tanto, debo serlo', 'Siento miedo, esto debe ser peligroso'.",
    ReflectionQuestions:
      "¿Tengo pruebas reales de que esto es cierto, más allá de cómo me siento en este momento? ¿Podría mi estado de ánimo estar nublando mi juicio objetivo?",
    urlImg: "src\\assets\\library-images\\razonamiento-emocional.jpg",
  },
  {
    id: 8,
    name: "Anticipación negativa",
    definition:
      "Predecir sistemáticamente que las cosas saldrán mal en el futuro, dando por hecho un desenlace negativo sin tener evidencias sólidas que lo respalden.",
    example:
      "Ver el éxito en redes sociales de un excompañero y anticipar inmediatamente que tu propio futuro está arruinado y te quedarás atrás para siempre.",
    MethodOfRecognition:
      "Actuar como si se tuviera una bola de cristal que solo muestra tragedias futuras. Frases como 'Seguro que voy a fallar', 'Sé que me va a ir mal'.",
    ReflectionQuestions:
      "¿Tengo evidencia irrefutable del futuro? ¿Qué otros desenlaces (positivos o neutros) también son estadísticamente posibles?",
    urlImg: "src\\assets\\library-images\\anticipacion-negativa.jpg",
  },
  {
    id: 9,
    name: "Descalificación de lo positivo",
    definition:
      "Rechazar, minimizar o restarle valor intencionalmente a las experiencias, logros o cualidades positivas, atribuyéndolas a la suerte, al azar o afirmando que 'no cuentan'.",
    example:
      "Cuando un grupo elige otra idea en lugar de la tuya, asumes que tus aportes *nunca* importan, descalificando y borrando de tu memoria todas las veces que sí valoraron tus ideas en el pasado.",
    MethodOfRecognition:
      "Minimizar los logros con justificaciones: 'Fue pura suerte', 'Cualquiera podría haberlo hecho', 'El profesor fue amable', 'Eso no cuenta'.",
    ReflectionQuestions:
      "¿Por qué me cuesta aceptar mis méritos? Si un amigo cercano lograra esto o tuviera esta cualidad, ¿también le diría que 'no cuenta'?",
    urlImg: "src\\assets\\library-images\\descalificacion-de-lo-positivo.jpg",
  },
  {
    id: 10,
    name: "Externalización",
    definition:
      "Atribuir sistemáticamente la culpa de los problemas, errores o emociones negativas propias a otras personas o a las circunstancias, evitando cualquier grado de responsabilidad personal.",
    example:
      "Recibir una mala nota por un trabajo al que le faltaron criterios, y concluir que el profesor 'te tiene manía' y te evalúa injustamente a propósito.",
    MethodOfRecognition:
      "Adoptar una postura de víctima donde siempre 'me hacen', 'me obligan' o 'tienen la culpa'. Rechazo a la autocrítica constructiva.",
    ReflectionQuestions:
      "¿Qué parte de responsabilidad tengo yo en este resultado, por pequeña que sea? ¿Hay algo que yo pueda cambiar o mejorar para que esto no se repita?",
    urlImg: "src\\assets\\library-images\\externalizacion.jpg",
  },
];
