function Graph(v) {
    this.vertices = v; // განცსაზღვრავთ vertices იგივე node-ბის რაოდენობას
    this.edges = 0;
    this.adj = [];
    for(let i = 0; i < this.vertices; i++){ // ვქმნით Node-ებს
        this.adj[i] = [];
    }
    //მასივსაქვს სახე: [[], [], [], [], [], [], [], [], []]
    this.addEdge = addEdge; // დავაკავსიროთ node-ები ერთმანეთთან edge-ბის საშუალებით
    this.marked = []; // ვქმნით ახალ მასივს იმისთვის, რომ იცოდეს პროგრამამ რომელი node არ არის განხილული(გავლილი)
    for(let i = 0; i < this.vertices; i++){
        this.marked[i] = false;
    } // გვჭირდება იმისთვის რომ loop-ი არ ჩაიციკლოს
    this.bfs = bfs;
}

function addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
// მასივს აქვს შემდეგი სახე: [[1, 3, 8], [0, 7], [3, 5, 7], [0, 2, 4], [3, 8], [2, 6], [5], [1, 2], [0, 4]]

function bfs(v) {
    this.marked[v] = true;
    console.log("Visited Vertex: " + v);

    for(let i = 0; i < this.adj[v].length; i++) {
        if(this.adj[v][i] !== undefined) {
            let value = this.adj[v][i];
            if(this.marked[value] == false) {
                this.bfs(value); // რეკურსია 
            }
        }
    }
}

g = new Graph(9);
g.addEdge(0,1);
g.addEdge(0,3);
g.addEdge(0,8);
g.addEdge(1,7);
g.addEdge(3,2);
g.addEdge(2,5);
g.addEdge(2,7);
g.addEdge(5,6);
g.addEdge(3,4);
g.addEdge(4,8);
g.bfs(0);




