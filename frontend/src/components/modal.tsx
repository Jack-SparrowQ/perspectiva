import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogFooter } from "./ui/dialog";

interface ModalProps {
  title: string;
  description: string;

  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Modal(props: ModalProps) {
  const navigate = useNavigate();

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent>
        <p className="text-sm font-medium">{props.title}</p>
        <p>{props.description}</p>
        <DialogFooter>
          <div className="flex justify-between m-1">
            <Button
              className=" mx-1"
              variant="secondary"
              onClick={() => navigate("/home")}
            >
              Salir
            </Button>
            <Button onClick={() => props.onOpenChange(false)}>Cancelar</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
