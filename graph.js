class LLNode {
    value;
    next;
    constructor(v, n) {
        this.value = v;
        this.next = n;
    }
}

function bfs(v, s) {
    let color = Array(v.length), d = Array(v.length)
        , p = Array(v.length), queue = Array();
    for (let i = 0; i < v.length; i++)
        color[i] = "white", d[i] = -1, p[i] = null;
    color[s] = "gray", d[s] = 0;
    queue.push(s)
    while (queue.length > 0) {
        let u = queue.shift()
        let ll = v[u]
        while (ll != null) {
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
    }
    return [d, p];
}

let v = new Array(7);
v[0] = new LLNode(1, new LLNode(3, null));
v[1] = new LLNode(0, new LLNode(3, new LLNode(2, new LLNode(6, new LLNode(5, null)))));
v[2] = new LLNode(1, new LLNode(3, new LLNode(4, new LLNode(5, null))));
v[3] = new LLNode(0, new LLNode(1, new LLNode(2, new LLNode(4, null))));
v[4] = new LLNode(2, new LLNode(3, new LLNode(6, null)));
v[5] = new LLNode(1, new LLNode(2, null))
v[6] = new LLNode(1, new LLNode(4, null))

let [distance, predecessor] = bfs(v, 0)

console.log({ distance, predecessor })
