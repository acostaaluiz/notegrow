export interface ActionPayload<T> {
  type: string;
  payload?: T;
  error?: string;
}
