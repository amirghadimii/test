import type { CategoryKey, StatusKey } from "@/data/projects";

export const PROJECTS_STORAGE_KEY = "ark.projects.v1";
export const PROJECTS_EVENT = "ark:projects-changed";

export type UserProject = {
  id: string;
  slug: string;
  title: string;
  category: CategoryKey;
  year: number;
  jalali: number;
  image: string;
  location: string;
  area: number | null;
  status: StatusKey;
  description: string;
  createdAt: number;
};

const isBrowser = () => typeof window !== "undefined";

export function readUserProjects(): UserProject[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(PROJECTS_STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is UserProject => {
      if (!item || typeof item !== "object") return false;
      const candidate = item as Partial<UserProject>;
      return (
        typeof candidate.id === "string" &&
        typeof candidate.slug === "string" &&
        typeof candidate.title === "string" &&
        typeof candidate.image === "string"
      );
    });
  } catch {
    return [];
  }
}

export function writeUserProjects(list: UserProject[]): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent(PROJECTS_EVENT));
  } catch {
    /* quota or private mode — ignore */
  }
}

export function addUserProject(project: UserProject): void {
  writeUserProjects([project, ...readUserProjects()]);
}

export function removeUserProject(id: string): void {
  writeUserProjects(readUserProjects().filter((project) => project.id !== id));
}

export function clearUserProjects(): void {
  writeUserProjects([]);
}
