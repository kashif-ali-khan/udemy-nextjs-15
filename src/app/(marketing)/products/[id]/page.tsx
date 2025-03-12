export const dynamicParams = false;
export function generateStaticParams(){
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

const ProductDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <h3>products Detail {id}</h3>;
};

export default ProductDetail;
