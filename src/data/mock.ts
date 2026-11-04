export type StudentStatus = "aguardando" | "chegando" | "encontro" | "saida";
export type PickupMode = "carro" | "pe" | "sem_retirada";

export interface Student {
  id: string;
  name: string;
  grade: string;
  institution: string;
  status: StudentStatus;
  avatar: string;
  guardians: string[];
  reception: string;
  waitTime?: number;
}

export interface Guardian {
  id: string;
  name: string;
  relation: string;
  phone: string;
  students: string[];
  authorized: boolean;
  totalPickups: number;
  avatar: string;
}

export interface Reception {
  id: string;
  name: string;
  location: string;
  waiting: number;
  arriving: number;
  meeting: number;
  capacity: number;
  avgTime: string;
  status: "normal" | "busy" | "quiet";
}

export interface HistoryEntry {
  id: string;
  student: string;
  grade: string;
  guardian: string;
  time: string;
  reception: string;
  mode: PickupMode;
  staff: string;
  validated: boolean;
}

export interface QueueItem {
  id: string;
  studentName: string;
  grade: string;
  guardianName: string;
  mode: PickupMode;
  reception: string;
  noticeTime: string;
  waitMinutes: number;
  status: StudentStatus;
  priority: "normal" | "alta";
  avatar: string;
}

export const students: Student[] = [
  { id: "1", name: "João Silva", grade: "5º A", institution: "Colégio São Paulo", status: "chegando", avatar: "JS", guardians: ["Maria Silva", "Carlos Silva"], reception: "Recepção Principal", waitTime: 8 },
  { id: "2", name: "Ana Costa", grade: "3º B", institution: "Colégio São Paulo", status: "aguardando", avatar: "AC", guardians: ["Fernanda Costa"], reception: "Recepção Secundária" },
  { id: "3", name: "Pedro Santos", grade: "7º A", institution: "Colégio São Paulo", status: "encontro", avatar: "PS", guardians: ["Roberto Santos", "Lucia Santos"], reception: "Recepção Principal", waitTime: 3 },
  { id: "4", name: "Mariana Oliveira", grade: "2º C", institution: "Colégio São Paulo", status: "saida", avatar: "MO", guardians: ["Paulo Oliveira"], reception: "Recepção Lateral", waitTime: 12 },
  { id: "5", name: "Lucas Ferreira", grade: "6º B", institution: "Colégio São Paulo", status: "aguardando", avatar: "LF", guardians: ["Beatriz Ferreira"], reception: "Recepção Principal" },
  { id: "6", name: "Sofia Almeida", grade: "4º A", institution: "Colégio São Paulo", status: "chegando", avatar: "SA", guardians: ["Marcelo Almeida"], reception: "Recepção Secundária", waitTime: 5 },
  { id: "7", name: "Gabriel Lima", grade: "8º A", institution: "Colégio São Paulo", status: "aguardando", avatar: "GL", guardians: ["Cláudia Lima"], reception: "Recepção Principal" },
  { id: "8", name: "Isabela Rocha", grade: "1º A", institution: "Colégio São Paulo", status: "chegando", avatar: "IR", guardians: ["André Rocha", "Patricia Rocha"], reception: "Recepção Lateral", waitTime: 11 },
];

export const guardians: Guardian[] = [
  { id: "1", name: "Maria Silva", relation: "Mãe", phone: "(11) 99123-4567", students: ["João Silva"], authorized: true, totalPickups: 84, avatar: "MS" },
  { id: "2", name: "Carlos Silva", relation: "Pai", phone: "(11) 98765-4321", students: ["João Silva"], authorized: true, totalPickups: 42, avatar: "CS" },
  { id: "3", name: "Fernanda Costa", relation: "Mãe", phone: "(11) 97654-3210", students: ["Ana Costa"], authorized: true, totalPickups: 67, avatar: "FC" },
  { id: "4", name: "Roberto Santos", relation: "Pai", phone: "(11) 96543-2109", students: ["Pedro Santos"], authorized: true, totalPickups: 55, avatar: "RS" },
  { id: "5", name: "Paulo Oliveira", relation: "Pai", phone: "(11) 95432-1098", students: ["Mariana Oliveira"], authorized: true, totalPickups: 91, avatar: "PO" },
  { id: "6", name: "Beatriz Ferreira", relation: "Mãe", phone: "(11) 94321-0987", students: ["Lucas Ferreira"], authorized: true, totalPickups: 38, avatar: "BF" },
];

export const receptions: Reception[] = [
  { id: "1", name: "Recepção Principal", location: "Entrada Principal — Térreo", waiting: 12, arriving: 4, meeting: 2, capacity: 30, avgTime: "04:32", status: "busy" },
  { id: "2", name: "Recepção Secundária", location: "Ala Norte — 1º Andar", waiting: 5, arriving: 2, meeting: 1, capacity: 20, avgTime: "03:15", status: "normal" },
  { id: "3", name: "Recepção Lateral", location: "Estacionamento — Térreo", waiting: 8, arriving: 3, meeting: 0, capacity: 25, avgTime: "05:48", status: "normal" },
];

export const queue: QueueItem[] = [
  { id: "1", studentName: "João Silva", grade: "5º A", guardianName: "Maria Silva", mode: "carro", reception: "Recepção Principal", noticeTime: "17:12", waitMinutes: 8, status: "chegando", priority: "normal", avatar: "JS" },
  { id: "2", studentName: "Pedro Santos", grade: "7º A", guardianName: "Roberto Santos", mode: "pe", reception: "Recepção Principal", noticeTime: "17:09", waitMinutes: 11, status: "encontro", priority: "normal", avatar: "PS" },
  { id: "3", studentName: "Sofia Almeida", grade: "4º A", guardianName: "Marcelo Almeida", mode: "carro", reception: "Recepção Secundária", noticeTime: "17:15", waitMinutes: 5, status: "chegando", priority: "normal", avatar: "SA" },
  { id: "4", studentName: "Isabela Rocha", grade: "1º A", guardianName: "André Rocha", mode: "carro", reception: "Recepção Lateral", noticeTime: "17:09", waitMinutes: 11, status: "chegando", priority: "alta", avatar: "IR" },
  { id: "5", studentName: "Lucas Ferreira", grade: "6º B", guardianName: "Beatriz Ferreira", mode: "pe", reception: "Recepção Principal", noticeTime: "—", waitMinutes: 0, status: "aguardando", priority: "normal", avatar: "LF" },
  { id: "6", studentName: "Ana Costa", grade: "3º B", guardianName: "—", mode: "sem_retirada", reception: "Recepção Secundária", noticeTime: "—", waitMinutes: 0, status: "aguardando", priority: "normal", avatar: "AC" },
  { id: "7", studentName: "Gabriel Lima", grade: "8º A", guardianName: "—", mode: "pe", reception: "Recepção Principal", noticeTime: "—", waitMinutes: 0, status: "aguardando", priority: "normal", avatar: "GL" },
];

export const history: HistoryEntry[] = [
  { id: "1", student: "Mariana Oliveira", grade: "2º C", guardian: "Paulo Oliveira", time: "17:08", reception: "Recepção Lateral", mode: "carro", staff: "Ana Beatriz", validated: true },
  { id: "2", student: "Thiago Mendes", grade: "5º B", guardian: "Sandra Mendes", time: "17:02", reception: "Recepção Principal", mode: "pe", staff: "Carlos Eduardo", validated: true },
  { id: "3", student: "Camila Ramos", grade: "3º A", guardian: "Jorge Ramos", time: "16:58", reception: "Recepção Secundária", mode: "carro", staff: "Ana Beatriz", validated: true },
  { id: "4", student: "Rafael Souza", grade: "6º C", guardian: "Lucia Souza", time: "16:51", reception: "Recepção Principal", mode: "carro", staff: "Pedro Henrique", validated: true },
  { id: "5", student: "Valentina Cruz", grade: "1º B", guardian: "Marcos Cruz", time: "16:44", reception: "Recepção Lateral", mode: "pe", staff: "Ana Beatriz", validated: true },
];

export const kpis = {
  waiting: 3,
  arriving: 3,
  meeting: 1,
  completed: 5,
  avgWait: "04:18",
  topReception: "Recepção Principal",
};
