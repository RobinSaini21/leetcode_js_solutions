var numDistinct = (s, t) => {
    const tabu = initTabu(t);/* Time O(M) | Space O(M) */

    search(s, t, tabu);      /* Time O(N * M) | Space O(M) */

    return tabu[0];
}

var initTabu = (t) => new Array(t.length).fill(0);/* Time O(M) | Space O(M) */

var search = (s, t, tabu) => {
    for (let row = (s.length - 1); (0 <= row); row--) {/* Time O(N) */
        let prev = 1;

        for (let col = (t.length - 1); (0 <= col); col--) {/* Time O(M) */
            const curr = tabu[col];

            const isEqual = (s[row] === t[col]);
            if (isEqual) tabu[col] += prev;                     /* Space O(M) */

            prev = curr;
        }
        console.log(tabu)
    }
}

const s = "rabbbit", t = "rabbit"
numDistinct(s,t)