import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskWhereInput = {
  assignedTo?: UserWhereUniqueInput;
  estimation?: IntNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title?: StringFilter;
};
