"use client";

import { useCallback, useSyncExternalStore } from "react";
import {
  PROJECTS_EVENT,
  readUserProjects,
  writeUserProjects,
  type UserProject,
} from "@/lib/storage";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(PROJECTS_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(PROJECTS_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

const emptyProjects: UserProject[] = [];

export function useUserProjects() {
  const items = useSyncExternalStore(
    subscribe,
    readUserProjects,
    () => emptyProjects,
  );

  const refresh = useCallback(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent(PROJECTS_EVENT));
    }
  }, []);

  const persist = useCallback((next: UserProject[]) => {
    writeUserProjects(next);
  }, []);

  return { items, ready: true, persist, refresh };
}
