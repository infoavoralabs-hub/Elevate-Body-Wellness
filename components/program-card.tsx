import { Program } from "@/lib/types";

import { ProgramCardClient } from "./program-card-client";

export function ProgramCard({ program }: { program: Program }) {
  return <ProgramCardClient program={program} />;
}
