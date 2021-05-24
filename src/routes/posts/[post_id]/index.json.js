import * as api from '$lib/api.js';

export async function get({ params }) {
  const { post_id } = params;
  const { post } = await api.get(`posts/${post_id}`);

  return {
    body: post,
  };
}
