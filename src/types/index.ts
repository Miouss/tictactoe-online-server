export * from "./middlewares";
export * from "./Database";

export type MovePosition = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface Player {
  name: string;
  id: string;
}

export interface ErrorWithStatus {
  status: number;
  message: string;
}