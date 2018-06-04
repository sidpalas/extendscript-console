# extendscript-console
Creating a console that can be used outside of ESTK

Written and tested with OSX High Sierra and Photoshop 19.1.3. Not compatible with Windows (sorry).

Example usage can be found within main.jsx.

The ConsoleLog object checks whether ESTK is running or not upon initialization.

### If ESTK is running:

  console.log() simply calls $.writeln() and the messages are written to the Javascript Console within ESTK.

### If ESTK is not running:

  console.log() writes to a hidden text file in your home directory (~/.jsx-console). The unix tail command can then be used (from an OSX Terminal) to monitor this file, making the terminal act as the javascript console. Tail command:

  $ touch ~/.jsx-console && tail -F ~/.jsx-console

  touch is called first to avoid "file not found" errors
