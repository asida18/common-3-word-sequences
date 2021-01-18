# Top 100 most common-3-word-sequences
Program will return a list of the 100 most common three word sequences from given text(s).

## How to run application (locally)
** Requires node installation. Run npm install once project is cloned to get project modules.
** You can use the test txt files in root of project or create your own. **

To run program against file(s) run one of the following commands
`node index.js test.txt `
`node index.js test.txt hello.txt ....`

To run program against stdin input run the following command
`cat test.txt | node index.js`

## How to run application (with Dockerfile)
** Requires docker installation.
** Vim in installed as part of this Dockerfile. Feel free to modify or create new text files at the root of project within the running container.

```
# Build docker image
docker build -t "image_tag_name" .

# Start up container
docker run -it "image_tag_name"

# Run program
node index.js test.txt
```

## Testing

Run mocha tests with `npm test`
 
## What you would do next, given more time (if anything)?
If given more time, I would definitely replace the node fs module implementation for filesystem reading with Streams. Streams is more performant and both memory and time efficient. I would also convert the logic for asynchronous file reading into its own class, since I could see that being reused in other areas.