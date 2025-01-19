const vscode = require('vscode');

let statusBarItem;

function activate(context) {
    // Durum çubuğu öğesini oluştur
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    statusBarItem.text = "Cursor API";
    statusBarItem.show();

    // Komut kaydı
    let disposable = vscode.commands.registerCommand('cursor-api-usage.showMessage', () => {
        vscode.window.showInformationMessage('Cursor API Usage Example!');
    });

    // Tıklanabilir yap
    statusBarItem.command = 'cursor-api-usage.showMessage';

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