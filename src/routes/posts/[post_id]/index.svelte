<script context="module">
  export async function load({ page, fetch }) {
    const { post_id } = page.params;

    const post = await fetch(`/bag/${post_id}.json`).then((r) => {
      return r.json();
    });
    return {
      props: { post },
    };
  }
</script>

<script>
  export let post;
</script>

<p>{post}</p>
