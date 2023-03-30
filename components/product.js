import { ProdStyle } from "@/styles/ProductStyle";
import Link from "next/link";

const product = ({ product }) => {
  // extract info from props
  const { title, price, image, slug } = product.attributes;
  return (
    <Link href={`/products/${slug}`}>
      <ProdStyle>
        <div>
          <img
            src={image.data.attributes.formats.small.url}
            alt=''
          />
        </div>
        <h2>{title}</h2>
        <h3>$ {price}</h3>
      </ProdStyle>
    </Link>
  );
};

export default product;
