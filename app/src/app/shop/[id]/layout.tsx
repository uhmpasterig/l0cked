interface ShopLayoutProps {
  params: { id: number };
  children: React.ReactNode;
}

export default function ShopLayout({ params, children }: ShopLayoutProps) {
  return children;
}
