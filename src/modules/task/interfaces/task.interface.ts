export interface CreateTaskType {
  title: string;
  description?: string;
  userId: string;
}

export interface UpdateTaskType {
  id: string;
  title?: string;
  description?: string;
}
