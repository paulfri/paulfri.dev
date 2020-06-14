import Head from "next/head";
import "twin.macro";

export default function Home() {
  return (
    <div tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Paul Friedman, software engineer</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌉</text></svg>"
        />
      </Head>

      <nav>
        <ul>
          <li>About</li>
          <li>
            <a href="/static/resume.pdf" _target="blank">
              Résumé
            </a>
          </li>
        </ul>
      </nav>

      <main>
        <div tw="max-w-3xl mx-auto">
          <h1 tw="text-6xl font-bold">Paul Friedman</h1>
          <p>
            Hello 👋 I'm Paul, a software engineer currently building
            infrastructure powering Percy.
          </p>

          <p>
            Previously, I helped keep the internet more secure, built one of the
            world's largest travel search engines, and helped deliver content to
            millions of video game fans.
          </p>

          <p>Email me at paulrfri@gmail.com.</p>
        </div>
      </main>

      <footer>
        <p>Made by Paul Friedman in Seattle 🏔 and San Francisco 🌉.</p>
        <ul>
          <li>Twitter</li>
          <li>GitHub</li>
        </ul>
      </footer>
    </div>
  );
}
