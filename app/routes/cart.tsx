import {
  Outlet,
  LoaderFunction,
  useLoaderData,
  Form,
  ActionFunction,
} from 'remix';

export const loader: LoaderFunction = () => {
  return 'Cart Page';
};

export const action: ActionFunction = () => {
  return null;
};

export default function CartPage() {
  const data = useLoaderData();

  return (
    <div>
      {JSON.stringify(data)}
      <Form method="post">
        <input type="submit" />
      </Form>
      <Outlet />
    </div>
  );
}
