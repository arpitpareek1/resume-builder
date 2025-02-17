import myToast from "@/components/ui/toast";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const storeInDb = (data: any) => {
  return new Promise<Boolean>((resolve, reject) => {
    const request = window.indexedDB.open("resume-builder", 4);

    request.onupgradeneeded = function (event: any) {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("resume")) {
        db.createObjectStore("resume", { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = function (event: any) {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("resume")) {
        console.error(
          "Object store 'resume' not found. Try reloading the page."
        );
        return reject(false);
      }

      const transaction = db.transaction("resume", "readwrite");
      const objectStore = transaction.objectStore("resume");

      objectStore.clear().onsuccess = () => {
        objectStore.add(data).onsuccess = () => {
          return resolve(true);
        };
      };
    };

    request.onerror = function (event: any) {
      console.error("Database error:", event.target.error);
      return reject(false);
    };
  });
};

export const getDataFromDb = (callback: (data: any) => void) => {
  return new Promise<Boolean>((resolve, reject) => {
    const request = window.indexedDB.open("resume-builder", 4);

    request.onsuccess = function (event: any) {
      console.log("DB Opened Successfully", event);

      const db = event.target.result;
      if (!db.objectStoreNames.contains("resume")) return;

      const transaction = db.transaction("resume", "readonly");
      const objectStore = transaction.objectStore("resume");

      objectStore.getAll().onsuccess = function (event: any) {
        console.log("Data Retrieved:", event.target.result);

        const data = event.target.result;
        if (!data || data.length === 0) {
          console.log("No data found in IndexedDB.");
          return reject(false);
        }

        const latestData = data[data.length - 1];
        callback(latestData);
        return resolve(true);
      };
    };

    request.onerror = function (event: any) {
      console.error("Database error:", event.target.error);
      return reject(false);
    };
  });
};

export const removeSavedData = (callback: VoidFunction) => {
  return new Promise<Boolean>((resolve, reject) => {
    const request = window.indexedDB.open("resume-builder", 4);
    request.onsuccess = function (event: any) {
      if (!event?.target?.result?.objectStoreNames.contains("resume")) return;
      const db = event.target.result;
      const transaction = db.transaction("resume", "readwrite");
      const objectStore = transaction.objectStore("resume");
      objectStore.clear();
      callback();
      return resolve(true);
    };
    request.onerror = function (event: any) {
      console.error("Database error:", event.target.error);
      return reject(false);
    };
  });
};
