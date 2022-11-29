import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  dueDate?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  owner?: UserWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  tasks?: TaskListRelationFilter;
};
