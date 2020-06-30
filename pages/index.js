import Head from "next/head";
import {
  Instagram,
  Github as GitHub,
  Linkedin as LinkedIn,
  Twitter
} from "@icons-pack/react-simple-icons";
import tw from "twin.macro";

const StyledLink = tw.a`
  text-green-400
  transition ease-in-out duration-150
  border-b hover:border-green-400
`;

const Link = ({ children, ...props }) => (
  <StyledLink {...props} target="_blank">
    {children}
  </StyledLink>
);

const SocialLink = tw.a`
  my-2 mx-4
  transition ease-in-out duration-150
  opacity-25 hover:opacity-50
`;

export default function Home() {
  return (
    <div tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-screen">
      <Head>
        <title>Paul Friedman</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌉</text></svg>"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main tw="mt-12 mb-auto mt-auto flex flex-row-reverse">
        <img
          tw="rounded-full mt-4 h-64 w-auto hidden md:block"
          src="/static/profile.jpg"
        />
        <div tw="max-w-3xl mx-auto relative">
          <h1 tw="text-6xl font-bold">Paul Friedman</h1>
          <p tw="text-4xl mt-6 mb-3">Hey there 👋</p>
          <p tw="text-3xl mt-6 mb-6">
            I'm Paul, a full-stack software engineer based in San Francisco,
            currently building the Internet's{" "}
            <Link href="https://percy.io">visual testing infrastructure</Link>.
          </p>

          <section tw="my-6 w-1/2 m-auto flex justify-center items-center">
            <SocialLink href="https://github.com/paulfri" target="_blank">
              <GitHub tw="inline-block" color="#000" size={36} />
            </SocialLink>
            <SocialLink href="https://twitter.com/paulfri" target="_blank">
              <Twitter tw="inline-block" color="#000" size={36} />
            </SocialLink>
            <SocialLink href="https://instagram.com/paulfri" target="_blank">
              <Instagram tw="inline-block" color="#000" size={36} />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/paulfri"
              target="_blank"
            >
              <LinkedIn tw="inline-block" color="#000" size={36} />
            </SocialLink>
          </section>

          <p tw="text-xl my-6">
            Previously, I've built software at startups from San Francisco to
            Seattle. I studied philosophy at the{" "}
            <Link href="https://buffalo.edu">University at Buffalo</Link> and
            information science at{" "}
            <Link href="https://syracuse.edu">Syracuse University</Link>, near
            my hometown of Ithaca, New York.{" "}
            <Link href="/static/resume.pdf">View my résumé</Link>.
          </p>

          <p tw="text-xl my-6">
            Off the clock, I spoil my dog,{" "}
            <Link href="https://instagram.com/hadsfri">Hadley</Link>, watch the{" "}
            <Link href="https://twitter.com/SoundersFC">Sounders</Link> on
            Saturday nights and{" "}
            <Link href="https://twitter.com/SpursOfficial">Spurs</Link> on
            Sunday mornings, and travel extensively (well, back when that was a
            thing).
          </p>

          <p tw="mb-12">
            <strong>Let's get in touch.</strong> Email me at{" "}
            <Link href="mailto:paulfri@hey.com">paulfri@hey.com</Link> or
            mention me <Link href="https://twitter.com/paulfri">@paulfri</Link>.
            DMs open.
          </p>
        </div>
      </main>
    </div>
  );
}
