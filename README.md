# Open Folder Context Menus

## Features

This extension adds two new context menus to the Explorer:

* **Open New Workbench Here**: Opens a new instance of VS Code scoped to the selected folder OR to the folder containing the selected file.
* **Reopen Workbench Here**: Reopens VS Code scoped to the selected folder.

## Using

Right click on a folder in the Explorer, choose **Open New Workbench Here** or **Reopen Workbench Here**.

![Preview](images/preview.png)


## Packaging

The `repository` field in `package.json` points to `github.dev`. Override this to ensure links to artifacts are correct when packaging.

```
vsce package --baseContentUrl https://github.com/chrisdias/vscode-opennewinstance --baseImagesUrl https://github.com/chrisdias/vscode-opennewinstance
```

## License

[MIT](LICENSE.md)
