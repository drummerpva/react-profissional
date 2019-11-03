let failedLoadAttempts = 2;
let failedSaveAttempts = 2;

export default class NoteService {
  static load() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (failedLoadAttempts > 1) {
          const notes = JSON.parse(window.localStorage.getItem('notes')) || [];
          resolve(notes);
        } else {
          failedLoadAttempts++;
          reject();
        }
      }, 1500);
    });
  }

  static save(newNotes) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (failedSaveAttempts > 1) {
          window.localStorage.setItem('notes', JSON.stringify(newNotes));
          resolve();
        } else {
          failedSaveAttempts++;
          reject();
        }
      }, 1000);
    });
  }
}
