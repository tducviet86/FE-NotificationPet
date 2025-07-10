// src/entity/tab.entity.ts
import { Ionicons } from "@expo/vector-icons";

export interface TabEntity {
  key: string;
  name: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  selected: boolean;
}
