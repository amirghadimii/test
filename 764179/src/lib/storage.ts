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

let cachedRaw: string | null = null;
let cachedList: UserProject[] = [];

export function readUserProjects(): UserProject[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(PROJECTS_STORAGE_KEY);
    if (!raw) {
      cachedRaw = null;
      cachedList = [];
      return cachedList;
    }
    if (raw === cachedRaw) {
      return cachedList;
    }
    cachedRaw = raw;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      cachedList = [];
      return cachedList;
    }
    cachedList = parsed.filter((item): item is UserProject => {
      if (!item || typeof item !== "object") return false;
      const candidate = item as Partial<UserProject>;
      return (
        typeof candidate.id === "string" &&
        typeof candidate.slug === "string" &&
        typeof candidate.title === "string" &&
        typeof candidate.image === "string"
      );
    });
    return cachedList;
  } catch {
    return cachedList;
  }
}

export function writeUserProjects(list: UserProject[]): void {
  if (!isBrowser()) return;
  try {
    const str = JSON.stringify(list);
    cachedRaw = str;
    cachedList = list;
    window.localStorage.setItem(PROJECTS_STORAGE_KEY, str);
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
