import { AlertCircle } from "lucide-react";
export default function Error() {
  return (
    <p className="error">
      <span>
        <AlertCircle />
      </span>
      Algo deu errado. Por favor, tente novamente mais tarde
    </p>
  );
}
