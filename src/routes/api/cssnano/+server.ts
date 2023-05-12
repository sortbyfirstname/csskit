import { nano } from '$lib/utils/nanonow.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const css: string = await request.json();
	const min = await nano(css);
	return json(min);
}
