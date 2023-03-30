import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "@/lib/query";
import { useRouter } from "next/router";
import { DetailsStyle, ProdInfo, Quantity, Buy } from "@/styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "@/lib/context";

export default function ProductDetails() {
  // use state
  const { qty, increaseQty, decreaseQty, onAdd } = useStateContext();

  // fetch slug
  const { query } = useRouter();

  // fetch data
  const [res] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = res;

  if (fetching) return <p>Loading...</p>;

  if (error) return <p>Error encountered... {error.message}</p>;

  // extract data
  const prod = data.products.data[0].attributes;
  const { title, description, price, image } = prod;

  return (
    <DetailsStyle>
      <img
        src={image.data.attributes.formats.large.url}
        alt={title}
      />
      <ProdInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <br />
        <p>$ {price}</p>
        <Quantity>
          <span>Quantity:</span>
          <button>
            <AiFillMinusCircle onClick={decreaseQty} />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
        </Quantity>
        <Buy onClick={() => onAdd(prod, qty)}>Add to cart</Buy>
      </ProdInfo>
    </DetailsStyle>
  );
}
