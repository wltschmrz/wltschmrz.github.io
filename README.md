# Geonyoung Lee — personal homepage

KAIST 석사과정 AI 연구자의 GitHub Pages / Jekyll 홈페이지입니다.
기반 테마는 Academic Pages / Minimal Mistakes이며 원본 라이선스는 `LICENSE`에 보존했습니다.

## GitHub 웹에서 수정하기

파일을 열고 연필(Edit) 버튼으로 수정한 뒤 커밋하세요.

| 수정할 내용 | 파일 |
| --- | --- |
| 이름, 소속, 이메일, GitHub, Scholar, LinkedIn, CV 링크 | `_data/profile.yml` |
| 소개, 논문, 연구 경험, 학력, 활동 | `_pages/home.md` |
| 상단 메뉴 | `_data/navigation.yml` |
| 색상, 글자 크기, 화면 너비 | `_sass/layout/_personal.scss` |
| 사이트 제목, 설명, 도메인 | `_config.yml` |
| 실제 CV 문서 | `files/Geonyoung_Lee_CV.pdf` |

연락처가 `""`이면 화면에서 숨겨집니다. 이메일은 주소만, Scholar·LinkedIn·GitHub는
`https://`로 시작하는 전체 프로필 URL을 입력하세요. 본문에는 색상을 직접 쓰지 말고
기존 `entry`, `entry--dated`, `entry-list` 클래스를 사용하면 라이트/다크 테마에 함께 적용됩니다.
최대 너비는 CSS의 `--site-width`로 조절합니다.

CV PDF는 별도 문서이므로 홈페이지 수정과 별개로 최신 내용을 업로드해 주세요.
GitHub Pages 배포 설정이 활성화되어 있다면 push 후 사이트가 갱신됩니다.

## 로컬 미리보기

Ruby와 Bundler가 있는 환경에서 처음 한 번:

```bash
bundle config set --local path vendor/bundle
bundle install
```

서버에서:

```bash
./scripts/preview
```

브라우저에서 `http://localhost:4000`을 엽니다. 본문·프로필·SCSS를 저장하면 자동 갱신됩니다.
`_config.yml`이나 Gemfile을 바꾸면 미리보기 서버를 재시작해야 합니다.

### SSH 서버에서 작업할 때 (Windows PowerShell)

**내 컴퓨터**에서 새 PowerShell 창을 열어 실행하세요.
마지막 부분은 평소 SSH에 쓰는 대상 또는 SSH config 별칭으로 바꿉니다.

```powershell
ssh -N -L 4000:127.0.0.1:4000 -L 35729:127.0.0.1:35729 사용자@서버주소
```

창이 조용히 대기하면 정상입니다. 창을 유지하고 `http://localhost:4000`을 여세요.
4000은 웹페이지, 35729는 자동 새로고침입니다. 창이 꺼지면 위 명령을 다시 실행하면 됩니다.
SSH 포트가 기본값이 아니면 평소와 같은 `-p 포트번호`를 추가합니다.
로컬 4000 포트가 이미 사용 중이면 `-L 4001:127.0.0.1:4000`으로 바꾸고
`http://localhost:4001`을 여세요. 미리보기는 loopback에만 열려 있어 서버 방화벽에 공개 포트를 열 필요가 없습니다.

서버 미리보기를 SSH 종료와 무관하게 유지하려면 서버에서:

```bash
mkdir -p local
nohup ./scripts/preview > local/preview.log 2>&1 < /dev/null &
echo $! > local/preview.pid
```

로그 확인: `tail -f local/preview.log`

종료: `kill "$(cat local/preview.pid)"`

이미 실행 중이면 중복 실행하지 마세요. 현재 작업 서버는 `local/preview-env.sh`에
임시 Ruby/Jekyll 경로가 설정되어 있습니다. 서버 재부팅 등으로 `/tmp` 환경이 지워졌다면
표준 Ruby/Bundler를 설치하고 `local/preview-env.sh`를 제거한 후 위의 설치 절차를 실행하세요.
`local/`은 Git과 배포 대상에서 제외됩니다.

## 확인과 개발

```bash
bundle exec jekyll build
```

모바일은 브라우저 F12 → 기기 모드로 확인할 수 있습니다.
테마는 첫 방문 시 운영체제 설정을 따르고, 버튼으로 선택한 값은 브라우저에 저장됩니다.

SCSS는 Jekyll이 자동 빌드합니다. `_main.js` 또는 메뉴 JS를 바꾸면:

```bash
npm install
npm run build:js
```

`theme.js`는 독립 파일이라 별도 JS 빌드가 필요 없습니다.
샘플 글·논문·가짜 CV와 비활성 아카이브는 제거했고, 공통 테마와 선택적 지도/Markdown 생성 도구는 보존했습니다.
