import { useContext } from "react";
import { FeatureToggleContext } from "../context/featureToggle";

export function useFeature() {
  const value = useContext(FeatureToggleContext);

  return value;
}
