-- Runs on every startup (spring.sql.init.mode=always): fixed ids + ON CONFLICT keep it idempotent.

INSERT INTO scenarios (id, title, description, category, img_url, display_order, active)
VALUES
(1, 'Presentación frente al grupo', 'Estás exponiendo un proyecto frente a tu clase. Durante la presentación olvidas explicar una parte importante y debes continuar.', 'ESCUELA', '/src/assets/scenary-images/presentacion-frente-a-un-grupo.jpg', 1, true),
(2, 'Mensaje sin respuesta', 'Enviaste un mensaje importante a un amigo hace varias horas, pero todavía no has recibido respuesta.', 'RELACIONES', '/src/assets/scenary-images/mensaje-sin-respuesta.jpg', 2, true),
(3, 'Resultado inesperado', 'Estudiaste durante varios días para un examen, pero obtuviste una calificación menor de la que esperabas.', 'ESCUELA', '/src/assets/scenary-images/resultado-inesperado.jpg', 3, true),
(4, 'Trabajo en equipo', 'Durante una reunión propones una idea, pero tus compañeros continúan hablando sin comentarla inmediatamente.', 'TRABAJO', '/src/assets/scenary-images/trabajo-en-equipo.jpg', 4, true),
(5, 'Problema durante un proyecto', 'Después de varias semanas trabajando en un proyecto aparece un problema que obliga al equipo a modificar una parte de la solución.', 'TRABAJO', '/src/assets/scenary-images/problema-durante-un-proyecto.jpg', 5, true)
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    category = EXCLUDED.category,
    img_url = EXCLUDED.img_url,
    display_order = EXCLUDED.display_order,
    active = EXCLUDED.active;

INSERT INTO questions (id, text, type, display_order, required, scenario_id)
VALUES
(1, 'Si cometieras un error importante en una presentación, ¿qué pensarías primero?', 'THOUGHT', 1, true, 1),
(2, '¿Cómo interpretarías inicialmente esta situación?', 'THOUGHT', 1, true, 2),
(3, '¿Cuál sería tu reacción más cercana ante este resultado?', 'REACTION', 1, true, 3),
(4, '¿Qué pensamiento aparecería con mayor facilidad?', 'THOUGHT', 1, true, 4),
(5, '¿Cómo responderías ante esta nueva dificultad?', 'REACTION', 1, true, 5)
ON CONFLICT DO NOTHING;

INSERT INTO answers (id, text, display_order, question_id)
VALUES
(1, 'Todos pensarán que soy incompetente.', 1, 1),
(2, 'Fue un error puntual y puedo aprender de él.', 2, 1),
(3, 'Seguramente arruiné toda la presentación.', 3, 1),
(4, 'Intentaría identificar qué salió mal.', 4, 1),
(5, 'Probablemente hice algo mal.', 1, 2),
(6, 'Puede haber muchas razones por las que todavía no responde.', 2, 2),
(7, 'Seguramente está molesto conmigo.', 3, 2),
(8, 'Esperaría antes de sacar una conclusión.', 4, 2),
(9, 'No soy bueno para esta materia.', 1, 3),
(10, 'Necesito identificar qué temas debo reforzar.', 2, 3),
(11, 'Siempre me irá mal.', 3, 3),
(12, 'Buscaría otra estrategia para estudiar.', 4, 3),
(13, 'Mi idea seguramente no era suficientemente buena.', 1, 4),
(14, 'Tal vez estaban concentrados en otros aspectos.', 2, 4),
(15, 'Nunca toman en cuenta lo que digo.', 3, 4),
(16, 'Podría preguntar qué opinan de mi propuesta.', 4, 4),
(17, 'Esto demuestra que el proyecto no va a funcionar.', 1, 5),
(18, 'Es un problema que podemos analizar y resolver.', 2, 5),
(19, 'Todo el trabajo anterior fue inútil.', 3, 5),
(20, 'Revisaría las posibles causas antes de decidir qué hacer.', 4, 5)
ON CONFLICT DO NOTHING;

-- pattern_id matches the ids in frontend/src/data/patterns.mock.ts
INSERT INTO answer_weights (answer_id, pattern_id, weight)
VALUES
(1, '1', 1.0),
(1, '2', 0.5),
(3, '3', 0.75),
(3, '5', 0.75),
(3, '6', 0.5),
(5, '2', 1.0),
(5, '1', 0.25),
(7, '1', 0.75),
(7, '2', 0.75),
(7, '8', 0.5),
(9, '4', 0.75),
(9, '5', 0.5),
(9, '9', 0.25),
(11, '4', 1.0),
(11, '8', 0.75),
(11, '3', 0.5),
(13, '9', 0.75),
(13, '2', 0.5),
(13, '7', 0.5),
(15, '4', 1.0),
(15, '6', 0.75),
(15, '10', 0.5),
(17, '8', 1.0),
(17, '3', 0.75),
(17, '4', 0.5),
(19, '5', 1.0),
(19, '6', 0.75),
(19, '9', 0.75)
ON CONFLICT DO NOTHING;
