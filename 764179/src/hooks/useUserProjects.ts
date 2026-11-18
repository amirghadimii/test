"use client";

import { useCallback, useEffect, useState } from "react";
import {
  PROJECTS_EVENT,
  readUserProjects,
  writeUserProjects,
  type UserProject,
} from "@/lib/storage";

export function useUserProjects() {
  const [items, setItems] = useState<UserProject[]>([]);
  const [ready, setReady] = useState(false);

  const refresh = useCallback(() => {
    setItems(readUserProjects());
    setReady(true);
  }, []);

  useEffect(() => {
    refresh();
    const onChange = () => refresh();
    window.addEventListener(PROJECTS_EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(PROJECTS_EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, [refresh]);

  const persist = useCallback(
    (next: UserProject[]) => {
      setItems(next);
      writeUserProjects(next);
    },
    [],
  );

  return { items, ready, persist, refresh };
}
