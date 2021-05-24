<script context="module">
  export async function load({ page, fetch }) {
    const { post_id } = page.params;
    const post = await fetch(`${post_id}.json`)
      .then((r) => {
        if (r.status !== 200) {
          throw new Error(`There was an error with status code ${r.status}`);
        }
        return r.json();
      })
      .then((r) => {
        return r;
      });
    console.log(post);
    return {
      props: { post },
    };
  }
</script>

<script>
  export let post;
</script>

<pre>{post.body}</pre>
