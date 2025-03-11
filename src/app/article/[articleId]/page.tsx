import Link from "next/link";

const ArcticlePage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: string }>;
}) => {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      Reading article {articleId} in language {lang}
      <hr />
      <Link href={`/article/${articleId}?lang=en`}> Reading in english</Link>
      <hr />
      <Link href={`/article/${articleId}?lang=sp`}> Reading in spanish</Link>
      <hr />
      <Link href={`/article/${articleId}?lang=fr`}> Reading in french</Link>
    </div>
  );
};

export default ArcticlePage;
