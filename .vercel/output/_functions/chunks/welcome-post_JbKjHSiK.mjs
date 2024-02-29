import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_za-mypqe.mjs';
import 'clsx';

const html = "<h3 id=\"consoleloghello-world\">console.log(‘Hello World’)</h3>\n<p>This is the first post of my new blog called Code of Power\r\nHere i will post my thoughts and try to use it to spread my infinite widsom :-)</p>\n<h3 id=\"why\">Why?</h3>\n<p>The main reason i wanted to create my little personal space is actually to play with Astro framework. But, apart from that, i also think that i’ve gained a lot of knowledge over the years and i have the feeling that grows inside me that i should start sharing</p>\n<h3 id=\"what\">What?</h3>\n<p>So, i mentioned what a well of knowledge I am.\r\nMy interest mostly comes down to geopolitics and IT in general. In my free time i also play some games but i’m really bad so i doubt i will write anything here about it :d</p>\n<h3 id=\"how\">How?</h3>\n<p>I will write rather short articles. I’m unsure how all of this will work out, but i value very consised knowledge. I of course don’t plan to skip some details but I will definitely skip meaningless sentences.</p>\n<h3 id=\"testing-md\">Testing MD</h3>\n<p>I just want to test some MD elements, see if there will be need to implement MDX</p>\n<ol>\n<li>code blocks</li>\n<li>quotes</li>\n<li>highlight</li>\n</ol>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#F97583\">const</span><span style=\"color:#B392F0\"> welcome</span><span style=\"color:#F97583\"> =</span><span style=\"color:#E1E4E8\"> (</span><span style=\"color:#FFAB70\">name</span><span style=\"color:#F97583\">:</span><span style=\"color:#79B8FF\"> string</span><span style=\"color:#E1E4E8\">) </span><span style=\"color:#F97583\">=></span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  console.</span><span style=\"color:#B392F0\">log</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">`Hi, ${</span><span style=\"color:#E1E4E8\">name</span><span style=\"color:#9ECBFF\">}!`</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  console.</span><span style=\"color:#B392F0\">log</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'Testing code blocks'</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">};</span></span></code></pre>";

				const frontmatter = {"title":"Welcome to Code of Power","pubDate":"2024-02-26T00:00:00.000Z","description":"My personal blog about various things that i know a thing or two.","tags":["general"]};
				const file = "C:/Users/agaj/Desktop/programowanko/astro/blog/src/content/posts/welcome-post.md";
				const url = undefined;
				function rawContent() {
					return "\r\n### console.log('Hello World')\r\n\r\nThis is the first post of my new blog called Code of Power\r\nHere i will post my thoughts and try to use it to spread my infinite widsom :-)\r\n\r\n### Why?\r\n\r\nThe main reason i wanted to create my little personal space is actually to play with Astro framework. But, apart from that, i also think that i've gained a lot of knowledge over the years and i have the feeling that grows inside me that i should start sharing\r\n\r\n### What?\r\n\r\nSo, i mentioned what a well of knowledge I am.\r\nMy interest mostly comes down to geopolitics and IT in general. In my free time i also play some games but i'm really bad so i doubt i will write anything here about it :d\r\n\r\n### How?\r\n\r\nI will write rather short articles. I'm unsure how all of this will work out, but i value very consised knowledge. I of course don't plan to skip some details but I will definitely skip meaningless sentences.\r\n\r\n### Testing MD\r\n\r\nI just want to test some MD elements, see if there will be need to implement MDX\r\n\r\n1. code blocks\r\n2. quotes\r\n3. highlight\r\n\r\n```js\r\nconst welcome = (name: string) => {\r\n  console.log(`Hi, ${name}!`);\r\n  console.log('Testing code blocks');\r\n};\r\n```\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"consoleloghello-world","text":"console.log(‘Hello World’)"},{"depth":3,"slug":"why","text":"Why?"},{"depth":3,"slug":"what","text":"What?"},{"depth":3,"slug":"how","text":"How?"},{"depth":3,"slug":"testing-md","text":"Testing MD"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
