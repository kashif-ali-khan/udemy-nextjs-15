import { notFound } from "next/navigation";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Blog page",
  },
};
const BlogDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const reqParams = await params;
  console.log(reqParams,'PARAM')
  return <div>
    { !reqParams.id  && notFound()}
    Blog detail {reqParams.id}</div>;
};

export default BlogDetail;
