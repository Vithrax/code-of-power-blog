import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: {
              isRequired: true,
            },
          },
        }),
        description: fields.text({
          multiline: false,
          label: "Description",
          validation: {
            isRequired: true,
            length: {
              max: 255,
            },
          },
        }),
        pubDate: fields.date({
          label: "Published Date",
          validation: {
            isRequired: true,
          },
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tag",
          itemLabel: (props) => props.value,
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
