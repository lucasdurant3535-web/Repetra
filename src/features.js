export const FEATURES = {
  createDecks: "free",
  addCards: "free",
  study: "free",
  beginnerPresetDecks: "free",

  streak: "premium",
  medals: "premium",
  advancedStats: "premium",
  intermediatePresetDecks: "premium",
  advancedPresetDecks: "premium",
  aiTools: "premium"
};

export function hasAccess(featureKey, isPremium) {
  const requiredPlan = FEATURES[featureKey];

  if (!requiredPlan) return false;
  if (requiredPlan === "free") return true;

  return isPremium;
}