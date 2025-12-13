import React, { useEffect, useRef, useState } from 'react';
import { Terminal as XTerm } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { WebLinksAddon } from '@xterm/addon-web-links';
import '@xterm/xterm/css/xterm.css';
import './Terminal.css';

const Terminal = ({ onBack }) => {
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);
  const fitAddonRef = useRef(null);
  const wsRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionInfo, setConnectionInfo] = useState({
    host: '',
    port: '22',
    username: ''
  });
  const [showConnectionForm, setShowConnectionForm] = useState(true);

  useEffect(() => {
    if (terminalRef.current && !xtermRef.current) {
      // Initialize xterm.js
      const term = new XTerm({
        cursorBlink: true,
        fontSize: 14,
        fontFamily: 'Consolas, Monaco, "Courier New", monospace',
        theme: {
          background: '#1e1e1e',
          foreground: '#cccccc',
          cursor: '#ffffff',
          selection: '#264f78'
        },
        rows: 24,
        cols: 80
      });

      const fitAddon = new FitAddon();
      const webLinksAddon = new WebLinksAddon();

      term.loadAddon(fitAddon);
      term.loadAddon(webLinksAddon);

      term.open(terminalRef.current);
      fitAddon.fit();

      xtermRef.current = term;
      fitAddonRef.current = fitAddon;

      // Welcome message
      term.writeln('\x1b[1;32m╔══════════════════════════════════════════════════════════╗\x1b[0m');
      term.writeln('\x1b[1;32m║  Willkommen zum Linux Terminal - Systemsoftware Lerntool ║\x1b[0m');
      term.writeln('\x1b[1;32m╚══════════════════════════════════════════════════════════╝\x1b[0m');
      term.writeln('');
      term.writeln('Dieses Terminal kann sich mit deiner Linux VM verbinden.');
      term.writeln('');
      term.writeln('\x1b[1;33mHinweis:\x1b[0m Für die SSH-Verbindung wird ein WebSocket-Backend benötigt.');
      term.writeln('');

      // Handle resize
      const handleResize = () => {
        if (fitAddonRef.current) {
          fitAddonRef.current.fit();
        }
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (wsRef.current) {
          wsRef.current.close();
        }
        term.dispose();
      };
    }
  }, []);

  const handleConnect = (e) => {
    e.preventDefault();

    if (!xtermRef.current) return;

    const term = xtermRef.current;
    term.clear();
    term.writeln('\x1b[1;36mVerbinde zu SSH Server...\x1b[0m');
    term.writeln(`Host: ${connectionInfo.host}:${connectionInfo.port}`);
    term.writeln(`User: ${connectionInfo.username}`);
    term.writeln('');

    // Note: This requires a WebSocket backend server
    // For now, we'll show a demo mode
    term.writeln('\x1b[1;33m⚠ WebSocket Backend erforderlich\x1b[0m');
    term.writeln('');
    term.writeln('Für eine echte SSH-Verbindung benötigst du ein Backend wie:');
    term.writeln('- webssh (Python): pip install webssh');
    term.writeln('- wetty (Node.js): npm install -g wetty');
    term.writeln('');
    term.writeln('\x1b[1;32m💡 Demo-Modus aktiviert\x1b[0m');
    term.writeln('');
    term.writeln('Beliebte Linux-Befehle zum Ausprobieren:');
    term.writeln('  ls -la        - Dateien auflisten');
    term.writeln('  pwd           - aktuelles Verzeichnis');
    term.writeln('  cd /tmp       - Verzeichnis wechseln');
    term.writeln('  cat /etc/os-release - OS-Info anzeigen');
    term.writeln('  ps aux        - Prozesse anzeigen');
    term.writeln('  df -h         - Festplattenplatz');
    term.writeln('  grep          - Text durchsuchen');
    term.writeln('');
    term.write('$ ');

    setShowConnectionForm(false);
    setIsConnected(true);

    // Demo mode input handling
    let currentLine = '';
    term.onData((data) => {
      const code = data.charCodeAt(0);

      // Handle Enter
      if (code === 13) {
        term.write('\r\n');
        if (currentLine.trim()) {
          handleDemoCommand(currentLine.trim());
        }
        currentLine = '';
        term.write('$ ');
      }
      // Handle Backspace
      else if (code === 127) {
        if (currentLine.length > 0) {
          currentLine = currentLine.slice(0, -1);
          term.write('\b \b');
        }
      }
      // Handle regular characters
      else if (code >= 32) {
        currentLine += data;
        term.write(data);
      }
    });
  };

  const handleDemoCommand = (command) => {
    const term = xtermRef.current;

    if (command === 'clear') {
      term.clear();
      return;
    }

    if (command === 'help') {
      term.writeln('Verfügbare Demo-Befehle:');
      term.writeln('  ls, pwd, whoami, date, uname, clear, help');
      term.writeln('');
      return;
    }

    // Demo responses
    const demoResponses = {
      ls: 'Desktop  Documents  Downloads  Music  Pictures  Videos',
      'ls -la':
        'drwxr-xr-x 10 user user 4096 Dec 13 10:30 .\ndrwxr-xr-x  3 root root 4096 Dec 01 12:00 ..\n-rw-------  1 user user  220 Dec 01 12:00 .bash_history\n-rw-r--r--  1 user user  807 Dec 01 12:00 .bashrc\ndrwxr-xr-x  2 user user 4096 Dec 13 10:30 Desktop\ndrwxr-xr-x  2 user user 4096 Dec 13 10:30 Documents',
      pwd: '/home/user',
      whoami: 'user',
      date: new Date().toString(),
      'uname -a':
        'Linux debian 6.1.0-26-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.112-1 (2024-09-30) x86_64 GNU/Linux',
      'cat /etc/os-release':
        'NAME="Ubuntu"\nVERSION="24.04 LTS (Noble Numbat)"\nID=ubuntu\nID_LIKE=debian\nPRETTY_NAME="Ubuntu 24.04 LTS"'
    };

    if (demoResponses[command]) {
      term.writeln(demoResponses[command]);
    } else {
      term.writeln(`bash: ${command.split(' ')[0]}: command not found`);
      term.writeln('(Demo-Modus - nur ausgewählte Befehle verfügbar)');
    }
    term.writeln('');
  };

  const handleDisconnect = () => {
    if (wsRef.current) {
      wsRef.current.close();
    }
    if (xtermRef.current) {
      xtermRef.current.clear();
      xtermRef.current.writeln('Verbindung getrennt.');
    }
    setIsConnected(false);
    setShowConnectionForm(true);
  };

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <button onClick={onBack} className="back-button">
          ← Zurück
        </button>
        <h2>💻 Linux Terminal</h2>
        {isConnected && (
          <button onClick={handleDisconnect} className="disconnect-button">
            Verbindung trennen
          </button>
        )}
      </div>

      {showConnectionForm && (
        <div className="connection-form">
          <h3>SSH-Verbindung</h3>
          <form onSubmit={handleConnect}>
            <div className="form-group">
              <label>
                Host / IP-Adresse:
                <input
                  type="text"
                  value={connectionInfo.host}
                  onChange={(e) =>
                    setConnectionInfo({ ...connectionInfo, host: e.target.value })
                  }
                  placeholder="z.B. 192.168.1.100 oder localhost"
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Port:
                <input
                  type="text"
                  value={connectionInfo.port}
                  onChange={(e) =>
                    setConnectionInfo({ ...connectionInfo, port: e.target.value })
                  }
                  placeholder="22"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Benutzername:
                <input
                  type="text"
                  value={connectionInfo.username}
                  onChange={(e) =>
                    setConnectionInfo({ ...connectionInfo, username: e.target.value })
                  }
                  placeholder="z.B. student"
                  required
                />
              </label>
            </div>
            <button type="submit" className="connect-button">
              Verbinden
            </button>
          </form>

          <div className="connection-info">
            <h4>ℹ️ SSH-Verbindung einrichten</h4>
            <p>
              Um eine echte SSH-Verbindung zu nutzen, benötigst du ein WebSocket-Backend.
              Empfohlen:
            </p>
            <ul>
              <li>
                <strong>webssh</strong> (Python):{' '}
                <code>pip install webssh && wssh</code>
              </li>
              <li>
                <strong>wetty</strong> (Node.js): <code>npm install -g wetty && wetty</code>
              </li>
            </ul>
            <p>
              Alternativ kannst du direkt auf deiner Linux VM mit einem echten Terminal
              arbeiten.
            </p>
          </div>
        </div>
      )}

      <div
        ref={terminalRef}
        className="terminal-viewport"
        style={{ display: showConnectionForm ? 'none' : 'block' }}
      />
    </div>
  );
};

export default Terminal;
