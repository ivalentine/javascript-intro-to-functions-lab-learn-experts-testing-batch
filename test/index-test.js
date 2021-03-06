const expect = require('expect')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('index', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
  })

  describe('shout(string)', () => {
    it('receives one argument and returns it in all caps', () => {
      expect(shout('hello')).toEqual('HELLO')
    })
  })

  describe('whisper(string)', () => {
    it('receives one argument and returns it in all lowercase', () => {
      expect(whisper('HELLO')).toEqual('hello')
    })
  })

  describe('logShout(string)', () => {
    it('calls console.log() its one argument in all caps', () => {
      const spy = expect.spyOn(console, 'log').andCallThrough()

      logShout('hello')

      expect(spy).toHaveBeenCalledWith('HELLO')

      console.log.restore()
    })
  })

  describe('logWhisper(string)', () => {
    it('calls console.log() its one argument in all lowercase', () => {
      const spy = expect.spyOn(console, 'log').andCallThrough()

      logWhisper('HELLO')

      expect(spy).toHaveBeenCalledWith('hello')

      console.log.restore()
    })
  })
})
