import Menu from "@/components/Menu/Menu";
import { CustomDialogProvider } from "@/components/Provider/DialogProvider";
import Grid from "@mui/material/Grid/Grid";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Menu />
      <div style={{ marginTop: "80px" }}>
        <CustomDialogProvider>{children}</CustomDialogProvider>
      </div>
    </div>
  );
};

export default MainLayout;
