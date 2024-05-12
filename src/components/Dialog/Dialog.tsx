import { Dialog } from "@mui/material";

export type CustomDialogProps = {
  onClose: (value: string) => void;
  content: JSX.Element;
};

const CustomDialog = (props: CustomDialogProps) => {
  const { onClose, content } = props;

  return (
    <Dialog open onClose={() => onClose("close")}>
      {content}
    </Dialog>
  );
};

export { CustomDialog };
