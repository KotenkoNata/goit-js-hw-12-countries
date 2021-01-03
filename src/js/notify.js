import { error, defaultModules } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/BrightTheme.css";

defaultModules.set(PNotifyMobile, {});

export function alert(message) {
  error({
    text: message,
  });
}
