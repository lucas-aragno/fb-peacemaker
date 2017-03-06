if (document.URL.indexOf('facebook') != -1) {
    walk(document.body);
}

function walk(node) {

    var child, next;
    if (node.tagName && (node.tagName.toLowerCase() === 'input' || node.tagName.toLowerCase() === 'textarea')) {
        return;
    }

    switch (node.nodeType) {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) {
    var v = textNode.nodeValue;

    var stupidArguments = [
        'macri',
        'cristina kirchner',
        'kirchner',
        'presidenta'
    ]

    var lyrics = [
        `Somebody once told me the world is gonna roll me
     I ain't the sharpest tool in the shed
     She was looking kind of dumb with her finger and her thumb
     In the shape of an "L" on her forehead`,
        `If there's anything that you want
      If there's anything I can do
      Just call on me and I'll send it along
      With love from me to you`,
        `You've been hit by
       You've been struck by
       A smooth criminal`,
        `One, two, three!
       My baby don't mess around
       Because she loves me so
       This I know fo sho!
      `
    ]

    stupidArguments.forEach(function(element) {
        if (v.toLowerCase().indexOf(element) != -1) {
            textNode.nodeValue = lyrics[Math.floor(Math.random() * lyrics.length)]
        }
    })
}
