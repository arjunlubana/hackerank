function minBribes(q) {
    let bribes = 0;
    let orgQ = [...q].sort();
    for (let i of q) {
        let bribeCount = 0;
        // Briber original and current position
        let briberFrom = orgQ.indexOf(i);
        let briberTo = q.indexOf(i);

        // Bribing operation
        orgQ.splice(briberFrom, 1)
        orgQ.splice(briberTo, 0, i)

        // Calculates people the briber bribed on the line
        bribeCount = briberFrom - briberTo;

        // Checks that the briber has not bribed more than two people
        if (bribeCount > 2) {
            console.log("Too chaotic");
            return;
        } else {
            bribes += bribeCount
        }
    }
    console.log(bribes);
    return bribes
}

minBribes([ 3, 2, 1]);