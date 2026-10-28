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
      <DialogContent className="text-left">
        <p className="font-heading text-lg font-semibold text-foreground">
          {props.title}
        </p>
        <p className="text-muted-foreground">{props.description}</p>
        <DialogFooter>
          <Button variant="outline" onClick={() => navigate("/home")}>
            Salir sin guardar
          </Button>
          <Button onClick={() => props.onOpenChange(false)}>
            Seguir respondiendo
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
