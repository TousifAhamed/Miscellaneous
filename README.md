# Miscellaneous

Small Flask and JavaScript practice scripts, in `flaskapi/`.

| Script | What it shows |
|---|---|
| `renderHTML.py`, `getandpostFlask.py`, `multipleargsapi.py` | Routes, templates, GET/POST, URL arguments |
| `session.py`, `flashMessaging.py`, `BasicAuth.py` | Sessions, flash messages, basic login |
| `sqlAlchemy.py` | Flask-SQLAlchemy with a local SQLite database |
| `flaskTracking.py`, `test.py`, `tester.py`, `flask_api_test.py`, `applicaio.py` | Misc. experiments |
| `*.js`, `index.html` | jQuery / Ajax calls against the Flask APIs |

## Setup
```bash
pip install flask flask-sqlalchemy flask-bootstrap flask-httpauth flask-restful flask-track-usage requests
cd flaskapi
python session.py        # or any other script
```
Then open http://127.0.0.1:5000.

## Environment variables
| Variable | Purpose | Default if not set |
|---|---|---|
| `FLASK_SECRET_KEY` | Signs the session cookie (`session.py`, `flashMessaging.py`, `sqlAlchemy.py`) | A random key per run, so you're logged out whenever the script restarts |
| `FLASK_DEBUG` | `1` turns on the debugger and auto-reload. **Local development only**: it lets anyone who can reach the page run code. | off |

```bash
# macOS/Linux
export FLASK_SECRET_KEY=$(python -c "import secrets; print(secrets.token_hex(32))")
export FLASK_DEBUG=1
# Windows PowerShell
$env:FLASK_SECRET_KEY = python -c "import secrets; print(secrets.token_hex(32))"
$env:FLASK_DEBUG = "1"
```

## Database (`sqlAlchemy.py`)
The SQLite database `users.sqlite3` is **created automatically** the first time you run `sqlAlchemy.py` (`db.create_all()`). It's local data, so it's listed in `.gitignore` and must not be committed.

> **Note:** an earlier version of this repo included a `users.sqlite3` containing names and email addresses. It has been removed from the current files. It still exists in older commits, so if those were real people's details, rewrite the history (for example with `git filter-repo --path flaskapi/users.sqlite3 --invert-paths`) and force-push.
