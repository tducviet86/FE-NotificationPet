// tab-item.entity.ts
import { Ionicons } from "@expo/vector-icons";

export interface TabEntity {
  key: string; // route.key
  name: string; // route.name
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  selected: boolean;
}
