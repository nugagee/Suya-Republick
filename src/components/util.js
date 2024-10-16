export function formatCurrency(currency) {
  return currency.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function getMonthName(monthNumber) {
  const date = new Date();

  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "long",
  });
}

export function formatDepartureDateWithMonthName(monthNumber, day, year) {
  let montName = getMonthName(monthNumber);

  return `${montName} ${day}, ${year}`;
}

export function formatDepartureDate(day, month, year) {
  return `${day}/${month}/${year}`;
}

export function convertTime24to12(time24h) {
  let [hours, minutes, sec] = time24h.split(":");

  let day;

  if (hours <= "11") {
    day = "AM";
  }

  return `${hours}:${minutes} ${day}`;
}

export function convertTime12to24(time12h) {
  const [time, modifier] = time12h.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
}
export function convertDatetoISOString(date) {
  let newDateString = date.split("/");
  newDateString = new Date(
    newDateString[2],
    newDateString[1] - 1,
    newDateString[0]
  ).toISOString();

  return newDateString;
}

export function removeSpaceFromNumber(number) {
  const numberWithoutSpaces = number.replace(/\s/g, "");
  return numberWithoutSpaces;
}



  // Function to convert ArrayBuffer to Base64 string
  function arrayBufferToBase64(buffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  // Function to convert Base64 string to ArrayBuffer
  function base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  export async function encrypt(text, key, iv) {

    const enc = new TextEncoder();
    const keyData = enc.encode(key);
    const ivData = enc.encode(iv);

    // Convert the JSON object to a string
    const jsonString = JSON.stringify(text);

    const cryptoKey = await crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "AES-CBC" },
      false,
      ["encrypt"]
    );

    const encrypted = await crypto.subtle.encrypt(
      { name: "AES-CBC", iv: ivData },
      cryptoKey,
      enc.encode(jsonString)
    );

    return {
      ciphertext: btoa(String.fromCharCode(...new Uint8Array(encrypted)))
    };
  }

  export async function decrypt(cipherText, key, iv) {
    const enc = new TextEncoder();
    const keyData = enc.encode(key);
    const ivData = enc.encode(iv);

    const cryptoKey = await crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "AES-CBC" },
      false,
      ["decrypt"]
    );

    const encryptedData = Uint8Array.from(atob(cipherText), (c) =>
      c.charCodeAt(0)
    );
    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-CBC", iv: ivData },
      cryptoKey,
      encryptedData
    );

    const dec = new TextDecoder();
    return JSON.parse(dec.decode(decrypted));
  }
