import { LoaderFunction, useLoaderData } from 'remix';

export const loader: LoaderFunction = () => {
  return 'Cart Page Index';
};

export default function CartPage() {
  const data = useLoaderData();

  return <div>{JSON.stringify(data)}</div>;
}
