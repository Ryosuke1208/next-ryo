import Menu from "@/components/Menu/Menu";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Menu />
      <div style={{ marginTop: "80px" }}>{children}</div>
    </div>
  );
};

export default MainLayout;
