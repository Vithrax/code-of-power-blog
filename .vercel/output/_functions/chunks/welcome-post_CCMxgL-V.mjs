const id = "welcome-post.md";
						const collection = "posts";
						const slug = "welcome-post";
						const body = "\r\n### console.log('Hello World')\r\n\r\nThis is the first post of my new blog called Code of Power\r\nHere i will post my thoughts and try to use it to spread my infinite widsom :-)\r\n\r\n### Why?\r\n\r\nThe main reason i wanted to create my little personal space is actually to play with Astro framework. But, apart from that, i also think that i've gained a lot of knowledge over the years and i have the feeling that grows inside me that i should start sharing\r\n\r\n### What?\r\n\r\nSo, i mentioned what a well of knowledge I am.\r\nMy interest mostly comes down to geopolitics and IT in general. In my free time i also play some games but i'm really bad so i doubt i will write anything here about it :d\r\n\r\n### How?\r\n\r\nI will write rather short articles. I'm unsure how all of this will work out, but i value very consised knowledge. I of course don't plan to skip some details but I will definitely skip meaningless sentences.\r\n\r\n### Testing MD\r\n\r\nI just want to test some MD elements, see if there will be need to implement MDX\r\n\r\n1. code blocks\r\n2. quotes\r\n3. highlight\r\n\r\n```js\r\nconst welcome = (name: string) => {\r\n  console.log(`Hi, ${name}!`);\r\n  console.log('Testing code blocks');\r\n};\r\n```\r\n";
						const data = {title:"Welcome to Code of Power",pubDate:new Date(1708905600000),description:"My personal blog about various things that i know a thing or two.",tags:["general"]};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/agaj/Desktop/programowanko/astro/blog/src/content/posts/welcome-post.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
