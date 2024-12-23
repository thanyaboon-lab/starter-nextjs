"use client"

import { TableNormal } from "@/components/DataDisplay/Table";
import { FieldDefinition } from "@/interfaces/components/table";

export default function Table() {
  const field: FieldDefinition[] = [
    {
      label: "สาขา",
      key: "branch",
      thClass: "mxw-170px text-end",
      tdClass: "mxw-170px",
      sortable: true,
      required: true,
      stickyColumn: true,
    },
    { label: "วันที่เอกสาร", key: "documentDate", sortable: true },
    {
      label: "เลขที่เอกสาร",
      key: "documentNo",
      sortable: true,
      thClass: "mxw-170px",
      tdClass: "mxw-170px",
    },
    {
      label: "คำอธิบายบันทึกบัญชี",
      key: "documentDescription",
      sortable: true,
      tdClass: "w-100px mxw-100px",
      thClass: "w-100px mxw-100px",
      isEllipsis: true,
    },
    {
      label: "คำอธิบายบันทึกบัญชี2",
      key: "documentDescription2",
      sortable: true,
      tdClass: "w-100px mxw-100px",
      thClass: "w-100px mxw-100px",
      isEllipsis: true,
    },
    { label: "ประเภทเอกสาร", key: "documentType", sortable: true },
    { label: "เดบิต (DR.)", key: "debit", sortable: true },
    { label: "เครดิต (CR.)", key: "credit", sortable: true },
    { label: "สกุลเงิน", key: "currency", sortable: true },
    { label: "ผู้สร้าง", key: "user_create", sortable: true },
    { label: "จัดการ", key: "manage", thClass: "text-center" },
  ];

  const items = [
    {
      branch: "สำนักงานใหญ่1",
      option: null,
      documentDate: "31/07/2565",
      documentNo: "JE-25650715",
      documentDescription: "บันทึกค่าตกแต่งออฟฟิศชั้น 3",
      documentType: "ปกติ",
      debit: 0,
      credit: 600000.0,
      currency: "THB",
      can_edit: true,
      can_delete: true,
      collapsed: true,
      user_create: "ลูกแก้ว",
      date_create: "31/07/2565",
      checkedDisable: true,
      itemGroup: [
        {
          branch: "1000000100 เงินฝากธนาคาร - เงินสดฝากธนาคารกรุงเทพ",
          debit: 600000.0,
          credit: 600000.0,
          currency: "THB",
        },
        {
          branch: "1000000100 เงินฝากธนาคาร - เงินสดฝากธนาคารกรุงเทพ",
          debit: 600000.0,
          credit: 600000.0,
          currency: "THB",
        },
        {
          branch: "1000000100 เงินฝากธนาคาร - เงินสดฝากธนาคารกรุงเทพ",
          debit: 600000.0,
          credit: 600000.0,
          currency: "THB",
        },
      ],
    },
    {
      branch: "สำนักงานใหญ่2",
      option: null,
      documentDate: "31/07/2565",
      documentNo: "JE-25650715",
      documentDescription: "บันทึกค่าตกแต่งออฟฟิศชั้น 3",
      documentType: "ปกติ",
      debit: 600000.0,
      credit: 600000.0,
      currency: "THB",
      can_edit: true,
      can_delete: true,
      collapsed: true,
      user_create: "ลูกแก้ว",
      date_create: "31/07/2565",
      checkedDisable: true,
      itemGroup: [
        {
          branch: "1000000100 เงินฝากธนาคาร - เงินสดฝากธนาคารกรุงเทพ",
          debit: 600000.0,
          credit: 600000.0,
          currency: "THB",
        },
        {
          branch: "1000000100 เงินฝากธนาคาร - เงินสดฝากธนาคารกรุงเทพ",
          debit: 600000.0,
          credit: 600000.0,
          currency: "THB",
        },
        {
          branch: "1000000100 เงินฝากธนาคาร - เงินสดฝากธนาคารกรุงเทพ",
          debit: 600000.0,
          credit: 600000.0,
          currency: "THB",
        },
      ],
    },
    {
      branch: "สำนักงานใหญ่3",
      option: null,
      documentDate: "31/07/2565",
      documentNo: "JE-25650715",
      documentDescription: "บันทึกค่าตกแต่งออฟฟิศชั้น 3",
      documentType: "ปกติ",
      debit: 600000.0,
      credit: 600000.0,
      currency: "THB",
      can_edit: true,
      can_delete: true,
      collapsed: true,
      user_create: "ลูกแก้ว",
      date_create: "31/07/2565",
      itemGroup: [
        {
          branch: "1000000100 เงินฝากธนาคาร - เงินสดฝากธนาคารกรุงเทพ",
          debit: 600000.0,
          credit: 600000.0,
          currency: "THB",
        },
        {
          branch: "1000000100 เงินฝากธนาคาร - เงินสดฝากธนาคารกรุงเทพ",
          debit: 600000.0,
          credit: 600000.0,
          currency: "THB",
        },
        {
          branch: "1000000100 เงินฝากธนาคาร - เงินสดฝากธนาคารกรุงเทพ",
          debit: 600000.0,
          credit: 600000.0,
          currency: "THB",
        },
      ],
    },
  ];

  const slotBodyColumn: { [K in keyof typeof items[number] as `cell-${K}`]?: (item: typeof items[number], index: number) => React.ReactNode } = {
    'cell-branch': (item) => <strong>{item.debit}</strong>,
    
  }

  return <TableNormal items={items} fields={field} slotBodyColumn={slotBodyColumn}></TableNormal>;
}
