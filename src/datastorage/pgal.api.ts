import { folders } from "./folders.store";

const URL = {
    FOLDERS: 'http://localhost:8080/api/folders',
    FOLDER: 'http://localhost:8080/api/folder/{id}'
}

type KeyValue = { [key: string]: string }

interface RequestId extends KeyValue {
  id: string
}

function url(url: string, pathVars: { [key: string]: string }) {
  for (const [key, value] of Object.entries(pathVars)) {
    url.replace("{key}", value);
  }
  return url;
}

async function getFolders() {
  folders.set([]);
  const response = await fetch(URL.FOLDERS, { method: 'GET' });
  const data = await response.json();
  folders.set(data);
}

async function getFolder(pathVars: RequestId) {
  folders.set([]);
  const response = await fetch(url(URL.FOLDER, pathVars), { method: 'GET' });
  const data = await response.json();
  folders.set(data);
}

export { getFolders, getFolder };