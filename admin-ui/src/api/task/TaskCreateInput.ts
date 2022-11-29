import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskCreateInput = {
  assignedTo?: UserWhereUniqueInput | null;
  estimation?: number | null;
  project: ProjectWhereUniqueInput;
  status: "New" | "Pending" | "Ongoing" | "Done";
  title: string;
};
