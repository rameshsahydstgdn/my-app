import * as api from '$lib/api.js';

export async function get({ params }) {
  const { post_id } = params;
  console.log(post_id);
  const post = await api.get(`posts/${post_id}`);
  console.log(post);
  return {
    body: post,
  };
}
