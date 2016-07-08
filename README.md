# newline-after

Quick and easy newlines in Atom

## What does it do?
`newline-after` allows you to replace the default newline-below action with one that adds a newline after a cursor while maintaining the cursor's position.

## Keybindings
To override the default `cmd-enter` keybinding, add the following to your `keymap.cson` file:
```
'atom-text-editor:not([mini])':
  'cmd-enter': 'unset!'
  'cmd-enter':   'newline-after:insert-newline'
```
