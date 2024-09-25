// main richmenu-c9537471af8dbff60d9f08e78f8cac38
// food richmenu-e3a2c7a60b963dd0d54edf2366c4eebd
// cafe richmenu-064850ed619aa25130e776f33401af2d

# Chatbot-api-docker

## 1.login
```bash
$ gcloud auth login
```

## 2.check config project
```bash
$ gcloud config list
```

## 3.set config project
```bash
$ gcloud config set project "NAMEPROJECT"
```

## 4.deploy
```bash
$ gcloud run deploy lineoa-sakeezt-service --source . --region asia-southeast1 --allow-unauthenticated --max-instances=2
```

