class LLNode {
    value;
    next;
    weight;
    constructor(v, n, w = "") {
        this.value = v;
        this.next = n;
        this.weight = w;
    }
}

function bfs(v, s) {
    let color = Array(), d = Array()
        , p = Array(), queue = Array();
    for (let i in v)// O(|V|)
        color[i] = "white", d[i] = -1, p[i] = null;
    color[s] = "gray", d[s] = 0;
    queue.push(s)
    while (queue.length > 0) {//  Each vertex will be queued once
        let u = queue.shift()
        let ll = v[u]
        while (ll != null) {// will go through each vertex's adjacency list
            let w = ll.value;
            ll = ll.next;
            if (color[w] !== "white")
                continue;
            color[w] = "gray";
            d[w] = d[u] + 1;
            p[w] = u;
            queue.push(w);
        }// vertex u is done
        color[u] = "black"
    } // total length = 2|E| ;  O(2|E|) = O(|E|) 
    return [d, p];
}// O(|V| + |E|)

let v = new Array();
v[1] = new LLNode(2, new LLNode(5, null));
v[2] = new LLNode(1, new LLNode(3, new LLNode(4, new LLNode(5, null))));
v[3] = new LLNode(2, new LLNode(4, null));
v[4] = new LLNode(2, new LLNode(3, new LLNode(5, null)));
v[5] = new LLNode(1, new LLNode(2, new LLNode(4, null)));
// v[6] = new LLNode(4, new LLNode(11, new LLNode(12, new LLNode(9, null))))
// v[7] = new LLNode(5, new LLNode(9, new LLNode(8, null)));
// v[8] = new LLNode(7, new LLNode(9, null));
// v[9] = new LLNode(6, new LLNode(7, new LLNode(8, null)));
// v[11] = new LLNode(12, new LLNode(6, null));
// v[12] = new LLNode(11, new LLNode(6, null));
// sum of length of all linked lists = 2|E| (undirected graph)

let [distance, predecessor] = bfs(v, 4)

console.log({ distance, predecessor })

// dfs
// let color = Array(), p = Array(), d = Array(), f = Array(), time = 0

function dfs(v) {
    color = Array(), p = Array(), d = Array(), f = Array();
    for (let i in v)// O(|V|)
        color[i] = "white", p[i] = null, d[i] = -1, f[i] = -1;
    time = 0
    for (let i in v) { // O(|V|) without counting dfs_visit
        if (color[i] === "white")
            dfs_visit(v, i)
    }
}

function dfs_visit(v, u) {
    color[u] = "gray"
    d[u] = ++time
    let ll = v[u]
    while (ll != null) {
        let w = ll.value;
        ll = ll.next;
        if (color[w] !== "white")
            continue;
        p[w] = u
        dfs_visit(v, w)
    }
    color[u] = "black"
    f[u] = ++time
}// O(|V| + |E|)
