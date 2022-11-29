import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  assignedToId?: SortOrder;
  createdAt?: SortOrder;
  estimation?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
