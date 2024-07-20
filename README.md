Command to start server: 
```bash
screen -d -m python3 manage.py runserver 0.0.0.0:8000
```

List screen sessions:
```bash
screen -ls
```

Connect to screen session:
```bash
scrren -r <SCREEN_ID_FROM_LIST>
```

Example:
```
(venv) [ec2-user@ip-172-31-93-48 codemender]$ screen -d -m python3 manage.py runserver 0.0.0.0:8000
(venv) [ec2-user@ip-172-31-93-48 codemender]$ sudo su^C
(venv) [ec2-user@ip-172-31-93-48 codemender]$ screen -ls
There is a screen on:
	90216..ip-172-31-93-48	(Detached)
1 Socket in /run/screen/S-ec2-user.
(venv) [ec2-user@ip-172-31-93-48 codemender]$ screen -r 90216
```

Detach from screen session
```
`Ctrl + a`, then press `d`
```

Command to see if server is running (list PIDs for Django)
```bash
lsof -i:8000
```

Stop server (kill al Django processes on port 8000)
```bash
kill $(lsof -t -i:8000)
```
see last 50 lines of server log
```bash
tail -n 50 codemender.log
```

trail server log file in real time
```bash
tail -f codemender.log
```

Command to start React Server locally
```bash
npm start
```
