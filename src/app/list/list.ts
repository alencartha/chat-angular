export interface List {
    nickname: "",
    roomName: "",
    rooms: [],
}

export const snapshotToArray = (snapshot: any) => {
    const matriz = [];
  
    snapshot.forEach((childSnapshot: any) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        matriz.push(item);
    });
  
    return;
  };