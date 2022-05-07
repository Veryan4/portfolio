import { TemplateResult } from "lit";

export class Route {
  name: string;
  pattern: string | string[];
  component: () => Promise<TemplateResult>;
  isProtected?: boolean;
  params?: Record<string, string>;
  data?: any;
}
