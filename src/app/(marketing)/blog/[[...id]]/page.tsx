import { notFound } from "next/navigation";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Blog page",
  },
};

// generate random number
function getRandomNumber() {
  return Math.floor(Math.random() * 2);
}

const BlogDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const reqParams = await params;
  console.log(reqParams, "PARAM");

  const random = getRandomNumber();
  if (random === 0) {
     throw new Error("Blog page error");
  }

  return (
    <div>
      {!reqParams.id && notFound()}
      Blog detail {reqParams.id}
    </div>
  );
};

export default BlogDetail;
