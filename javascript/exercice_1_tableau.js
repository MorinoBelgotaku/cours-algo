let t1 = ['cerise','poire','orange','pomme']


// orange, pomme, cerise, poire

let tempo = t1[1]

t1 [2] = t1[0];
t1 [0] = t1[2];
tempo = t1 [3];
t1 [3] = tempo;

console.log(t1)