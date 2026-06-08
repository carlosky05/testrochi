const preguntas = {
    bloque1: [
    // ============================
    // I. MÉTODO TRADICIONAL
    // ============================

    {
        texto: "¿Con qué otro nombre se conoce el método tradicional?",
        opciones: [
            "Método comunicativo",
            "Método inductivo",
            "Método gramática-traducción",
            "Método natural"
        ],
        correcta: 2
    },
    {
        texto: "¿Cuál era el objetivo principal del método tradicional?",
        opciones: [
            "Aprender a hablar fluidamente",
            "Comprender textos científicos",
            "Leer y traducir textos literarios",
            "Participar en debates orales"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué lugar ocupaba la expresión oral en esta metodología?",
        opciones: [
            "Era prioritaria",
            "Se enseñaba a la par que la gramática",
            "Se enseñaba sólo al final del curso",
            "Ocupaba un segundo plano"
        ],
        correcta: 3
    },
    {
        texto: "¿Qué técnica se utilizaba para enseñar gramática en el siglo XVIII?",
        opciones: [
            "Método inductivo",
            "Método deductivo",
            "Método comparativo",
            "Método experiencial"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué se entiende por 'traducción inversa-gramática' en el siglo XIX?",
        opciones: [
            "Traducción libre de textos",
            "Traducción oral de frases complejas",
            "Traducción palabra por palabra como base para estudiar gramática",
            "Creación de textos originales por los estudiantes"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué importancia se daba a la forma en los textos usados en clase?",
        opciones: [
            "Se priorizaba el contenido por encima de la forma",
            "Se valoraba especialmente la forma literaria",
            "Se evitaban textos literarios por su dificultad",
            "Solo se usaban para trabajar vocabulario"
        ],
        correcta: 1
    },
    {
        texto: "¿Cuál era el papel del profesor/a en esta metodología?",
        opciones: [
            "Facilitador del aprendizaje",
            "Figura autoritaria que controlaba todo el proceso",
            "Coordinador de actividades grupales",
            "Observador de la interacción"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué se puede decir sobre el vocabulario enseñado en esta metodología?",
        opciones: [
            "Se aprendía por uso en contexto",
            "Se aprendía mediante juegos",
            "Se presentaba en listas y se memorizaba",
            "Se introducía solo al final del curso"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué críticas realiza Henri Besse sobre esta metodología?",
        opciones: [
            "Que era muy creativa",
            "Que promovía demasiado la oralidad",
            "Que generaba frases poco naturales y no desarrollaba bien la competencia gramatical",
            "Que no usaba libros de texto"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué fenómeno marcó el inicio del fin del método tradicional según C. Puren?",
        opciones: [
            "La invención de los laboratorios de idiomas",
            "La llegada del francés como lengua internacional",
            "El golpe de estado pedagógico de 1902 que impuso la metodología directa",
            "La publicación del primer diccionario monolingüe"
        ],
        correcta: 2
    },

    // ============================
    // II. MÉTODO NATURAL
    // ============================

    {
        texto: "¿En qué periodo histórico surge el método natural de F. Gouin?",
        opciones: [
            "En la primera mitad del siglo XX",
            "A finales del siglo XIX",
            "En el Renacimiento",
            "En los años 1970"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué motivó a F. Gouin a desarrollar su método?",
        opciones: [
            "El análisis gramatical del alemán",
            "La lectura de textos clásicos",
            "La observación de su aprendizaje fallido y del proceso de adquisición de la lengua materna por su sobrino",
            "Su experiencia como traductor profesional"
        ],
        correcta: 2
    },
    {
        texto: "¿Cuál es uno de los principios clave del método natural?",
        opciones: [
            "El aprendizaje debe basarse únicamente en textos literarios",
            "El aprendizaje debe seguir un orden cronológico de acciones",
            "El vocabulario se aprende mediante listas",
            "La escritura debe preceder a la oralidad"
        ],
        correcta: 1
    },
    {
        texto: "Según F. Gouin, ¿qué papel tiene la oralidad en el aprendizaje?",
        opciones: [
            "Es secundaria respecto a la gramática",
            "Debe preceder siempre a la escritura",
            "No es necesaria en el aula",
            "Solo sirve para principiantes"
        ],
        correcta: 1
    },
    {
        texto: "¿Cómo define Gouin una 'serie lingüística'?",
        opciones: [
            "Una colección de reglas gramaticales",
            "Una lista aleatoria de palabras",
            "Una cadena cronológica de acciones relacionadas con un tema",
            "Una lista de traducciones de frases comunes"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué teoría sobre el aprendizaje infantil propone Gouin?",
        opciones: [
            "El niño aprende a hablar por imitación directa",
            "El niño memoriza listas de palabras antes de hablar",
            "El niño organiza mentalmente acciones reales antes de expresarlas verbalmente",
            "El niño aprende por repetición mecánica sin necesidad de sentido"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué órgano considera Gouin como receptor principal del lenguaje?",
        opciones: [
            "La vista",
            "La boca",
            "El oído",
            "Las manos"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué propone la metodología de Gouin en cuanto a los temas tratados?",
        opciones: [
            "Deben ser temas literarios clásicos",
            "Deben reflejar la vida cotidiana del aprendiz",
            "Deben ser complejos desde el inicio",
            "No es necesario organizarlos por dificultad"
        ],
        correcta: 1
    },
    {
        texto: "¿Por qué se considera a Gouin un pionero en la didáctica de lenguas?",
        opciones: [
            "Por haber creado el primer manual de francés",
            "Por introducir la traducción palabra por palabra",
            "Por priorizar el sentido y el contexto sobre la forma gramatical",
            "Por su uso del latín como lengua modelo"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué limitación tenía el método de las series según el texto?",
        opciones: [
            "No incluía actividades orales",
            "Solo cubría temas abstractos",
            "Presentaba pocas series y no una propuesta completa",
            "Era solo aplicable al francés"
        ],
        correcta: 2
    },

        // ============================
    // III. MÉTODO DIRECTO
    // ============================

    {
        texto: "¿Cómo define C. Puren el método directo en el contexto de la enseñanza de las lenguas extranjeras?",
        opciones: [
            "Como una variante de la gramática-traducción",
            "Como un retorno a la enseñanza clásica",
            "Como la primera metodología específica para lenguas vivas extranjeras",
            "Como una técnica exclusiva del alemán"
        ],
        correcta: 2
    },
    {
        texto: "¿Cuándo aparece oficialmente la expresión 'método directo' en Francia?",
        opciones: [
            "En la Reforma Universitaria de 1911",
            "En la Orden Ministerial de 1885",
            "En la Circulaire del 15 de noviembre de 1901",
            "En la instrucción de 1920"
        ],
        correcta: 2
    },
    {
        texto: "¿Cuál era el principal objetivo del método directo según el texto?",
        opciones: [
            "Enseñar literatura en lengua extranjera",
            "Traducir textos clásicos",
            "Alcanzar un dominio práctico de la lengua como medio de comunicación",
            "Facilitar la memorización de listas de vocabulario"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué técnica no se permite en el método directo puro?",
        opciones: [
            "Uso de imágenes",
            "Traducción a la lengua materna",
            "Repetición",
            "Dictado"
        ],
        correcta: 1
    },
    {
        texto: "¿Cuál es el orden correcto de introducción de habilidades según esta metodología?",
        opciones: [
            "Lectura, escritura, oralidad",
            "Escritura, oralidad, comprensión",
            "Comprensión oral, producción oral, escritura",
            "Gramática, lectura, traducción"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué afirmación describe mejor la enseñanza gramatical en el método directo?",
        opciones: [
            "Se explican las reglas en la lengua materna",
            "Se enseña de manera inductiva a través de ejemplos",
            "Se enseñan listas de reglas desde el principio",
            "La gramática no se enseña en absoluto"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué buscaba lograr el método oral?",
        opciones: [
            "Una pronunciación poética de la lengua",
            "El desarrollo de la escritura formal",
            "La práctica oral en clase como preparación para la vida real",
            "El aprendizaje exclusivo del alfabeto"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué característica distingue al método activo?",
        opciones: [
            "Uso exclusivo del diccionario",
            "Pasividad del alumno",
            "Participación física activa y empleo de múltiples submétodos",
            "Enseñanza únicamente basada en teoría"
        ],
        correcta: 2
    },
    {
        texto: "¿Cuál de las siguientes afirmaciones es una crítica interna importante al método directo?",
        opciones: [
            "Exceso de traducción",
            "Uso inadecuado de literatura",
            "Inflación léxica incontrolable",
            "Falta de estructuras gramaticales"
        ],
        correcta: 2
    },
    {
        texto: "¿Cuál fue una de las causas externas de su declive según el texto?",
        opciones: [
            "Falta de material didáctico en francés",
            "Falta de formación de los profesores para su aplicación",
            "Desinterés del alumnado por las lenguas",
            "Prohibición de la enseñanza de lenguas extranjeras"
        ],
        correcta: 1
    },

    // ============================
    // IV. MÉTODO ACTIVO
    // ============================

    {
        texto: "¿En qué periodo fue ampliamente utilizado el método activo en Francia?",
        opciones: [
            "De 1900 a 1920",
            "De 1920 a 1960",
            "De 1880 a 1900",
            "De 1970 a 1990"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué refleja la variedad de nombres utilizados para referirse a esta metodología?",
        opciones: [
            "La falta de interés académico en ella",
            "La influencia de métodos extranjeros",
            "La voluntad de evitar una metodología única",
            "La imitación del sistema alemán"
        ],
        correcta: 2
    },
    {
        texto: "¿Cómo definía Lieutaud el método activo?",
        opciones: [
            "Como una mezcla desorganizada de métodos",
            "Como un rechazo total de la tradición",
            "Como una versión más estricta de la gramática-traducción",
            "Como una forma flexible de la metodología directa"
        ],
        correcta: 3
    },
    {
        texto: "¿Cuál era uno de los principales objetivos del método activo?",
        opciones: [
            "El análisis de textos clásicos",
            "El aprendizaje exclusivo de la lengua escrita",
            "El equilibrio entre los objetivos formativos, culturales y prácticos",
            "La memorización intensiva del léxico"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué actitud adoptaban los metodólogos activos frente al uso de la lengua materna en clase?",
        opciones: [
            "La prohibían totalmente",
            "Permitían su uso como recurso explicativo",
            "La usaban solo para exámenes",
            "La ignoraban por completo"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué tipo de textos predominaban en el método activo?",
        opciones: [
            "Textos técnicos y científicos",
            "Diálogos formales",
            "Textos descriptivos o narrativos",
            "Poesías y fábulas"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué medio técnico comenzó a utilizarse más a partir de la instrucción de 1969?",
        opciones: [
            "Pizarras electrónicas",
            "Ordenadores",
            "Auxiliares audio-orales como el magnetófono",
            "Cuadernos de gramática clásica"
        ],
        correcta: 2
    },
    {
        texto: "¿Cómo se enseñaba el vocabulario en el método activo?",
        opciones: [
            "Con prohibición absoluta de traducir",
            "Exclusivamente mediante repetición",
            "Permitiendo traducción si era necesario",
            "A través de exámenes semanales"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué tipo de repetición se prefería en esta metodología?",
        opciones: [
            "Repetición intensiva de listas",
            "Repetición aleatoria",
            "Repetición extensiva de estructuras",
            "No se usaba ningún tipo de repetición"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué rompió con el método activo según el texto?",
        opciones: [
            "La instrucción de 1945",
            "La aparición del método tradicional renovado",
            "La instrucción de 1969, que promovió la metodología audiovisual",
            "La reforma del sistema universitario en 1962"
        ],
        correcta: 2
    },

        // ============================
    // V. MÉTODO AUDIO-ORAL (MAO)
    // ============================

    {
        texto: "¿Con qué necesidad surgió originalmente el método audio-oral?",
        opciones: [
            "Con la reforma universitaria en Francia",
            "Con el auge de la televisión educativa",
            "Con la necesidad del ejército estadounidense de formar hablantes de lenguas extranjeras",
            "Con la aparición del método comunicativo"
        ],
        correcta: 2
    },
    {
        texto: "¿Quién fue el lingüista convocado para desarrollar el 'método del ejército'?",
        opciones: [
            "Noam Chomsky",
            "Leonard Bloomfield",
            "Ferdinand de Saussure",
            "Charles Fries"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué dos corrientes teóricas combinaba el MAO?",
        opciones: [
            "Constructivismo y romanticismo",
            "Bilingüismo y conductismo",
            "Behaviorismo y estructuralismo lingüístico",
            "Psicoanálisis y gramática generativa"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué tipo de ejercicios caracterizaban el MAO?",
        opciones: [
            "Traducciones y lecturas literarias",
            "Ejercicios libres de producción escrita",
            "Pattern drills y transformaciones estructurales",
            "Dictados y comentarios de texto"
        ],
        correcta: 2
    },
    {
        texto: "¿Cuál era el objetivo de los pattern drills según el MAO?",
        opciones: [
            "Memorizar listas de vocabulario",
            "Reforzar el aprendizaje de reglas semánticas",
            "Automatizar estructuras mediante repetición",
            "Introducir la poesía en clase de lengua"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué papel tenía la lengua materna en la clase según el MAO?",
        opciones: [
            "Era vista como apoyo inicial",
            "Se utilizaba como refuerzo de traducción",
            "Se permitía solo en niveles avanzados",
            "Se evitaba, ya que se consideraba fuente de interferencias"
        ],
        correcta: 3
    },
    {
        texto: "¿Qué habilidades se pretendía desarrollar con el MAO?",
        opciones: [
            "Solo lectura y escritura",
            "Producción oral exclusivamente",
            "Las cuatro habilidades comunicativas, con prioridad en la oralidad",
            "La comprensión literaria y la cultura"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué crítica se hacía comúnmente al MAO?",
        opciones: [
            "No consideraba el contexto histórico",
            "No permitía ningún tipo de evaluación",
            "Su contenido no se transfería fácilmente fuera del aula",
            "Estaba basada en teorías de traducción automática"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué teoría criticó fuertemente al estructuralismo de Bloomfield?",
        opciones: [
            "La teoría de la inmersión",
            "La gramática generativa-transformacional de Chomsky",
            "El método natural de Berlitz",
            "El enfoque léxico de Lewis"
        ],
        correcta: 1
    },
    {
        texto: "¿Por qué tuvo una influencia limitada el MAO en Francia?",
        opciones: [
            "Porque se prohibió en los liceos",
            "Porque no se publicaron cursos audio-orales para el FLE ni otras lenguas en el sistema escolar",
            "Porque se consideraba demasiado moderna",
            "Porque dependía de recursos que no existían en Francia"
        ],
        correcta: 1
    },

    // ============================
    // VI. MÉTODO SITUACIONAL INGLÉS
    // ============================

    {
        texto: "¿Quiénes fueron los principales impulsores del método situacional?",
        opciones: [
            "Bloomfield y Fries",
            "Chomsky y Skinner",
            "Palmer y Hornby",
            "Lado y Puren"
        ],
        correcta: 2
    },
    {
        texto: "¿Cuál era el objetivo principal de esta metodología en sus inicios?",
        opciones: [
            "Fomentar la lectura de textos literarios",
            "Crear una gramática universal",
            "Establecer un enfoque oral basado en principios científicos, no en la intuición",
            "Enseñar el inglés mediante la traducción sistemática"
        ],
        correcta: 2
    },
    {
        texto: "¿Cómo se enseñaban las estructuras gramaticales en esta metodología?",
        opciones: [
            "A través de traducciones",
            "Mediante su uso en situaciones comunicativas concretas",
            "Por medio de textos literarios",
            "Mediante ejercicios escritos exclusivamente"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué teoría psicológica influyó en el método situacional?",
        opciones: [
            "El psicoanálisis freudiano",
            "La teoría de la Gestalt",
            "El conductismo (behaviorismo)",
            "El conectivismo"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué se buscaba lograr mediante la repetición y práctica?",
        opciones: [
            "La comprensión semántica profunda",
            "La creación de automatismos en la lengua extranjera",
            "La traducción inmediata al inglés",
            "El aprendizaje de textos de memoria"
        ],
        correcta: 1
    },
    {
        texto: "¿Cuál era el papel del profesor al principio del proceso de aprendizaje?",
        opciones: [
            "Observador pasivo",
            "Facilitador indirecto",
            "Controlador total de la clase",
            "Únicamente diseñador de materiales"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué recursos visuales se utilizaban frecuentemente?",
        opciones: [
            "Proyectores digitales y vídeos",
            "Libros electrónicos",
            "Imágenes y tarjetas didácticas (flashcards)",
            "Textos técnicos y artículos de prensa"
        ],
        correcta: 2
    },
    {
        texto: "¿Cómo se seleccionaba el vocabulario?",
        opciones: [
            "Por su complejidad semántica",
            "Según su relevancia cultural",
            "En función de su frecuencia de uso",
            "A partir de la etimología"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué concepción tenía Palmer sobre las estructuras lingüísticas?",
        opciones: [
            "Que cada lengua era caótica y no estructurable",
            "Que todas las lenguas compartían estructuras universales",
            "Que el vocabulario era más importante que la estructura",
            "Que las lenguas solo se podían aprender empíricamente"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué corriente psicológica ha reemplazado actualmente al behaviorismo?",
        opciones: [
            "El existencialismo",
            "La teoría de las inteligencias múltiples",
            "La psicología cognitiva",
            "El naturalismo educativo"
        ],
        correcta: 2
    },

    // ============================
    // VII. MÉTODO AUDIOVISUAL (MAV)
    // ============================

    {
        texto: "¿Cuál fue una de las principales motivaciones del desarrollo del FLE como asunto del Estado en Francia después de la Segunda Guerra Mundial?",
        opciones: [
            "Aumentar las exportaciones de libros franceses",
            "Competir con el español como lengua internacional",
            "Reforzar la presencia del francés frente al auge del inglés",
            "Facilitar la enseñanza del francés en universidades extranjeras"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué es el francés fundamental?",
        opciones: [
            "Una gramática universal del francés",
            "Un vocabulario técnico para diplomáticos",
            "Una base léxica y gramatical progresiva para enseñar el FLE",
            "Un diccionario de sinónimos escolares"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué institución publicó las listas del francés fundamental?",
        opciones: [
            "La Sorbona",
            "La Alianza Francesa",
            "El CREDIF",
            "El CNRS"
        ],
        correcta: 2
    },
    {
        texto: "¿Cuál fue el primer método oficial basado en el MAV publicado en 1962?",
        opciones: [
            "Le Français Moderne",
            "Dialogues et Images",
            "Voix et images de France",
            "Français pour tous"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué caracteriza al MAV respecto al uso de materiales didácticos?",
        opciones: [
            "Uso exclusivo de textos literarios",
            "Integración de imagen y sonido",
            "Ausencia de recursos visuales",
            "Traducción como recurso principal"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué tipo de imágenes se usaban en el MAV?",
        opciones: [
            "Fotografías artísticas y abstractas",
            "Imágenes de transcodificación y situacionales",
            "Dibujos humorísticos",
            "Gráficos estadísticos"
        ],
        correcta: 1
    },
    {
        texto: "¿Cuál es la teoría psicológica que sustenta el MAV?",
        opciones: [
            "Conductismo",
            "Psicoanálisis",
            "Teoría de la Gestalt",
            "Cognitivismo puro"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué tipo de aprendizaje promueve la teoría de la Gestalt en el MAV?",
        opciones: [
            "Traductivo y mecánico",
            "Global y perceptivo",
            "Lógico y deductivo",
            "Escrupulosamente gramatical"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué método didáctico influye de forma más directa en el MAV?",
        opciones: [
            "El método tradicional",
            "El método directo",
            "La gramática-traducción",
            "El enfoque por tareas"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué papel tiene el profesor en el MAV respecto a la gramática?",
        opciones: [
            "Explica todas las reglas en la lengua materna",
            "Corrige errores de manera explícita",
            "Facilita una comprensión implícita de las estructuras",
            "No tiene participación activa"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué aspecto de la comunicación incluye el MAV que no estaba presente antes?",
        opciones: [
            "El vocabulario técnico",
            "Las normas de cortesía",
            "La expresión de sentimientos y emociones",
            "Las fórmulas jurídicas"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué crítica plantea H. Besse sobre los límites del SGAV?",
        opciones: [
            "Es demasiado cara para aplicarla en escuelas",
            "No permite comunicarse oralmente",
            "No permite entender a nativos entre ellos ni a los medios",
            "Solo es útil para enseñar literatura"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué tipo de ejercicios incluye el MAV?",
        opciones: [
            "Solo ejercicios de traducción",
            "Únicamente ejercicios escritos",
            "Ejercicios de repetición, dramatización y estructurales",
            "Pruebas orales individuales exclusivamente"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué teoría lingüística reemplazó al SGAV con la llegada del enfoque comunicativo?",
        opciones: [
            "El estructuralismo",
            "El funcionalismo",
            "La fonética articulatoria",
            "El generativismo transformacional"
        ],
        correcta: 1
    },
    {
        texto: "¿Cuál fue una de las razones del éxito inicial del MAV según el texto?",
        opciones: [
            "Era gratuita y patrocinada por el Estado",
            "Requería poco esfuerzo por parte de los docentes",
            "Tenía base religiosa",
            "Promovía la traducción simultánea"
        ],
        correcta: 1
    },
        // ============================
    // VIII. ENFOQUE COMUNICATIVO
    // ============================

    {
        texto: "¿Cuál fue una de las razones principales del surgimiento del enfoque comunicativo en Francia en los años 70?",
        opciones: [
            "La influencia directa de Chomsky y su gramática generativa",
            "El fracaso del método tradicional",
            "La crítica a las metodologías audio-orales y audiovisuales",
            "El aumento del número de estudiantes universitarios"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué diferencia fundamental existe entre los objetivos de los estructuralistas y los funcionalistas?",
        opciones: [
            "Los estructuralistas se enfocan en la competencia de comunicación, los funcionalistas en la lingüística",
            "Ambos buscan lo mismo, pero usan estrategias diferentes",
            "Los estructuralistas privilegian la competencia lingüística, los funcionalistas la de comunicación",
            "Los funcionalistas eliminan el estudio de la gramática"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué público fue central para el desarrollo del enfoque comunicativo?",
        opciones: [
            "Niños en edad escolar",
            "Profesores de lenguas",
            "Adultos, principalmente migrantes",
            "Escritores y poetas"
        ],
        correcta: 2
    },
    {
        texto: "¿Cuál fue uno de los textos clave producidos en el desarrollo del enfoque comunicativo?",
        opciones: [
            "Le Petit Robert",
            "Analyse de besoins langagiers d’adultes en milieu professionnel",
            "Le Français Élémentaire",
            "Méthode Assimil"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué caracteriza al francés instrumental según el texto?",
        opciones: [
            "Se enfoca en la producción oral en situaciones laborales",
            "Prioriza la producción escrita académica",
            "Busca una comprensión inmediata de textos específicos",
            "Promueve la inmersión total sin traducciones"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué crítica hace D. Coste al enfoque comunicativo?",
        opciones: [
            "Tiene demasiada base gramatical estructural",
            "Ignora completamente las necesidades del alumno",
            "Se basa en un público ideal y en docentes excesivamente capacitados",
            "Desvaloriza la competencia comunicativa"
        ],
        correcta: 2
    },
    {
        texto: "Según el enfoque comunicativo, ¿qué condición permite una comunicación eficaz?",
        opciones: [
            "Usar únicamente la lengua meta en clase",
            "Emplear siempre frases gramaticalmente correctas",
            "Adaptar las formas lingüísticas a la situación y función comunicativa",
            "Eliminar los errores en el habla"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué función cumple el profesor en el enfoque comunicativo?",
        opciones: [
            "Es un transmisor de conocimientos estructurados",
            "Se convierte en un evaluador externo",
            "Se limita a corregir errores gramaticales",
            "Actúa como un consejero que guía el proceso de aprendizaje"
        ],
        correcta: 3
    },
],

    bloque2: [
    // ============================
    // TEST COMPARATIVO
    // ============================

    {
        texto: "¿Qué elemento diferencia al método tradicional del método directo?",
        opciones: [
            "Ambas utilizan la lengua materna como medio de instrucción",
            "El método directo rechaza la traducción, mientras que el tradicional la promueve",
            "El método tradicional favorece la oralidad desde el inicio",
            "El método directo se basa en la gramática explícita"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué tienen en común el método audio-oral y el audiovisual?",
        opciones: [
            "Ambos se centran exclusivamente en la lectura y traducción",
            "Rechazan el uso de material auditivo",
            "Se basan en el conductismo y la repetición para formar hábitos",
            "Favorecen la comprensión lectora sobre la producción oral"
        ],
        correcta: 2
    },
    {
        texto: "¿Cuál es una crítica común que comparten el método estructural y el audio-oral desde el enfoque comunicativo?",
        opciones: [
            "Se enfocan demasiado en la cultura",
            "Ignoran la pronunciación",
            "Se basan en ejercicios mecánicos sin contexto real de comunicación",
            "Valoran más la comprensión que la producción"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué diferencia clave existe entre el enfoque estructural y el enfoque funcional?",
        opciones: [
            "El enfoque estructural busca desarrollar competencias comunicativas",
            "El enfoque funcional prioriza el aprendizaje memorístico de estructuras",
            "El enfoque estructural se basa en la competencia lingüística, el funcional en la competencia de comunicación",
            "El enfoque funcional rechaza cualquier análisis de necesidades"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué dos metodologías coinciden en dar prioridad a las necesidades específicas del estudiante?",
        opciones: [
            "Tradicional y estructural",
            "Funcional y comunicativa",
            "Audio-oral y audiovisual",
            "Directa y tradicional"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué diferencia existe entre el enfoque nocional-funcional y el audiovisual?",
        opciones: [
            "Ambos priorizan la memorización de listas léxicas",
            "El nocional-funcional organiza el contenido por actos de habla, el audiovisual por situaciones visuales",
            "El audiovisual se adapta a las necesidades del estudiante, el nocional-funcional no",
            "Ambos rechazan el uso del idioma meta"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué metodología considera el error como parte normal del proceso de aprendizaje?",
        opciones: [
            "Tradicional",
            "Audio-oral",
            "Comunicativa",
            "Estructural"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué comparten el enfoque funcional y el enfoque comunicativo?",
        opciones: [
            "La enseñanza basada exclusivamente en estructuras gramaticales",
            "La adaptación a situaciones reales de comunicación y roles sociales",
            "El uso intensivo de la traducción",
            "La exclusión de documentos auténticos"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué crítica hizo Chomsky a los métodos audio-oral y situacional?",
        opciones: [
            "Promueven una excesiva creatividad",
            "Son demasiado centrados en el aprendiz",
            "No explican la competencia lingüística innata del hablante",
            "Ignoran el vocabulario técnico"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué diferencia esencial existe entre el enfoque funcional y el estructural respecto al público objetivo?",
        opciones: [
            "El funcional considera el público homogéneo, el estructural lo adapta",
            "El estructural trabaja con necesidades individuales, el funcional con fines académicos",
            "El funcional adapta el contenido a distintos públicos, el estructural propone un modelo único",
            "El estructural promueve la diversidad cultural"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué tienen en común el método directo y el enfoque comunicativo?",
        opciones: [
            "Se basan en la traducción",
            "Promueven el aprendizaje activo y el uso del idioma en situaciones reales",
            "Desaprueban completamente el uso del idioma meta",
            "Rechazan el aprendizaje inductivo"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué representa un punto de ruptura entre las metodologías estructuralistas y el enfoque funcional?",
        opciones: [
            "El objetivo gramatical deja paso al objetivo comunicativo",
            "La lengua escrita pasa a ser la única forma válida",
            "El contenido cultural se elimina por completo",
            "Se elimina el enfoque inductivo"
        ],
        correcta: 0
    },
    {
        texto: "¿Qué característica comparten el francés instrumental y el francés funcional?",
        opciones: [
            "Se enfocan exclusivamente en la producción oral",
            "Buscan cubrir necesidades generales",
            "Comparten un objetivo limitado y utilitario según el perfil del público",
            "Son metodologías centradas en la gramática"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué distingue el enfoque nocional-funcional del método tradicional?",
        opciones: [
            "Usa exclusivamente textos literarios",
            "Organiza la enseñanza por funciones del lenguaje, no por estructuras gramaticales",
            "Valora la traducción como estrategia central",
            "Evita cualquier forma de contextualización"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué metodología considera el lenguaje como un conjunto de hábitos adquiridos por repetición y refuerzo?",
        opciones: [
            "Método directo",
            "Enfoque comunicativo",
            "Método audio-oral",
            "Método funcional"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué aspecto del método audiovisual fue reutilizado en el enfoque comunicativo?",
        opciones: [
            "La memorización de listas léxicas",
            "El uso del contexto visual como apoyo para la comprensión",
            "La enseñanza de reglas gramaticales explícitas",
            "La traducción como único medio"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué autor criticó el funcionalismo puro por considerarlo poco realista?",
        opciones: [
            "Noam Chomsky",
            "D. Coste",
            "H. Besse",
            "Claude Germain"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué enfoque dio lugar a equipos multidisciplinarios en didáctica?",
        opciones: [
            "Método estructural",
            "Enfoque funcional",
            "Enfoque comunicativo",
            "Método tradicional"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué comparten el método directo y el enfoque comunicativo respecto a la lengua meta?",
        opciones: [
            "Evitan usarla en clase",
            "La usan exclusivamente en textos escritos",
            "Promueven su uso como lengua vehicular en el aula",
            "La enseñan siempre mediante la lengua materna"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué enfoque sostiene que aprender una lengua es aprender a comportarse adecuadamente en situaciones de comunicación?",
        opciones: [
            "Método directo",
            "Enfoque estructural",
            "Enfoque comunicativo",
            "Método tradicional"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué método fue criticado por centrarse únicamente en la frase y no en el discurso?",
        opciones: [
            "Método tradicional",
            "Enfoque funcional",
            "Método audiovisual",
            "Enfoque nocional"
        ],
        correcta: 2
    },
    {
        texto: "¿Qué distingue al enfoque funcional del estructural?",
        opciones: [
            "La exclusión de todo contenido gramatical",
            "La organización del contenido por funciones del lenguaje y actos de habla",
            "La centralidad del texto literario",
            "La enseñanza inductiva de listas léxicas"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué metodologías surgieron como respuesta directa a las limitaciones del método audio-oral?",
        opciones: [
            "Directa y tradicional",
            "Funcional y comunicativa",
            "Tradicional y estructural",
            "Audiovisual y gramática-traducción"
        ],
        correcta: 1
    },
    {
        texto: "¿Qué se prioriza en el francés instrumental frente al francés funcional?",
        opciones: [
            "La producción oral espontánea",
            "La comprensión inmediata de textos específicos",
            "La interacción verbal en situaciones sociales",
            "La escritura creativa"
        ],
        correcta: 1
    },
],
    bloque3: [
         // ============================
    // CASOS PRÁCTICOS (CON EXPLICACIÓN)
    // ============================

{
texto: "Caso 1: Una profesora trabaja en un centro de formación para adultos migrantes. Diseña sus clases a partir de las situaciones de comunicación que los estudiantes podrían enfrentar en su vida diaria (comprar en el supermercado, pedir ayuda médica, rellenar un formulario). Afirmación: Esta profesora aplica un enfoque funcional, centrado en los actos de habla según el contexto comunicativo. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 2: Un docente de secundaria se basa únicamente en la repetición de diálogos grabados en cassette, la práctica de estructuras fijas y la corrección inmediata de los errores. No se contextualizan los enunciados. Afirmación: Este profesor aplica una variante avanzada del enfoque comunicativo. ",
opciones: ["Verdadero","Falso"],
correcta: 1,
explicacion: "Respuesta: Falso (corresponde al método audio-oral)"
},
{
texto: "Caso 3: Un curso de francés para técnicos en informática se centra en el aprendizaje de terminología específica y en la comprensión escrita de manuales y documentación técnica. Afirmación: Este caso ejemplifica el uso del francés instrumental. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 4: En una clase de lengua extranjera, el profesor prohíbe completamente el uso de la lengua materna, prioriza la inmersión total y evita toda traducción, incluso para explicar significados complejos. Afirmación: Esto refleja principios del método tradicional. ",
opciones: ["Verdadero","Falso"],
correcta: 1,
explicacion: "Respuesta: Falso (esto se ajusta más al método directo)"
},
{
texto: "Caso 5: Una profesora trabaja con textos auténticos (noticias, entrevistas reales, recetas de cocina, etc.) y plantea tareas comunicativas reales. No da tanta importancia a seguir un manual estructurado. Afirmación: Este enfoque se alinea con el enfoque comunicativo. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 6: Un curso de lengua extranjera organiza su contenido a partir de una lista de frecuencias léxicas del francés fundamental, sin considerar el perfil ni los intereses de los/as estudiantes. Afirmación: Este enfoque se basa en el método audiovisual. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 7: Un docente prepara su clase centrándose en las estructuras morfosintácticas necesarias para expresar opiniones, pedir permiso y rechazar propuestas, todas aplicadas a diálogos simulados. Afirmación: Esto se relaciona con los principios del enfoque funcional. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 8: Durante una clase de lengua, el profesor introduce primero una lista de normas gramaticales, luego ejercicios de traducción y, por último, pide a los/as estudiantes que lean en voz alta. Afirmación: Este procedimiento sigue la lógica del método tradicional. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 9: Una profesora considera que aprender una lengua significa desarrollar reflejos automáticos mediante repetición intensiva y sistemática, sin necesidad de contexto. Afirmación: Esta afirmación representa una concepción cognitivista del aprendizaje. ",
opciones: ["Verdadero","Falso"],
correcta: 1,
explicacion: "Respuesta: Falso (es una visión conductista, propia del método audio-oral)"
},
{
texto: "Caso 10: En un programa de formación, se establece que antes de diseñar un curso, es necesario conocer el perfil del/la estudiante, sus intereses, necesidades comunicativas y contexto sociocultural. Afirmación: Esta práctica refleja la lógica de la didáctica orientada al análisis de necesidades. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 11: Un profesor diseña sus clases para que los alumnos aprendan reglas gramaticales y listas de vocabulario antes de usarlas en oraciones. No se prioriza el uso comunicativo del lenguaje. Afirmación: Este profesor sigue un enfoque comunicativo centrado en la competencia de interacción. ",
opciones: ["Verdadero","Falso"],
correcta: 1,
explicacion: "Respuesta: Falso (se aproxima más al método tradicional)"
},
{
texto: "Caso 12: En una clase de lengua extranjera, se observa que los estudiantes interactúan entre sí para resolver tareas reales como preparar un viaje o planificar una presentación. El profesor actúa como guía y no interrumpe con correcciones constantes. Afirmación: Esta es una clase basada en el enfoque comunicativo. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 13: El contenido de un curso de lengua extranjera se selecciona y organiza en función de actos de habla concretos: saludar, pedir información, expresar acuerdo o desacuerdo. Afirmación: Este curso se basa en el enfoque funcional. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 14: Durante una sesión de francés como lengua extranjera, el estudiantado aprende mediante grabaciones y videos donde observan situaciones reales y repiten estructuras en contexto. Afirmación: Se trata de una aplicación del método audiovisual. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 15: Una profesora trabaja con adultos que necesitan aprender francés para obtener la nacionalidad. Organiza el curso a partir de los formularios oficiales y entrevistas típicas. Afirmación: El enfoque utilizado es funcional-instrumental, vinculado al análisis de necesidades. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 16: En clase, el docente evita sistemáticamente traducir del francés al español y prefiere que los estudiantes adquieran significados mediante imágenes, gestos y contexto. Afirmación: Esta práctica se alinea con el método directo. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 17: Un profesor considera que las estructuras lingüísticas deben practicarse de forma aislada, con ejercicios repetitivos y sin conexión con una situación concreta. Afirmación: Esta visión refleja el espíritu de la metodología comunicativa. ",
opciones: ["Verdadero","Falso"],
correcta: 1,
explicacion: "Respuesta: Falso (refleja el método audio-oral)"
},
{
texto: "Caso 18: Una institución adapta su programa de francés para técnicos de laboratorio de diferentes países. Cada grupo recibe contenidos adaptados a su campo profesional y contexto sociolingüístico. Afirmación: Este modelo responde a los principios de la didáctica de objetivos específicos. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 19: En un examen de lengua extranjera, se evalúa únicamente el conocimiento de las reglas gramaticales y la traducción de frases. No se mide la capacidad de interactuar ni de comprender textos auténticos. Afirmación: Esta evaluación sigue los principios del enfoque cognitivista. ",
opciones: ["Verdadero","Falso"],
correcta: 1,
explicacion: "Respuesta: Falso (es una evaluación propia del método tradicional)"
},
{
texto: "Caso 20: Una profesora organiza su clase usando un libro que combina juegos de roles, análisis de intenciones comunicativas y ejercicios de pronunciación. Afirmación: Este enfoque puede considerarse una síntesis de la metodología comunicativa con elementos estructurales. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 21: Un curso de francés utiliza exclusivamente textos auténticos (como periódicos, formularios, correos reales) sin adaptar el lenguaje a los niveles iniciales. Afirmación: Esta práctica es coherente con el método audiovisual. ",
opciones: ["Verdadero","Falso"],
correcta: 1,
explicacion: "Respuesta: Falso (se relaciona más con el enfoque comunicativo y el uso de documentos auténticos)"
},
{
texto: "Caso 22: Un profesor estructura sus clases a partir de una secuencia de diálogos grabados, centrados en situaciones del día a día. Luego, los/as estudiantes repiten las frases y completan ejercicios orales. Afirmación: Este enfoque refleja el método audio-oral. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 23: Un programa de francés para jóvenes incluye juegos, canciones, cuentos, pero evita la corrección del error para no frenar la participación del alumnado. Afirmación: Este enfoque puede relacionarse con la metodología activa y aspectos del enfoque comunicativo. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 24: Una clase de francés como lengua extranjera da prioridad a la memorización de paradigmas verbales antes de practicar su uso. Afirmación: Esta técnica se basa en los principios de la metodología comunicativa. ",
opciones: ["Verdadero","Falso"],
correcta: 1,
explicacion: "Respuesta: Falso (se vincula con la metodología tradicional o estructuralista)"
},
{
texto: "Caso 25: Un curso de francés está orientado a la formación profesional de camareros. Se basa en analizar qué actos de habla necesitarán (tomar pedidos, responder quejas, etc.) y se diseñan tareas comunicativas reales. Afirmación: Este curso se basa en el enfoque funcional. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 26: Una profesora se basa en las estrategias de aprendizaje previas de sus estudiantes (mapas mentales, resúmenes, técnicas de memorización) para adaptar su metodología. Afirmación: Esta práctica se apoya en el enfoque cognitivista. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 27: Los ejercicios estructurales utilizados en clase no remiten a ninguna situación comunicativa concreta. Los/as estudiantes completan frases sin saber para qué podrían usarlas. Afirmación: Este enfoque se distancia del enfoque comunicativo. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 28: Un curso está diseñado para que los/as alumnos/as utilicen el francés en situaciones reales como entrevistas laborales, exposiciones académicas y discusiones grupales. Afirmación: Se trata de una aplicación práctica del enfoque por tareas dentro del marco comunicativo. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 29: Una profesora se niega a usar cualquier otro idioma en clase que no sea el francés. Evita la traducción y no permite preguntas en la lengua materna. Afirmación: Esta postura está en línea con el método directo. ",
opciones: ["Verdadero","Falso"],
correcta: 0,
explicacion: "Respuesta: Verdadero"
},
{
texto: "Caso 30: En un curso de francés para estudiantes de medicina, se enseñan los nombres de los órganos, cómo redactar historiales clínicos y cómo comunicarse con pacientes. Afirmación: Este tipo de enseñanza se basa en un enfoque universalista y generalista. ",
opciones: ["Verdadero","Falso"],
correcta: 1,
explicacion: "Respuesta: Falso (es un enfoque específico y funcional)"
}
,
    ],
};

// Mezclar arrays
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Guardará las preguntas mezcladas del bloque actual
let preguntasMezcladas = {};

let respuestasUsuario = {};
let bloqueActual = 1;

// =====================================================
// CAMBIAR DE BLOQUE
// =====================================================

function mostrarBloque(num) {
    bloqueActual = num;
    generarTest();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function siguienteBloque() {
    if (bloqueActual < 3) {
        bloqueActual++;
        generarTest();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

// =====================================================
// GENERAR TEST
// =====================================================

function generarTest() {
    respuestasUsuario = {};
    preguntasMezcladas = {};
    actualizarStats();

    const cont = document.getElementById("contenedor");
    cont.innerHTML = "";

    let lista = [];

    if (bloqueActual === 1) lista = preguntas.bloque1;
    if (bloqueActual === 2) lista = preguntas.bloque2;
    if (bloqueActual === 3) lista = preguntas.bloque3;

    const displayNext = (bloqueActual === 3) ? "none" : "inline-block";
    document.getElementById("btnSiguiente").style.display = displayNext;
    document.getElementById("btnSiguienteBottom").style.display = displayNext;

    lista.forEach((p, i) => {
        const idPregunta = i + 1;

        // Clonar pregunta
        let pregunta = {
            texto: p.texto,
            opciones: [...p.opciones],
            correcta: p.correcta
        };

        // Mezclar respuestas
        const opcionesOriginales = [...pregunta.opciones];
        const indices = opcionesOriginales.map((_, idx) => idx);
        shuffleArray(indices);

        pregunta.opciones = indices.map(idx => opcionesOriginales[idx]);
        pregunta.correcta = indices.indexOf(pregunta.correcta);

        // Guardar pregunta mezclada
        preguntasMezcladas[idPregunta] = pregunta;

        // Crear HTML
        const div = document.createElement("div");
        div.className = "pregunta";

        const h = document.createElement("h3");
        h.textContent = idPregunta + ". " + pregunta.texto;
        div.appendChild(h);

        pregunta.opciones.forEach((op, j) => {
            const label = document.createElement("label");
            const r = document.createElement("input");
            r.type = "radio";
            r.name = "p" + idPregunta;
            r.value = j;

            r.onchange = () => corregirUna(idPregunta, j);

            label.appendChild(r);
            label.appendChild(document.createTextNode(" " + op));
            div.appendChild(label);
            div.appendChild(document.createElement("br"));
        });

        const res = document.createElement("div");
        res.id = "res" + idPregunta;
        res.className = "resultado";
        div.appendChild(res);

        cont.appendChild(div);
    });
}

// =====================================================
// CORREGIR UNA PREGUNTA
// =====================================================

function corregirUna(id, seleccion) {
    const pregunta = preguntasMezcladas[id];
    const res = document.getElementById("res" + id);
    if (!res) return;

    const esCorrecta = (seleccion === pregunta.correcta);
    respuestasUsuario[id] = esCorrecta ? 1 : 0;

    res.innerHTML = esCorrecta
        ? "Correcto ✔️"
        : "Incorrecto ❌<br>Correcta: " + pregunta.opciones[pregunta.correcta];

    res.style.color = esCorrecta ? "green" : "red";

    actualizarStats();
}

// =====================================================
// ESTADÍSTICAS
// =====================================================

function actualizarStats() {
    const contestadas = Object.keys(respuestasUsuario).length;

    let aciertos = 0;
    for (let k in respuestasUsuario) aciertos += respuestasUsuario[k];

    const fallos = contestadas - aciertos;

    if (contestadas === 0) {
        document.getElementById("aciertos").textContent = "0%";
        document.getElementById("fallos").textContent = "0%";
        return;
    }

    document.getElementById("aciertos").textContent =
        ((aciertos / contestadas) * 100).toFixed(1) + "%";

    document.getElementById("fallos").textContent =
        ((fallos / contestadas) * 100).toFixed(1) + "%";
}

window.onload = generarTest;
