import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export type BasicDialogProps = {
  isOpen: boolean;
  ok?: () => void;
  cancel?: () => void;
};

const BasicDialog = ({ isOpen, ok, cancel }: BasicDialogProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogTitle>削除します。よろしいですか?</DialogTitle>
      <DialogContent>
        <DialogContentText>削除すると二度と元に戻せません。</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={cancel}>Cancel</Button>
        <Button onClick={ok}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export { BasicDialog };
