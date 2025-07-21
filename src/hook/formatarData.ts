import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatarData = (data: Date) => {
  let formatada = format(data, "MMMM do, yyyy H:mm", { locale: ptBR });

  return formatada;
};
