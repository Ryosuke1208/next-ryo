import { Box } from "@mui/material";
import { green } from "@mui/material/colors";

export default function Page() {
  return (
    <Box sx={{ backgroundColor: green[100] }}>
      <h2>ここが@Secondのページだよ</h2>
      <h2>
        default.tsxはParallel
        Routeのフォルダ構成に影響を受けずに、常にdefault.tsxの内容が保持される。
      </h2>
    </Box>
  );
}
