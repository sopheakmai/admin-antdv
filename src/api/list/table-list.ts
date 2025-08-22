import type { STATUS } from "~@/utils/constant";

type ConsultTableModel = {
  id: number;
  /**
   * Service name
   */
  name: string;
  /**
   * Service call count
   */
  callNo: 805;
  /**
   * Description
   */
  desc: string;
  /**
   * Status
   */
  status: STATUS;
  /**
   * Last call time
   */
  updatedAt: string;

  // Pagination
  current?: number;
  // size
  pageSize?: number;
};

type ConsultTableParams = Partial<Omit<ConsultTableModel, "id">>;

export async function getListApi(params?: ConsultTableParams) {
  return usePost<ConsultTableModel[]>("/list/consult-list", params);
}

export async function deleteApi(id: string | number) {
  return useDelete(`/list/${id}`);
}

export type {
  ConsultTableParams,
  STATUS,
  ConsultTableModel,
};
