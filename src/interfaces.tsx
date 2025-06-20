
export interface TodoItem {
  id: number;
  description: string;
  done: boolean;
  creationDate: Date;
  completionDate: Date | undefined;
}
