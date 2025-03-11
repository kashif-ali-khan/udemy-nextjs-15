import { comments } from "../data";
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return new Response(JSON.stringify(comment));
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();
  const comment = comments.find((comment) => comment.id === parseInt(id));

  if (comment === undefined) {
    return new Response("Comment not found", { status: 404 });
  } else {
    comment.text = body.text;
    // comments[parseInt(id)] = comment;
    return new Response(JSON.stringify(comment));
  }
}


export async function DELETE(req: Request,{ params}: {params: Promise<{id: string}>}){
    const { id } = await params;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    if (comment === undefined) {
        return new Response("Comment not found", { status: 404 });
    } else {
        comments.splice(comments.indexOf(comment), 1);
        return new Response(JSON.stringify(comment));
    }
}
