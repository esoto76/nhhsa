export type CellValObj = { title: string; val: any };

export interface DisciplineRowsObj {
  year: string;
  discipline: string;
  sem_1: string;
  sem_2: string;
  final: string;
  credit: string;
}

export const DisciplineRows: string[] = [
  'year:A',
  'discipline:B',
  'sem_1:C',
  'sem_2:D',
  'final:E',
  'credit:F'
];

export interface SheetObj {
  header: CellValObj[];
  disciplines: { [key: string]: { title: string; vals: DisciplineRowsObj[] } };
  Total_Credits: number | string;
  Total_Service_Hours: number | string;
}

export const HeaderKeys: string[] = [
  'A1:B1',
  'C1:D1',
  'E1:F1',
  'A2:B2',
  'C2:D2',
  'E2:F2'
];

const DisciplinesHeaders: string[] = [
  'B6',
  'B17',
  'B28',
  'B39',
  'B50',
  'B61',
  'B72',
  'B83',
  'B95',
  'B106'
];

const DIsciplineRange = 10;

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
  return vals;
}

export function GetDisciplineRow(
  sheet: {
    [key: string]: any;
  },
  row: number
): DisciplineRowsObj {
  const Row = {};

  for (const k of DisciplineRows) {
    const [title, col] = k.split(':');
    Row[title] = getCell(sheet[col + row]);
  }
  return Row as DisciplineRowsObj;
}

export function GetDisciplineRows(
  sheet: { [key: string]: any },
  start: number
): DisciplineRowsObj[] {
  const rows: DisciplineRowsObj[] = [];
  const end = start + DIsciplineRange;

  for (let i = 0 + start; i < end; i++) {
    const row = GetDisciplineRow(sheet, i);
    rows.push(row);
  }

  return rows.filter(r => r.credit && typeof r.credit !== 'string');
}

export function GetDisciplines(sheet: { [key: string]: any }): {
  [key: string]: any;
} {
  const disciplines = {};
  const disciplineKeys: string[] = [];

  for (const k of DisciplinesHeaders) {
    const title = getCell(sheet[k]).split(':')[0];
    const key = title.replace(/ /g, '_');
    const vals = [];
    disciplineKeys.push(k);
    disciplines[key] = { title, vals };
  }

  let i = 0;

  for (const k in disciplines) {
    const row = GetDisciplineRows(
      sheet,
      Number(disciplineKeys[i].replace(/\D/g, '')) + 1
    );
    disciplines[k].vals = row;
    i++;
  }

  return disciplines;
}

function getCommunityServiceRows(
  sheet: { [key: string]: any },
  start: number
): DisciplineRowsObj[] {
  const rows: DisciplineRowsObj[] = [];
  const end = start + DIsciplineRange;

  for (let i = 0 + start; i < end; i++) {
    const row = GetDisciplineRow(sheet, i);
    rows.push(row);
  }

  return rows.filter(r => r.final && typeof r.final !== 'string');
}

export function ParseSheet(sheet: { [key: string]: any }): SheetObj {
  const header = GetHeader(sheet);

  const disciplines = GetDisciplines(sheet);
  disciplines.Community_Service_Total_Hours = {
    title: 'Community Service Total Hours',
    vals: getCommunityServiceRows(sheet, 128)
  };

  const Total_Credits: number | string = getCell(sheet.F138);
  const Total_Service_Hours: number | string = getCell(sheet.F139);

  return { header, disciplines, Total_Credits, Total_Service_Hours };
}
