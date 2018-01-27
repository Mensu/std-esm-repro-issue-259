# How to reproduce

```
npm i
node -r @std/esm index.js
```

## Expected Output

which could be produced with simply ``node index.js``

```
work
```

## Actual Output

```
TypeError: Cannot read property 'replace' of undefined
    at MissingRefError.get (<cwd>/std-esm-repro-issue-259/node_modules/@std/esm/index.js:1:175661)
    at process._87a‍.r.process.on (<cwd>/std-esm-repro-issue-259/index.js:5:21)
    at process.emit (events.js:159:13)
    at process._fatalException (bootstrap_node.js:382:26)
```

## Cause

``@std/esm@0.19.7`` seem to expect anything ``instanceof Error`` thrown and caught by ``@std/esm`` module loader to have a ``stack`` property of type ``string``

