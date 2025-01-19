const vscode = require('vscode');

let statusBarItem;

function activate(context) {
    // Durum çubuğu öğesini oluştur
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    statusBarItem.text = "Hello World!";
    statusBarItem.show();

    // Komut kaydı
    let disposable = vscode.commands.registerCommand('hello-world-statusbar.showMessage', () => {
        vscode.window.showInformationMessage('Hello World from Status Bar!');
    });

    // Tıklanabilir yap
    statusBarItem.command = 'hello-world-statusbar.showMessage';

    context.subscriptions.push(statusBarItem);
    context.subscriptions.push(disposable);
}

function deactivate() {
    if (statusBarItem) {
        statusBarItem.dispose();
    }
}

module.exports = {
    activate,
    deactivate
} 