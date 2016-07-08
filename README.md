# newline-after

Quick and easy newlines in Atom

## Keybindings
To override the default `cmd-enter` keybinding, add the following to your `keymap.cson` file:
```
'atom-text-editor:not([mini])':
  'cmd-enter': 'unset!'
  'cmd-enter':   'newline-after:insert-newline'
```
