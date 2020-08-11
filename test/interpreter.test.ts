import { unindent } from "./utils"

describe('interpreter (INTEGRATION)', function () {

  console.log(unindent`
    NOTE: These tests require a mongodb instance to be running
          on port 27017. If \`docker\` is present on the system,
          this can be accomlished with the \`npm run up\` command.
          Use the \`npm run down\` command, then, to shut it down.
  `)

  it('does', function () {
    console.log('foo')
  })
})