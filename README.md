# extendscript-console
Implementing console.log functionality that can be used outside of ESTK

Written and tested with OSX High Sierra and Photoshop 19.1.3. To use with windows, you will need to use a different method for listening to the message port.

Example usage can be found within main.jsx.

The ConsoleLog object checks whether ESTK is running or not upon initialization.

### If ESTK is running:

  console.log() simply calls $.writeln() and the messages are written to the Javascript Console within ESTK.

### If ESTK is not running:

  console.log() opens a socket connection to a port on localhost and sends the messages there. To listen on that port from an OSX Terminal use:

  $ nc -lvk <port>

  This will listen on localhost:<port>
