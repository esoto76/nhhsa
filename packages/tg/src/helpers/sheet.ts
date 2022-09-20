export type CellValObj = { title: string; val: any };

export interface SheetObj {
  header: CellValObj[];
}

export const HeaderKeys: string[] = [
  'A1:B1',
  'C1:D1',
  'E1:F1',
  'A2:B2',
  'C2:D2',
  'E2:F2'
];

const AddressKeys: string[] = ['street:B3', 'city:C3', 'state:D3', 'zip:E3'];

function getCell(cell: any): string {
  return cell && cell.v ? cell.v : '';
}

function parseCells(arr: string[], obj: { [key: string]: any }): CellValObj {
  const title = getCell(obj[arr[0]]);
  const val = getCell(obj[arr[1]]);
  return { title, val };
}

export function GetHeader(obj: { [key: string]: any }): CellValObj[] {
  const vals: CellValObj[] = [];

  for (const k of HeaderKeys) vals.push(parseCells(k.split(':'), obj));
  for (const k of AddressKeys) {
    const kk = k.split(':');
    vals.push({ title: kk[0], val: getCell(obj[kk[1]]) });
  }
  console.dir(vals);
  return vals;
}

export function ParseSheet(sheet: { [key: string]: any }): SheetObj {
  const header = GetHeader(sheet);

  return { header };
}
