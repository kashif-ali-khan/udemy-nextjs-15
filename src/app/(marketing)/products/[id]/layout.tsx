const ProductDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      {children}
      <h3>Featured products</h3>
    </section>
  );
};

export default ProductDetailLayout;
