import countries from "./countries";
import timezones from "./timezones";

export function getCountryCode(type) {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timezone === "" || !timezone) {
    return null;
  }
  const countryCode = timezones[timezone]?.c?.[0];
  const countryName = countries[countryCode];
  return type === "code" ? countryCode : countryName;
}
