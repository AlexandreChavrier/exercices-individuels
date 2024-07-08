const reindeer_list = [
    "Dasher Tonoyan", 
    "Dancer Moore", 
    "Prancer Chua", 
    "Vixen Hall", 
    "Comet Karavani",        
    "Cupid Foroutan", 
    "Donder Jonker", 
    "Blitzen Claus"
  ];

  const arr2 = [ 'Akira Mori', 'Kenjiro Mori', 'Susumu Mori' ]

  function sort_reindeer_list(arr, idx1, idx2) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(" ");
        if ((i < arr.length - 1) && arr[i][idx2] === arr[i + 1][idx2]) {
            arr[i] = arr[i].join(" ")
            break;
        } else {
            let temp = arr[i][idx1];
            arr[i][idx1] = arr[i][idx2];
            arr[i][idx2] = temp;
        }
    }
    arr.sort();
    for(let i = 0; i < arr.length; i++) {
        let temp = arr[i][idx1];
        arr[i][idx1] = arr[i][idx2];
        arr[i][idx2] = temp;
        arr[i] = arr[i].join(" ");
    }
    
    return arr;
}

  
  console.log(sort_reindeer_list(reindeer_list, 0, 1))

