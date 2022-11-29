import { User } from "../user/User";
import { Project } from "../project/Project";

export type Task = {
  assignedTo?: User | null;
  createdAt: Date;
  estimation: number | null;
  id: string;
  project?: Project;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title: string;
  updatedAt: Date;
};
