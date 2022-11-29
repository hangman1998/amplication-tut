import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  assignedTo?: UserWhereUniqueInput | null;
  estimation?: number | null;
  project?: ProjectWhereUniqueInput;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title?: string;
};
