export const load = (async ({ fetch }) => {
	const quiz_res = await fetch('/api/v1/quiz/list?page_size=100', { credentials: 'include' });
	const quiz_json = quiz_res.ok ? await quiz_res.json() : [];

	const quiztivity_res = await fetch('/api/v1/quiztivity/', { credentials: 'include' });
	const quiztivity_json = quiztivity_res.ok ? await quiztivity_res.json() : [];

	return {
		quizzes: Array.isArray(quiz_json)
			? quiz_json
			: Array.isArray(quiz_json.data)
				? quiz_json.data
				: Array.isArray(quiz_json.data?.quizzes)
					? quiz_json.data.quizzes
					: Array.isArray(quiz_json.quizzes)
						? quiz_json.quizzes
						: [],
		quiztivities: Array.isArray(quiztivity_json)
			? quiztivity_json
			: Array.isArray(quiztivity_json.data)
				? quiztivity_json.data
				: Array.isArray(quiztivity_json.data?.quiztivities)
					? quiztivity_json.data.quiztivities
					: Array.isArray(quiztivity_json.quiztivities)
						? quiztivity_json.quiztivities
						: []
	};
}) satisfies PageLoad;